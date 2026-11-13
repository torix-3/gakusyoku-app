/* =========================
   QRアクセスキー
========================= */

const ACCESS_KEY = "HHxlxtsMQMRlem";

const urlParams = new URLSearchParams(window.location.search);
const accessKey = urlParams.get("key");

if (accessKey !== ACCESS_KEY) {
  document.documentElement.innerHTML = `
    <body style="
      margin:0;
      display:flex;
      justify-content:center;
      align-items:center;
      min-height:100vh;
      font-family:sans-serif;
      background:#f5f5f5;
      text-align:center;
    ">
      <div>
        <h2>このQRコードは現在使用できません</h2>
        <p>最新のQRコードからアクセスしてください。</p>
      </div>
    </body>
  `;

  throw new Error("Invalid access key");
}
/* =========================
   パスワード表示・非表示
========================= */
document.querySelectorAll(".password-toggle-btn").forEach(button => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.target;
    const passwordInput = document.getElementById(targetId);

    if (!passwordInput) return;

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      button.textContent = "隠す";
    } else {
      passwordInput.type = "password";
      button.textContent = "表示";
    }
  });
});

/* この下に今までのJavaScript */


/* =========================================================
学食メニューデータ
（栄養価一覧表.xlsx を categorize_menu.py で分類したもの）
========================================================= */
const MENU_DATA = {
  "categories": [
    { "id": "udon", "label": "うどん・そば", "emoji": "🍜" },
    { "id": "ramen", "label": "ラーメン", "emoji": "🍥" },
    { "id": "teishoku", "label": "定食", "emoji": "🍗" },
    { "id": "don", "label": "丼", "emoji": "🍚" },
    { "id": "curry", "label": "カレー", "emoji": "🍛" },
    { "id": "side", "label": "サイドメニュー", "emoji": "🥗" },
    { "id": "seasonal", "label": "季節限定", "emoji": "🧊" },
    { "id": "recommended", "label": "おすすめメニュー", "emoji": "✨" },
    { "id": "daily", "label": "日替わりメニュー", "emoji": "🍱" }
  ],
  "items": [
    {
      "id": "udon-01", "name": "はいから", "category": "udon", "category_label": "うどん・そば", "tags": [], "price": 210,
      "energy_kcal": 256, "protein_g": 7, "fat_g": 2.6, "carb_g": 53.6, "salt_g": 5.3
    },
    {
      "id": "udon-02", "name": "わかめうどん", "category": "udon", "category_label": "うどん・そば", "tags": [], "price": 270,
      "energy_kcal": 212, "protein_g": 6.5, "fat_g": 0.8, "carb_g": 47.7, "salt_g": 5.5
    },
    {
      "id": "udon-03", "name": "きつねうどん", "category": "udon", "category_label": "うどん・そば", "tags": [], "price": 270,
      "energy_kcal": 304, "protein_g": 12.2, "fat_g": 9.4, "carb_g": 47.4, "salt_g": 5.3
    },
    {
      "id": "udon-04", "name": "月見うどん", "category": "udon", "category_label": "うどん・そば", "tags": [], "price": 270,
      "energy_kcal": 281, "protein_g": 12.4, "fat_g": 5.9, "carb_g": 47.5, "salt_g": 5.5
    },
    {
      "id": "udon-05", "name": "ちく天うどん", "category": "udon", "category_label": "うどん・そば", "tags": [], "price": 270,
      "energy_kcal": 347, "protein_g": 10.9, "fat_g": 7, "carb_g": 58, "salt_g": 6.4
    },
    {
      "id": "udon-06", "name": "カレーうどん", "category": "udon", "category_label": "うどん・そば", "tags": [], "price": 360,
      "energy_kcal": 423, "protein_g": 10.6, "fat_g": 14.5, "carb_g": 64.8, "salt_g": 7.7
    },
    {
      "id": "udon-08", "name": "+大盛り", "category": "udon", "category_label": "うどん・そば", "tags": ["option"], "price": 110,
      "energy_kcal": 190, "protein_g": 5.2, "fat_g": 0.8, "carb_g": 43.2, "salt_g": 0.6
    },


    {
      "id": "ramen-01", "name": "醤油ラーメン", "category": "ramen", "category_label": "ラーメン", "tags": [], "price": 380,
      "energy_kcal": 382, "protein_g": 14.6, "fat_g": 3.5, "carb_g": 69.9, "salt_g": 7.6
    },
    {
      "id": "ramen-02", "name": "味噌ラーメン", "category": "ramen", "category_label": "ラーメン", "tags": [], "price": 380,
      "energy_kcal": 453, "protein_g": 19.9, "fat_g": 5.1, "carb_g": 79.7, "salt_g": 6
    },
    {
      "id": "ramen-03", "name": "とんこつラーメン", "category": "ramen", "category_label": "ラーメン", "tags": [], "price": 380,
      "energy_kcal": 468, "protein_g": 15.4, "fat_g": 11.2, "carb_g": 73.1, "salt_g": 6.7
    },
    {
      "id": "ramen-04", "name": "塩ラーメン", "category": "ramen", "category_label": "ラーメン", "tags": [], "price": 380,
      "energy_kcal": 436, "protein_g": 15.7, "fat_g": 8.4, "carb_g": 70.7, "salt_g": 7.8
    },
    {
      "id": "ramen-05", "name": "担々麺", "category": "ramen", "category_label": "ラーメン", "tags": [], "price": 420,
      "energy_kcal": 653, "protein_g": 27.9, "fat_g": 18.7, "carb_g": 82.1, "salt_g": 6.8
    },
    {
      "id": "ramen-06", "name": "カレーラーメン", "category": "ramen", "category_label": "ラーメン", "tags": [], "price": 420,
      "energy_kcal": 597, "protein_g": 15.8, "fat_g": 18.7, "carb_g": 87.3, "salt_g": 5.7
    },
    {
      "id": "ramen-07", "name": "唐揚げカレー", "category": "ramen", "category_label": "ラーメン", "tags": [], "price": 480,
      "energy_kcal": 775, "protein_g": 23.1, "fat_g": 29.8, "carb_g": 99.6, "salt_g": 6.7
    },
    {
      "id": "ramen-08", "name": "醤油ラーメン唐揚げセット", "category": "ramen", "category_label": "ラーメン", "tags": ["set"], "price":
        650, "energy_kcal": 886, "protein_g": 27.9, "fat_g": 16.5, "carb_g": 154.3, "salt_g": 8.6
    },
    {
      "id": "ramen-09", "name": "味噌ラーメン唐揚げセット", "category": "ramen", "category_label": "ラーメン", "tags": ["set"], "price":
        650, "energy_kcal": 957, "protein_g": 33.2, "fat_g": 18.1, "carb_g": 164.1, "salt_g": 7
    },
    {
      "id": "ramen-10", "name": "とんこつラーメン唐揚げセット", "category": "ramen", "category_label": "ラーメン", "tags": ["set"],
      "price": 650, "energy_kcal": 972, "protein_g": 28.7, "fat_g": 24.2, "carb_g": 157.5, "salt_g": 7.7
    },
    {
      "id": "ramen-11", "name": "塩ラーメン唐揚げセット", "category": "ramen", "category_label": "ラーメン", "tags": ["set"], "price":
        650, "energy_kcal": 940, "protein_g": 29, "fat_g": 21.4, "carb_g": 155.1, "salt_g": 8.8
    },
    {
      "id": "ramen-12", "name": "担々麺唐揚げセット", "category": "ramen", "category_label": "ラーメン", "tags": ["set"], "price":
        690, "energy_kcal": 1157, "protein_g": 41.2, "fat_g": 31.7, "carb_g": 166.5, "salt_g": 7.8
    },
    {
      "id": "ramen-13", "name": "カレーラーメン唐揚げセット", "category": "ramen", "category_label": "ラーメン", "tags": ["set"],
      "price": 690, "energy_kcal": 1101, "protein_g": 29.1, "fat_g": 31.7, "carb_g": 171.7, "salt_g": 6.7
    },
    {
      "id": "ramen-14", "name": "+大盛り", "category": "ramen", "category_label": "ラーメン", "tags": ["option"], "price": 120,
      "energy_kcal": 337, "protein_g": 9.5, "fat_g": 1.3, "carb_g": 61.3, "salt_g": 1.2
    },

    {
      "id": "teishoku-01", "name": "とりポン定食", "category": "teishoku", "category_label": "定食", "tags": [], "price": 530,
      "energy_kcal": 738, "protein_g": 29.8, "fat_g": 30.6, "carb_g": 91.3, "salt_g": 4.9
    },
    {
      "id": "teishoku-02", "name": "うどん定食(＋とんかつ)", "category": "teishoku", "category_label": "定食", "tags": [], "price":
        550, "energy_kcal": 750, "protein_g": 21.5, "fat_g": 14, "carb_g": 137.3, "salt_g": 5.7
    },

    {
      "id": "don-01", "name": "かつ丼", "category": "don", "category_label": "丼", "tags": [], "price": 480, "energy_kcal":
        587, "protein_g": 21.2, "fat_g": 16.4, "carb_g": 88.1, "salt_g": 3.6
    },
    {
      "id": "don-02", "name": "唐揚げ丼", "category": "don", "category_label": "丼", "tags": [], "price": 480, "energy_kcal":
        698, "protein_g": 23.6, "fat_g": 25.1, "carb_g": 94.5, "salt_g": 4.2
    },
    {
      "id": "don-03", "name": "かつ丼セット", "category": "don", "category_label": "丼", "tags": ["set"], "price": 590,
      "energy_kcal": 843, "protein_g": 28.2, "fat_g": 19, "carb_g": 141.7, "salt_g": 8.9
    },
    {
      "id": "don-04", "name": "唐揚げ丼セット", "category": "don", "category_label": "丼", "tags": ["set"], "price": 590,
      "energy_kcal": 883, "protein_g": 24.5, "fat_g": 22.6, "carb_g": 147.9, "salt_g": 9.3
    },
    {
      "id": "don-05", "name": "親子丼", "category": "don", "category_label": "丼", "tags": [], "price": 420, "energy_kcal":
        680, "protein_g": 27.7, "fat_g": 17.3, "carb_g": 100.3, "salt_g": 6.9
    },
    {
      "id": "don-06", "name": "親子丼セット", "category": "don", "category_label": "丼", "tags": ["set"], "price": 530,
      "energy_kcal": 936, "protein_g": 34.7, "fat_g": 19.9, "carb_g": 153.9, "salt_g": 12.2
    },
    {
      "id": "don-07", "name": "鶏そぼろ丼", "category": "don", "category_label": "丼", "tags": [], "price": 260,
      "energy_kcal": 441, "protein_g": 14.6, "fat_g": 9.8, "carb_g": 73.8, "salt_g": 1.5
    },
    {
      "id": "don-08", "name": "鶏そぼろ丼セット", "category": "don", "category_label": "丼", "tags": ["set"], "price": 430,
      "energy_kcal": 697, "protein_g": 21.6, "fat_g": 12.4, "carb_g": 127.4, "salt_g": 6.8
    },
    {
      "id": "don-09", "name": "とりマヨ丼", "category": "don", "category_label": "丼", "tags": [], "price": 510,
      "energy_kcal": 779, "protein_g": 16.3, "fat_g": 34.6, "carb_g": 102, "salt_g": 5
    },
    {
      "id": "don-010", "name": "とりマヨスペシャル", "category": "don", "category_label": "丼", "tags": [], "price": 610,
      "energy_kcal": 1056, "protein_g": 27.3, "fat_g": 51.9, "carb_g": 120.4, "salt_g": 6.6
    },

    {
      "id": "curry-01", "name": "常翔特製カレー", "category": "curry", "category_label": "カレー", "tags": [], "price": 380,
      "energy_kcal": 573, "protein_g": 10.9, "fat_g": 14.6, "carb_g": 99.5, "salt_g": 3
    },
    {
      "id": "curry-02", "name": "ハヤシライス", "category": "curry", "category_label": "カレー", "tags": [], "price": 380,
      "energy_kcal": 539, "protein_g": 11.4, "fat_g": 13.9, "carb_g": 93.2, "salt_g": 3.3
    },
    {
      "id": "curry-03", "name": "常翔特製カツカレー", "category": "curry", "category_label": "カレー", "tags": [], "price": 480,
      "energy_kcal": 750, "protein_g": 19.4, "fat_g": 25.1, "carb_g": 111.1, "salt_g": 3.4
    },
    {
      "id": "curry-04", "name": "常翔特製唐揚げカレー", "category": "curry", "category_label": "カレー", "tags": [], "price": 480,
      "energy_kcal": 769, "protein_g": 18.2, "fat_g": 27.7, "carb_g": 111.8, "salt_g": 4
    },
    {
      "id": "curry-05", "name": "ふわとろオムハヤシ", "category": "curry", "category_label": "カレー", "tags": [], "price": 450,
      "energy_kcal": 575, "protein_g": 18.1, "fat_g": 20.3, "carb_g": 80.5, "salt_g": 2.1
    },
    {
      "id": "curry-06", "name": "カレー大盛", "category": "curry", "category_label": "カレー", "tags": ["option", "ticket"],
      "price": 200, "energy_kcal": 485, "protein_g": 9, "fat_g": 7.8, "carb_g": 94.7, "salt_g": 1.2
    },
    {
      "id": "curry-07", "name": "ハヤシ大盛", "category": "curry", "category_label": "カレー", "tags": ["option", "ticket"],
      "price": 200, "energy_kcal": 476, "protein_g": 9.3, "fat_g": 7.5, "carb_g": 93.2, "salt_g": 1.6
    },

    {
      "id": "side-01", "name": "味噌汁", "category": "side", "category_label": "サイドメニュー", "tags": [], "price": 50,
      "energy_kcal": 19, "protein_g": 1.3, "fat_g": 0.4, "carb_g": 4.3, "salt_g": 0.9
    },
    {
      "id": "side-02", "name": "温泉卵", "category": "side", "category_label": "サイドメニュー", "tags": [], "price": 70,
      "energy_kcal": 107, "protein_g": 7.3, "fat_g": 5.1, "carb_g": 0.2, "salt_g": 2.2
    },
    {
      "id": "side-03", "name": "チーズ", "category": "side", "category_label": "サイドメニュー", "tags": [], "price": 80,
      "energy_kcal": 61, "protein_g": 3.8, "fat_g": 5, "carb_g": 0.7, "salt_g": 0.6
    },
    {
      "id": "side-04", "name": "ごはん (M200g)", "category": "side", "category_label": "サイドメニュー", "tags": [], "price": 180,
      "energy_kcal": 308, "protein_g": 5.5, "fat_g": 0.8, "carb_g": 69.8, "salt_g": 0
    },
    {
      "id": "side-05", "name": "ミニサラダ", "category": "side", "category_label": "サイドメニュー", "tags": [], "price": 150,
      "energy_kcal": 20, "protein_g": 1.4, "fat_g": 0.3, "carb_g": 4.2, "salt_g": 0
    },
    {
      "id": "side-06", "name": "唐揚げ", "category": "side", "category_label": "サイドメニュー", "tags": [], "price": 230,
      "energy_kcal": 290, "protein_g": 11, "fat_g": 19.2, "carb_g": 18.4, "salt_g": 1.6
    },
    {
      "id": "side-07", "name": "ちょい足しライス(S 60g)", "category": "side", "category_label": "サイドメニュー", "tags": [], "price":
        60, "energy_kcal": 92, "protein_g": 1.6, "fat_g": 0.2, "carb_g": 21, "salt_g": 0
    },

    {
      "id": "seasonal-01", "name": "冷やし担々麺", "category": "seasonal", "category_label": "季節限定", "tags": ["cold"],
      "price": 440, "energy_kcal": 555, "protein_g": 26.4, "fat_g": 22.7, "carb_g": 56.8, "salt_g": 6.7
    },
    {
      "id": "seasonal-02", "name": "冷やしとり天", "category": "seasonal", "category_label": "季節限定", "tags": ["cold"],
      "price": 350, "energy_kcal": 505, "protein_g": 21.9, "fat_g": 22.7, "carb_g": 57.4, "salt_g": 2.9
    },
    {
      "id": "seasonal-03", "name": "冷やしちく天", "category": "seasonal", "category_label": "季節限定", "tags": ["cold"],
      "price": 350, "energy_kcal": 419, "protein_g": 16.4, "fat_g": 11.8, "carb_g": 64.8, "salt_g": 3.9
    },
    {
      "id": "seasonal-04", "name": "冷やしタルタルうどん", "category": "seasonal", "category_label": "季節限定", "tags": ["cold"],
      "price": 490, "energy_kcal": 658, "protein_g": 20.8, "fat_g": 39.2, "carb_g": 60.1, "salt_g": 2.8
    },
    {
      "id": "seasonal-05", "name": "ごまだれ味噌うどん(冷やし)", "category": "seasonal", "category_label": "季節限定", "tags": ["cold"],
      "price": 490, "energy_kcal": 529, "protein_g": 22.6, "fat_g": 22.4, "carb_g": 62.3, "salt_g": 3.6
    },
    {
      "id": "seasonal-06", "name": "サラダ麺", "category": "seasonal", "category_label": "季節限定", "tags": ["cold"], "price":
        450, "energy_kcal": 606, "protein_g": 19.6, "fat_g": 18.9, "carb_g": 86.9, "salt_g": 4.3
    },
    {
      "id": "seasonal-07", "name": "冷やし担々麺からあげセット", "category": "seasonal", "category_label": "季節限定", "tags": ["set",
        "cold"], "price": 710, "energy_kcal": 1059, "protein_g": 39.7, "fat_g": 35.7, "carb_g": 141.2, "salt_g": 7.7
    },
    {"id": "b2-pending-01", "name": "焼鳥丼", "category": "don", "category_label": "丼", "tags": ["pending_nutrition", "daily_candidate"], "price": 530, "energy_kcal": null, "protein_g": null, "fat_g": null, "carb_g": null, "salt_g": null, "visible": false, "nutritionVerified": false},
    {"id": "b2-pending-02", "name": "豚玉丼", "category": "don", "category_label": "丼", "tags": ["pending_nutrition", "daily_candidate"], "price": 490, "energy_kcal": null, "protein_g": null, "fat_g": null, "carb_g": null, "salt_g": null, "visible": false, "nutritionVerified": false},
    {"id": "b2-pending-03", "name": "油淋鶏定食", "category": "teishoku", "category_label": "定食", "tags": ["pending_nutrition", "daily_candidate"], "price": 530, "energy_kcal": null, "protein_g": null, "fat_g": null, "carb_g": null, "salt_g": null, "visible": false, "nutritionVerified": false},
    {"id": "b2-pending-04", "name": "台湾風まぜそば", "category": "ramen", "category_label": "ラーメン", "tags": ["pending_nutrition", "daily_candidate"], "price": 490, "energy_kcal": null, "protein_g": null, "fat_g": null, "carb_g": null, "salt_g": null, "visible": false, "nutritionVerified": false},
    {"id": "b2-pending-05", "name": "鶏マヨ丼", "category": "don", "category_label": "丼", "tags": ["pending_nutrition", "daily_candidate"], "price": 530, "energy_kcal": null, "protein_g": null, "fat_g": null, "carb_g": null, "salt_g": null, "visible": false, "nutritionVerified": false},
    {"id": "b2-pending-06", "name": "チキンステーキ", "category": "teishoku", "category_label": "定食", "tags": ["pending_nutrition", "daily_candidate"], "price": 570, "energy_kcal": null, "protein_g": null, "fat_g": null, "carb_g": null, "salt_g": null, "visible": false, "nutritionVerified": false},
    {"id": "b2-pending-07", "name": "キムチ丼", "category": "don", "category_label": "丼", "tags": ["pending_nutrition", "daily_candidate"], "price": 570, "energy_kcal": null, "protein_g": null, "fat_g": null, "carb_g": null, "salt_g": null, "visible": false, "nutritionVerified": false},
    {"id": "b2-pending-08", "name": "ガパオライス", "category": "don", "category_label": "丼", "tags": ["pending_nutrition", "daily_candidate"], "price": 570, "energy_kcal": null, "protein_g": null, "fat_g": null, "carb_g": null, "salt_g": null, "visible": false, "nutritionVerified": false},
    {"id": "b2-pending-09", "name": "ミラノ風ドリア", "category": "teishoku", "category_label": "定食", "tags": ["pending_nutrition", "daily_candidate"], "price": 570, "energy_kcal": null, "protein_g": null, "fat_g": null, "carb_g": null, "salt_g": null, "visible": false, "nutritionVerified": false},
    {"id": "b2-pending-10", "name": "コロコロガーリックポテト", "category": "side", "category_label": "サイドメニュー", "tags": ["pending_nutrition", "daily_candidate"], "price": null, "energy_kcal": null, "protein_g": null, "fat_g": null, "carb_g": null, "salt_g": null, "visible": false, "nutritionVerified": false},
    {"id": "b2-pending-11", "name": "豚丼", "category": "don", "category_label": "丼", "tags": ["pending_nutrition", "daily_candidate"], "price": 530, "energy_kcal": null, "protein_g": null, "fat_g": null, "carb_g": null, "salt_g": null, "visible": false, "nutritionVerified": false}
  ]
};


// 2号館：献立表で確認できなかった品目は、データを保持して非表示にする。
// 季節限定は販売期間未確認のため、現時点ではすべて非表示。
const B2_HIDDEN_MENU_IDS = new Set([
  "udon-02", "udon-04",
  "ramen-02", "ramen-04", "ramen-06",
  "don-02", "don-04", "don-07", "don-08", "don-010",
  "curry-02",
  "seasonal-01", "seasonal-02", "seasonal-03", "seasonal-04",
  "seasonal-05", "seasonal-06", "seasonal-07"
]);
function isB2MenuVisible(item) {
  if (!item || item.deleted) return false;
  const override = getAdminOverride("2", item.id);
  // 学生画面は初期状態で全品OFF。管理者が明示的にONにした商品のみ表示。
  return override?.visible === true;
}

// 定番以外の料理はデータを残したまま「おすすめメニュー」に分類。
// 管理者設定が導入されるまでは、販売日が不明な料理は非表示。
const B2_RECOMMENDED_IDS = new Set([
  "don-02", "don-04", "don-07", "don-08", "don-09", "don-010",
  "udon-02", "udon-04", "curry-02",
  "ramen-02", "ramen-04", "ramen-06",
  "seasonal-01", "seasonal-02", "seasonal-03", "seasonal-04",
  "seasonal-05", "seasonal-06", "seasonal-07"
]);
MENU_DATA.items.forEach(item => {
  if (item.category === "ramen" && !item.tags.includes("option")) {
    item.adminManaged = true;
    item.visible = false;
  }
});
MENU_DATA.items.forEach(item => {
  if (B2_RECOMMENDED_IDS.has(item.id) || item.tags.includes("daily_candidate")) {
    item.originalCategory = item.category;
    item.category = "daily";
    item.category_label = "日替わりメニュー";
    item.adminManaged = true;
    item.visible = false;
  }
});

// 管理者画面の実装に備え、全品目に共通の編集可能な管理属性を付与。
// 既存の visible=false は維持し、学生画面の表示条件を変えない。
MENU_DATA.items.forEach(item => {
  item.building = "2";
  item.adminEditable = true;
  item.adminManaged = true;
  item.availabilityMode = item.category === "recommended" || item.originalCategory === "ramen"
    ? "manual" : "standard";
});

/* =========================
   13号館（ブォナージョ）メニュー
========================= */

