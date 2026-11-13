/** 常翔ウェルフェア メニュー共有サーバー（Google Apps Script） */
const SHEET_NAME = 'menu_settings';
function sheet_() {
  const id = PropertiesService.getScriptProperties().getProperty('SHEET_ID');
  if (!id) throw new Error('SHEET_ID 未設定');
  const book = SpreadsheetApp.openById(id);
  return book.getSheetByName(SHEET_NAME) || book.insertSheet(SHEET_NAME);
}
function doGet(e) {
  const cb = String((e.parameter || {}).callback || '');
  // JSONP コールバック名を厳格に検証
  if (!/^[A-Za-z_$][\w$]{0,79}$/.test(cb)) return ContentService.createTextOutput('invalid callback');
  let result;
  try {
    if(e.parameter.action==='authStatus') {
      const requestId=String(e.parameter.requestId||'');
      if(!/^auth_[A-Za-z0-9_]{12,100}$/.test(requestId))throw new Error('不正なID');
      const raw=CacheService.getScriptCache().get('auth_'+requestId);
      result=raw?JSON.parse(raw):{ok:true,status:'pending'};
    } else if(e.parameter.action==='imageStatus') {
      const requestId=String(e.parameter.requestId||'');
      if(!/^img_[A-Za-z0-9_]{8,80}$/.test(requestId))throw new Error('不正なID');
      const rawStatus=CacheService.getScriptCache().get('image_'+requestId);
      result=rawStatus?JSON.parse(rawStatus):{ok:true,status:'pending'};
    } else {
      const s=sheet_();
      const raw=s.getRange('A1').getValue();
      result={ok:true,patches:raw?JSON.parse(raw):{}};
    }
  } catch(err) { result={ok:false,error:String(err.message)}; }
  return ContentService.createTextOutput(cb+'('+JSON.stringify(result)+');').setMimeType(ContentService.MimeType.JAVASCRIPT);
}
function doPost(e) {
  let result;
  try {
    const body=JSON.parse(e.postData.contents);
    const secret=PropertiesService.getScriptProperties().getProperty('ADMIN_KEY');
    if (body.action === 'verifyAdmin') {
      const requestId=String(body.requestId||'');
      if(!/^auth_[A-Za-z0-9_]{12,100}$/.test(requestId))throw new Error('不正なID');
      const authorized=!!secret && body.key===secret;
      CacheService.getScriptCache().put('auth_'+requestId,JSON.stringify({ok:true,status:'done',authorized}),60);
      result={ok:true};
    } else {
    if (!secret || body.key !== secret) throw new Error('管理者キーが正しくありません');
    if (body.action === 'uploadImage') {
      const requestId=String(body.requestId||'');
      if(!/^img_[A-Za-z0-9_]{8,80}$/.test(requestId))throw new Error('不正なID');
      try {const image=uploadImage_(body);saveImageStatus_(requestId,{ok:true,status:'done',url:image.url});result={ok:true};}
      catch(err){saveImageStatus_(requestId,{ok:true,status:'error',error:String(err.message)});throw err;}
    } else {
    if (body.action !== 'publish' || !body.patches || typeof body.patches !== 'object' || Array.isArray(body.patches)) throw new Error('不正なデータ');
    const raw=JSON.stringify(body.patches);
    if (raw.length>300000) throw new Error('データが大きすぎます');
    const lock=LockService.getScriptLock();
    lock.waitLock(10000);
    try {sheet_().getRange('A1').setValue(raw);} finally {lock.releaseLock();}
    result={ok:true};
    }
    }
  }catch(err){result={ok:false,error:String(err.message)};}
  return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
}

/** 写真アップロード用。スクリプトプロパティ IMAGE_FOLDER_ID に保存先フォルダIDを設定。 */
function uploadImage_(body) {
  const mime=String(body.mimeType||'');
  if (!['image/jpeg','image/png','image/webp'].includes(mime)) throw new Error('画像形式が不正です');
  const encoded=String(body.base64||'');
  if (encoded.length>5600000 || !/^[A-Za-z0-9+/=]+$/.test(encoded)) throw new Error('画像が大きすぎるか不正です');
  const bytes=Utilities.base64Decode(encoded);
  if(bytes.length>4*1024*1024)throw new Error('画像は4MB以内にしてください');
  const folderId=PropertiesService.getScriptProperties().getProperty('IMAGE_FOLDER_ID');
  if(!folderId)throw new Error('IMAGE_FOLDER_ID 未設定');
  const name=String(body.fileName||'photo').replace(/[\\/<>:"|?*]/g,'_').slice(0,100);
  const blob=Utilities.newBlob(bytes,mime,name);
  const file=DriveApp.getFolderById(folderId).createFile(blob);
  file.setSharing(DriveApp.Access.ANYONE_WITH_LINK,DriveApp.Permission.VIEW);
  return {url:'https://drive.google.com/thumbnail?id='+encodeURIComponent(file.getId())+'&sz=w1200',fileId:file.getId()};
}
function saveImageStatus_(id,status) {
  CacheService.getScriptCache().put('image_'+id,JSON.stringify(status),600);
}