const MENU_13_DATA = {
  categories: [
    // 日替わり・週替わり
    { id: "premium", label: "プレミアム", emoji: "✨" },
    { id: "recommended", label: "おすすめメニュー", emoji: "✨" },
    { id: "weekly", label: "週替わり", emoji: "📅" },
    { id: "daily", label: "日替わりメニュー", emoji: "🍱" },

    // 常時提供メニュー
    { id: "teishoku", label: "定食", emoji: "🍱" },
    { id: "udon", label: "うどん", emoji: "🍜" },
    { id: "ramen", label: "ラーメン", emoji: "🍜" },
    { id: "don", label: "丼", emoji: "🍚" },
    { id: "curry", label: "カレー", emoji: "🍛" },
    { id: "side", label: "サイドメニュー", emoji: "🥣" }
  ],


  items: [

    // 献立表掲載・栄養未確認の追加メニュー


    // 13号館サイド：提供品目は確認済み。価格・栄養値は2号館のデータを暫定使用。
    { ...MENU_DATA.items.find(item => item.id === "side-04"), id: "b13-side-01", name: "ライスM", building: "13", provisionalNutrition: true },
    { ...MENU_DATA.items.find(item => item.id === "side-01"), id: "b13-side-02", name: "みそ汁", building: "13", provisionalNutrition: true },
    { ...MENU_DATA.items.find(item => item.id === "side-03"), id: "b13-side-03", name: "チーズ", building: "13", provisionalNutrition: true },

    // =====================================
    // 13号館 常時提供うどん
    // =====================================
    {
      id: "b13-udon-03",
      name: "きつねうどん",
      category: "udon",
      category_label: "うどん",
      tags: [],
      price: 270,
      energy_kcal: 304,
      protein_g: 12.2,
      fat_g: 9.4,
      carb_g: 47.4,
      salt_g: 5.3,
      building: "13"
    },
    {
      id: "b13-udon-05",
      name: "ちく天うどん",
      category: "udon",
      category_label: "うどん",
      tags: [],
      price: 270,
      energy_kcal: 347,
      protein_g: 10.9,
      fat_g: 7,
      carb_g: 58,
      salt_g: 6.4,
      building: "13"
    },
    {
      id: "b13-udon-toriten-oroshi",
      name: "とり天おろしうどん",
      category: "udon",
      category_label: "うどん",
      tags: [],
      price: null,
      energy_kcal: null,
      protein_g: null,
      fat_g: null,
      carb_g: null,
      salt_g: null,
      building: "13"
    },
    {
      id: "b13-udon-bututama",
      name: "豚玉うどん",
      category: "udon",
      category_label: "うどん",
      tags: [],
      price: null,
      energy_kcal: null,
      protein_g: null,
      fat_g: null,
      carb_g: null,
      salt_g: null,
      building: "13"
    },

    // =====================================
    // 13号館 常時提供ラーメン
    // =====================================
    {
      id: "b13-ramen-01",
      name: "醤油ラーメン",
      category: "ramen",
      category_label: "ラーメン",
      tags: [],
      price: 380,
      energy_kcal: 382,
      protein_g: 14.6,
      fat_g: 3.5,
      carb_g: 69.9,
      salt_g: 7.6,
      building: "13"
    },
    {
      id: "b13-ramen-02",
      name: "味噌ラーメン",
      category: "ramen",
      category_label: "ラーメン",
      tags: [],
      price: 380,
      energy_kcal: 453,
      protein_g: 19.9,
      fat_g: 5.1,
      carb_g: 79.7,
      salt_g: 6.0,
      building: "13"
    },
    {
      id: "b13-ramen-03",
      name: "とんこつラーメン",
      category: "ramen",
      category_label: "ラーメン",
      tags: [],
      price: 380,
      energy_kcal: 468,
      protein_g: 15.4,
      fat_g: 11.2,
      carb_g: 73.1,
      salt_g: 6.7,
      building: "13"
    },

    // =====================================
    // 13号館 常時提供ラーメンセット
    // =====================================
    {
      id: "b13-ramen-set-01",
      name: "醤油ラーメン唐揚げセット",
      category: "ramen",
      category_label: "ラーメンセット",
      tags: ["set"],
      price: 650,
      energy_kcal: 886,
      protein_g: 27.9,
      fat_g: 16.5,
      carb_g: 154.3,
      salt_g: 8.6,
      building: "13"
    },
    {
      id: "b13-ramen-set-02",
      name: "味噌ラーメン唐揚げセット",
      category: "ramen",
      category_label: "ラーメンセット",
      tags: ["set"],
      price: 650,
      energy_kcal: 957,
      protein_g: 33.2,
      fat_g: 18.1,
      carb_g: 164.1,
      salt_g: 7.0,
      building: "13"
    },
    {
      id: "b13-ramen-set-03",
      name: "とんこつラーメン唐揚げセット",
      category: "ramen-set",
      category_label: "ラーメンセット",
      tags: ["set"],
      price: 650,
      energy_kcal: 972,
      protein_g: 28.7,
      fat_g: 24.2,
      carb_g: 157.5,
      salt_g: 7.7,
      building: "13"
    },

    // =====================================
    // 13号館 常時提供 定食
    // =====================================
    {
      id: "b13-teishoku-01",
      name: "とりポン定食",
      category: "teishoku",
      category_label: "定食",
      tags: [],
      price: 530,
      energy_kcal: 738,
      protein_g: 29.8,
      fat_g: 30.6,
      carb_g: 91.3,
      salt_g: 4.9,
      building: "13"
    },

    // =====================================
    // 13号館 常時提供 丼メニュー
    // =====================================
    {
      id: "b13-don-01",
      name: "とりマヨ丼",
      category: "don",
      category_label: "丼",
      tags: [],
      price: 510,
      energy_kcal: 779,
      protein_g: 16.3,
      fat_g: 34.6,
      carb_g: 102,
      salt_g: 5,
      building: "13"
    },
    {
      id: "b13-don-02",
      name: "とりマヨスペシャル",
      category: "don",
      category_label: "丼",
      tags: [],
      price: 610,
      energy_kcal: 1056,
      protein_g: 27.3,
      fat_g: 51.9,
      carb_g: 120.4,
      salt_g: 6.6,
      building: "13"
    },

    // =====================================
    // 13号館 常時提供 カレーメニュー
    // =====================================
    {
      id: "b13-curry-01",
      name: "常翔特製カレー",
      category: "curry",
      category_label: "カレー",
      tags: [],
      price: 380,
      energy_kcal: 573,
      protein_g: 10.9,
      fat_g: 14.6,
      carb_g: 99.5,
      salt_g: 3,
      building: "13"
    },
    {
      id: "b13-curry-02",
      name: "常翔特製カツカレー",
      category: "curry",
      category_label: "カレー",
      tags: [],
      price: 480,
      energy_kcal: 750,
      protein_g: 19.4,
      fat_g: 25.1,
      carb_g: 111.1,
      salt_g: 3.4,
      building: "13"
    },

    {
      id: "b13-t1",
      name: "豚スタミナ焼き",
      category: "weekly-teishoku",
      price: 530,
      kcal: 723,
      protein: 25.5,
      fat: 30.5,
      carbs: 84.9,
      salt: 2.9,
      tags: [],
      building: "13"
    },
    {
      id: "b13-t2",
      name: "鶏南蛮定食",
      category: "weekly-teishoku",
      price: 530,
      kcal: 1000,
      protein: 28.9,
      fat: 52.2,
      carbs: 104.4,
      salt: 3.1,
      tags: [],
      building: "13"
    },
    {
      id: "b13-d1",
      name: "焼き鳥丼",
      category: "weekly-don",
      price: 500,
      kcal: 708,
      protein: 38.5,
      fat: 27.7,
      carbs: 78.0,
      salt: 2.5,
      tags: [],
      building: "13"
    },
    {
      id: "b13-d2",
      name: "麻婆チキンカツ丼",
      category: "weekly-don",
      price: 500,
      kcal: 790,
      protein: 33.9,
      fat: 33.3,
      carbs: 91.9,
      salt: 4.9,
      tags: [],
      building: "13"
    },
    {
      id: "b13-u1",
      name: "はいからうどん＆ミニ焼き鳥丼",
      category: "weekly-udon",
      price: 480,
      kcal: 862,
      protein: 41.1,
      fat: 25.6,
      carbs: 120.8,
      salt: 8.9,
      tags: [],
      building: "13"
    },
    {
      id: "b13-u2",
      name: "はいからうどん＆ミニ麻婆チキンカツ丼",
      category: "weekly-udon",
      price: 480,
      kcal: 934,
      protein: 36.7,
      fat: 30.6,
      carbs: 133.3,
      salt: 11.0,
      tags: [],
      building: "13"
    },
    {
      id: "b13-p1",
      name: "春のごちそうランチ",
      category: "premium",
      price: 800,
      kcal: 1132,
      protein: 45.6,
      fat: 45.9,
      carbs: 120.2,
      salt: 6.7,
      tags: [],
      building: "13"
    },
    {
      id: "b13-p2",
      name: "大人のお子様ランチ",
      category: "premium",
      price: 800,
      kcal: 821,
      protein: 30.2,
      fat: 32.6,
      carbs: 103.2,
      salt: 3.0,
      tags: [],
      building: "13"
    },

    // =====================================
    // 13号館 10/26週の週替わりメニュー
    // =====================================
    {
      id: "b13-t-20261026",
      name: "酢鶏定食（焼きそば付）",
      category: "weekly-teishoku",
      category_label: "週替わり定食",
      tags: [],
      price: 530,
      energy_kcal: null,
      protein_g: null,
      fat_g: null,
      carb_g: null,
      salt_g: null,
      building: "13"
    },
    {
      id: "b13-d-20261026",
      name: "豚丼",
      category: "weekly-don",
      category_label: "週替わり丼",
      tags: [],
      price: 500,
      energy_kcal: null,
      protein_g: null,
      fat_g: null,
      carb_g: null,
      salt_g: null,
      building: "13"
    },
    {
      id: "b13-u-20261026",
      name: "はいからうどん＋ミニ豚丼",
      category: "weekly-udon",
      category_label: "う～どん・プチ丼",
      tags: [],
      price: 480,
      energy_kcal: null,
      protein_g: null,
      fat_g: null,
      carb_g: null,
      salt_g: null,
      building: "13"
    },

    // =====================================
    // 13号館 10/26〜10/29 日替わり定食
    // =====================================
    {
      id: "b13-daily-20261026",
      name: "ピリカラとんかつソース定食",
      category: "daily-teishoku",
      category_label: "日替わり定食",
      tags: [],
      price: 570,
      energy_kcal: null,
      protein_g: null,
      fat_g: null,
      carb_g: null,
      salt_g: null,
      building: "13"
    },
    {
      id: "b13-daily-20261027",
      name: "棒棒鶏定食",
      category: "daily-teishoku",
      category_label: "日替わり定食",
      tags: [],
      price: 570,
      energy_kcal: null,
      protein_g: null,
      fat_g: null,
      carb_g: null,
      salt_g: null,
      building: "13"
    },
    {
      id: "b13-daily-20261028",
      name: "鮭のトマトチーズ焼き定食",
      category: "daily-teishoku",
      category_label: "日替わり定食",
      tags: [],
      price: 570,
      energy_kcal: null,
      protein_g: null,
      fat_g: null,
      carb_g: null,
      salt_g: null,
      building: "13"
    },
    {
      id: "b13-daily-20261029",
      name: "とんかつマスタード風味定食",
      category: "daily-teishoku",
      category_label: "日替わり定食",
      tags: [],
      price: 570,
      energy_kcal: null,
      protein_g: null,
      fat_g: null,
      carb_g: null,
      salt_g: null,
      building: "13"
    },


    // 200番で追加：週間献立画像に基づく週替わりメニュー。栄養情報は企業確認までnull。
    { "id": "b13-weekly-teishoku-20261109", "name": "メンチカツ定食", "category": "weekly-teishoku", "category_label": "週替わり定食", "tags": [], "price": 530, "energy_kcal": null, "protein_g": null, "fat_g": null, "carb_g": null, "salt_g": null, "building": "13" },
    { "id": "b13-weekly-don-20261109", "name": "ソースチキンカツ丼", "category": "weekly-don", "category_label": "週替わり丼", "tags": [], "price": 500, "energy_kcal": null, "protein_g": null, "fat_g": null, "carb_g": null, "salt_g": null, "building": "13" },
    { "id": "b13-weekly-udon-20261109", "name": "はいからうどん＋ミニソースチキンカツ丼", "category": "weekly-udon", "category_label": "う～どん・プチ丼", "tags": [], "price": 480, "energy_kcal": null, "protein_g": null, "fat_g": null, "carb_g": null, "salt_g": null, "building": "13" },
    { "id": "b13-weekly-don-20261102", "name": "天ぷら丼", "category": "weekly-don", "category_label": "週替わり丼", "tags": [], "price": 500, "energy_kcal": null, "protein_g": null, "fat_g": null, "carb_g": null, "salt_g": null, "building": "13" },
    { "id": "b13-weekly-udon-20261102", "name": "はいからうどん＋ミニ天ぷら丼", "category": "weekly-udon", "category_label": "う～どん・プチ丼", "tags": [], "price": 480, "energy_kcal": null, "protein_g": null, "fat_g": null, "carb_g": null, "salt_g": null, "building": "13" },
    { "id": "b13-weekly-teishoku-20261019", "name": "とんかつ定食", "category": "weekly-teishoku", "category_label": "週替わり定食", "tags": [], "price": 530, "energy_kcal": null, "protein_g": null, "fat_g": null, "carb_g": null, "salt_g": null, "building": "13" },

  ]


};

// =====================================
// 2号館・13号館 共通メニュー画像の管理
// =====================================
// 13号館の大盛りは2号館の増量データを暫定利用（実際の価格・栄養価は未確認）。
// 元の料理の栄養情報が欠けている場合は推測で補完しない。
function findBaseMenuById(id) {
  return MENU_DATA.items.find(item => item.id === id) ||
    MENU_13_DATA.items.find(item => item.id === id);
}
// 大盛り対象は販売条件を確認したメニューに限定する。
// 大盛券は「追加分」なので、通常の料理の価格・栄養成分に加算する。
// 13号館は2号館と同じルールを暫定適用する。
const LARGE_CURRY_OPTION_IDS = {
  "curry-01": "curry-06",       // 常翔特製カレー
  "curry-02": "curry-07",       // ハヤシライス
  "curry-03": "curry-06",       // カツは増やさず、ごはんとルーを増量
  "curry-04": "curry-06",       // 唐揚げは増やさず、ごはんとルーを増量
  "b13-curry-01": "curry-06",   // 13号館（暫定）
  "b13-curry-02": "curry-06"    // 13号館（暫定）
};
function getLargeOptionForFood(food) {
  if (!food || food.tags?.includes("option") || food.tags?.includes("set")) return null;
  if (food.option_large_enabled === false) return null;
  const keys=["price","energy_kcal","protein_g","fat_g","carb_g","salt_g"];
  const customKeys=["option_large_price","option_large_energy_kcal","option_large_protein_g","option_large_fat_g","option_large_carb_g","option_large_salt_g"];
  if (food.option_large_enabled === true && customKeys.every(k=>food[k]!==null && food[k]!==undefined && Number.isFinite(Number(food[k])))) {
    return Object.fromEntries(keys.map((k,j)=>[k,Number(food[customKeys[j]])]));
  }
  // 新規登録品に2号館の値を無条件流用しない。
  if (food.adminManaged || String(food.id).startsWith('admin-')) return null;
  if (food.category === "curry") {
    const optionId = LARGE_CURRY_OPTION_IDS[food.id];
    return optionId ? MENU_DATA.items.find(item => item.id === optionId) || null : null;
  }
  if (!["udon", "ramen"].includes(food.category)) return null;
  return MENU_DATA.items.find(item => item.category === food.category && item.tags.includes("option")) || null;
}
function canUseSoupOption(food) {
  if (!food || food.tags?.includes('option') || food.tags?.includes('set')) return false;
  return food.option_soup_enabled === undefined ? ["udon","ramen"].includes(food.category) : Boolean(food.option_soup_enabled);
}
function soupSaltFactor(food) {
  const reduction=Number(food?.option_soup_reduction);
  return 1 - (Number.isFinite(reduction) ? Math.min(100,Math.max(0,reduction)) : 50)/100;
}


const SHARED_MENU_IMAGES = {
  "b13-udon-03": "udon-03",
  "b13-udon-05": "udon-05",

  "b13-ramen-01": "ramen-01",
  "b13-ramen-02": "ramen-02",
  "b13-ramen-03": "ramen-03",

  "b13-ramen-set-01": "ramen-08",
  "b13-ramen-set-02": "ramen-09",
  "b13-ramen-set-03": "ramen-10",

  "b13-teishoku-01": "teishoku-01",

  "b13-don-01": "don-09",
  "b13-don-02": "don-010",

  "b13-curry-01": "curry-01",
  "b13-curry-02": "curry-03"
};

// 13号館サイドは2号館と同じ写真を共用する。
Object.assign(SHARED_MENU_IMAGES, {
  "b13-side-01": "side-04",
  "b13-side-02": "side-01",
  "b13-side-03": "side-03"
});

function getMenuImagePath(food) {
  if (food && /^https:\/\//.test(food.image_url || "")) return food.image_url;
  const sharedId = SHARED_MENU_IMAGES[food.id];

  if (sharedId) {
    const originalFood = MENU_DATA.items.find(
      item => item.id === sharedId
    );

    if (originalFood) {
      return `images/${originalFood.category}/${originalFood.id}.png`;
    }
  }

  return `images/${food.category}/${food.id}.png`;
}

// =====================================
// 栄養価がすべて登録されているか確認
// =====================================
function hasCompleteNutrition(food) {
  const keys = [
    "energy_kcal",
    "protein_g",
    "fat_g",
    "carb_g",
    "salt_g"
  ];

  return keys.every(key =>
    typeof food?.[key] === "number" &&
    Number.isFinite(food[key]) &&
    food[key] >= 0
  );
}

/* =========================
   13号館 日付別の提供メニュー
========================= */

/* =========================
   13号館 日付別の提供メニュー
========================= */

const MENU_13_SCHEDULE = {
  "2026-10-26": ["b13-daily-20261026"],
  "2026-10-27": ["b13-daily-20261027"],
  "2026-10-28": ["b13-daily-20261028"],
  "2026-10-29": ["b13-daily-20261029"]
};

// =====================================
// 13号館 休業日管理
// =====================================
const MENU_13_CLOSED_DAYS = {
  "2026-10-30": "創立記念日のため休業"
};

// =====================================
// 13号館：週替わりメニュー管理
// キーはその週の月曜日
// =====================================
const MENU_13_WEEKLY_SCHEDULE = {
  "2026-10-26": [
    "b13-t-20261026",
    "b13-d-20261026",
    "b13-u-20261026"
  ],
  "2026-10-19": ["b13-weekly-teishoku-20261019", "b13-d2", "b13-u2"],
  "2026-11-02": ["b13-t1", "b13-weekly-don-20261102", "b13-weekly-udon-20261102"],
  "2026-11-09": ["b13-weekly-teishoku-20261109", "b13-weekly-don-20261109", "b13-weekly-udon-20261109"],
};

// =====================================
// 13号館：指定日の提供メニューを取得
// =====================================
function getMenu13AvailableIds(date) {
  const dateKey = formatCafeteriaDate(date);

  // 指定日に登録されているメニュー
  const dailyIds = MENU_13_SCHEDULE[dateKey] || [];

  // 週の月曜日を取得
  const monday = new Date(date);
  const day = monday.getDay();
  const diff = day === 0 ? -6 : 1 - day;

  monday.setDate(monday.getDate() + diff);

  const weekKey = formatCafeteriaDate(monday);

  // 週替わりメニュー
  const weeklyIds = MENU_13_WEEKLY_SCHEDULE[weekKey] || [];

  return [...new Set([...dailyIds, ...weeklyIds])];
}

// 2号館の日替わり仮メニュー（価格・栄養値はテスト用の仮値）。
// 公開ONにするまでは学生画面に表示されません。
MENU_DATA.items.push({
  id: "b2-daily-demo-nikujaga", name: "肉じゃが定食（仮）",
  category: "daily", category_label: "日替わりメニュー",
  building: "2", tags: [], price: 550,
  energy_kcal: 680, protein_g: 25, fat_g: 20, carb_g: 96, salt_g: 3.2,
  provisionalNutrition: true, adminManaged: true
});

/* =========================
   2号館 日替わりメニュー
========================= */

const MENU_3_DAILY_SCHEDULE = {
  // 動作確認用の仮データ（実際の日替わり献立ではありません）

};
// 13号館：週替わり定食・週替わり丼は「週替わり」に統一。
// う～どんプチ丼は「うどん」に、日替わり定食は「日替わり」に分類。
MENU_13_DATA.items.forEach(item => {
  const oldCategory = item.category;
  if (oldCategory === "weekly-teishoku" || oldCategory === "weekly-don") {
    item.originalCategory = oldCategory;
    item.category = "weekly";
    item.category_label = "週替わり";
    item.adminManaged = true;
  } else if (oldCategory === "weekly-udon") {
    item.originalCategory = oldCategory;
    item.category = "udon";
    item.category_label = "うどん";
    item.adminManaged = true;
  } else if (oldCategory === "daily-teishoku") {
    item.originalCategory = oldCategory;
    item.category = "recommended";
    item.category_label = "おすすめメニュー";
    item.adminManaged = true;
  }
});

// 13号館も全メニューを将来の管理画面で編集できる対象にする。
MENU_13_DATA.items.forEach(item => {
  item.building = "13";
  item.adminEditable = true;
  item.adminManaged = true;
  if (!item.availabilityMode) item.availabilityMode = item.category === "recommended" ? "manual" : "standard";
});

/* =========================
   13号館の栄養データ形式を統一
========================= */

MENU_13_DATA.items.forEach(item => {
  // 古い形式の栄養データがある場合だけ変換
  if (item.energy_kcal === undefined) item.energy_kcal = item.kcal ?? null;
  if (item.protein_g === undefined) item.protein_g = item.protein ?? null;
  if (item.fat_g === undefined) item.fat_g = item.fat ?? null;
  if (item.carb_g === undefined) item.carb_g = item.carbs ?? null;
  if (item.salt_g === undefined) item.salt_g = item.salt ?? null;

  item.category_label =
    MENU_13_DATA.categories.find(cat =>
      cat.id === item.category
    )?.label || "";
});


const TAG_LABELS = {
  set: "セット",
  option: "オプション",
  ticket: "チケット",
  cold: "冷やし"
};

// レーダーチャート用の正規化（各項目を 0〜10 の範囲に変換）
const RADAR_MAX = {
  energy_kcal: 1200,
  protein_g: 45,
  fat_g: 55,
  carb_g: 180,
  salt_g: 13
};
const RADAR_LABELS = ["エネルギー", "たんぱく質", "脂質", "炭水化物", "塩分"];

function getBasalRate(gender, age) {
  if (gender === "male") {
    if (age < 30) return 23.7;
    if (age < 50) return 22.5;
    if (age < 65) return 21.8;
    if (age < 75) return 21.6;
    return 21.5;
  }
  if (age < 30) return 22.1;
  if (age < 50) return 21.9;
  return 20.7;
}
function getActivityLevel(age) {
  return age < 65 ? 1.75 : 1.70;
}
// 年齢別PFC基準。炭水化物は合計100%となる残余。
function getPfcRatios(age) {
  const protein = age < 50 ? 0.165 : age < 65 ? 0.17 : 0.175;
  const fat = 0.25;
  return { protein, fat, carb: 1 - protein - fat };
}
function getNutritionRanges() {
  const age = Number(storage.getItem(getUserKey("age"))) || 20;
  const energy = getIdealNutrition().energy_kcal;
  const proteinMin = age < 50 ? 0.13 : age < 65 ? 0.14 : 0.15;
  return {
    protein_g: [energy * proteinMin / 4, energy * 0.20 / 4],
    fat_g: [energy * 0.20 / 9, energy * 0.30 / 9],
    carb_g: [energy * 0.50 / 4, energy * 0.65 / 4]
  };
}
// 栄養判定を全画面で共通化する（PFCは年齢別の目標範囲）
function getNutritionJudgement(key, actual, ideal = getIdealNutrition()) {
  const ranges = getNutritionRanges();
  if (!Number.isFinite(Number(actual))) return "good";
  if (ranges[key]) {
    if (actual < ranges[key][0]) return "low";
    if (actual > ranges[key][1]) return "high";
    return "good";
  }
  if (key === "salt_g") return actual > ideal.salt_g ? "high" : "good";
  // エネルギーには厚労省が定めた1食の許容幅がないため評価しない。
  if (key === "energy_kcal") return "neutral";
  return "good";
}
function getIdealNutrition() {
  const gender = storage.getItem(getUserKey("gender")) || "male";
  const age = Number(storage.getItem(getUserKey("age"))) || 20;
  const height = Number(storage.getItem(getUserKey("height"))) || 170;
  const heightM = height / 100;
  const standardWeight = 22 * heightM * heightM;
  const dailyEnergy = standardWeight * getBasalRate(gender, age) * getActivityLevel(age);
  const mealEnergy = dailyEnergy * 0.30;
  const pfc = getPfcRatios(age);
  return {
    energy_kcal: mealEnergy,
    protein_g: mealEnergy * pfc.protein / 4,
    fat_g: mealEnergy * pfc.fat / 9,
    carb_g: mealEnergy * pfc.carb / 4,
    salt_g: (gender === "male" ? 7.5 : 6.5) * 0.30
  };
}
function toRadarData(item) {
  const ideal = getIdealNutrition();

  const fields = [
    "energy_kcal",
    "protein_g",
    "fat_g",
    "carb_g",
    "salt_g"
  ];

  return fields.map(key => {
    const actual = Number(item[key]) || 0;
    const target = Number(ideal[key]) || 0;

    if (target <= 0) return 0;

    const value = (actual / target) * 5;

    return Math.round(
      Math.min(Math.max(value, 0), 10) * 10
    ) / 10;
  });
}

function idealRadarData() {
  return [5, 5, 5, 5, 5];
}

function getDiffLabel(item, field) {
  const ideal = getIdealNutrition();
  const diff = item[field.key] - ideal[field.key];

  const rounded = Math.round(diff * 10) / 10;
  const sign = rounded >= 0 ? "+" : "";

  return `${field.label} (${sign}${rounded}${field.unit})`;
}

/* =========================================================
保存データの読み書き
（localStorage が使えない環境でもエラーにならないように
簡易ストレージでラップ）
========================================================= */
const storage = {
  memory: {},
  getItem(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (e) {
      return key in this.memory ? this.memory[key] : null;
    }
  },
  setItem(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (e) {
      this.memory[key] = value;
    }
  },
  removeItem(key) {
    delete this.memory[key];
    try {
      window.localStorage.removeItem(key);
    } catch (e) {
      // localStorage が使えない場合もメモリ上のデータは削除済み
    }
  }
};


/* =========================
   30分無操作で自動タイムアウト
========================= */

const SESSION_TIMEOUT = 30 * 60 * 1000; // 30分


let sessionTimeoutId = null;


/* =========================
   自動ログアウト
========================= */
function sessionLogout() {

  localStorage.removeItem("currentUser");
  localStorage.removeItem("lastActivityTime");

  if (sessionTimeoutId) {
    clearTimeout(sessionTimeoutId);
    sessionTimeoutId = null;
  }

  alert(
    "30分間操作がなかったため、自動的にログアウトしました。"
  );

  location.reload();
}


/* =========================
   操作があったとき
========================= */
function resetSessionTimeout() {

  /* ログインしていなければ何もしない */
  if (!localStorage.getItem("currentUser")) {
    return;
  }

  /* 最終操作時刻を保存 */
  localStorage.setItem(
    "lastActivityTime",
    Date.now().toString()
  );

  /* 前のタイマーを解除 */
  if (sessionTimeoutId) {
    clearTimeout(sessionTimeoutId);
  }

  /* 30分後にログアウト */
  sessionTimeoutId = setTimeout(
    sessionLogout,
    SESSION_TIMEOUT
  );
}


/* =========================
   ページ起動時のセッション確認
========================= */
function restoreSessionTimeout() {

  const currentUser =
    localStorage.getItem("currentUser");

  if (!currentUser) {
    return;
  }

  const lastActivityTime =
    Number(
      localStorage.getItem("lastActivityTime")
    );

  /* 最終操作時刻がない場合 */
  if (!lastActivityTime) {
    resetSessionTimeout();
    return;
  }

  const elapsedTime =
    Date.now() - lastActivityTime;

  /* すでに30分経過している */
  if (elapsedTime >= SESSION_TIMEOUT) {

    // 期限切れセッションは静かに終了。保存済みプロフィールは維持する。
    localStorage.removeItem("currentUser");
    localStorage.removeItem("lastActivityTime");
    return;
  }

  /* 残り時間 */
  const remainingTime =
    SESSION_TIMEOUT - elapsedTime;

  sessionTimeoutId = setTimeout(
    sessionLogout,
    remainingTime
  );
}


/* =========================
   ユーザー操作を監視
========================= */

[
  "click",
  "keydown",
  "touchstart",
  "scroll"
].forEach(eventName => {

  window.addEventListener(
    eventName,
    resetSessionTimeout,
    { passive: true }
  );

});


/* ページ起動時にセッションを復元 */
restoreSessionTimeout();

/* =========================
   ユーザーごとの保存キーを作る
========================= */
function getUserKey(key) {
  const currentUser = localStorage.getItem("currentUser");

  if (!currentUser) {
    return key;
  }

  return `${currentUser}_${key}`;
}

/* =========================
   研究参加者IDの自動生成
========================= */
function getParticipantId() {
  const key = getUserKey("participantId");

  let participantId = storage.getItem(key);

  if (!participantId) {
    participantId = "P-" + Array.from(
      crypto.getRandomValues(new Uint8Array(16)),
      byte => byte.toString(16).padStart(2, "0")
    ).join("");
    storage.setItem(key, participantId);
  }

  return participantId;
}

/* =========================
   登録済みユーザー一覧を取得
========================= */
function getUsers() {
  return JSON.parse(localStorage.getItem("users") || "{}");
}

/* =========================
   登録済みユーザー一覧を保存
========================= */
function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

const GAS_URL =
  "https://script.google.com/macros/s/AKfycbxmIq-JrBRw-tou_PHnOwKnmJobvkDUlakm0oNepcvaVCqe5-dgnXnppDkLtqyrE0tS/exec";

/* メニュー評価データ送信用 */
const MEAL_EVALUATION_API_URL =
  "https://script.google.com/macros/s/AKfycbxaurf6XB5pC_H8zMQQAG0i-egg4oVVC2dGB0Aw5_gcNv0RBlKRoVfvBKs0Oawb_M9VGw/exec";

function sendMealDataToSheet() {
  if (!registeredTotalFood || registeredFoods.length === 0) return;

  const data = {
    studentId: getParticipantId(),
    gender: storage.getItem(getUserKey("gender")) || "",
    age: storage.getItem(getUserKey("age")) || "",
    height: storage.getItem(getUserKey("height")) || "",
    weight: "", // 廃止済みの入力項目
    foods: registeredFoods.map(f => f.name).join(" / "),
    totalPrice: registeredTotalFood.price,
    energyKcal: registeredTotalFood.energy_kcal,
    proteinG: registeredTotalFood.protein_g,
    fatG: registeredTotalFood.fat_g,
    carbG: registeredTotalFood.carb_g,
    saltG: registeredTotalFood.salt_g
  };

  fetch(GAS_URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
}

async function sendMealEvaluationToSheet(evaluationData) {

  const data = {
    mealEvaluations: [{
      ...evaluationData,
      studentId: getParticipantId()
    }]
  };

  try {

    await fetch(MEAL_EVALUATION_API_URL, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(data)
    });

    console.log(
      "メニュー評価データを送信しました。",
      evaluationData
    );

  } catch (error) {

    console.error(
      "メニュー評価データの送信に失敗しました。",
      error
    );

  }
}

/* GAS同期: URLは menu-sync-config.js に設定。未設定時は従来の同一ブラウザ試作モード。 */
const ADMIN_MENU_STORAGE_KEY = "josho_admin_menu_v1";
const MENU_SYNC_URL = (window.MENU_SYNC_CONFIG && window.MENU_SYNC_CONFIG.url || "").trim();
let adminMenuOverrides = {};
if (!MENU_SYNC_URL) {
  try { adminMenuOverrides = JSON.parse(localStorage.getItem(ADMIN_MENU_STORAGE_KEY) || "{}"); }
  catch (e) { console.warn("管理者設定を読み込めません", e); }
}
function getAdminOverride(building, id) { return adminMenuOverrides[`${building}:${id}`] || null; }
const BASE_MENU_ITEMS = {"2": MENU_DATA.items.map(i => ({...i})), "13": MENU_13_DATA.items.map(i => ({...i}))};
function applyAdminMenuOverrides() {
  for (const [building, dataset] of [["2", MENU_DATA], ["13", MENU_13_DATA]]) {
    dataset.items = BASE_MENU_ITEMS[building].map(i => ({...i}));
    for (const item of dataset.items) {
      const patch = getAdminOverride(building, item.id);
      if (!patch) continue;
      for (const field of ["name","price","category","energy_kcal","protein_g","fat_g","carb_g","salt_g","visible","deleted","image_url","option_large_enabled","option_large_price","option_large_energy_kcal","option_large_protein_g","option_large_fat_g","option_large_carb_g","option_large_salt_g","option_soup_enabled","option_soup_reduction"]) {
        if (Object.prototype.hasOwnProperty.call(patch,field)) item[field] = patch[field];
      }
      // 旧分類で保存された13号館の公開データも新分類に移行して表示する。
      if (building === "13") {
        if (item.category === "weekly-teishoku" || item.category === "weekly-don") item.category = "weekly";
        if (item.category === "weekly-udon") item.category = "udon";
        if (item.category === "daily-teishoku") item.category = "daily";
      }
      const cat = dataset.categories.find(c => c.id === item.category);
      if (cat) item.category_label = cat.label;
    }
    for (const [key,patch] of Object.entries(adminMenuOverrides)) {
      if (!key.startsWith(building+":") || !patch.created || patch.deleted) continue;
      if (!dataset.items.some(item => item.id === patch.id)) dataset.items.push({...patch, building, tags: [], adminManaged: true});
    }
  }
}
applyAdminMenuOverrides();
function loadSharedMenuSettings() {
  if (!MENU_SYNC_URL) return;
  const callback = "joshoMenuSync_" + Math.random().toString(36).slice(2);
  const tag = document.createElement("script");
  const timeout = setTimeout(() => finish(new Error("timeout")), 12000);
  let finished = false;
  function finish(error, data) {
    if (finished) return;
    finished = true; clearTimeout(timeout); delete window[callback]; tag.remove();
    if (error || !data || !data.ok) { console.warn("共有メニューの読み込み失敗。安全のため全商品を非表示にします。",error || data); return; }
    adminMenuOverrides = data.patches || {};
    applyAdminMenuOverrides();
    if (typeof renderTabs === "function") renderTabs();
    if (typeof renderMenuList === "function") renderMenuList();
    if (typeof renderDailyMenuCard === "function") renderDailyMenuCard();
  }
  window[callback] = data => finish(null,data);
  tag.onerror = () => finish(new Error("network"));
  tag.src = MENU_SYNC_URL + (MENU_SYNC_URL.includes("?") ? "&" : "?") + "action=read&callback=" + callback + "&_=" + Date.now();
  document.head.appendChild(tag);
}
window.addEventListener("load", loadSharedMenuSettings);
/* =========================
基本設定と要素の取得
========================= */

let currentStep = 1;
let isEditingProfile = false;
let selectedFood = null;
let activeCategory = MENU_DATA.categories[0].id;

/* =========================
   学食切り替え機能
========================= */

let activeBuilding = "2";

/* =========================
   13号館 日付切り替え
========================= */

// 今日の日付を取得
const today = new Date();

// 選択中の日付
let selectedCafeteriaDate = new Date(today);

// 表示する週の月曜日を取得
function getMonday(date) {
  const d = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );

  const day = d.getDay();

  d.setDate(d.getDate() - ((day + 6) % 7));

  return d;
}

let cafeteriaWeekStart = getMonday(today);

// 日付を YYYY-MM-DD 形式にする
function formatCafeteriaDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

// ========================================
// 2号館の日替わりメニューを表示
// ========================================
function renderDailyMenuCard() {
  const card = document.getElementById("dailyMenuCard");
  const name = document.getElementById("dailyMenuName");
  const description = document.getElementById("dailyMenuDescription");
  const button = document.getElementById("dailyMenuSelectBtn");

  if (!card || !name || !description || !button) return;

  // 2号館・13号館で共通の日替わりカードを表示
  card.style.display = "block";

  // 選択中の日付
  const dateText = formatCafeteriaDate(selectedCafeteriaDate);

  // 号館別の日替わりメニューを表示。13号館の既存日付指定メニューは
  // 該当日だけ表示し、新規登録した日替わりは公開ONなら表示する。
  const dataset = getActiveMenuData();
  const scheduled13 = MENU_13_SCHEDULE[dateText] || [];
  const dailyFoods = dataset.items.filter(item => {
    if (item.category !== "daily" || item.deleted || item.tags?.includes("option")) return false;
    if (getAdminOverride(activeBuilding, item.id)?.visible !== true) return false;
    if (activeBuilding === "2") return isB2MenuVisible(item);
    if (item.id.startsWith("b13-daily-")) return scheduled13.includes(item.id);
    return true;
  });

  const photoBox = document.getElementById("dailyMenuPhotoBox");
  const photo = document.getElementById("dailyMenuPhoto");
  const photoFallback = document.getElementById("dailyMenuPhotoFallback");
  const setDailyPhoto = (url) => {
    if (!photo || !photoBox || !photoFallback) return;
    photo.onload = () => { photo.style.display = "block"; photoFallback.style.display = "none"; photoBox.classList.add("has-photo"); };
    photo.onerror = () => { photo.style.display = "none"; photoFallback.style.display = "block"; photoBox.classList.remove("has-photo"); };
    if (url && /^https:\/\//i.test(url)) {
      photo.style.display = "none";
      photoFallback.style.display = "block";
      photoBox.classList.remove("has-photo");
      photo.src = url;
    } else {
      photo.removeAttribute("src");
      photo.onerror();
    }
  };

  // 献立未登録の場合
  if (dailyFoods.length === 0) {
    setDailyPhoto(null);
    name.textContent = "献立情報を準備中";
    description.textContent =
      `${dateText} の日替わりメニューはまだ登録されていません。`;

    button.disabled = true;
    button.textContent = "メニュー情報を準備中";
    button.onclick = null;
    return;
  }

  // 登録済みの料理を表示（まずは1品対応）
  const food = dailyFoods[0];
  setDailyPhoto(food.image_url || null);

  name.textContent = food.name;
  const nutritionReady = hasCompleteNutrition(food);
  description.textContent = `${nutritionReady ? food.energy_kcal + "kcal" : "栄養情報を準備中"} / ${food.price == null ? "価格未登録" : food.price + "円"}`;

  button.disabled = !nutritionReady;
  button.textContent = nutritionReady ? "この料理を選ぶ" : "栄養情報を準備中";

  // 既存の料理詳細画面を開く
  button.onclick = () => {
    menuMode = "select";
    showDetail(food.id);
  };
}

// ========================================
// 全号館共通の日付バーを表示
// ========================================
function renderCafeteriaDateSelector() {
  const selector = document.getElementById("cafeteriaDateSelector");
  const monthTitle = document.getElementById("cafeteriaMonthTitle");
  const weekDays = document.getElementById("cafeteriaWeekDays");

  // 2号館の日替わりカードを更新
  renderDailyMenuCard();

  if (!selector || !monthTitle || !weekDays) return;

  // 2号館・13号館共通で日付バーを表示
  selector.style.display = "block";

  const weekdays = ["月", "火", "水", "木", "金"];

  const friday = new Date(cafeteriaWeekStart);
  friday.setDate(friday.getDate() + 4);

  const startMonth = cafeteriaWeekStart.getMonth() + 1;
  const endMonth = friday.getMonth() + 1;

  monthTitle.textContent =
    startMonth === endMonth
      ? `${cafeteriaWeekStart.getFullYear()}年 ${startMonth}月`
      : `${cafeteriaWeekStart.getFullYear()}年 ${startMonth}月〜${endMonth}月`;

  weekDays.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    const date = new Date(cafeteriaWeekStart);
    date.setDate(date.getDate() + i);

    const button = document.createElement("button");
    button.type = "button";
    button.className = "cafeteria-day-btn";

    button.textContent =
      `${date.getMonth() + 1}/${date.getDate()}(${weekdays[i]})`;

    if (
      formatCafeteriaDate(date) ===
      formatCafeteriaDate(selectedCafeteriaDate)
    ) {
      button.classList.add("active");
    }

    if (
      formatCafeteriaDate(date) === formatCafeteriaDate(today)
    ) {
      button.classList.add("today");
    }
    button.addEventListener("click", () => {
      selectedCafeteriaDate = new Date(date);
      renderCafeteriaDateSelector();
      renderMenuList();
    });

    weekDays.appendChild(button);
  }
}

// 前週・翌週の切り替え
document.getElementById("prevCafeteriaWeek")?.addEventListener("click", () => {
  cafeteriaWeekStart.setDate(cafeteriaWeekStart.getDate() - 7);
  selectedCafeteriaDate = new Date(cafeteriaWeekStart);
  renderCafeteriaDateSelector();
  renderMenuList();
});

document.getElementById("nextCafeteriaWeek")?.addEventListener("click", () => {
  cafeteriaWeekStart.setDate(cafeteriaWeekStart.getDate() + 7);
  selectedCafeteriaDate = new Date(cafeteriaWeekStart);
  renderCafeteriaDateSelector();
  renderMenuList();
});

function getActiveMenuData() {
  return activeBuilding === "2" ? MENU_DATA : MENU_13_DATA;
}

document.querySelectorAll(".cafeteria-btn").forEach(btn => {
  btn.addEventListener("click", () => {

    activeBuilding = btn.dataset.building;

    document.querySelectorAll(".cafeteria-btn").forEach(b => {
      b.classList.toggle("active", b === btn);
    });

    activeCategory = getActiveMenuData().categories[0].id;

    const weeklyInfo = document.getElementById("weeklyMenuInfo");

    if (weeklyInfo) {
      weeklyInfo.style.display =
        activeBuilding === "13" ? "block" : "none";
    }

    renderTabs();
    renderMenuList();
    renderCafeteriaDateSelector();
  });
});

let menuMode = "select"; // select=登録用 / browse=見るだけ用
let selectedFoods = [];
let editingMealDate = null;
let radarChart = null;
let confirmRadarChart = null;
let todayRadarChart = null;
let recommendRadarChart = null;
let pendingRecommendFood = null;
let registeredFoods = [];
let registeredTotalFood = null;
// カレンダーで最後に選択した日付
let selectedCalendarDate = null;

// カレンダーの表示年月
let calendarYear = new Date().getFullYear();
let calendarMonth = new Date().getMonth();
const questions = document.querySelectorAll(".question");
const progressSteps = document.querySelectorAll(".progress-step");
const nextBtn = document.getElementById("nextBtn");
const authChoicePage =
  document.getElementById("authChoicePage");

const openRegisterBtn =
  document.getElementById("openRegisterBtn");

const openLoginBtn =
  document.getElementById("openLoginBtn");
const registerPage =
  document.getElementById("registerPage");

const loginPage =
  document.getElementById("loginPage");

const registerNickname =
  document.getElementById("registerNickname");

const registerPassword =
  document.getElementById("registerPassword");

const registerPasswordConfirm =
  document.getElementById("registerPasswordConfirm");

const registerSubmitBtn =
  document.getElementById("registerSubmitBtn");
const registerNicknameError =
  document.getElementById("registerNicknameError");

const registerPasswordError =
  document.getElementById("registerPasswordError");

const registerPasswordConfirmError =
  document.getElementById("registerPasswordConfirmError");
const backFromRegisterBtn =
  document.getElementById("backFromRegisterBtn");

const loginNickname =
  document.getElementById("loginNickname");

const loginPassword =
  document.getElementById("loginPassword");

const loginSubmitBtn =
  document.getElementById("loginSubmitBtn");
const loginGeneralError =
  document.getElementById("loginGeneralError");
const backFromLoginBtn =
  document.getElementById("backFromLoginBtn");
const progressContainer =
  document.querySelector(".progress-container");

const inputCard =
  document.getElementById("inputCard");

// 基本情報入力画面を表示
progressContainer.style.display = "flex";
inputCard.style.display = "flex";
const studentIdInput = document.getElementById("studentId");

let selectedGender = null;

/* =========================
   参加者IDを自動設定
========================= */
function updateStudentIdButton() {
  if (!studentIdInput) return;

  studentIdInput.value = getParticipantId();
}
updateStudentIdButton();
/* =========================
   認証画面の切り替え
========================= */

// 「新規登録」を押したとき
openRegisterBtn.addEventListener("click", () => {
  authChoicePage.style.display = "none";
  loginPage.style.display = "none";
  registerPage.style.display = "flex";

  registerNickname.focus();

  window.scrollTo({
    top: 0,
    behavior: "auto"
  });
});

// 「ログイン」を押したとき
openLoginBtn.addEventListener("click", () => {
  authChoicePage.style.display = "none";
  registerPage.style.display = "none";
  loginPage.style.display = "flex";

  loginNickname.focus();

  window.scrollTo({
    top: 0,
    behavior: "auto"
  });
});

// 新規登録画面の「戻る」
backFromRegisterBtn.addEventListener("click", () => {
  registerPage.style.display = "none";
  loginPage.style.display = "none";
  authChoicePage.style.display = "flex";

  window.scrollTo({
    top: 0,
    behavior: "auto"
  });
});

// ログイン画面の「戻る」
backFromLoginBtn.addEventListener("click", () => {
  loginPage.style.display = "none";
  registerPage.style.display = "none";
  authChoicePage.style.display = "flex";

  window.scrollTo({
    top: 0,
    behavior: "auto"
  });
});
/* =========================
新規登録フォームの入力チェック
========================= */

function validateRegisterForm() {
  registerNicknameError.textContent =
    "ニックネームは半角英数字4～20文字で入力してください。";
  const nickname = registerNickname.value.trim();
  const password = registerPassword.value;
  const passwordConfirm = registerPasswordConfirm.value;

  const nicknamePattern = /^[a-zA-Z0-9]{4,20}$/;
  const passwordPattern = /^[a-zA-Z0-9]{8,64}$/;

  const isNicknameValid = nicknamePattern.test(nickname);
  const isPasswordValid = passwordPattern.test(password);
  const isPasswordConfirmValid =
    passwordConfirm !== "" &&
    password === passwordConfirm;

  registerNickname.classList.toggle(
    "invalid",
    nickname !== "" && !isNicknameValid
  );

  registerPassword.classList.toggle(
    "invalid",
    password !== "" && !isPasswordValid
  );

  registerPasswordConfirm.classList.toggle(
    "invalid",
    passwordConfirm !== "" && !isPasswordConfirmValid
  );

  registerNicknameError.classList.toggle(
    "show",
    nickname !== "" && !isNicknameValid
  );

  registerPasswordError.classList.toggle(
    "show",
    password !== "" && !isPasswordValid
  );

  registerPasswordConfirmError.classList.toggle(
    "show",
    passwordConfirm !== "" && !isPasswordConfirmValid
  );

  const isFormValid =
    isNicknameValid &&
    isPasswordValid &&
    isPasswordConfirmValid;

  registerSubmitBtn.disabled = !isFormValid;
}

registerNickname.addEventListener("input", validateRegisterForm);
registerPassword.addEventListener("input", validateRegisterForm);
registerPasswordConfirm.addEventListener("input", validateRegisterForm);

/* =========================
ログインフォームの入力チェック
========================= */

function validateLoginForm() {

  const nickname = loginNickname.value.trim();
  const password = loginPassword.value;

  const isValid =
    nickname !== "" &&
    password !== "";

  loginSubmitBtn.disabled = !isValid;

}
loginNickname.addEventListener("input", validateLoginForm);
loginPassword.addEventListener("input", validateLoginForm);

loginNickname.addEventListener("input", () => {
  loginGeneralError.classList.remove("show");
});

loginPassword.addEventListener("input", () => {
  loginGeneralError.classList.remove("show");
});

/* =========================
ログインを実行
========================= */
loginSubmitBtn.addEventListener("click", () => {
  const inputNickname = loginNickname.value.trim();
  const inputPassword = loginPassword.value;

  // ★登録済みユーザー一覧を取得
  const users = getUsers();

  // ★入力されたニックネームのユーザーを取得
  const user = users[inputNickname];

  // ★ユーザーが存在しない、またはパスワードが違う
  if (!user || inputPassword !== user.password) {
    loginGeneralError.textContent =
      "ニックネームまたはパスワードが違います。";

    loginGeneralError.classList.add("show");
    return;
  }

  loginGeneralError.classList.remove("show");

  // ★現在ログイン中のユーザーを保存
  localStorage.setItem("currentUser", inputNickname);

  // ★30分タイムアウト開始
  resetSessionTimeout();

  // ★ログインしたユーザーの基本情報を読み込む
  loadUserProfileIntoForm();

  // ★ログインしたユーザーの今日の食事を読み込む
  loadTodayMealFromHistory();

  loginPage.style.display = "none";

  /* 保存済みの基本情報を確認 */
  const participantId = getParticipantId();

  const savedGender = storage.getItem(getUserKey("gender"));
  const savedAge = storage.getItem(getUserKey("age"));
  const savedHeight = storage.getItem(getUserKey("height"));


  const hasAllProfileData =
    participantId &&
    savedGender &&
    savedAge &&
    savedHeight;

  /* 基本情報が全部ある場合はメニュー画面へ */
  if (hasAllProfileData) {
    localStorage.setItem("lastProfileUser", inputNickname);
    progressContainer.style.display = "none";
    inputCard.style.display = "none";

    menuMode = "select";
    selectedFoods = [];

    renderMenuList();
    updateSelectedBar();

    document.getElementById("selectMenuPage").style.display = "block";
    document.getElementById("appContainer").classList.add("has-bottom-nav");
    document.getElementById("bottomNav").style.display = "flex";

    setActiveTab(menuTab);

    window.scrollTo({
      top: 0,
      behavior: "auto"
    });

    return;
  }

  /* 基本情報が足りない場合は入力画面へ */
  progressContainer.style.display = "flex";
  inputCard.style.display = "flex";

  // 学籍番号の入力をスキップし、性別選択から開始
  currentStep = 1;

  questions.forEach((question, index) => {
    question.classList.toggle("active", index === 1);
  });

  progressSteps.forEach((step, index) => {
    step.classList.toggle("active", index < currentStep - 1);
  });
  // 性別が未選択なら「次へ」を無効化
  if (selectedGender) {
    enableButton();
  } else {
    disableButton();
  }

  // 学籍番号の代わりに参加者IDを自動設定
  updateStudentIdButton();

  window.scrollTo({
    top: 0,
    behavior: "auto"
  });
});
/* =========================
新規登録を実行
========================= */

registerSubmitBtn.addEventListener("click", () => {

  const nickname = registerNickname.value.trim();
  const password = registerPassword.value;

  const users = getUsers();

  if (users[nickname]) {
    registerNicknameError.textContent =
      "このニックネームはすでに登録されています。";

    registerNicknameError.classList.add("show");
    registerNickname.classList.add("invalid");

    return;
  }

  // ★ユーザー一覧に新しいユーザーを追加
  users[nickname] = {
    password: password
  };

  // ★更新したユーザー一覧を保存
  saveUsers(users);

  // ★現在ログイン中のユーザーを保存
  localStorage.setItem("currentUser", nickname);

  // ★30分タイムアウト開始
  resetSessionTimeout();

  // ★新規登録したユーザーの基本情報を読み込む
  loadUserProfileIntoForm();

  // ★新規登録したユーザーの今日の食事を読み込む
  loadTodayMealFromHistory();

  registerPage.style.display = "none";

  progressContainer.style.display = "flex";
  inputCard.style.display = "flex";

  // 学籍番号をスキップして性別選択から開始
  currentStep = 1;

  questions.forEach((question, index) => {
    question.classList.toggle("active", index === 1);
  });

  progressSteps.forEach((step, index) => {
    step.classList.toggle("active", index === 0);
  });

  // 保存済みの性別があれば次へ進める
  if (selectedGender) {
    enableButton();
  } else {
    disableButton();
  }

  // 学籍番号が入っているか確認してボタン状態を決める
  updateStudentIdButton();

  window.scrollTo({
    top: 0,
    behavior: "auto"
  });

});

/* =========================
年齢・身長の階層式選択（1歳・1cm単位）
========================= */
const ageSelect = document.getElementById("age");
const heightSelect = document.getElementById("height");

function setupHierarchyPicker(select, containerId, minimum, maximum, unit, groupLabel) {
  const container = document.getElementById(containerId);
  if (!container || !select) return { sync() {} };

  // 元のselectを維持し、既存の保存・栄養計算ロジックと連携する。
  for (let n = minimum; n <= maximum; n++) {
    const option = document.createElement("option");
    option.value = String(n);
    option.textContent = `${n}${unit}`;
    select.appendChild(option);
  }

  let open = false;
  let expandedGroup = null;
  const groups = [];
  for (let n = Math.floor(minimum / 10) * 10; n <= maximum; n += 10) groups.push(n);

  function draw() {
    container.replaceChildren();
    const selected = Number(select.value);
    const summary = document.createElement("button");
    summary.type = "button";
    summary.className = "hierarchy-summary";
    summary.setAttribute("aria-expanded", String(open));
    summary.innerHTML = `<span>${select.value ? `${selected}${unit}` : "選択してください"}</span><span class="hierarchy-chevron">${open ? "⌃" : "⌄"}</span>`;
    summary.addEventListener("click", () => { open = !open; expandedGroup = null; draw(); });
    container.appendChild(summary);
    if (!open) return;

    const list = document.createElement("div");
    list.className = "hierarchy-groups";
    groups.forEach(group => {
      const first = Math.max(minimum, group);
      const last = Math.min(maximum, group + 9);
      const section = document.createElement("div");
      section.className = "hierarchy-section";
      const groupButton = document.createElement("button");
      groupButton.type = "button";
      groupButton.className = "hierarchy-group-button";
      groupButton.setAttribute("aria-expanded", String(expandedGroup === group));
      groupButton.innerHTML = `<span>${group}${groupLabel}${first === last ? `（${first}${unit}）` : ""}</span><span class="hierarchy-chevron">${expandedGroup === group ? "⌄" : "›"}</span>`;
      groupButton.addEventListener("click", () => { expandedGroup = expandedGroup === group ? null : group; draw(); });
      section.appendChild(groupButton);
      if (expandedGroup === group) {
        const choices = document.createElement("div");
        choices.className = "hierarchy-choices";
        for (let n = first; n <= last; n++) {
          const button = document.createElement("button");
          button.type = "button";
          button.className = "hierarchy-choice" + (select.value === String(n) ? " is-selected" : "");
          button.textContent = `${n}${unit}`;
          button.addEventListener("click", () => {
            select.value = String(n);
            open = false;
            expandedGroup = null;
            select.dispatchEvent(new Event("change", { bubbles: true }));
            draw();
          });
          choices.appendChild(button);
        }
        section.appendChild(choices);
      }
      list.appendChild(section);
    });
    container.appendChild(list);
  }
  draw();
  return { sync() { open = false; expandedGroup = null; draw(); } };
}

const agePicker = setupHierarchyPicker(ageSelect, "ageHierarchy", 18, 80, "歳", "代");
const heightPicker = setupHierarchyPicker(heightSelect, "heightHierarchy", 130, 200, "cm", "cm台");

/* =========================
ログイン中ユーザーの基本情報を読み込む
========================= */
function loadUserProfileIntoForm() {
  // ★前のユーザーの入力内容をリセット
  studentIdInput.value = "";
  selectedGender = null;

  document.querySelectorAll(".gender-btn").forEach(btn => {
    btn.classList.remove("selected");
  });

  ageSelect.value = "";
  heightSelect.value = "";
  agePicker.sync();
  heightPicker.sync();


  const savedParticipantId = getParticipantId();
  const savedGender = storage.getItem(getUserKey("gender"));
  const savedAge = storage.getItem(getUserKey("age"));
  const savedHeight = storage.getItem(getUserKey("height"));

  if (savedParticipantId) {
    studentIdInput.value = savedParticipantId;
  }
  if (savedGender) {
    selectedGender = savedGender;
    const savedGenderBtn = document.querySelector(`.gender-btn[data-value="${savedGender}"]`);
    if (savedGenderBtn) {
      savedGenderBtn.classList.add("selected");
    }
  }
  if (savedAge) { ageSelect.value = savedAge; }
  if (savedHeight) { heightSelect.value = savedHeight; }
  agePicker.sync();
  heightPicker.sync();


  // 学籍番号の入力をスキップし、性別選択から開始
  currentStep = 1;

  questions.forEach((question, index) => {
    question.classList.toggle("active", index === 1);
  });

  progressSteps.forEach((step, index) => {
    step.classList.toggle("active", index === 0);
  });

  if (typeof syncProfileNavigation === "function") syncProfileNavigation();
  // 性別が選択されている場合のみ次へ進める
  if (selectedGender) {
    enableButton();
  } else {
    disableButton();
  }
}

/* =========================
イベントリスナー（入力検知）
========================= */
const genderButtons = document.querySelectorAll(".gender-btn");
genderButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    genderButtons.forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    selectedGender = btn.dataset.value;
    enableButton();
  });
});

document.querySelectorAll("select").forEach(select => {
  select.addEventListener("change", () => {
    if (select.value !== "") {
      enableButton();
    } else {
      disableButton();
    }
  });
});

function enableButton() {
  nextBtn.classList.add("enabled");
  nextBtn.disabled = false;
}

function disableButton() {
  nextBtn.classList.remove("enabled");
  nextBtn.disabled = true;
}

/* 基本情報入力の戻る・編集キャンセル */
const profileBackBtn = document.getElementById("profileBackBtn");
const cancelProfileEditBtn = document.getElementById("cancelProfileEditBtn");
function syncProfileNavigation() {
  profileBackBtn.style.display = inputCard.style.display === "none" || currentStep <= 1 ? "none" : "inline-flex";
  cancelProfileEditBtn.style.display = isEditingProfile && inputCard.style.display !== "none" ? "inline-flex" : "none";
}
function showProfileStep(step) {
  currentStep = step;
  questions.forEach((question, index) => question.classList.toggle("active", index === currentStep));
  progressSteps.forEach((progress, index) => progress.classList.toggle("active", index < currentStep));
  const valid = currentStep === 1 ? !!selectedGender : currentStep === 2 ? ageSelect.value !== "" : heightSelect.value !== "";
  if (valid) enableButton(); else disableButton();
  syncProfileNavigation();
}
profileBackBtn.addEventListener("click", () => {
  if (currentStep > 1) showProfileStep(currentStep - 1);
});
cancelProfileEditBtn.addEventListener("click", () => {
  if (!isEditingProfile) return;
  isEditingProfile = false;
  progressContainer.style.display = "none";
  inputCard.style.display = "none";
  document.getElementById("mypagePage").style.display = "block";
  document.getElementById("bottomNav").style.display = "flex";
  document.getElementById("appContainer").classList.add("has-bottom-nav");
  setActiveTab(mypageTab);
  renderMyPage();
  syncProfileNavigation();
  window.scrollTo({top:0,behavior:"auto"});
});

/* =========================
ステップ遷移・保存ロジック
========================= */
nextBtn.addEventListener("click", () => {

  if (currentStep === 0 && studentIdInput.value.trim() === "") return;
  if (currentStep === 1 && !selectedGender) return;
  if (currentStep === 2 && ageSelect.value === "") return;
  if (currentStep === 3 && heightSelect.value === "") return;


  if (currentStep === 3) {
    storage.setItem(getUserKey("participantId"), getParticipantId());
    storage.setItem(getUserKey("gender"), selectedGender);
    storage.setItem(getUserKey("age"), ageSelect.value);
    storage.setItem(getUserKey("height"), heightSelect.value);
    storage.removeItem(getUserKey("weight"));
    // 次回起動用。ログインセッションとは別に最後のプロフィールを覚える。
    const profileOwner = localStorage.getItem("currentUser");
    if (profileOwner) localStorage.setItem("lastProfileUser", profileOwner);


    // 基本情報の編集だった場合はマイページに戻る
    if (isEditingProfile) {
      isEditingProfile = false;

      document.querySelector(".progress-container").style.display = "none";
      document.getElementById("inputCard").style.display = "none";

      document.getElementById("mypagePage").style.display = "block";
      document.getElementById("bottomNav").style.display = "flex";
      document.getElementById("appContainer").classList.add("has-bottom-nav");

      setActiveTab(mypageTab);
      renderMyPage();

      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    menuMode = "select";
    selectedFoods = [];
    renderMenuList();
    updateSelectedBar();

    document.querySelector(".progress-container").style.display = "none";
    document.getElementById("inputCard").style.display = "none";
    document.getElementById("selectMenuPage").style.display = "block";
    document.getElementById("appContainer").classList.add("has-bottom-nav");
    document.getElementById("bottomNav").style.display = "flex";
    setActiveTab(menuTab);
    /* 今日のおすすめを表示 */
    recommendOverlay.style.display = "flex";
    window.scrollTo({ top: 0, behavior: "auto" });
    return;
  }

  showProfileStep(currentStep + 1);

});

/* =========================================================
SmartNews風タブ + 学食一覧
========================================================= */
const tabBar = document.getElementById("tabBar");
const menuList = document.getElementById("menuList");

/* =========================
   カテゴリタブ 左右スクロール
========================= */

const tabScrollLeft = document.getElementById("tabScrollLeft");
const tabScrollRight = document.getElementById("tabScrollRight");

function updateTabScrollButtons() {
  if (!tabScrollLeft || !tabScrollRight || !tabBar) return;

  // タブが非表示の間は、幅を判定しない
  if (tabBar.getClientRects().length === 0) return;

  const maxScroll = Math.max(
    0,
    tabBar.scrollWidth - tabBar.clientWidth
  );

  tabScrollLeft.disabled = tabBar.scrollLeft <= 1;
  tabScrollRight.disabled = tabBar.scrollLeft >= maxScroll - 1;
}

// タブの表示サイズが変化したら、矢印の状態を更新
const tabResizeObserver = new ResizeObserver(() => {
  updateTabScrollButtons();
});

tabResizeObserver.observe(tabBar);

tabScrollLeft?.addEventListener("click", () => {
  tabBar.scrollBy({
    left: -180,
    behavior: "smooth"
  });
});

tabScrollRight?.addEventListener("click", () => {
  tabBar.scrollBy({
    left: 180,
    behavior: "smooth"
  });
});

tabBar.addEventListener("scroll", updateTabScrollButtons);
window.addEventListener("resize", updateTabScrollButtons);

function renderTabs() {
  tabBar.innerHTML = getActiveMenuData().categories.filter(cat => cat.id !== "daily").map(cat => `
              <button type="button" class="tab-item${cat.id === activeCategory ? " active" : ""}"
                data-category="${cat.id}">
                ${cat.emoji} ${cat.label}
              </button>
              `).join("");

  tabBar.querySelectorAll(".tab-item").forEach(tab => {
    tab.addEventListener("click", () => {
      activeCategory = tab.dataset.category;
      renderTabs();
      renderMenuList();
      tab.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    });
  });
  requestAnimationFrame(() => {
    requestAnimationFrame(updateTabScrollButtons);
  });
}

/* =========================
   メニューカード用
   簡易栄養評価
========================= */
function getQuickNutritionStatus(actual, ideal, type) {

  if (!ideal || ideal <= 0) {
    return {
      status: "判定なし",
      className: "good",
      position: 0
    };
  }

  const ratio = actual / ideal;
  const key = ({ protein: "protein_g", fat: "fat_g", carb: "carb_g", salt: "salt_g", energy: "energy_kcal" })[type];
  const judgement = getNutritionJudgement(key, actual);
  const className = judgement;
  const status = type === "energy" ? "目標との差を表示" : type === "salt" ? (judgement === "high" ? "基準超過" : "基準以内") :
    judgement === "low" ? "少なめ" : judgement === "high" ? "多め" : "目標範囲内";

  /*
    ゲージは基準値の160%を右端とする

    0%   → 0%
    80%  → 50%
    100% → 62.5%
    120% → 75%
    160% → 100%
  */
  const position = Math.min(
    (ratio / 1.6) * 100,
    98
  );

  return {
    status,
    className,
    position
  };
}

function renderMenuList() {
  // =====================================
  // 13号館 休業日の表示
  // =====================================
  if (activeBuilding === "13") {
    const dateKey = formatCafeteriaDate(selectedCafeteriaDate);
    const closedReason = MENU_13_CLOSED_DAYS[dateKey];

    if (closedReason) {
      // menuList は既存のメニュー一覧表示要素
      const menuList = document.getElementById("menuList");
      menuList.innerHTML = `
      <div style="
        padding: 32px 20px;
        text-align: center;
        background: #fff8f2;
        border-radius: 16px;
        margin-top: 16px;
      ">
        <div style="font-size: 36px; margin-bottom: 12px;">🏫</div>
        <h3 style="margin-bottom: 10px;">本日は休業です</h3>
        <p style="color: #777;">${closedReason}</p>
      </div>
    `;
      return;
    }
  }

  /* =========================
     現在のユーザーの1食基準
  ========================= */
  const ideal = getIdealNutrition();

  // 13号館の選択日の提供メニュー
  const availableIds =
    activeBuilding === "13"
      ? getMenu13AvailableIds(selectedCafeteriaDate)
      : [];

  // 13号館の固定メニューカテゴリ
  const fixedCategories13 = [
    "teishoku",
    "udon",
    "ramen",
    "ramen-set",
    "don",
    "curry",
    "premium",
    "weekly",
    "side"
  ];

  // 表示する料理を取得
  const items = getActiveMenuData().items.filter(item => {
    if (item.category === "daily") return false;
    if (item.category !== activeCategory) return false;
    if (item.tags.includes("option")) return false;
    if (item.deleted) return false;
    const adminOverride = getAdminOverride(activeBuilding, item.id);
    // 管理者の明示的なONがない商品は、号館や通常/おすすめの区別なく非表示。
    if (adminOverride?.visible !== true) return false;

    // 栄養値未確認の料理はデータに保持し、学生の食事登録対象にはしない。
    if (["energy_kcal", "protein_g", "fat_g", "carb_g", "salt_g"].some(key => item[key] == null)) return false;

    // 2号館：非表示品目はデータとして残し、画面には出さない。
    if (activeBuilding === "2") return isB2MenuVisible(item);

    // 管理者の明示的な販売設定は日付別の既定ルールより優先。
    if (adminOverride && adminOverride.visible === true) return true;

    // 13号館の固定メニューは常時表示
    // 13号館：10/26週のラーメン提供内容
    if (item.category === "ramen") {
      const weekKey = formatCafeteriaDate(
        getMonday(selectedCafeteriaDate)
      );

      if (weekKey === "2026-10-26") {
        return [
          "b13-ramen-02",
          "b13-ramen-set-02"
        ].includes(item.id);
      }
    }

    if (fixedCategories13.includes(item.category)) return true;

    // 13号館の週替わり・日替わりは指定日のみ表示
    return availableIds.includes(item.id);
  });

  // 同じIDのメニューが重複しないようにする
  const uniqueItems = [
    ...new Map(
      items.map(item => [item.id, item])
    ).values()
  ];

  if (items.length === 0) {
    const message =
      activeBuilding === "13"
        ? "この日の提供メニューは未登録です"
        : "このカテゴリのメニューはまだありません";

    menuList.innerHTML =
      `<div class="empty-msg">${message}</div>`;

    return;
  }


  menuList.innerHTML = uniqueItems.map(item => {

    // 13号館：栄養価が未登録か確認
    const nutritionPending =
      activeBuilding === "13" &&
      !hasCompleteNutrition(item);

    const isSelected = selectedFoods.some(f =>
      f.baseId === item.id || f.id === item.id
    );

    const selectedClass =
      isSelected && menuMode === "select"
        ? " selected-menu"
        : "";


    /* =========================
       各栄養素を個人基準と比較
    ========================= */

    const energyStatus = getQuickNutritionStatus(
      item.energy_kcal,
      ideal.energy_kcal,
      "energy"
    );

    const proteinStatus = getQuickNutritionStatus(
      item.protein_g,
      ideal.protein_g,
      "protein"
    );

    const fatStatus = getQuickNutritionStatus(
      item.fat_g,
      ideal.fat_g,
      "fat"
    );

    const saltStatus = getQuickNutritionStatus(
      item.salt_g,
      ideal.salt_g,
      "salt"
    );


    return `
      <div
        class="menu-item${selectedClass}"
        data-id="${item.id}"
        data-selected="${isSelected}"
      >

        <div class="menu-flip-inner">


          <!-- =====================
               表面
          ====================== -->
          <div class="menu-front">

            <div class="menu-image-area">

              <img
                class="menu-image"
                src="${getMenuImagePath(item)}"
                alt="${item.name}"
                loading="lazy"
                onerror="
                  this.onerror = null;
                  this.src = 'images/no-image.png';
                "
              >

<span class="menu-calorie-badge">
  ${typeof item.energy_kcal === "number" &&
        Number.isFinite(item.energy_kcal)
        ? `${item.energy_kcal} kcal`
        : "栄養価確認中"}
</span>


              ${isSelected && menuMode === "select" ? `
                <div class="selected-status">
                  <span class="selected-badge">
                    ✓ 選択済み
                  </span>
                </div>
              ` : ""}

            </div>


            <div class="menu-content">

              <div class="menu-name">
                ${item.name}
              </div>


              <div class="menu-tags">

                ${item.tags.map(t => `
                  <span class="tag-badge">
                    ${TAG_LABELS[t] || t}
                  </span>
                `).join("")}

              </div>


              <div class="menu-meta">

                <span class="menu-price">
                  ${typeof item.price === "number" && Number.isFinite(item.price)
        ? `¥${item.price}`
        : "価格確認中"}
                </span>

                <button
  type="button"
  class="menu-nutrition-btn"
>
  栄養を見る ›
</button>

              </div>


              ${isSelected && menuMode === "select" ? `
                <div class="selected-actions">

                  ${selectedFoods.find(f =>
          f.baseId === item.id && f.isLarge
        ) ? `

                    <button
                      type="button"
                      class="cancel-large-btn"
                      data-id="${item.id}"
                    >
                      大盛り解除
                    </button>

                  ` : `

                    ${getLargeOptionForFood(item) ? `

                      <button
                        type="button"
                        class="add-large-btn"
                        data-id="${item.id}"
                      >
                        大盛り追加
                      </button>

                    ` : ""}

                  `}


                  <button
                    type="button"
                    class="remove-selected-btn"
                    data-id="${item.id}"
                  >
                    削除
                  </button>

                </div>
              ` : ""}

            </div>

          </div>

<!-- =====================
     裏面
====================== -->
<div class="menu-back">

  <div class="menu-back-title">
    ${item.name}
  </div>

  <div class="menu-back-guide">
    あなたの1食の目安と比較
  </div>
${nutritionPending ? `
  <div style="
    padding: 24px 16px;
    text-align: center;
    background: #fff8f2;
    border-radius: 12px;
    line-height: 1.8;
  ">
    <div style="font-size: 28px;">📊</div>
    <strong>栄養情報を確認中</strong>
    <div style="font-size: 13px; color: #777;">
      このメニューの栄養価は現在確認中です。
    </div>
  </div>
` : `
<div class="quick-nutrition-list">
  


              <!-- エネルギー -->
              <div class="quick-nutrition-item">

                <div class="quick-nutrition-head">

                  <span class="quick-nutrition-name">
                    ⚡ エネルギー
                  </span>

                  <span class="quick-nutrition-status ${energyStatus.className}">
                    ${energyStatus.status}
                  </span>

                </div>


                <div class="quick-gauge">

                  <div
                    class="quick-gauge-marker neutral"
                    style="left:${energyStatus.position}%"
                  ></div>

                </div>


                <div class="quick-nutrition-value">
                  ${item.energy_kcal} kcal
                </div>

              </div>



              <!-- たんぱく質 -->
              <div class="quick-nutrition-item">

                <div class="quick-nutrition-head">

                  <span class="quick-nutrition-name">
                    💪 たんぱく質
                  </span>

                  <span class="quick-nutrition-status ${proteinStatus.className}">
                    ${proteinStatus.status}
                  </span>

                </div>


                <div class="quick-gauge">

                  <div class="quick-gauge-good-zone"></div>

                  <div
                    class="quick-gauge-marker"
                    style="left:${proteinStatus.position}%"
                  ></div>

                </div>


                <div class="quick-nutrition-value">
                  ${item.protein_g} g
                </div>

              </div>



              <!-- 脂質 -->
              <div class="quick-nutrition-item">

                <div class="quick-nutrition-head">

                  <span class="quick-nutrition-name">
                    🧈 脂質
                  </span>

                  <span class="quick-nutrition-status ${fatStatus.className}">
                    ${fatStatus.status}
                  </span>

                </div>


                <div class="quick-gauge">

                  <div class="quick-gauge-good-zone"></div>

                  <div
                    class="quick-gauge-marker"
                    style="left:${fatStatus.position}%"
                  ></div>

                </div>


                <div class="quick-nutrition-value">
                  ${item.fat_g} g
                </div>

              </div>



              <!-- 塩分 -->
              <div class="quick-nutrition-item">

                <div class="quick-nutrition-head">

                  <span class="quick-nutrition-name">
                    🧂 塩分
                  </span>

                  <span class="quick-nutrition-status ${saltStatus.className}">
                    ${saltStatus.status}
                  </span>

                </div>


                <div class="quick-gauge salt-gauge">

                  <div class="quick-gauge-good-zone"></div>

                  <div
                    class="quick-gauge-marker"
                    style="left:${saltStatus.position}%"
                  ></div>

                </div>


                <div class="quick-nutrition-value">
                  ${item.salt_g} g
                </div>

              </div>

            </div>
`}

            <button
              type="button"
              class="menu-back-detail-btn"
              data-id="${item.id}"
            >
              詳細を見る
            </button>


            <div class="menu-back-return">
              カードをタップして戻る
            </div>

          </div>

        </div>

      </div>
    `;

  }).join("");



  /* =========================
     カード本体
  ========================= */

  menuList.querySelectorAll(".menu-item").forEach(card => {

    card.addEventListener("click", (e) => {

      /* ボタン操作の場合は何もしない */
      if (e.target.closest("button")) {
        return;
      }

      /* 裏面なら表面へ戻す */
      if (card.classList.contains("flipped")) {
        card.classList.remove("flipped");
        return;
      }

      /* 選択済みでも詳細を開ける */
      showDetail(card.dataset.id);

    });

  });


  /* =========================
     栄養を見る → 裏返す
  ========================= */

  menuList.querySelectorAll(".menu-nutrition-btn").forEach(btn => {

    btn.addEventListener("click", (e) => {

      e.stopPropagation();

      const card = btn.closest(".menu-item");

      if (!card) return;

      card.classList.add("flipped");

    });

  });



  /* =========================
     詳細を見る
  ========================= */

  menuList.querySelectorAll(".menu-back-detail-btn").forEach(btn => {

    btn.addEventListener("click", (e) => {

      e.stopPropagation();

      const id = btn.dataset.id;

      showDetail(id);

    });

  });



  /* =========================
     選択済みメニュー削除
  ========================= */

  menuList.querySelectorAll(".remove-selected-btn").forEach(btn => {

    btn.addEventListener("click", (e) => {

      e.stopPropagation();

      const id = btn.dataset.id;

      selectedFoods = selectedFoods.filter(f =>
        f.baseId !== id && f.id !== id
      );

      renderMenuList();
      updateSelectedBar();

    });

  });



  /* =========================
     大盛り解除
  ========================= */

  menuList.querySelectorAll(".cancel-large-btn").forEach(btn => {

    btn.addEventListener("click", (e) => {

      e.stopPropagation();

      const id = btn.dataset.id;

      const index = selectedFoods.findIndex(f =>
        f.baseId === id && f.isLarge
      );

      if (index === -1) return;


      const baseFood = findBaseMenuById(id);

      if (!baseFood) return;


      selectedFoods[index] = {
        ...baseFood,
        baseId: baseFood.id,
        isLarge: false
      };


      renderMenuList();
      updateSelectedBar();

    });

  });



  /* =========================
     大盛り追加
  ========================= */

  menuList.querySelectorAll(".add-large-btn").forEach(btn => {

    btn.addEventListener("click", (e) => {

      e.stopPropagation();

      const id = btn.dataset.id;


      const index = selectedFoods.findIndex(f =>
        f.baseId === id || f.id === id
      );

      if (index === -1) return;


      const baseFood = findBaseMenuById(id);

      if (!baseFood) return;


      const largeOption = getLargeOptionForFood(baseFood);

      if (!largeOption) return;


      selectedFoods[index] = {

        ...baseFood,

        baseId: baseFood.id,

        isLarge: true,

        name: `${baseFood.name} 大盛り`,

        price:
          baseFood.price +
          largeOption.price,

        energy_kcal:
          baseFood.energy_kcal +
          largeOption.energy_kcal,

        protein_g:
          baseFood.protein_g +
          largeOption.protein_g,

        fat_g:
          baseFood.fat_g +
          largeOption.fat_g,

        carb_g:
          baseFood.carb_g +
          largeOption.carb_g,

        salt_g:
          baseFood.salt_g +
          largeOption.salt_g

      };


      renderMenuList();
      updateSelectedBar();

    });

  });

}


/* =========================
   カードをタップ
   表 ⇔ 裏
========================= */
menuList.querySelectorAll(".menu-item").forEach(card => {

  card.addEventListener("click", (e) => {

    // ボタンを押した場合はカードを裏返さない
    if (e.target.closest("button")) {
      return;
    }

    // 選択済みでも栄養情報は見られるようにする
    card.classList.toggle("flipped");

  });

});


/* =========================
   詳細を見る
========================= */
menuList.querySelectorAll(".menu-back-detail-btn").forEach(btn => {

  btn.addEventListener("click", (e) => {

    e.stopPropagation();

    const id = btn.dataset.id;

    showDetail(id);

  });

});


/* =========================
   選択済みメニュー削除
========================= */
menuList.querySelectorAll(".remove-selected-btn").forEach(btn => {

  btn.addEventListener("click", (e) => {

    e.stopPropagation();

    const id = btn.dataset.id;

    selectedFoods = selectedFoods.filter(f =>
      f.baseId !== id && f.id !== id
    );

    renderMenuList();
    updateSelectedBar();

  });

});


/* =========================
   大盛り解除
========================= */
menuList.querySelectorAll(".cancel-large-btn").forEach(btn => {

  btn.addEventListener("click", (e) => {

    e.stopPropagation();

    const id = btn.dataset.id;

    const index = selectedFoods.findIndex(f =>
      f.baseId === id && f.isLarge
    );

    if (index === -1) return;

    const baseFood = findBaseMenuById(id);

    if (!baseFood) return;

    selectedFoods[index] = {
      ...baseFood,
      baseId: baseFood.id,
      isLarge: false
    };

    renderMenuList();
    updateSelectedBar();

  });

});


/* =========================
   大盛り追加
========================= */
menuList.querySelectorAll(".add-large-btn").forEach(btn => {

  btn.addEventListener("click", (e) => {

    e.stopPropagation();

    const id = btn.dataset.id;

    const index = selectedFoods.findIndex(f =>
      f.baseId === id || f.id === id
    );

    if (index === -1) return;

    const baseFood = findBaseMenuById(id);

    if (!baseFood) return;

    const largeOption = getLargeOptionForFood(baseFood);

    if (!largeOption) return;

    selectedFoods[index] = {
      ...baseFood,

      baseId: baseFood.id,

      isLarge: true,

      name: `${baseFood.name} 大盛り`,

      price:
        baseFood.price +
        largeOption.price,

      energy_kcal:
        baseFood.energy_kcal +
        largeOption.energy_kcal,

      protein_g:
        baseFood.protein_g +
        largeOption.protein_g,

      fat_g:
        baseFood.fat_g +
        largeOption.fat_g,

      carb_g:
        baseFood.carb_g +
        largeOption.carb_g,

      salt_g:
        baseFood.salt_g +
        largeOption.salt_g
    };

    renderMenuList();
    updateSelectedBar();

  });

});

/* =========================
選択中バーの表示更新
========================= */
function updateSelectedBar() {
  const selectedBar = document.getElementById("selectedBar");
  const selectedCount = document.getElementById("selectedCount");

  if (
    (selectedFoods.length === 0 && editingMealDate === null) ||
    menuMode !== "select"
  ) {
    selectedBar.style.display = "none";
    return;
  }
  selectedCount.textContent = `選択中 ${selectedFoods.length}品`;
  selectedBar.style.display = "flex";
}

renderTabs();
renderMenuList();
renderCafeteriaDateSelector();
updateSelectedBar();

/* =========================================================
メニュー詳細画面
========================================================= */
const NUTRITION_FIELDS = [
  { key: "energy_kcal", label: "エネルギー", unit: "kcal" },
  { key: "protein_g", label: "たんぱく質", unit: "g" },
  { key: "fat_g", label: "脂質", unit: "g" },
  { key: "carb_g", label: "炭水化物", unit: "g" },
  { key: "salt_g", label: "食塩相当量", unit: "g" }
];
function getDisplayFood() {
  let displayFood = { ...selectedFood };

  const largeOptionCheck = document.getElementById("largeOptionCheck");

  if (largeOptionCheck && largeOptionCheck.checked) {
    const largeOption = getLargeOptionForFood(selectedFood);

    if (largeOption) {
      displayFood = {
        ...displayFood,
        name: `${selectedFood.name} 大盛り`,
        price: selectedFood.price + largeOption.price,
        energy_kcal: selectedFood.energy_kcal + largeOption.energy_kcal,
        protein_g: selectedFood.protein_g + largeOption.protein_g,
        fat_g: selectedFood.fat_g + largeOption.fat_g,
        carb_g: selectedFood.carb_g + largeOption.carb_g,
        salt_g: selectedFood.salt_g + largeOption.salt_g
      };
    }
  }
  const soupOptionCheck = document.getElementById("soupOptionCheck");

  if (soupOptionCheck && soupOptionCheck.checked) {
    displayFood = {
      ...displayFood,
      isSoupLess: true,
      salt_g: displayFood.salt_g * soupSaltFactor(selectedFood)
    };
  }
  return displayFood;
}

function updateDetailNutritionAndChart() {
  const displayFood = getDisplayFood();
  const ideal = getIdealNutrition();

  document.getElementById("detailPrice").textContent =
    typeof displayFood.price === "number" &&
      Number.isFinite(displayFood.price)
      ? `¥${displayFood.price}`
      : "価格確認中";

  // =====================================
  // 13号館：栄養価が未登録の場合
  // =====================================
  if (
    activeBuilding === "13" &&
    !hasCompleteNutrition(displayFood)
  ) {

    // 栄養情報の代わりに案内を表示
    document.getElementById("nutritionGrid").innerHTML = `
      <div style="
        grid-column: 1 / -1;
        text-align: center;
        padding: 24px 16px;
        background: #fff8f2;
        border-radius: 12px;
      ">
        <div style="font-size: 30px; margin-bottom: 10px;">
          📊
        </div>
        <div style="font-weight: bold; margin-bottom: 8px;">
          栄養情報を準備中
        </div>
        <div style="font-size: 13px; color: #777;">
          このメニューの栄養価は現在確認中です。
        </div>
      </div>
    `;

    // 前の料理のレーダーチャートを削除
    if (radarChart) {
      radarChart.destroy();
      radarChart = null;
    }

    // グラフの表示領域を隠す
    const radarCanvas = document.getElementById("radarChart");
    if (radarCanvas) {
      radarCanvas.style.display = "none";
    }

    return;
  }

  // 栄養価が登録済みならレーダーチャートを表示
  const radarCanvas = document.getElementById("radarChart");
  if (radarCanvas) {
    radarCanvas.style.display = "block";
  }

  // ↓ この下は今までのコードをそのまま残す

  document.getElementById("nutritionGrid").innerHTML =
    NUTRITION_FIELDS.map(f => {
      const diff = displayFood[f.key] - ideal[f.key];
      const judgement = getNutritionJudgement(f.key, displayFood[f.key], ideal);
      const diffClass = judgement === "neutral" ? "diff-neutral" : judgement === "good" ? "diff-good" : judgement === "high" ? "diff-plus" : "diff-minus";
      const diffText =
        diff > 0
          ? `↑${diff.toFixed(1)}${f.unit}`
          : diff < 0
            ? `↓${Math.abs(diff).toFixed(1)}${f.unit}`
            : `±0.0${f.unit}`;

      return `
              <div class="nutrition-item is-${judgement}">
                <div class="n-label">${f.label}</div>

                <div class="nutrition-top">
                  <div class="n-value">
                    ${displayFood[f.key].toFixed(1)}<span class="n-unit">${f.unit}</span>
                  </div>

                  <div class="${diffClass}">
                    ${diffText}
                  </div>
                </div>

<div class="n-standard">
  ${ideal[f.key].toFixed(1)}${f.unit}
</div>
              </div>
              `;
    }).join("");

  if (radarChart) {
    radarChart.destroy();
  }

  const ctx = document.getElementById("radarChart");

  radarChart = new Chart(ctx, {
    type: "radar",
    data: {
      labels: RADAR_LABELS,
      datasets: [
        {
          label: "基準値",
          data: idealRadarData(),
          backgroundColor: "rgba(66,165,245,0.19)",
          borderColor: "rgba(33,150,243,0.95)",
          borderWidth: 1.5,
          borderDash: [5, 3],
          pointRadius: 0,
          pointHoverRadius: 0,
          fill: true
        },
        {
          label: displayFood.name,
          data: toRadarData(displayFood),
          borderColor: "#f4511e",
          backgroundColor: "rgba(255,87,34,0.11)",
          borderWidth: 3,
          pointRadius: 3,
          pointHoverRadius: 6,
          pointBackgroundColor: "#f4511e",
          pointBorderColor: "#ffffff",
          pointBorderWidth: 1.5,
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          min: 0,
          max: 10,
          ticks: {
            stepSize: 2
          }
        }
      }
    }
  });
}

function showDetail(itemId) {
  selectedFood = getActiveMenuData().items.find(i => i.id === itemId);
  if (!selectedFood) return;

  const existingSelectedFood = selectedFoods.find(f =>
    f.baseId === selectedFood.id || f.id === selectedFood.id
  );
  const alreadySelected = Boolean(existingSelectedFood);

  // 13号館：価格と栄養価がそろっているか確認
  const canRegisterFood =
    activeBuilding !== "13" ||
    (
      hasCompleteNutrition(selectedFood) &&
      typeof selectedFood.price === "number" &&
      Number.isFinite(selectedFood.price) &&
      selectedFood.price >= 0
    );

  // 選択済みなら変更と削除を横並びで表示する。
  const detailActionBtn = document.getElementById("registerBtn");
  const removeDetailBtn = document.getElementById("removeDetailBtn");
  const detailActionRow = document.getElementById("detailActionRow");
  detailActionBtn.textContent = alreadySelected ? "変更する" : "選択リストに追加";
  detailActionBtn.classList.remove("remove-mode");
  detailActionRow.classList.toggle("is-selected", alreadySelected);
  detailActionRow.style.display = menuMode === "select" && (alreadySelected || canRegisterFood) ? "flex" : "none";
  detailActionBtn.style.display = "block";
  removeDetailBtn.style.display = alreadySelected ? "block" : "none";

  // 13号館：未登録メニューの案内表示
  const registerNoticeId = "registerUnavailableNotice";
  let registerNotice = document.getElementById(registerNoticeId);

  if (!registerNotice) {
    registerNotice = document.createElement("div");
    registerNotice.id = registerNoticeId;

    registerNotice.style.cssText = `
    margin-top: 12px;
    padding: 12px 16px;
    background: #fff8f2;
    border: 1px solid #ffd9bd;
    border-radius: 10px;
    color: #a65a20;
    font-size: 13px;
    text-align: center;
    line-height: 1.6;
  `;

    document.getElementById("registerBtn")
      .insertAdjacentElement("afterend", registerNotice);
  }

  const showRegisterNotice =
    activeBuilding === "13" &&
    menuMode === "select" &&
    !alreadySelected &&
    !canRegisterFood;

  registerNotice.style.display =
    showRegisterNotice ? "block" : "none";

  if (showRegisterNotice) {
    registerNotice.textContent =
      "⚠️ 価格・栄養情報を確認中のため、現在このメニューは食事登録できません。";
  }

  const category = getActiveMenuData().categories.find(c => c.id === selectedFood.category);

  const largeOptionArea = document.getElementById("largeOptionArea");
  const largeOptionCheck = document.getElementById("largeOptionCheck");
  const soupOptionArea = document.getElementById("soupOptionArea");
  const soupOptionCheck = document.getElementById("soupOptionCheck");
  const largeOptionText = document.getElementById("largeOptionText");

  largeOptionCheck.checked = Boolean(existingSelectedFood?.isLarge);

  const largeOption = getLargeOptionForFood(selectedFood);

  if (
    menuMode === "select" &&
    largeOption
  ) {
    largeOptionArea.style.display = "block";
    largeOptionText.textContent = `+${largeOption.price}円 / +${largeOption.energy_kcal}kcal${activeBuilding === "13" ? "（2号館の値を仮使用）" : ""}`;
  } else {
    largeOptionArea.style.display = "none";
  }
  const canSoupMenu = canUseSoupOption(selectedFood);

  soupOptionArea.style.display = canSoupMenu ? "block" : "none";
  soupOptionCheck.checked = Boolean(existingSelectedFood?.isSoupLess);
  document.getElementById("soupOptionText").textContent =
    activeBuilding === "13"
      ? "※塩分約50%減（2号館と同じと仮定した推定値）"
      : `※塩分を約${Math.round((1-soupSaltFactor(selectedFood))*100)}%減として計算`;

  document.getElementById("selectMenuPage").style.display = "none";
  document.getElementById("detailPage").style.display = "block";

  /* 選択中の商品があればバーを表示 */
  updateSelectedBar();

  const detailHero = document.getElementById("detailHero");

  detailHero.innerHTML = `
<img src="${getMenuImagePath(selectedFood)}" alt="${selectedFood.name}"
  onerror="this.src='images/no-image.png'">
              `;
  document.getElementById("detailTitle").textContent = selectedFood.name;
  document.getElementById("detailCategory").textContent = selectedFood.category_label;
  document.getElementById("detailPrice").textContent = `¥${selectedFood.price}`;

  document.getElementById("detailTags").innerHTML =
    selectedFood.tags.map(t => `<span class="tag-badge">${TAG_LABELS[t] || t}</span>`).join("");

  updateDetailNutritionAndChart();

  largeOptionCheck.onchange = () => {
    updateDetailNutritionAndChart();
  };
  soupOptionCheck.onchange = () => {
    updateDetailNutritionAndChart();
  };

  window.scrollTo({
    top: 0,
    behavior: "auto"
  });
}

function makeTotalFood() {
  return {
    name: selectedFoods.map(f => f.name).join(" + "),
    price: selectedFoods.reduce((sum, f) => sum + f.price, 0),
    energy_kcal: selectedFoods.reduce((sum, f) => sum + f.energy_kcal, 0),
    protein_g: selectedFoods.reduce((sum, f) => sum + f.protein_g, 0),
    fat_g: selectedFoods.reduce((sum, f) => sum + f.fat_g, 0),
    carb_g: selectedFoods.reduce((sum, f) => sum + f.carb_g, 0),
    salt_g: selectedFoods.reduce((sum, f) => sum + f.salt_g, 0)

  };
}

// 数量を変更しても単価・栄養価の整合性を保つ
const FOOD_NUMERIC_FIELDS = ["price", "energy_kcal", "protein_g", "fat_g", "carb_g", "salt_g"];
function withFoodQuantity(food, nextQuantity) {
  const currentQuantity = Number.isInteger(food.quantity) && food.quantity > 0 ? food.quantity : 1;
  const quantity = Math.max(1, Math.min(10, nextQuantity));
  const updated = { ...food, quantity };
  FOOD_NUMERIC_FIELDS.forEach(key => {
    updated[key] = (Number(food[key]) || 0) / currentQuantity * quantity;
  });
  return updated;
}

function calcTotalFood(foodList) {
  return {
    name: foodList.map(f => f.name).join(" + "),
    price: foodList.reduce((sum, f) => sum + f.price, 0),
    energy_kcal: foodList.reduce((sum, f) => sum + f.energy_kcal, 0),
    protein_g: foodList.reduce((sum, f) => sum + f.protein_g, 0),
    fat_g: foodList.reduce((sum, f) => sum + f.fat_g, 0),
    carb_g: foodList.reduce((sum, f) => sum + f.carb_g, 0),
    salt_g: foodList.reduce((sum, f) => sum + f.salt_g, 0)
  };
}

function getNutritionAdvice(totalFood, ideal) {
  const advice = [];
  const ranges = getNutritionRanges();
  // エネルギーは差分のみ表示し、多い・少ないの健康判定をしない。
  for (const [field, label] of [["protein_g", "たんぱく質"], ["fat_g", "脂質"], ["carb_g", "炭水化物"]]) {
    const [min, max] = ranges[field];
    if (totalFood[field] < min) advice.push(`${label}が基準範囲より少なめです。`);
    if (totalFood[field] > max) advice.push(`${label}が基準範囲より多めです。`);
  }
  if (totalFood.salt_g > ideal.salt_g) advice.push("食塩相当量が昼食の基準値を超えています。");
  if (advice.length === 0) advice.push("たんぱく質・脂質・炭水化物・食塩相当量は設定した目標範囲内です。エネルギーは目標との差を確認してください。");
  return advice;
}

function renderConfirmModal() {
  const totalFood = makeTotalFood();
  const ideal = getIdealNutrition();

  document.getElementById("confirmModalContent").innerHTML = `
                <h3>選択したメニュー</h3>


${selectedFoods.length === 0 ? `
  <p style="
    padding: 14px;
    background: #fff3e7;
    border-radius: 10px;
    color: #a34b13;
    font-size: 14px;
  ">
    この日の食事をすべて削除します。<br>
    「変更を保存」を押すと、食事記録が0品になります。
  </p>
` : ""}

                <ul class="today-menu-list">
                  ${selectedFoods.map((f, index) => `
                  <li class="confirm-food-item">
                    <div class="confirm-food-name">
                      ${f.name}
                    </div>

                    <div class="confirm-food-actions">
                      ${(() => {
      const baseFood = findBaseMenuById(f.baseId || f.id);
      if (!getLargeOptionForFood(baseFood)) return "";
      return f.isLarge ? `
                      <button type="button" class="modal-cancel-large-btn" data-index="${index}">
                        大盛り解除
                      </button>` : `
                      <button type="button" class="modal-add-large-btn" data-index="${index}">
                        大盛り追加
                      </button>`;
    })()}

                      ${(() => {
      const baseFood = findBaseMenuById(f.baseId || f.id);
      return baseFood && ["udon", "ramen"].includes(baseFood.category) ? `
                        <button type="button" class="modal-toggle-soup-btn" data-index="${index}" aria-pressed="${Boolean(f.isSoupLess)}">
                          ${f.isSoupLess ? "スープを飲む" : "スープを飲まない"}
                        </button>` : "";
    })()}

                      <button type="button" class="remove-food-btn" data-index="${index}">
                        削除
                      </button>
                    </div>
                  </li>
                  `).join("")}
                </ul>

<h3>合計栄養</h3>

<div class="nutrition-column-header">
  <span>栄養素</span>
  <span>摂取量</span>
  <span>差分</span>
  <span>目標値</span>
</div>

<div class="nutrition-grid">
${NUTRITION_FIELDS.map(f => {
      const actual = totalFood[f.key];
      const target = ideal[f.key];
      const diff = actual - target;
      const ratio = target > 0 ? actual / target : 1;

      const diffClass =
        diff > 0 ? "diff-plus" :
          diff < 0 ? "diff-minus" : "diff-good";

      const diffText =
        diff > 0 ? `↑${diff.toFixed(1)}${f.unit}` :
          diff < 0 ? `↓${Math.abs(diff).toFixed(1)}${f.unit}` :
            `±0.0${f.unit}`;

      const judgement = getNutritionJudgement(f.key, actual, ideal);
      const nutritionState = `is-${judgement}`;
      const displayDiffClass = judgement === "neutral" ? "diff-neutral" : judgement === "good" ? "diff-good" : judgement === "high" ? "diff-plus" : "diff-minus";

      return `
    <div class="nutrition-item ${nutritionState}">
      <div class="n-label">${f.label}</div>

      <div class="nutrition-top">
        <div class="n-value">
          ${actual.toFixed(1)}
          <span class="n-unit">${f.unit}</span>
        </div>
        <span class="${displayDiffClass}">${diffText}</span>
      </div>

      <span class="n-standard">
        ${target.toFixed(1)}${f.unit}
      </span>
    </div>
  `;
    }).join("")}
                </div>
                `;

  document.querySelectorAll(".remove-food-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = Number(btn.dataset.index);

      selectedFoods.splice(index, 1);

      if (selectedFoods.length === 0 && editingMealDate === null) {
        document.getElementById("confirmModal").style.display = "none";
        renderMenuList();
        updateSelectedBar();
        return;
      }

      renderConfirmModal();
      renderConfirmRadarChart();
      renderMenuList();
      updateSelectedBar();
    });
  });

  // 確認画面でオプションを切り替える際は、必ず元メニューから再計算する。
  // これにより大盛りとスープなしの状態が互いに消えず、塩分も重複減算されない。
  function updateConfirmFoodOption(index, changes) {
    const current = selectedFoods[index];
    if (!current) return;
    const baseFood = findBaseMenuById(current.baseId || current.id);
    if (!baseFood) return;
    const isLarge = changes.isLarge ?? Boolean(current.isLarge);
    const isSoupLess = changes.isSoupLess ?? Boolean(current.isSoupLess);
    let updated = { ...baseFood, baseId: baseFood.id, isLarge: false, isSoupLess: false };
    if (isLarge) {
      const option = getLargeOptionForFood(baseFood);
      if (option) {
        updated = {
          ...updated, isLarge: true, name: `${baseFood.name} 大盛り`,
          price: baseFood.price + option.price,
          energy_kcal: baseFood.energy_kcal + option.energy_kcal,
          protein_g: baseFood.protein_g + option.protein_g,
          fat_g: baseFood.fat_g + option.fat_g,
          carb_g: baseFood.carb_g + option.carb_g,
          salt_g: baseFood.salt_g + option.salt_g
        };
      }
    }
    if (isSoupLess && canUseSoupOption(baseFood)) {
      updated = {
        ...updated, isSoupLess: true,
        name: `${updated.name}（スープなし）`,
        salt_g: updated.salt_g * soupSaltFactor(baseFood)
      };
    }
    selectedFoods[index] = updated;
    renderConfirmModal();
    renderConfirmRadarChart();
    renderMenuList();
    updateSelectedBar();
  }

  document.querySelectorAll(".modal-cancel-large-btn, .modal-add-large-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      updateConfirmFoodOption(Number(btn.dataset.index), {
        isLarge: btn.classList.contains("modal-add-large-btn")
      });
    });
  });

  document.querySelectorAll(".modal-toggle-soup-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = Number(btn.dataset.index);
      const food = selectedFoods[index];
      if (food) updateConfirmFoodOption(index, { isSoupLess: !food.isSoupLess });
    });
  });
}

function renderConfirmRadarChart() {
  const totalFood = makeTotalFood();

  if (confirmRadarChart) {
    confirmRadarChart.destroy();
  }

  const confirmCtx = document.getElementById("confirmRadarChart");

  confirmRadarChart = new Chart(confirmCtx, {
    type: "radar",
    data: {
      labels: RADAR_LABELS,
      datasets: [
        {
          label: "基準値",
          data: idealRadarData(),
          backgroundColor: "rgba(66,165,245,0.19)",
          borderColor: "rgba(33,150,243,0.95)",
          borderWidth: 1.5,
          borderDash: [5, 3],
          pointRadius: 0,
          pointHoverRadius: 0,
          fill: true
        },
        {
          label: "選択合計",
          data: toRadarData(totalFood),
          borderColor: "#f4511e",
          backgroundColor: "rgba(255,87,34,0.11)",
          borderWidth: 3,
          pointRadius: 3,
          pointHoverRadius: 6,
          pointBackgroundColor: "#f4511e",
          pointBorderColor: "#ffffff",
          pointBorderWidth: 1.5,
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          min: 0,
          max: 10,
          ticks: {
            stepSize: 2
          }
        }
      }
    }
  });
}
function loadTodayMealFromHistory() {
  // ★前のユーザーの食事データをリセット
  registeredFoods = [];
  registeredTotalFood = null;
  const todayKey = formatCafeteriaDate(new Date());
  const mealHistory = JSON.parse(
    storage.getItem(getUserKey("mealHistory")) || "{}"
  );

  if (!mealHistory[todayKey]) return;

  registeredFoods = mealHistory[todayKey].foods || [];
  registeredTotalFood = mealHistory[todayKey].total || null;
}
function saveTodayMealToHistory() {
  const todayKey = formatCafeteriaDate(new Date());
  const mealHistory = JSON.parse(
    storage.getItem(getUserKey("mealHistory")) || "{}"
  );

  if (registeredFoods.length === 0) {
    delete mealHistory[todayKey];
  } else {
    mealHistory[todayKey] = {
      date: todayKey,
      foods: registeredFoods,
      total: registeredTotalFood,
      nutritionTipId: mealHistory[todayKey]?.nutritionTipId || null
    };
  }

  storage.setItem(
    getUserKey("mealHistory"),
    JSON.stringify(mealHistory)
  );
}
function getLackingNutrients(totalFood, ideal) {
  const lacking = [];
  for (const [key, label] of [["protein_g", "たんぱく質"], ["fat_g", "脂質"], ["carb_g", "炭水化物"], ["energy_kcal", "エネルギー"]]) {
    if (getNutritionJudgement(key, totalFood[key], ideal) === "low") lacking.push(label);
  }
  return lacking;
}
function getRecommendFoods(lackingNutrients) {
  // 号館ごとに実際に提供するサイドメニューから候補を選ぶ。
  if (!registeredTotalFood) return [];

  const ideal = getIdealNutrition();
  const selected = registeredFoods;
  const registeredNames = new Set(selected.map(food => food.name));
  const mainCategories = new Set(["udon", "ramen", "teishoku", "don", "curry"]);
  const selectedMain = selected.filter(food => mainCategories.has(food.category));
  const hasRiceMain = selectedMain.some(food =>
    ["don", "curry", "teishoku"].includes(food.category) ||
    /ごはん|ライス|丼|定食|カレー|ハヤシ/.test(food.name)
  );
  const hasNoodleMain = selectedMain.some(food =>
    ["udon", "ramen"].includes(food.category)
  );
  const hasFriedMain = selectedMain.some(food =>
    /唐揚げ|から揚げ|カツ|かつ|とんかつ|天ぷら|天/.test(food.name)
  );

  const candidates = getActiveMenuData().items.filter(item =>
    item.category === "side" &&
    (activeBuilding !== "2" || isB2MenuVisible(item)) &&
    !(item.tags || []).includes("option") &&
    // 2号館では従来の候補条件を維持。13号館はライスMも対象。
    (activeBuilding !== "2" || !["side-04", "side-07"].includes(item.id)) &&
    !registeredNames.has(item.name) &&
    ["energy_kcal", "protein_g", "fat_g", "carb_g", "salt_g"]
      .every(key => Number.isFinite(Number(item[key])))
  );

  function nutritionScore(food) {
    // 不足の改善は評価し、目標超過はより強く減点する。
    const weights = { energy_kcal: 0.9, protein_g: 1.35, fat_g: 0.75, carb_g: 0.85 };
    let score = 0;
    for (const [key, weight] of Object.entries(weights)) {
      const target = Number(ideal[key]);
      if (!(target > 0)) continue;
      const before = Number(registeredTotalFood[key]) || 0;
      const after = before + Number(food[key]);
      const ranges = getNutritionRanges();
      const penalty = value => {
        const [min, max] = ranges[key] || [target - 100, target + 100];
        return Math.max(0, (min - value) / target) + 1.5 * Math.max(0, (value - max) / target);
      };
      score += weight * (penalty(before) - penalty(after));
    }
    const saltLimit = Number(ideal.salt_g);
    if (saltLimit > 0) {
      const before = Number(registeredTotalFood.salt_g) || 0;
      const after = before + Number(food.salt_g);
      score -= 1.8 * (Math.max(0, after / saltLimit - 1) - Math.max(0, before / saltLimit - 1));
    }
    return score;
  }

  function pairingScore(food) {
    // 禁止ではなく相性による加減点。麺＋少量のご飯は許容する。
    const id = food.id;
    const rice = ["side-04", "side-07", "b13-side-01"].includes(id);
    if (rice) {
      let score = hasRiceMain ? -0.55 : hasNoodleMain ? -0.12 : -0.06;
      if (id === "side-04" || id === "b13-side-01") score -= 0.12; // Mサイズは追加量が多い
      return score;
    }
    if (id === "side-06") return hasFriedMain ? -0.35 : 0.04;
    if (id === "side-03" || id === "b13-side-03") return hasRiceMain ? 0.01 : -0.08;
    if (id === "side-05") return 0.10; // 主菜に合わせやすいサラダ
    if (id === "side-01" || id === "b13-side-02") return hasNoodleMain ? -0.16 : 0.02; // 麺＋汁物の重複
    if (id === "side-02") return 0.05;
    return 0;
  }

  return candidates
    .map(food => {
      const nutrition = nutritionScore(food);
      const pairing = pairingScore(food);
      const pricePenalty = Math.max(0, Number(food.price) || 0) / 1000 * 0.10;
      return { food, nutrition, score: nutrition + pairing - pricePenalty };
    })
    // 栄養面が悪化する料理を、相性や安さだけで推薦しない。
    .filter(result => result.nutrition > 0 && result.score > 0)
    .sort((a, b) => b.score - a.score || a.food.price - b.food.price)
    .slice(0, 3)
    .map(result => result.food);
}

function showRecommendPreview(recommendFood) {
  if (!registeredTotalFood) return;

  const afterFood = {
    name: `${registeredTotalFood.name} + ${recommendFood.name}`,
    price: registeredTotalFood.price + recommendFood.price,
    energy_kcal: registeredTotalFood.energy_kcal + recommendFood.energy_kcal,
    protein_g: registeredTotalFood.protein_g + recommendFood.protein_g,
    fat_g: registeredTotalFood.fat_g + recommendFood.fat_g,
    carb_g: registeredTotalFood.carb_g + recommendFood.carb_g,
    salt_g: registeredTotalFood.salt_g + recommendFood.salt_g
  };

  showRecommendModal(recommendFood, afterFood);
}

function showRecommendModal(recommendFood, afterFood) {
  pendingRecommendFood = recommendFood;

  const modal = document.getElementById("recommendModal");
  const title = document.getElementById("recommendModalTitle");
  const compareText = document.getElementById("recommendCompareText");

  title.textContent = `${recommendFood.name}を追加すると`;

  // 本日の食事・確認画面と同じ、見出し付きの行表示に統一
  compareText.innerHTML = `
    <div class="recommend-nutrition-table">
      <div class="recommend-nutrition-header">
        <span>栄養素</span><span>追加前</span><span>追加後</span>
      </div>
      <div class="recommend-nutrition-rows">
        ${NUTRITION_FIELDS.map(f => `
          <div class="recommend-nutrition-row">
            <span class="recommend-nutrition-label">${f.label}</span>
            <span class="recommend-nutrition-value">${registeredTotalFood[f.key].toFixed(1)}<small>${f.unit}</small></span>
            <span class="recommend-nutrition-value recommend-nutrition-after">${afterFood[f.key].toFixed(1)}<small>${f.unit}</small></span>
          </div>
        `).join("")}
      </div>
    </div>
  `;

  modal.style.display = "flex";

  const ctx = document.getElementById("recommendRadarChart").getContext("2d");

  if (recommendRadarChart) {
    recommendRadarChart.destroy();
  }

  recommendRadarChart = new Chart(ctx, {
    type: "radar",
    data: {
      labels: RADAR_LABELS,
      datasets: [
        {
          label: "基準値",
          data: idealRadarData(),
          backgroundColor: "rgba(66,165,245,0.19)",
          borderColor: "rgba(33,150,243,0.95)",
          borderWidth: 1.5,
          borderDash: [5, 3],
          pointRadius: 0,
          pointHoverRadius: 0,
          fill: true
        },
        {
          label: "現在",
          data: toRadarData(registeredTotalFood),
          backgroundColor: "rgba(120,120,120,0.015)",
          borderColor: "rgba(95,95,95,0.85)",
          borderWidth: 1.5,
          borderDash: [],
          pointRadius: 2,
          pointHoverRadius: 3,
          fill: true
        },
        {
          label: "追加後",
          data: toRadarData(afterFood),
          borderColor: "#f4511e",
          backgroundColor: "rgba(255,87,34,0.11)",
          borderWidth: 3,
          pointRadius: 3,
          pointHoverRadius: 6,
          pointBackgroundColor: "#f4511e",
          pointBorderColor: "#ffffff",
          pointBorderWidth: 1.5,
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 800
      },
      scales: {
        r: {
          min: 0,
          max: 10,
          ticks: {
            stepSize: 2
          }
        }
      }
    }
  });
}

document.getElementById("cancelRecommendBtn").addEventListener("click", () => {
  document.getElementById("recommendModal").style.display = "none";
  pendingRecommendFood = null;
});

document.getElementById("addRecommendBtn").addEventListener("click", () => {
  if (!pendingRecommendFood) return;

  registeredFoods.push({
    ...pendingRecommendFood,
    baseId: pendingRecommendFood.id,
    isLarge: false
  });

  registeredTotalFood = registeredFoods.reduce((total, food) => {
    return {
      name: "本日の合計",
      price: total.price + food.price,
      energy_kcal: total.energy_kcal + food.energy_kcal,
      protein_g: total.protein_g + food.protein_g,
      fat_g: total.fat_g + food.fat_g,
      carb_g: total.carb_g + food.carb_g,
      salt_g: total.salt_g + food.salt_g
    };
  }, {
    name: "本日の合計",
    price: 0,
    energy_kcal: 0,
    protein_g: 0,
    fat_g: 0,
    carb_g: 0,
    salt_g: 0
  });

  saveTodayMealToHistory();
  const tip = advanceNutritionTip();
  const tipHistory = JSON.parse(storage.getItem(getUserKey("mealHistory")) || "{}");
  const tipDate = formatCafeteriaDate(new Date());
  if (tipHistory[tipDate]) {
    tipHistory[tipDate].nutritionTipId = tip.id;
    storage.setItem(getUserKey("mealHistory"), JSON.stringify(tipHistory));
  }
  renderTodayPage();

  document.getElementById("recommendModal").style.display = "none";
  pendingRecommendFood = null;
});


/* =========================
   栄養豆知識（25件・重複なし）
   出典の管理は元Excelで行う
========================= */
const NUTRITION_TIPS = [
  {
    "id": "ENE-001",
    "category": "エネルギー",
    "title": "脂質1gは約9kcal！",
    "body": "脂質は1gあたり約9kcal。たんぱく質と炭水化物は、それぞれ約4kcalなんだ。"
  },
  {
    "id": "ENE-002",
    "category": "エネルギー",
    "title": "3つの栄養素がエネルギー源",
    "body": "たんぱく質・脂質・炭水化物は、食事からエネルギーを得るうえで中心となる栄養素なんだ。"
  },
  {
    "id": "ENE-003",
    "category": "エネルギー",
    "title": "食物繊維にもエネルギーがある？",
    "body": "食物繊維は、エネルギー計算で1gあたり約2kcalとして扱われることがあるんだ。"
  },
  {
    "id": "ENE-004",
    "category": "エネルギー",
    "title": "じっとしていてもエネルギーを使う",
    "body": "身体は安静にしているときもエネルギーを消費するよ。これを基礎代謝というんだ。"
  },
  {
    "id": "ENE-005",
    "category": "エネルギー",
    "title": "食べるだけでもエネルギーを消費する！？",
    "body": "食事をすると、消化・吸収などのためにもエネルギーが使われるんだ。これを「食事誘発性熱産生」というよ！"
  },
  {
    "id": "PRO-001",
    "category": "タンパク質",
    "title": "筋肉だけじゃない！",
    "body": "たんぱく質は筋肉だけでなく、皮膚・臓器・髪など、身体のさまざまな部分の材料になるんだ。"
  },
  {
    "id": "PRO-002",
    "category": "タンパク質",
    "title": "酵素やホルモンにも関係！",
    "body": "たんぱく質は、身体の働きを調整する酵素やホルモンなどの成分にもなるんだ。"
  },
  {
    "id": "PRO-003",
    "category": "タンパク質",
    "title": "アミノ酸がつながってできる",
    "body": "たんぱく質は、アミノ酸がたくさん結びついてできているんだ。"
  },
  {
    "id": "PRO-004",
    "category": "タンパク質",
    "title": "タンパク質は、量が同じでも中身が違う！？",
    "body": "食品によってアミノ酸の種類や割合が違うため、身体での利用されやすさにも違いがあるんだ！"
  },
  {
    "id": "PRO-005",
    "category": "タンパク質",
    "title": "身体で作れないアミノ酸がある！？",
    "body": "タンパク質の材料になるアミノ酸のうち、9種類は身体で十分に作れないため、食事から摂る必要があるんだ。これを「必須アミノ酸」というよ！"
  },
  {
    "id": "FAT-001",
    "category": "脂質",
    "title": "脂質は細胞膜の材料！",
    "body": "脂質はエネルギー源になるだけでなく、細胞膜を構成する材料にもなるんだ。"
  },
  {
    "id": "FAT-002",
    "category": "脂質",
    "title": "脂質には種類がある",
    "body": "脂肪酸には、飽和脂肪酸や不飽和脂肪酸など、構造の違う種類があるんだ。"
  },
  {
    "id": "FAT-003",
    "category": "脂質",
    "title": "脂質は炭水化物の2倍以上のエネルギーを持っている！？",
    "body": "脂質1gは約9kcal、炭水化物1gは約4kcal。同じ重さでも、脂質には約2.25倍のエネルギーがあるんだ！"
  },
  {
    "id": "FAT-004",
    "category": "脂質",
    "title": "体内で作れない脂肪酸がある",
    "body": "脂肪酸の中には、体内で十分に作れず、食事から摂る必要がある「必須脂肪酸」があるんだ。"
  },
  {
    "id": "FAT-005",
    "category": "脂質",
    "title": "脂質は量だけでなく質も大切",
    "body": "脂質を考えるときは、合計量だけでなく、どんな脂肪酸が含まれるかにも注目するんだ。"
  },
  {
    "id": "CAR-001",
    "category": "炭水化物",
    "title": "炭水化物と糖質は同じ？",
    "body": "炭水化物は、大きく分けると糖質と食物繊維に分けられるんだ。"
  },
  {
    "id": "CAR-002",
    "category": "炭水化物",
    "title": "脳はブドウ糖を使って働いている！？",
    "body": "脳はブドウ糖を重要なエネルギー源として利用しているんだ。ただし、状況によってはケトン体なども利用するよ。"
  },
  {
    "id": "CAR-003",
    "category": "炭水化物",
    "title": "食物繊維は消化されにくい",
    "body": "食物繊維は、人の消化酵素では分解されにくい成分なんだ。"
  },
  {
    "id": "CAR-004",
    "category": "炭水化物",
    "title": "でんぷんも糖質の仲間",
    "body": "ごはんなどに含まれるでんぷんは、糖質のうち「多糖類」に分類されるんだ。"
  },
  {
    "id": "CAR-005",
    "category": "炭水化物",
    "title": "炭水化物の目標は割合で示される",
    "body": "食事摂取基準では、炭水化物の目標量は1日の総エネルギーに占める割合で示されているんだ。"
  },
  {
    "id": "SAL-001",
    "category": "食塩相当量",
    "title": "ナトリウムは必要なミネラル",
    "body": "ナトリウムは、身体の水分バランスなどを調整する働きがあるミネラルなんだ。"
  },
  {
    "id": "SAL-002",
    "category": "食塩相当量",
    "title": "酸味を利用すると、塩が少なくてもおいしく感じる！？",
    "body": "レモンやお酢などの酸味を活用すると、食塩を減らしても味の物足りなさを補えることがあるんだ。減塩は、ただ味を薄くするだけじゃないんだね！"
  },
  {
    "id": "SAL-003",
    "category": "食塩相当量",
    "title": "ナトリウム1gは、食塩1gじゃない！？",
    "body": "ナトリウム1gを食塩相当量に換算すると、約2.54gになるんだ。名前は似ていても、数値は同じじゃないんだね！"
  },
  {
    "id": "SAL-004",
    "category": "食塩相当量",
    "title": "カリウムは、ナトリウムの排出に関係している！？",
    "body": "野菜や果物などに含まれるカリウムには、腎臓からのナトリウム排出を促す働きがあるんだ。ただし、塩分の摂りすぎを帳消しにできるわけではないよ。"
  },
  {
    "id": "SAL-005",
    "category": "食塩相当量",
    "title": "食塩の目標量は1日単位",
    "body": "食事摂取基準の食塩相当量の目標量は、成人男性7.5g未満・成人女性6.5g未満の1日当たりの値なんだ。"
  }
];
function getTipState() {
  try {
    const value = JSON.parse(storage.getItem(getUserKey("nutritionTipState")) || "{}");
    return {
      remaining: Array.isArray(value.remaining) ? value.remaining.filter(id => NUTRITION_TIPS.some(t => t.id === id)) : [],
      current: NUTRITION_TIPS.some(t => t.id === value.current) ? value.current : null
    };
  } catch (_) {
    return { remaining: [], current: null };
  }
}
function getCurrentNutritionTip() {
  const state = getTipState();
  return NUTRITION_TIPS.find(t => t.id === state.current) || null;
}
function advanceNutritionTip() {
  const state = getTipState();
  let remaining = state.remaining.slice();
  if (remaining.length === 0) {
    remaining = NUTRITION_TIPS.map(t => t.id);
    // Fisher-Yates shuffle
    for (let i = remaining.length - 1; i > 0; i--) {
      const k = Math.floor(Math.random() * (i + 1));
      [remaining[i], remaining[k]] = [remaining[k], remaining[i]];
    }
    // 次の一巡の最初が、前の一巡の最後と重ならないようにする
    if (remaining.length > 1 && remaining[0] === state.current) {
      [remaining[0], remaining[1]] = [remaining[1], remaining[0]];
    }
  }
  const current = remaining.shift();
  storage.setItem(getUserKey("nutritionTipState"), JSON.stringify({ remaining, current }));
  return NUTRITION_TIPS.find(t => t.id === current);
}
function nutritionTipMarkup(tip, history = false) {
  if (!tip) return '<p class="nutrition-tip-empty">次の食事登録から豆知識が表示されます。</p>';
  return `
    <div class="nutrition-tip-category">${tip.category}</div>
    <div class="nutrition-tip-title">${tip.title}</div>
    <p class="nutrition-tip-body">${tip.body}</p>
    ${history ? '' : '<button type="button" id="nextNutritionTipBtn" class="nutrition-tip-next">🔄 別の豆知識を見る</button>'}
  `;
}
function attachNutritionTipButton() {
  const btn = document.getElementById("nextNutritionTipBtn");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const tip = advanceNutritionTip();
    const todayKey = formatCafeteriaDate(new Date());
    const history = JSON.parse(storage.getItem(getUserKey("mealHistory")) || "{}");
    if (history[todayKey]) {
      history[todayKey].nutritionTipId = tip.id;
      storage.setItem(getUserKey("mealHistory"), JSON.stringify(history));
    }
    renderTodayPage();
  });
}

function renderTodayPage() {
  const todayFood = document.getElementById("todayFood");

  if (!registeredTotalFood || registeredFoods.length === 0) {
    todayFood.innerHTML = `
                  <div class="today-empty-state">

                    <div class="today-empty-icon">
                      🍽️
                    </div>

                    <div class="today-empty-title">
                      まだ食事が登録されていません
                    </div>

                    <div class="today-empty-text">
                      メニュー画面から今日食べたものを<br>
                      登録してみましょう
                    </div>

                  </div>
                  `;

    return;
  }

  const totalFood = registeredTotalFood;
  const ideal = getIdealNutrition();
  const lackingNutrients = getLackingNutrients(totalFood, ideal);
  const recommendFoods = getRecommendFoods(lackingNutrients);
  const showExtraRecommendations = activeBuilding === "2" || activeBuilding === "13";

  todayFood.innerHTML = `
                  <div class="today-card">

                    <!-- =========================
         今日食べたメニュー
    ========================== -->
                    <section class="today-section today-meal-section">

                      <div class="today-section-title">

                        <div>
                          <span class="today-section-icon">🍽️</span>
                          <span>今日食べたメニュー</span>
                        </div>

                        <span class="today-food-count">
                          ${registeredFoods.reduce((sum, f) => sum + (f.quantity || 1), 0)}品
                        </span>

                      </div>

                      <ul class="today-menu-list">

                        ${registeredFoods.map((food, index) => {
    const baseId = food.baseId || food.id;

    const baseFood = findBaseMenuById(baseId);

    const category = baseFood
      ? baseFood.category
      : food.category;

    const imageId = baseFood
      ? baseFood.id
      : baseId;

    const canLargeMenu = Boolean(getLargeOptionForFood(baseFood));

    const canSoupMenu =
      baseFood &&
      canUseSoupOption(baseFood);

    return `
                        <li class="today-food-item">

                          <div class="today-food-image-area">
<img class="today-food-image" src="${getMenuImagePath({ ...food, id: baseId, category })}" alt="${food.name}"
                              loading="lazy" onerror="
                    this.onerror = null;
                    this.src = 'images/no-image.png';
                  ">

                          </div>

                          <div class="today-food-content">

                            <div class="today-food-name">
                              ${food.name}
                            </div>

                            <div class="today-quantity-controls" aria-label="数量変更">
                              <span class="today-quantity-label">数量</span>
                              <button type="button" class="today-quantity-minus" data-index="${index}" aria-label="数量を減らす" ${(food.quantity || 1) <= 1 ? "disabled" : ""}>−</button>
                              <strong>${food.quantity || 1}</strong>
                              <button type="button" class="today-quantity-plus" data-index="${index}" aria-label="数量を増やす" ${(food.quantity || 1) >= 10 ? "disabled" : ""}>＋</button>
                            </div>

                            <div class="today-food-meta">

                              <span class="today-food-price">
                                ¥${food.price}
                              </span>

                              <span class="today-food-kcal">
                                ${Math.round(food.energy_kcal)} kcal
                              </span>

                            </div>

                            ${food.isLarge ? `
                            <span class="today-food-option">
                              大盛り
                            </span>
                            ` : ""}

                            ${food.isSoupLess ? `
                            <span class="today-food-option">
                              スープなし
                            </span>
                            ` : ""}

                          </div>

<!-- メニュー評価 -->
<div class="meal-rating" data-index="${index}">

  <div class="meal-rating-title">
    このメニューを評価
  </div>

<!-- 味 -->
<div class="meal-scale-block">

  <div class="meal-rating-label">
    味
  </div>

  <div class="meal-scale-options"
    data-rating-type="taste">

    <button type="button"
      class="meal-scale-option"
      data-value="1">
      とてもおいしくない
    </button>

    <button type="button"
      class="meal-scale-option"
      data-value="2">
      おいしくない
    </button>

    <button type="button"
      class="meal-scale-option"
      data-value="3">
      普通
    </button>

    <button type="button"
      class="meal-scale-option"
      data-value="4">
      おいしい
    </button>

    <button type="button"
      class="meal-scale-option"
      data-value="5">
      とてもおいしい
    </button>

  </div>

</div>

  <!-- 味の濃さ -->
  <div class="meal-scale-block">

    <div class="meal-rating-label">
      味の濃さ
    </div>

    <div class="meal-scale-options"
      data-rating-type="strength">

      <button type="button"
        class="meal-scale-option"
        data-value="1">
        薄すぎる
      </button>

      <button type="button"
        class="meal-scale-option"
        data-value="2">
        薄い
      </button>

      <button type="button"
        class="meal-scale-option"
        data-value="3">
        ちょうどいい
      </button>

      <button type="button"
        class="meal-scale-option"
        data-value="4">
        濃い
      </button>

      <button type="button"
        class="meal-scale-option"
        data-value="5">
        濃すぎる
      </button>

    </div>

  </div>


  <!-- 量 -->
  <div class="meal-scale-block">

    <div class="meal-rating-label">
      量
    </div>

    <div class="meal-scale-options"
      data-rating-type="amount">

      <button type="button"
        class="meal-scale-option"
        data-value="1">
        少なすぎる
      </button>

      <button type="button"
        class="meal-scale-option"
        data-value="2">
        少ない
      </button>

      <button type="button"
        class="meal-scale-option"
        data-value="3">
        ちょうどいい
      </button>

      <button type="button"
        class="meal-scale-option"
        data-value="4">
        多い
      </button>

      <button type="button"
        class="meal-scale-option"
        data-value="5">
        多すぎる
      </button>

    </div>

  </div>


 <!-- 価格 -->
<div class="meal-scale-block">

  <div class="meal-rating-label">
    料理の内容に対して価格をどう感じましたか？
  </div>

  <div class="meal-scale-options"
    data-rating-type="price">

    <button type="button"
      class="meal-scale-option"
      data-value="1">
      とても高い
    </button>

    <button type="button"
      class="meal-scale-option"
      data-value="2">
      高い
    </button>

    <button type="button"
      class="meal-scale-option"
      data-value="3">
      妥当
    </button>

    <button type="button"
      class="meal-scale-option"
      data-value="4">
      安い
    </button>

    <button type="button"
      class="meal-scale-option"
      data-value="5">
      とても安い
    </button>

  </div>

</div>

  <!-- コメント -->
  <div class="meal-comment-block">

    <label>
      感想・コメント
      <span>任意</span>
    </label>

    <textarea
      class="meal-comment"
      data-index="${index}"
      placeholder="このメニューについて感想があれば入力してください"
    ></textarea>

  </div>

  <div class="meal-rating-submit-area">

  <button
    type="button"
    class="meal-rating-submit-btn"
    data-index="${index}">
    この内容で送信
  </button>

</div>

</div>

                          <div class="today-food-actions">

                            ${canLargeMenu ? (
        food.isLarge ? `
                            <button type="button" class="today-cancel-large-btn" data-index="${index}">
                              大盛り解除
                            </button>
                            ` : `
                            <button type="button" class="today-add-large-btn" data-index="${index}">
                              大盛り追加
                            </button>
                            `
      ) : ""}

                            ${canSoupMenu ? (
        food.isSoupLess ? `
                            <button type="button" class="today-cancel-soup-btn" data-index="${index}">
                              スープあり
                            </button>
                            ` : `
                            <button type="button" class="today-soup-btn" data-index="${index}">
                              スープなし
                            </button>
                            `
      ) : ""}

                            <button type="button" class="today-remove-btn" data-index="${index}">
                              削除
                            </button>

                          </div>

                        </li>
                        `;
  }).join("")}

                      </ul>

                      <div class="today-summary">

                        <span>
                          合計金額
                        </span>

                        <strong>
                          ¥${totalFood.price}
                        </strong>

                      </div>

                    </section>


                    <!-- =========================
         栄養バランス
    ========================== -->
                    <section class="today-section">

                      <div class="today-section-title">

                        <div>
                          <span class="today-section-icon">📊</span>
                          <span>今日の栄養バランス</span>
                        </div>

                      </div>

                      <p class="today-section-description">
                        青色は栄養素の目標量（食塩相当量は上限の目安）、オレンジ色は今日の摂取量を示しています。
                      </p>

                      <div class="chart-area">
                        <canvas id="todayRadarChart"></canvas>
                      </div>

                    </section>

                    <!-- =========================
         栄養数値
    ========================== -->
                    <section class="today-section">

                      <div class="today-section-title">

                        <div>
                          <span class="today-section-icon">📋</span>
                          <span>栄養成分の詳細</span>
                        </div>

                      </div>

  <!-- 栄養成分の見出し -->
<div class="nutrition-column-header">
  <span>栄養素</span>
  <span>摂取量</span>
  <span>差分</span>
  <span>目標値</span>
</div>

<div class="nutrition-grid">

                        ${NUTRITION_FIELDS.map(field => {
    const actualValue = totalFood[field.key];
    const idealValue = ideal[field.key];
    const diff = actualValue - idealValue;

    const ratio = actualValue / idealValue;

    let nutritionState = "is-good";
    let diffClass = "diff-good";
    let diffText = "±0.0";

    if (diff > 0) {
      diffClass = "diff-plus";
      diffText = `↑${diff.toFixed(1)}${field.unit}`;
    } else if (diff < 0) {
      diffClass = "diff-minus";
      diffText = `↓${Math.abs(diff).toFixed(1)}${field.unit}`;
    } else {
      diffClass = "diff-good";
      diffText = `±0.0${field.unit}`;
    }

    const judgement = getNutritionJudgement(field.key, actualValue, ideal);
    nutritionState = `is-${judgement}`;
    diffClass = judgement === "neutral" ? "diff-neutral" : judgement === "good" ? "diff-good" : judgement === "high" ? "diff-plus" : "diff-minus";

    return `
                          <div class="nutrition-item ${nutritionState}">

                            <div class="n-label">
                              ${field.label}
                            </div>

                            <div class="nutrition-top">

                              <div class="n-value">
                                ${actualValue.toFixed(1)}
                                <span class="n-unit">
                                  ${field.unit}
                                </span>
                              </div>

                              <span class="${diffClass}">
                                ${diffText}
                              </span>

                            </div>

<span class="n-standard">
  ${idealValue.toFixed(1)}${field.unit}
</span>

                          </div>
                          `;
  }).join("")}

                      </div>

                    </section>

                    <!-- =========================
         不足している栄養素
    ========================== -->
                    <section class="today-section">

                      <div class="today-section-title">

                        <div>
                          <span class="today-section-icon">🥗</span>
                          <span>不足している栄養素</span>
                        </div>

                      </div>

                      <div class="lacking-list">

                        ${lackingNutrients.length > 0
      ? lackingNutrients.map(nutrient => `
                        <div class="lacking-item">
                          <span class="lacking-dot"></span>
                          <span>${nutrient}</span>
                        </div>
                        `).join("")
      : `
                        <div class="lacking-good">
                          🎉 大きな不足はありません
                        </div>
                        `
    }

                      </div>

                    </section>

                    <!-- =========================
         おすすめ追加メニュー
    ========================== -->
                    ${showExtraRecommendations ? `
                    <section class="today-section">

                      <div class="today-section-title">

                        <div>
                          <span class="today-section-icon">🍳</span>
                          <span>おすすめ追加メニュー</span>
                        </div>

                      </div>

                      <div class="recommend-food-list">

                        ${recommendFoods.length > 0
        ? recommendFoods.map(food => `
                        <button type="button" class="recommend-food-btn" data-id="${food.id}">

                          <span class="recommend-food-name">
                            ${food.name}
                          </span>

                          <span class="recommend-food-info">
                            ¥${food.price}
                            ・
                            ${food.energy_kcal}kcal
                          </span>

                          <span class="recommend-food-arrow">
                            ›
                          </span>

                        </button>
                        `).join("")
        : `
                        <div class="recommend-empty">
                          現在おすすめできるメニューはありません
                        </div>
                        `
      }

                      </div>

                      <button type="button" id="openSideMenuBtn" class="side-menu-link-btn">
                        サイドメニュー一覧を見る <span aria-hidden="true">›</span>
                      </button>
                    </section>
                    ` : ""}

                    <!-- =========================
         栄養コメント
    ========================== -->
                    <section class="today-section">

                      <div class="today-section-title">

                        <div>
                          <span class="today-section-icon">💡</span>
                          <span>今日の栄養豆知識</span>
                        </div>

                      </div>

                      <div class="nutrition-tip-box">
                        ${nutritionTipMarkup(getCurrentNutritionTip() || advanceNutritionTip())}
                      </div>

                    </section>
                  </div>
                  `;

  attachNutritionTipButton();

  if (todayRadarChart) {
    todayRadarChart.destroy();
    todayRadarChart = null;
  }

  requestAnimationFrame(() => {
    const todayCtx = document.getElementById("todayRadarChart");
    if (!todayCtx || typeof Chart === "undefined") return;

    todayRadarChart = new Chart(todayCtx, {
      type: "radar",
      data: {
        labels: RADAR_LABELS,
        datasets: [
          {
          label: "基準値",
          data: idealRadarData(),
          backgroundColor: "rgba(66,165,245,0.19)",
          borderColor: "rgba(33,150,243,0.95)",
          borderWidth: 1.5,
          borderDash: [5, 3],
          pointRadius: 0,
          pointHoverRadius: 0,
          fill: true
        },
          {
          label: "本日の合計",
          data: toRadarData(totalFood),
          borderColor: "#f4511e",
          backgroundColor: "rgba(255,87,34,0.11)",
          borderWidth: 3,
          pointRadius: 3,
          pointHoverRadius: 6,
          pointBackgroundColor: "#f4511e",
          pointBorderColor: "#ffffff",
          pointBorderWidth: 1.5,
          fill: true
        }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            min: 0,
            max: 10,
            ticks: {
              stepSize: 2
            }
          }
        }
      }
    });

    todayRadarChart.resize();
  });

  // 本日の食事画面だけで数量を変更。豆知識は更新しない。
  ["minus", "plus"].forEach(direction => {
    document.querySelectorAll(`.today-quantity-${direction}`).forEach(btn => {
      btn.addEventListener("click", () => {
        const index = Number(btn.dataset.index);
        const food = registeredFoods[index];
        if (!food) return;
        const current = food.quantity || 1;
        const next = current + (direction === "plus" ? 1 : -1);
        if (next < 1 || next > 10) return;
        registeredFoods[index] = withFoodQuantity(food, next);
        registeredTotalFood = calcTotalFood(registeredFoods);
        saveTodayMealToHistory();
        renderTodayPage();
      });
    });
  });

  document.querySelectorAll(".today-remove-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = Number(btn.dataset.index);

      registeredFoods.splice(index, 1);

      if (registeredFoods.length === 0) {
        registeredTotalFood = null;
        saveTodayMealToHistory();
        renderTodayPage();
        return;
      }

      registeredTotalFood = calcTotalFood(registeredFoods);

      saveTodayMealToHistory();

      renderTodayPage();
    });
  });
  document.querySelectorAll(".today-add-large-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = Number(btn.dataset.index);
      const food = registeredFoods[index];

      if (!food) return;

      const baseId = food.baseId || food.id;
      const baseFood = findBaseMenuById(baseId);
      if (!baseFood) return;

      const largeOption = getLargeOptionForFood(baseFood);

      if (!largeOption) return;

      const quantity = food.quantity || 1;
      const updated = {
        ...food, isLarge: true,
        name: `${baseFood.name} 大盛り${food.isSoupLess ? "（スープなし）" : ""}`
      };
      FOOD_NUMERIC_FIELDS.forEach(key => {
        updated[key] = (Number(food[key]) || 0) + (Number(largeOption[key]) || 0) * quantity;
      });
      if (food.isSoupLess) updated.salt_g -= (Number(largeOption.salt_g) || 0) * quantity * soupSaltFactor(baseFood);
      registeredFoods[index] = updated;

      registeredTotalFood = calcTotalFood(registeredFoods);
      saveTodayMealToHistory();
      renderTodayPage();
    });
  });

  document.querySelectorAll(".today-cancel-large-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = Number(btn.dataset.index);
      const food = registeredFoods[index];

      if (!food) return;

      const baseId = food.baseId || food.id;
      const baseFood = findBaseMenuById(baseId);
      if (!baseFood) return;

      const largeOption = getLargeOptionForFood(baseFood);
      if (!largeOption) return;
      const quantity = food.quantity || 1;
      const updated = {
        ...food, isLarge: false,
        name: `${baseFood.name}${food.isSoupLess ? "（スープなし）" : ""}`
      };
      FOOD_NUMERIC_FIELDS.forEach(key => {
        updated[key] = (Number(food[key]) || 0) - (Number(largeOption[key]) || 0) * quantity;
      });
      if (food.isSoupLess) updated.salt_g += (Number(largeOption.salt_g) || 0) * quantity * soupSaltFactor(baseFood);
      registeredFoods[index] = updated;

      registeredTotalFood = calcTotalFood(registeredFoods);
      saveTodayMealToHistory();
      renderTodayPage();
    });
  });
  document.querySelectorAll(".today-soup-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = Number(btn.dataset.index);
      const food = registeredFoods[index];

      if (!food) return;

      registeredFoods[index] = {
        ...food,
        isSoupLess: true,
        name: food.name.includes("（スープなし）")
          ? food.name
          : `${food.name}（スープなし）`,
        salt_g: food.salt_g * soupSaltFactor(findBaseMenuById(food.baseId || food.id))
      };

      registeredTotalFood = calcTotalFood(registeredFoods);
      saveTodayMealToHistory();
      renderTodayPage();
    });
  });

  document.querySelectorAll(".today-cancel-soup-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = Number(btn.dataset.index);
      const food = registeredFoods[index];

      if (!food) return;

      const baseId = food.baseId || food.id;
      const baseFood = findBaseMenuById(baseId);
      if (!baseFood) return;

      registeredFoods[index] = {
        ...food,
        isSoupLess: false,
        name: `${baseFood.name}${food.isLarge ? " 大盛り" : ""}`,
        salt_g: food.salt_g / Math.max(0.001,soupSaltFactor(baseFood))
      };

      registeredTotalFood = calcTotalFood(registeredFoods);
      saveTodayMealToHistory();
      renderTodayPage();
    });
  });
  document.getElementById("openSideMenuBtn")?.addEventListener("click", () => {
    // 号館を切り替えず、現在選択中の号館のサイドメニューを開く。
    document.querySelectorAll(".cafeteria-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.building === activeBuilding);
    });
    activeCategory = "side";
    menuMode = "select";
    renderTabs();
    renderMenuList();
    renderCafeteriaDateSelector();
    showPage(menuPage, menuTab);
    updateSelectedBar();
    updateHistoryEditButton();
  });
  document.querySelectorAll(".recommend-food-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const foodId = btn.dataset.id;

      const recommendFood = getActiveMenuData().items.find(item => item.id === foodId);
      if (!recommendFood) return;

      showRecommendPreview(recommendFood);
    });
  });
  /* =========================
   メニュー評価
========================= */

  /* =========================
     保存済み評価を復元
  ========================= */

  const savedMealEvaluations =
    JSON.parse(
      storage.getItem(getUserKey("mealEvaluations")) || "[]"
    );

  const now = new Date();

  const todayDate =
    `${now.getFullYear()}-` +
    `${String(now.getMonth() + 1).padStart(2, "0")}-` +
    `${String(now.getDate()).padStart(2, "0")}`;


  todayFood.querySelectorAll(".meal-rating").forEach(ratingArea => {

    const index = Number(ratingArea.dataset.index);
    const food = registeredFoods[index];

    if (!food) return;

    const menuId = food.baseId || food.id;


    /* 今日・このメニューの回答を探す */
    const savedEvaluation =
      [...savedMealEvaluations].reverse().find(item =>
        item.date === todayDate &&
        item.menuId === menuId
      );


    /* 回答がなければ何もしない */
    if (!savedEvaluation) return;


    /* =========================
       星評価を復元
    ========================= */

    const restoreStars = (type, value) => {

      const group =
        ratingArea.querySelector(
          `.meal-stars[data-rating-type="${type}"]`
        );

      if (!group) return;

      group.querySelectorAll(".meal-star").forEach(star => {

        const starValue =
          Number(star.dataset.value);

        if (starValue <= value) {
          star.textContent = "★";
          star.classList.add("selected");
        } else {
          star.textContent = "☆";
          star.classList.remove("selected");
        }

      });

    };


    restoreStars(
      "satisfaction",
      savedEvaluation.satisfaction
    );

    restoreStars(
      "taste",
      savedEvaluation.taste
    );

    restoreStars(
      "price",
      savedEvaluation.price
    );


    /* =========================
       味の濃さ・量を復元
    ========================= */

    const restoreScale = (type, value) => {

      const group =
        ratingArea.querySelector(
          `.meal-scale-options[data-rating-type="${type}"]`
        );

      if (!group) return;

      const option =
        group.querySelector(
          `.meal-scale-option[data-value="${value}"]`
        );

      if (option) {
        option.classList.add("selected");
      }

    };


    restoreScale(
      "strength",
      savedEvaluation.strength
    );

    restoreScale(
      "amount",
      savedEvaluation.amount
    );


    /* =========================
       コメントを復元
    ========================= */

    const comment =
      ratingArea.querySelector(".meal-comment");

    if (comment) {
      comment.value =
        savedEvaluation.comment || "";

      comment.disabled = true;
    }


    /* =========================
       回答済み状態
    ========================= */

    const submitBtn =
      ratingArea.querySelector(".meal-rating-submit-btn");

    if (submitBtn) {
      submitBtn.textContent = "✓ 回答済み";
      submitBtn.disabled = true;
      submitBtn.classList.add("submitted");
    }


    /* 回答済みなら評価ボタンも変更不可 */
    ratingArea
      .querySelectorAll(".meal-star, .meal-scale-option")
      .forEach(button => {

        button.disabled = true;

      });

  });

  /* 星評価 */
  todayFood.querySelectorAll(".meal-stars").forEach(starGroup => {

    const stars = starGroup.querySelectorAll(".meal-star");

    stars.forEach(star => {

      star.addEventListener("click", () => {

        const selectedValue =
          Number(star.dataset.value);

        stars.forEach(item => {

          const value =
            Number(item.dataset.value);

          if (value <= selectedValue) {
            item.textContent = "★";
            item.classList.add("selected");
          } else {
            item.textContent = "☆";
            item.classList.remove("selected");
          }

        });

      });

    });

  });


  /* 味の濃さ・量 */
  todayFood.querySelectorAll(".meal-scale-options").forEach(group => {

    const options =
      group.querySelectorAll(".meal-scale-option");

    options.forEach(option => {

      option.addEventListener("click", () => {

        options.forEach(item => {
          item.classList.remove("selected");
        });

        option.classList.add("selected");

      });

    });

  });
  /* =========================
   メニュー評価 送信
========================= */

  todayFood.querySelectorAll(".meal-rating-submit-btn").forEach(btn => {

    btn.addEventListener("click", () => {

      const index = Number(btn.dataset.index);
      const food = registeredFoods[index];

      if (!food) return;

      /* この料理の評価欄だけ取得 */
      const ratingArea =
        btn.closest(".meal-rating");

      if (!ratingArea) return;


      /* 星評価を取得 */
      const getStarValue = (type) => {

        const group =
          ratingArea.querySelector(
            `.meal-stars[data-rating-type="${type}"]`
          );

        if (!group) return null;

        const selectedStars =
          group.querySelectorAll(".meal-star.selected");

        return selectedStars.length || null;
      };


      /* 5段階評価を取得 */
      const getScaleValue = (type) => {

        const group =
          ratingArea.querySelector(
            `.meal-scale-options[data-rating-type="${type}"]`
          );

        if (!group) return null;

        const selected =
          group.querySelector(".meal-scale-option.selected");

        return selected
          ? Number(selected.dataset.value)
          : null;
      };


      /* 回答内容 */
      const evaluation = {

        menuId: food.baseId || food.id,
        menuName: food.name,

        taste:
          getScaleValue("taste"),

        strength:
          getScaleValue("strength"),

        amount:
          getScaleValue("amount"),

        price:
          getScaleValue("price"),

        comment:
          ratingArea.querySelector(".meal-comment")
            ?.value.trim() || ""

      };


      /* 必須項目チェック */
      if (
        !evaluation.taste ||
        !evaluation.strength ||
        !evaluation.amount ||
        !evaluation.price
      ) {
        alert("すべての評価項目に回答してください。");
        return;
      }


      /* =========================
         評価をlocalStorageに保存
      ========================= */

      const studentId =
        storage.getItem(getUserKey("studentId")) || "";

      const now = new Date();

      /* YYYY-MM-DD */
      const date =
        `${now.getFullYear()}-` +
        `${String(now.getMonth() + 1).padStart(2, "0")}-` +
        `${String(now.getDate()).padStart(2, "0")}`;


      /* 保存する回答データ */
      const evaluationData = {
        studentId: studentId,

        date: date,

        menuId: evaluation.menuId,
        menuName: evaluation.menuName,

        satisfaction: evaluation.satisfaction,
        taste: evaluation.taste,
        strength: evaluation.strength,
        amount: evaluation.amount,
        price: evaluation.price,

        comment: evaluation.comment,

        submittedAt: now.toISOString()
      };


      /* これまでの回答を取得 */
      const savedEvaluations =
        JSON.parse(
          storage.getItem(getUserKey("mealEvaluations")) || "[]"
        );


      /* 新しい回答を追加 */
      savedEvaluations.push(evaluationData);


      /* 保存 */
      storage.setItem(
        getUserKey("mealEvaluations"),
        JSON.stringify(savedEvaluations)
      );


      /* 送信ボタンを回答済みに変更 */
      btn.textContent = "✓ 回答済み";
      btn.disabled = true;
      btn.classList.add("submitted");

      /* 今回回答した1件だけGoogleスプレッドシートへ送信 */
      sendMealEvaluationToSheet(evaluationData);

      alert("回答を送信しました！");

    });

  });
}

function renderMyPage() {
  const studentId = storage.getItem(getUserKey("studentId"));
  const gender = storage.getItem(getUserKey("gender"));
  const age = storage.getItem(getUserKey("age"));
  const height = storage.getItem(getUserKey("height"));


  document.getElementById("profileCard").innerHTML = `
                  <div class="profile-card">

<h3>基本情報</h3>

<div class="profile-info-grid">
  <div class="profile-info-item">
    <span>性別</span>
    <strong>${gender === "male" ? "男性" : "女性"}</strong>
  </div>

  <div class="profile-info-item">
    <span>年齢</span>
    <strong>${age}歳</strong>
  </div>

  <div class="profile-info-item">
    <span>身長</span>
    <strong>${height}cm</strong>
  </div>


</div>
                    <button type="button" id="editProfileBtn" class="edit-profile-btn">
                      基本情報を変更
                    </button>
                  </div>
                  `;

  renderCalendar();

  // カレンダーで選択していた日の食事記録を再表示
  if (selectedCalendarDate) {
    showHistoryDetail(selectedCalendarDate);
  }

  document.getElementById("editProfileBtn").onclick = () => {
    document.getElementById("mypagePage").style.display = "none";
    document.querySelector(".progress-container").style.display = "flex";
    document.getElementById("inputCard").style.display = "flex";
    document.getElementById("bottomNav").style.display = "none";
    document.getElementById("appContainer").classList.remove("has-bottom-nav");

    // 登録済みの基本情報を読み込む
    loadUserProfileIntoForm();

    // 編集中であることを記録
    isEditingProfile = true;
    syncProfileNavigation();

    window.scrollTo({ top: 0, behavior: "auto" });
  };

}

function renderCalendar() {

  const mealHistory =
    JSON.parse(storage.getItem(getUserKey("mealHistory")) || "{}");

  const year = calendarYear;
  const month = calendarMonth;

  // 表示中の月の食事履歴を取得
  const monthKey =
    `${year}-${String(month + 1).padStart(2, "0")}-`;

  const monthlyRecords = Object.entries(mealHistory)
    .filter(([date]) => date.startsWith(monthKey))
    .map(([, record]) => record);

  // 月の合計金額
  const monthlyTotal = monthlyRecords.reduce((sum, record) => {
    return sum + (Number(record.total?.price) || 0);
  }, 0);

  // 利用日数
  const monthlyDays = monthlyRecords.filter(
    record => record.foods?.length > 0
  ).length;

  // 1日あたりの平均金額
  const monthlyAverage =
    monthlyDays > 0 ? Math.round(monthlyTotal / monthlyDays) : 0;

  const firstDay = new Date(year, month, 1).getDay();

  const lastDate = new Date(year, month + 1, 0).getDate();

  let html = `
  <div class="monthly-report">
    <h3>🍽️ ${month + 1}月の学食レポート</h3>

    <div class="monthly-total">
      <span>今月の合計金額</span>
      <strong>¥${monthlyTotal.toLocaleString()}</strong>
    </div>

    <div class="monthly-stats">
      <div class="monthly-stat">
        <span>利用日数</span>
        <strong>${monthlyDays}日</strong>
      </div>

      <div class="monthly-stat">
        <span>1日あたりの平均</span>
        <strong>¥${monthlyAverage.toLocaleString()}</strong>
      </div>
    </div>
  </div>

  <div class="calendar-card">

                    <div class="calendar-header">
                      <button type="button" id="prevMonthBtn">‹</button>
                      <h3>${year}年${month + 1}月</h3>
                      <button type="button" id="nextMonthBtn">›</button>
                    </div>

                    <div class="calendar-grid">

                      <div>日</div>
                      <div>月</div>
                      <div>火</div>
                      <div>水</div>
                      <div>木</div>
                      <div>金</div>
                      <div>土</div>
                      `;

  for (let i = 0; i < firstDay; i++) {
    html += `<div>
                    </div>`;
  }

  for (let day = 1; day <= lastDate; day++) {
    const dateKey = `${year}-${String(month +
      1).padStart(2, "0")}-${String(day).padStart(2, "0")}`; const hasMeal = mealHistory[dateKey]; const
        todayKey = formatCafeteriaDate(new Date()); const isToday = dateKey === todayKey; html += ` <button
class="calendar-day ${hasMeal ? " has-meal" : ""} ${isToday ? "today" : ""} ${dateKey === selectedCalendarDate ? "selected" : ""}"
data-date="${dateKey}"
${dateKey > todayKey ? "disabled" : ""}>
                      ${day}

${hasMeal ? '<span class="meal-dot"></span>' : ""}
                      </button>
                      `;
  }

  html += `
    </div>

    <div class="calendar-legend">
      <span class="legend-dot"></span>
      <span>食事記録あり</span>
    </div>

  </div>
`;

  document.getElementById("calendarArea").innerHTML = html;

  // 選択日が表示中の月に含まれているか確認
  if (selectedCalendarDate) {
    const displayedMonth =
      `${year}-${String(month + 1).padStart(2, "0")}`;

    if (selectedCalendarDate.startsWith(displayedMonth + "-")) {
      // 選択日の月に戻ったら食事記録を再表示
      showHistoryDetail(selectedCalendarDate);
    } else {
      // 別の月では食事記録を非表示
      document.getElementById("historyDetail").innerHTML = "";
    }
  }

  document.querySelectorAll(".calendar-day").forEach(btn => {
    btn.addEventListener("click", () => {

      // ほかの日付の選択状態を解除
      document.querySelectorAll(".calendar-day").forEach(day => {
        day.classList.remove("selected");
      });

      // 選択した日付を記憶
      selectedCalendarDate = btn.dataset.date;

      // 選択した日付を強調
      btn.classList.add("selected");

      showHistoryDetail(btn.dataset.date);
    });
  });

  document.getElementById("prevMonthBtn").onclick = () => {
    calendarMonth--;

    if (calendarMonth < 0) { calendarMonth = 11; calendarYear--; } renderCalendar();
  };
  document.getElementById("nextMonthBtn").onclick = () => {
    calendarMonth++;

    if (calendarMonth > 11) {
      calendarMonth = 0;
      calendarYear++;
    }

    renderCalendar();
  };

  // カレンダーと一緒に月別グラフを更新
  renderMonthlyNutritionChart();

}


/* =========================
   月別栄養グラフ：データ取得
========================= */
function getMonthlyNutritionData() {

  const mealHistory = JSON.parse(
    storage.getItem(getUserKey("mealHistory")) || "{}"
  );

  const year = calendarYear;
  const month = calendarMonth;

  const lastDay = new Date(year, month + 1, 0).getDate();

  const labels = [];
  const nutritionData = [];

  for (let day = 1; day <= lastDay; day++) {

    const dateKey =
      `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

    const record = mealHistory[dateKey];

    labels.push(`${day}日`);

    nutritionData.push(
      record?.foods?.length > 0 &&
        typeof record.total?.[selectedMonthlyNutrient] === "number"
        ? record.total[selectedMonthlyNutrient]
        : null
    );
  }

  return {
    labels,
    nutritionData
  };
}

/* =========================
   月別栄養グラフ：描画
========================= */

let monthlyNutritionChart = null;
// 凡例の表示状態は、栄養素を切り替えても保持する。
const monthlySeriesVisible = { actual: true, target: true };

function renderMonthlyChartLegend(nutrient) {
  const legend = document.getElementById("monthlyChartLegend");
  if (!legend) return;
  const options = [
    { key: "actual", text: nutrient.label, color: "orange" },
    { key: "target", text: "目標値", color: "blue" }
  ];
  legend.innerHTML = options.map(option => {
    const visible = monthlySeriesVisible[option.key];
    return `<button type="button" class="monthly-legend-btn ${option.color} ${visible ? "is-visible" : "is-hidden"}"
      data-series="${option.key}" aria-pressed="${visible}" aria-label="${option.text}の表示を切り替え">
      <span class="monthly-legend-mark" aria-hidden="true"></span>
      <span>${option.text}</span>
      <span class="monthly-legend-eye" aria-hidden="true">${visible ? "◉" : "○"}</span>
    </button>`;
  }).join("");
  legend.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      const key = button.dataset.series;
      monthlySeriesVisible[key] = !monthlySeriesVisible[key];
      if (monthlyNutritionChart) {
        monthlyNutritionChart.setDatasetVisibility(key === "actual" ? 0 : 1, monthlySeriesVisible[key]);
        monthlyNutritionChart.update();
      }
      renderMonthlyChartLegend(nutrient);
    });
  });
}


// 月別グラフで表示する栄養素
let selectedMonthlyNutrient = "energy_kcal";

const MONTHLY_NUTRIENTS = [
  { key: "energy_kcal", label: "エネルギー", unit: "kcal" },
  { key: "protein_g", label: "たんぱく質", unit: "g" },
  { key: "fat_g", label: "脂質", unit: "g" },
  { key: "carb_g", label: "炭水化物", unit: "g" },
  { key: "salt_g", label: "食塩相当量", unit: "g" }
];

function renderMonthlyNutritionControls() {
  const controls = document.getElementById("monthlyNutritionControls");
  if (!controls) return;

  controls.innerHTML = MONTHLY_NUTRIENTS.map(nutrient => `
    <button
      type="button"
      class="monthly-nutrient-btn ${selectedMonthlyNutrient === nutrient.key ? "active" : ""}"
      data-nutrient="${nutrient.key}"
    >
      ${nutrient.label}
    </button>
  `).join("");

  controls.querySelectorAll(".monthly-nutrient-btn").forEach(button => {
    button.onclick = () => {
      selectedMonthlyNutrient = button.dataset.nutrient;
      renderMonthlyNutritionControls();
      renderMonthlyNutritionChart();
    };
  });
}
function renderMonthlyNutritionChart() {

  renderMonthlyNutritionControls();

  const canvas = document.getElementById("monthlyNutritionChart");
  if (!canvas) return;

  const { labels, nutritionData } = getMonthlyNutritionData();

  const ideal = getIdealNutrition();

  // 現在選択中の栄養素の情報を取得
  const nutrient = MONTHLY_NUTRIENTS.find(
    item => item.key === selectedMonthlyNutrient
  );

  renderMonthlyChartLegend(nutrient);

  // 前のグラフを削除
  if (monthlyNutritionChart) {
    monthlyNutritionChart.destroy();
  }

  monthlyNutritionChart = new Chart(canvas, {
    type: "bar",

    data: {
      labels: labels,
      datasets: [
        {
          type: "bar",
          label: `${nutrient.label}（${nutrient.unit}）`,
          data: nutritionData,
          backgroundColor: "#ff9800",
          hidden: !monthlySeriesVisible.actual,
          borderRadius: 4
        },
        {
          type: "line",
          label: "目標値",
          data: labels.map(() => ideal[selectedMonthlyNutrient]),
          borderColor: "#2196f3",
          hidden: !monthlySeriesVisible.target,
          borderWidth: 2,
          borderDash: [6, 4],
          pointRadius: 0,
          tension: 0
        }
      ]
    },

    options: {
      responsive: true,
      maintainAspectRatio: false,

      plugins: {
        legend: {
          display: false
        },

        tooltip: {
          callbacks: {
            label: function (context) {
              const value = context.parsed.y;

              if (value === null || value === undefined) {
                return "食事記録なし";
              }

              return `${context.dataset.label}: ${value.toFixed(1)} ${nutrient.unit}`;
            }
          }
        }
      },

      scales: {
        x: {
          ticks: {
            maxRotation: 0,
            autoSkip: true,
            maxTicksLimit: 10
          }
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: nutrient.unit
          }
        }
      }
    }
  });
}

function showHistoryDetail(date) {

  const mealHistory =
    JSON.parse(storage.getItem(getUserKey("mealHistory")) || "{}");

  const data = mealHistory[date];

  // 食事記録がない日の表示
  if (!data) {
    document.getElementById("historyDetail").innerHTML = `
    <div class="history-detail-card">
      <h3>${date} の食事記録</h3>

      <div class="history-empty">
        <p>この日の食事記録はまだありません。</p>

<button type="button" id="addHistoryMealBtn">
  ✏️ 食事を追加・変更する
</button>
      </div>
    </div>
  `;
    // カレンダーから追加する日付を保持
    document.getElementById("addHistoryMealBtn").onclick = () => {

      // 前回選択していた料理をリセット
      selectedFoods = [];

      // 選択した日付を保持
      editingMealDate = date;

      updateHistoryEditButton();

      // メニュー選択モードに変更
      menuMode = "select";

      // メニュー一覧を再描画
      renderMenuList();

      // メニュー画面に切り替える
      showPage(menuPage, menuTab);

      // 選択中バーを更新
      updateSelectedBar();

      console.log("食事追加の対象日:", editingMealDate);
    };
    return;
  }

  const ideal = getIdealNutrition();
  const historyTip = NUTRITION_TIPS.find(t => t.id === data.nutritionTipId) || null;



  document.getElementById("historyDetail").innerHTML = `
    <div class="history-detail-card">

      <h3>${date} の食事記録</h3>

      <ul>
        ${data.foods.map((f, index) => `
          <li class="history-food-quantity-row">
            <span>${f.name}</span>
            <div class="today-quantity-controls" aria-label="過去の食事の数量変更">
              <span class="today-quantity-label">数量</span>
              <button type="button" class="history-quantity-minus" data-index="${index}" aria-label="数量を減らす" ${(f.quantity || 1) <= 1 ? "disabled" : ""}>−</button>
              <strong>${f.quantity || 1}</strong>
              <button type="button" class="history-quantity-plus" data-index="${index}" aria-label="数量を増やす" ${(f.quantity || 1) >= 10 ? "disabled" : ""}>＋</button>
            </div>
          </li>
        `).join("")}
      </ul>

<button type="button" id="addHistoryMealBtn">
  ✏️ 食事を追加・変更する
</button>

      <hr>
           <hr>

      <div class="history-nutrition-header">
        <span>栄養素</span>
        <span>摂取量</span>
        <span>差分</span>
        <span>目標値</span>
      </div>

      <div class="history-nutrition-grid">
        ${[
      { key: "energy_kcal", label: "エネルギー", unit: "kcal" },
      { key: "protein_g", label: "たんぱく質", unit: "g" },
      { key: "fat_g", label: "脂質", unit: "g" },
      { key: "carb_g", label: "炭水化物", unit: "g" },
      { key: "salt_g", label: "食塩相当量", unit: "g" }
    ].map(f => {
      const actual = data.total[f.key];
      const target = ideal[f.key];
      const diff = actual - target;

      const diffText =
        diff > 0 ? `↑${diff.toFixed(1)}${f.unit}` :
          diff < 0 ? `↓${Math.abs(diff).toFixed(1)}${f.unit}` :
            `±0.0${f.unit}`;

      const diffClass =
        diff > 0 ? "diff-plus" :
          diff < 0 ? "diff-minus" : "diff-good";

      return `
            <div class="history-nutrition-item">
              <span class="history-n-label">${f.label}</span>
              <span class="history-n-value">${actual.toFixed(1)}${f.unit}</span>
              <span class="${diffClass}">${diffText}</span>
              <span class="history-n-standard">${target.toFixed(1)}${f.unit}</span>
            </div>
          `;
    }).join("")}
      </div>

      <div class="nutrition-tip-box">
        <h3>💡 この日の栄養豆知識</h3>
        ${historyTip ? nutritionTipMarkup(historyTip, true) : '<p>この日の豆知識は記録されていません。</p>'}
      </div>

    </div>
    `;

  // カレンダーの過去日付でも数量を直接変更できる。
  // 保存先は選択中の日付のみ。今日の記録を編集した場合は当日画面も同期する。
  ["minus", "plus"].forEach(direction => {
    document.querySelectorAll(`.history-quantity-${direction}`).forEach(button => {
      button.addEventListener("click", () => {
        const index = Number(button.dataset.index);
        const history = JSON.parse(storage.getItem(getUserKey("mealHistory")) || "{}");
        const record = history[date];
        if (!record || !record.foods || !record.foods[index]) return;
        const food = record.foods[index];
        const current = food.quantity || 1;
        const next = current + (direction === "plus" ? 1 : -1);
        if (next < 1 || next > 10) return;

        record.foods[index] = withFoodQuantity(food, next);
        record.total = calcTotalFood(record.foods);
        // nutritionTipId など既存の記録情報はそのまま保持する
        storage.setItem(getUserKey("mealHistory"), JSON.stringify(history));

        if (date === formatCafeteriaDate(new Date())) {
          loadTodayMealFromHistory();
          renderTodayPage();
        }
        renderCalendar();
        renderMonthlyNutritionChart();
        showHistoryDetail(date);
      });
    });
  });

  // 登録済みの日付の食事を追加・変更する
  document.getElementById("addHistoryMealBtn").onclick = () => {

    // 登録済みの料理を編集用に読み込む
    selectedFoods = data.foods.map(food => ({ ...food }));

    // 追加対象の日付を保持
    editingMealDate = date;

    updateHistoryEditButton();

    // メニュー選択モードに変更
    menuMode = "select";

    // メニュー一覧を再描画
    renderMenuList();

    // メニュー画面に移動
    showPage(menuPage, menuTab);

    // 選択中バーを更新
    updateSelectedBar();

    console.log("追加対象の日付:", editingMealDate);
  };
}

document.getElementById("reselectBtn")
  .addEventListener("click", () => {
    document.getElementById("confirmModal").style.display = "none";
  });


// 過去の日付の編集を終了する
const cancelHistoryEditBtn =
  document.getElementById("cancelHistoryEditBtn");

function updateHistoryEditButton() {
  cancelHistoryEditBtn.style.display =
    editingMealDate !== null ? "block" : "none";
}

cancelHistoryEditBtn.onclick = () => {

  // 編集対象の日付を解除
  editingMealDate = null;
  updateHistoryEditButton();

  // 編集中の選択内容を破棄
  selectedFoods = [];

  // 通常のメニュー選択に戻す
  menuMode = "select";

  renderMenuList();
  updateSelectedBar();
  updateHistoryEditButton();
};

document.getElementById("confirmRegisterBtn")
  .addEventListener("click", () => {

    // 保存済みの当日履歴を取得
    const savedHistory = JSON.parse(
      storage.getItem(getUserKey("mealHistory")) || "{}"
    );

    // 過去の日付を編集中かどうか
    const isHistoryEditing = editingMealDate !== null;

    // 今日の食事データを一時的に保持
    const originalRegisteredFoods = registeredFoods;
    const originalRegisteredTotalFood = registeredTotalFood;

    const todayDateKey = formatCafeteriaDate(new Date());

    // カレンダーから追加する場合は選択した日付を使用
    const targetDateKey = editingMealDate || todayDateKey;

    const savedFoods = savedHistory[targetDateKey]?.foods || [];

    // カレンダーから編集中なら選択内容で上書き
    // 通常登録なら既存の料理に追加
    registeredFoods = isHistoryEditing
      ? [...selectedFoods]
      : [...savedFoods, ...selectedFoods];

    registeredTotalFood = {
      name: registeredFoods.map(f => f.name).join(" + "),
      price: registeredFoods.reduce((sum, f) => sum + f.price, 0),
      energy_kcal: registeredFoods.reduce((sum, f) => sum + f.energy_kcal, 0),
      protein_g: registeredFoods.reduce((sum, f) => sum + f.protein_g, 0),
      fat_g: registeredFoods.reduce((sum, f) => sum + f.fat_g, 0),
      carb_g: registeredFoods.reduce((sum, f) => sum + f.carb_g, 0),
      salt_g: registeredFoods.reduce((sum, f) => sum + f.salt_g, 0)
    };

    selectedFood = registeredTotalFood;

    // 通常の食事登録の場合のみ外部送信
    if (!editingMealDate) {
      sendMealDataToSheet();
    }
    const mealHistory = JSON.parse(
      storage.getItem(getUserKey("mealHistory")) || "{}"
    );

    if (registeredFoods.length === 0) {
      // 0品なら、その日付の履歴を削除
      delete mealHistory[targetDateKey];
    } else {
      // 1品以上なら通常どおり保存
      mealHistory[targetDateKey] = {
        date: targetDateKey,
        foods: registeredFoods,
        total: registeredTotalFood,
        nutritionTipId: savedHistory[targetDateKey]?.nutritionTipId || null
      };
    }

    storage.setItem(
      getUserKey("mealHistory"),
      JSON.stringify(mealHistory)
    );

    // 通常の食事登録が確定したときだけ豆知識を更新
    if (!isHistoryEditing && registeredFoods.length > 0) {
      const tip = advanceNutritionTip();
      const history = JSON.parse(storage.getItem(getUserKey("mealHistory")) || "{}");
      if (history[targetDateKey]) {
        history[targetDateKey].nutritionTipId = tip.id;
        storage.setItem(getUserKey("mealHistory"), JSON.stringify(history));
      }
    }
    // 過去の日付への登録だった場合、今日の食事を復元
    if (isHistoryEditing) {
      loadTodayMealFromHistory();
      selectedFood = registeredTotalFood;
    }
    selectedFoods = [];
    renderMenuList();
    updateSelectedBar();

    document.getElementById("confirmModal").style.display = "none";
    document.getElementById("selectMenuPage").style.display = "none";
    document.getElementById("detailPage").style.display = "none";

    if (isHistoryEditing) {
      // 過去の日付を登録した場合はマイページへ
      document.getElementById("todayPage").style.display = "none";
      document.getElementById("mypagePage").style.display = "block";
    } else {
      // 通常登録の場合は本日の食事へ
      document.getElementById("todayPage").style.display = "block";
      document.getElementById("mypagePage").style.display = "none";
    }

    document
      .getElementById("appContainer")
      .classList.add("has-bottom-nav");

    document.getElementById("bottomNav").style.display = "flex";

    renderTodayPage();

    if (isHistoryEditing) {
      // カレンダーと選択日の履歴を更新
      renderCalendar();
      showHistoryDetail(editingMealDate);

      // 編集モードを終了
      editingMealDate = null;

      // 編集終了ボタンを非表示にする
      updateHistoryEditButton();

      setActiveTab(mypageTab);
    } else {
      setActiveTab(todayTab);
    }

    window.scrollTo({
      top: 0,
      behavior: "auto"
    });
  });

document.querySelectorAll("#backToMenuBtn, #backToMenuBtnBottom")
  .forEach(btn => {
    btn.addEventListener("click", () => {

      document.getElementById("detailPage").style.display = "none";
      document.getElementById("selectMenuPage").style.display = "block";

      requestAnimationFrame(updateTabScrollButtons);

      window.scrollTo({
        top: 0,
        behavior: "auto"
      });

    });
  });

// 詳細画面のオプションを元データから再計算し、二重加算を防ぐ。
function makeSelectedFoodFromDetail() {
  let food = { ...selectedFood, baseId: selectedFood.id, isLarge: false, isSoupLess: false };
  const largeCheck = document.getElementById("largeOptionCheck");
  if (largeCheck.checked && document.getElementById("largeOptionArea").style.display !== "none") {
    const opt = getLargeOptionForFood(selectedFood);
    if (opt) {
      food = {
        ...food, isLarge: true, name: `${selectedFood.name} 大盛り`,
        price: selectedFood.price + opt.price,
        energy_kcal: selectedFood.energy_kcal + opt.energy_kcal,
        protein_g: selectedFood.protein_g + opt.protein_g,
        fat_g: selectedFood.fat_g + opt.fat_g,
        carb_g: selectedFood.carb_g + opt.carb_g,
        salt_g: selectedFood.salt_g + opt.salt_g
      };
    }
  }
  const soupCheck = document.getElementById("soupOptionCheck");
  if (soupCheck.checked && document.getElementById("soupOptionArea").style.display !== "none") {
    food = { ...food, isSoupLess: true, name: `${food.name}（スープなし）`, salt_g: food.salt_g * soupSaltFactor(findBaseMenuById(food.baseId || food.id)) };
  }
  return food;
}

function returnToMenuAfterDetailAction() {
  document.getElementById("detailPage").style.display = "none";
  document.getElementById("selectMenuPage").style.display = "block";
  renderMenuList();
  updateSelectedBar();
  window.scrollTo({ top: 0, behavior: "auto" });
}

document.getElementById("registerBtn").addEventListener("click", () => {
  if (!selectedFood) return;
  const selectedIndex = selectedFoods.findIndex(f =>
    f.baseId === selectedFood.id || f.id === selectedFood.id
  );
  if (selectedIndex === -1 && activeBuilding === "13" && (
    !hasCompleteNutrition(selectedFood) ||
    typeof selectedFood.price !== "number" ||
    !Number.isFinite(selectedFood.price) || selectedFood.price < 0
  )) {
    alert("このメニューは価格または栄養情報を確認中のため、現在は食事登録できません。");
    return;
  }
  const updatedFood = makeSelectedFoodFromDetail();
  if (selectedIndex !== -1) {
    selectedFoods[selectedIndex] = updatedFood;
  } else {
    selectedFoods.push(updatedFood);
  }
  returnToMenuAfterDetailAction();
});

document.getElementById("removeDetailBtn").addEventListener("click", () => {
  if (!selectedFood) return;
  const index = selectedFoods.findIndex(f =>
    f.baseId === selectedFood.id || f.id === selectedFood.id
  );
  if (index === -1) return;
  selectedFoods.splice(index, 1);
  returnToMenuAfterDetailAction();
});

document.getElementById("finishSelectBtn")
  .addEventListener("click", () => {

    if (selectedFoods.length === 0 && editingMealDate === null) return;

    const totalFood = makeTotalFood();

    renderConfirmModal();

    if (editingMealDate !== null) {

      // カレンダーから食事を編集している場合
      document.getElementById("confirmRegisterBtn").textContent = "変更を保存";

    } else if (registeredFoods.length === 0) {

      // 通常の新規登録
      document.getElementById("confirmRegisterBtn").textContent = "この内容で登録";

    } else {

      // 通常のメニュー追加
      document.getElementById("confirmRegisterBtn").textContent = "メニューを追加";

    }
    document.getElementById("confirmModal").style.display = "flex";

    renderConfirmRadarChart();
  });

/* =========================
下部タブ切り替え
========================= */
const todayTab = document.getElementById("todayTab");
// const aiTab = document.getElementById("aiTab");
const menuTab = document.getElementById("menuTab");
const mypageTab = document.getElementById("mypageTab");

const todayPage = document.getElementById("todayPage");
// const aiPage = document.getElementById("aiPage");
const menuPage = document.getElementById("selectMenuPage");
const mypagePage = document.getElementById("mypagePage");

const allTabs = [todayTab, // aiTab,
  menuTab, mypageTab];

function setActiveTab(activeTab) {
  allTabs.forEach(tab => tab.classList.remove("active-tab"));
  activeTab.classList.add("active-tab");
}

function showPage(page, activeTab) {
  todayPage.style.display = "none";
  // aiPage.style.display = "none";
  menuPage.style.display = "none";
  mypagePage.style.display = "none";
  document.getElementById("detailPage").style.display = "none";

  page.style.display = "block";
  setActiveTab(activeTab);

  if (page !== menuPage) {
    document.getElementById("selectedBar").style.display = "none";
  }
  window.scrollTo({
    top: 0,
    behavior: "auto"
  });
}
todayTab.onclick = () => {
  // 保存済みの当日履歴を読み直す
  loadTodayMealFromHistory();

  showPage(todayPage, todayTab);
  renderTodayPage();
};
// aiTab.onclick = () => showPage(aiPage, aiTab);

menuTab.onclick = () => {
  menuMode = "select";
  renderMenuList();
  showPage(menuPage, menuTab);
  updateSelectedBar();

  // 編集中なら終了ボタンを表示
  updateHistoryEditButton();
};

mypageTab.onclick = () => {
  renderMyPage();
  showPage(mypagePage, mypageTab);
};
/* =========================
   今日のおすすめモーダル
========================= */

const recommendOverlay =
  document.getElementById("recommendOverlay");

const closeRecommendPopup =
  document.getElementById("closeRecommendPopup");

if (recommendOverlay && closeRecommendPopup) {

  closeRecommendPopup.addEventListener("click", () => {

    recommendOverlay.style.display = "none";

  });


}


/* =========================
   保存済み基本情報からSTART画面へ
   30分のログイン期限とは独立して判定する
========================= */
(function initializeReturnStart() {
  const startPage = document.getElementById("returnStartPage");
  const startBtn = document.getElementById("returnStartBtn");
  const switchBtn = document.getElementById("returnSwitchBtn");
  if (!startPage || !startBtn || !switchBtn) return;

  const fields = ["gender", "age", "height"];
  const hasProfile = owner => Boolean(owner) && fields.every(field =>
    Boolean(storage.getItem(`${owner}_${field}`))
  );

  // 前回保存したプロフィールを優先。旧バージョンの保存データも引き継ぐ。
  const users = getUsers();
  const current = localStorage.getItem("currentUser");
  const last = localStorage.getItem("lastProfileUser");
  let owner = [current, last].find(name => name && users[name] && hasProfile(name));
  if (!owner) {
    const candidates = Object.keys(users).filter(name => hasProfile(name));
    if (candidates.length === 1) owner = candidates[0];
  }
  // 古い匿名形式のプロフィールも利用可能にする。
  const anonymous = !owner && fields.every(field => Boolean(storage.getItem(field)));
  if (!owner && !anonymous) return;

  authChoicePage.style.display = "none";
  loginPage.style.display = "none";
  registerPage.style.display = "none";
  progressContainer.style.display = "none";
  inputCard.style.display = "none";
  startPage.style.display = "flex";

  startBtn.addEventListener("click", () => {
    if (owner) {
      localStorage.setItem("currentUser", owner);
      localStorage.setItem("lastProfileUser", owner);
    } else {
      localStorage.removeItem("currentUser");
    }
    loadUserProfileIntoForm();
    loadTodayMealFromHistory();
    startPage.style.display = "none";
    menuMode = "select";
    selectedFoods = [];
    renderMenuList();
    updateSelectedBar();
    document.getElementById("selectMenuPage").style.display = "block";
    document.getElementById("appContainer").classList.add("has-bottom-nav");
    document.getElementById("bottomNav").style.display = "flex";
    setActiveTab(menuTab);
    if (owner) resetSessionTimeout();
    window.scrollTo({ top: 0, behavior: "auto" });
  });

  switchBtn.addEventListener("click", () => {
    // ログアウトや別ユーザーへの切り替えは行わず、保存済み情報を編集する。
    if (owner) {
      localStorage.setItem("currentUser", owner);
      localStorage.setItem("lastProfileUser", owner);
    } else {
      localStorage.removeItem("currentUser");
    }
    loadUserProfileIntoForm();
    startPage.style.display = "none";
    authChoicePage.style.display = "none";
    loginPage.style.display = "none";
    registerPage.style.display = "none";
    document.getElementById("selectMenuPage").style.display = "none";
    document.getElementById("bottomNav").style.display = "none";
    document.getElementById("appContainer").classList.remove("has-bottom-nav");
    progressContainer.style.display = "flex";
    inputCard.style.display = "flex";
    // 編集を保存したら既存の処理でマイページに戻る。
    isEditingProfile = true;
    syncProfileNavigation();
    window.scrollTo({ top: 0, behavior: "auto" });
  });
})();
