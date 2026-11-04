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
    { "id": "seasonal", "label": "季節限定", "emoji": "🧊" }
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
    }
  ]
};

/* =========================
   13号館（ブォナージョ）メニュー
========================= */

const MENU_13_DATA = {
  categories: [
    // 日替わり・週替わり
    { id: "daily-teishoku", label: "日替わり定食", emoji: "🍱" },
    { id: "weekly-teishoku", label: "週替わり定食", emoji: "🍱" },
    { id: "weekly-don", label: "週替わり丼", emoji: "🍚" },
    { id: "weekly-udon", label: "う～どん・プチ丼", emoji: "🍜" },
    { id: "premium", label: "プレミアム", emoji: "✨" },

    // 常時提供メニュー
    { id: "teishoku", label: "定食", emoji: "🍱" },
    { id: "udon", label: "うどん", emoji: "🍜" },
    { id: "ramen", label: "ラーメン", emoji: "🍜" },
    { id: "don", label: "丼", emoji: "🍚" },
    { id: "curry", label: "カレー", emoji: "🍛" }
  ],


  items: [

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


  ]


};

// =====================================
// 3号館・13号館 共通メニュー画像の管理
// =====================================
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

function getMenuImagePath(food) {
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
  ]
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

/* =========================
   3号館 日替わりメニュー
========================= */

const MENU_3_DAILY_SCHEDULE = {
  // 動作確認用の仮データ（実際の日替わり献立ではありません）

};
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
    if (age < 30) return 23.7; if (age < 50) return 22.5; if (age < 65) return 21.8; if (age < 75) return 21.6; return
    21.5;
  } else {
    if (age < 30) return 22.1; if (age < 50) return 21.9; if (age < 65) return 20.7; if (age < 75)
      return 20.7; return 20.7;
  }
} function getActivityLevel(age) { if (age < 65) return 1.75; return 1.70; } function
  getIdealNutrition() {
  const gender = storage.getItem(getUserKey("gender")) || "male";
  const age = Number(storage.getItem(getUserKey("age"))) || 20;
  const height = Number(storage.getItem(getUserKey("height"))) || 170;
  const weight = Number(storage.getItem(getUserKey("weight"))) || 60; const heightM = height / 100; const bmi = weight / (heightM * heightM); const basalRate = getBasalRate(gender, age);
  const activityLevel = getActivityLevel(age);

  const dailyEnergy = weight * basalRate * activityLevel; const
    mealEnergy = dailyEnergy * 0.4; return {
      energy_kcal: mealEnergy, protein_g: mealEnergy * 0.165 / 4, fat_g:
        mealEnergy * 0.25 / 9, carb_g: mealEnergy * 0.575 / 4, salt_g: gender === "male" ? 3.0 : 2.6
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

    sessionLogout();
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
    weight: storage.getItem(getUserKey("weight")) || "",
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

let activeBuilding = "3";

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
// 3号館の日替わりメニューを表示
// ========================================
function renderDailyMenuCard() {
  const card = document.getElementById("dailyMenuCard");
  const name = document.getElementById("dailyMenuName");
  const description = document.getElementById("dailyMenuDescription");
  const button = document.getElementById("dailyMenuSelectBtn");

  if (!card || !name || !description || !button) return;

  // 3号館のみ表示
  card.style.display = activeBuilding === "3" ? "block" : "none";

  if (activeBuilding !== "3") return;

  // 選択中の日付
  const dateText = formatCafeteriaDate(selectedCafeteriaDate);

  // その日に提供される日替わり料理ID
  const dailyIds = MENU_3_DAILY_SCHEDULE[dateText] || [];

  // 3号館の料理データから検索
  const dailyFoods = dailyIds
    .map(id => MENU_DATA.items.find(item => item.id === id))
    .filter(Boolean);

  // 献立未登録の場合
  if (dailyFoods.length === 0) {
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

  name.textContent = food.name;
  description.textContent =
    `${food.energy_kcal}kcal / ${food.price}円`;

  button.disabled = false;
  button.textContent = "この料理を選ぶ";

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

  // 3号館の日替わりカードを更新
  renderDailyMenuCard();

  if (!selector || !monthTitle || !weekDays) return;

  // 3号館・13号館共通で日付バーを表示
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
  return activeBuilding === "3" ? MENU_DATA : MENU_13_DATA;
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

      weeklyInfo.textContent =
        "13号館のメニュー（提供状況は要確認）";
    }

    renderTabs();
    renderMenuList();
    renderCafeteriaDateSelector();
  });
});

let menuMode = "select"; // select=登録用 / browse=見るだけ用
let selectedFoods = [];
let radarChart = null;
let confirmRadarChart = null;
let todayRadarChart = null;
let recommendRadarChart = null;
let pendingRecommendFood = null;
let registeredFoods = [];
let registeredTotalFood = null;
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
  const savedWeight = storage.getItem(getUserKey("weight"));

  const hasAllProfileData =
    participantId &&
    savedGender &&
    savedAge &&
    savedHeight &&
    savedWeight;

  /* 基本情報が全部ある場合はメニュー画面へ */
  if (hasAllProfileData) {
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
セレクトボックスの選択肢自動生成
========================= */
const ageSelect = document.getElementById("age");
{
  let options = "";
  for (let i = 18; i <= 80; i += 5) {
    const end = i + 4; const value = i + 2; options += ` <option value="${value}">
          ${i}歳～${end}歳
          </option>
          `;
  }
  ageSelect.insertAdjacentHTML("beforeend", options);
}

const heightSelect = document.getElementById("height");
{
  let options = "";
  for (let i = 130; i <= 200; i += 5) {
    const end = i + 4; const value = i + 2; options += ` <option value="${value}">
            ${i}cm～${end}cm
            </option>
            `;
  }
  heightSelect.insertAdjacentHTML("beforeend", options);
}

const weightSelect = document.getElementById("weight");
{
  let options = "";
  for (let i = 30; i <= 120; i += 5) {
    const end = i + 4; const value = i + 2; options += ` <option
              value="${value}">
              ${i}kg～${end}kg
              </option>
              `;
  }
  weightSelect.insertAdjacentHTML("beforeend", options);
}

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
  weightSelect.value = "";

  const savedParticipantId = getParticipantId();
  const savedGender = storage.getItem(getUserKey("gender"));
  const savedAge = storage.getItem(getUserKey("age"));
  const savedHeight = storage.getItem(getUserKey("height"));
  const savedWeight = storage.getItem(getUserKey("weight"));
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
  if (savedWeight) { weightSelect.value = savedWeight; }

  // 学籍番号の入力をスキップし、性別選択から開始
  currentStep = 1;

  questions.forEach((question, index) => {
    question.classList.toggle("active", index === 1);
  });

  progressSteps.forEach((step, index) => {
    step.classList.toggle("active", index === 0);
  });

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

/* =========================
ステップ遷移・保存ロジック
========================= */
nextBtn.addEventListener("click", () => {

  if (currentStep === 0 && studentIdInput.value.trim() === "") return;
  if (currentStep === 1 && !selectedGender) return;
  if (currentStep === 2 && ageSelect.value === "") return;
  if (currentStep === 3 && heightSelect.value === "") return;
  if (currentStep === 4 && weightSelect.value === "") return;

  if (currentStep === 4) {
    storage.setItem(getUserKey("participantId"), getParticipantId());
    storage.setItem(getUserKey("gender"), selectedGender);
    storage.setItem(getUserKey("age"), ageSelect.value);
    storage.setItem(getUserKey("height"), heightSelect.value);
    storage.setItem(getUserKey("weight"), weightSelect.value);


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

  questions[currentStep].classList.remove("active");
  currentStep++;
  questions[currentStep].classList.add("active");
  progressSteps.forEach((step, index) => {
    step.classList.toggle("active", index < currentStep - 1);
  });

  disableButton();

  if (currentStep === 1 && selectedGender) { enableButton(); }
  if (currentStep === 2 && ageSelect.value !== "") { enableButton(); }
  if (currentStep === 3 && heightSelect.value !== "") { enableButton(); }
  if (currentStep === 4 && weightSelect.value !== "") { enableButton(); }
});

/* =========================================================
SmartNews風タブ + 学食一覧
========================================================= */
const tabBar = document.getElementById("tabBar");
const menuList = document.getElementById("menuList");

function renderTabs() {
  tabBar.innerHTML = getActiveMenuData().categories.map(cat => `
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

  let status = "適量";
  let className = "good";

  /* =========================
     塩分だけ別判定
  ========================= */
  if (type === "salt") {

    if (ratio > 1.0) {
      status = "基準超過";
      className = "high";
    } else {
      status = "基準以内";
      className = "good";
    }

  } else {

    /* =========================
       その他の栄養素
    ========================= */
    if (ratio < 0.8) {
      status = "少なめ";
      className = "low";

    } else if (ratio > 1.2) {
      status = "多め";
      className = "high";
    }

  }

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
    "premium"
  ];

  // 表示する料理を取得
  const items = getActiveMenuData().items.filter(item => {
    if (item.category !== activeCategory) return false;
    if (item.tags.includes("option")) return false;

    // 3号館は従来どおり
    if (activeBuilding === "3") return true;

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

                    ${["udon", "ramen", "curry"].includes(item.category) ? `

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

                  <div class="quick-gauge-good-zone"></div>

                  <div
                    class="quick-gauge-marker"
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

      /* 表面を押した場合は詳細画面へ */
      const isSelected = card.dataset.selected === "true";

      if (menuMode === "select" && isSelected) {
        return;
      }

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


      const baseFood = MENU_DATA.items.find(item =>
        item.id === id
      );

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


      const baseFood = MENU_DATA.items.find(item =>
        item.id === id
      );

      if (!baseFood) return;


      const largeOption = MENU_DATA.items.find(item =>
        item.category === baseFood.category &&
        item.tags.includes("option")
      );

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

    const baseFood = MENU_DATA.items.find(item =>
      item.id === id
    );

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

    const baseFood = MENU_DATA.items.find(item =>
      item.id === id
    );

    if (!baseFood) return;

    const largeOption = MENU_DATA.items.find(item =>
      item.category === baseFood.category &&
      item.tags.includes("option")
    );

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

  if (selectedFoods.length === 0 || menuMode !== "select") {
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
  { key: "carb_g", label: "炭水化物", unit: "g" },
  { key: "protein_g", label: "たんぱく質", unit: "g" },

  { key: "fat_g", label: "脂質", unit: "g" },
  { key: "salt_g", label: "食塩相当量", unit: "g" },

  { key: "energy_kcal", label: "エネルギー", unit: "kcal" }
];

function getDisplayFood() {
  let displayFood = { ...selectedFood };

  const largeOptionCheck = document.getElementById("largeOptionCheck");

  if (largeOptionCheck && largeOptionCheck.checked) {
    const largeOption = MENU_DATA.items.find(item =>
      item.category === selectedFood.category &&
      item.tags.includes("option")
    );

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
      salt_g: displayFood.salt_g * 0.5
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
      const diffClass = diff >= 0 ? "diff-plus" : "diff-minus";
      const diffText =
        diff > 0
          ? `↑${diff.toFixed(1)}${f.unit}`
          : diff < 0
            ? `↓${Math.abs(diff).toFixed(1)}${f.unit}`
            : `±0.0${f.unit}`;

      return `
              <div class="nutrition-item">
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
          backgroundColor: "rgba(66,165,245,0.55)",
          borderWidth: 0,
          pointRadius: 0,
          pointHoverRadius: 0
        },
        {
          label: displayFood.name,
          data: toRadarData(displayFood),
          borderColor: "#ff5722",
          backgroundColor: "rgba(255,87,34,0.3)",
          borderWidth: 3
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

  const alreadySelected = selectedFoods.some(f => f.id === selectedFood.id);

  // 13号館：価格と栄養価がそろっているか確認
  const canRegisterFood =
    activeBuilding !== "13" ||
    (
      hasCompleteNutrition(selectedFood) &&
      typeof selectedFood.price === "number" &&
      Number.isFinite(selectedFood.price) &&
      selectedFood.price >= 0
    );

  // 登録できるメニューだけボタンを表示
  document.getElementById("registerBtn").style.display =
    menuMode === "select" &&
      !alreadySelected &&
      canRegisterFood
      ? "block"
      : "none";

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

  largeOptionCheck.checked = false;

  const largeOption = MENU_DATA.items.find(item =>
    item.category === selectedFood.category &&
    item.tags.includes("option")
  );

  if (
    menuMode === "select" &&
    largeOption &&
    ["udon", "ramen", "curry"].includes(selectedFood.category)
  ) {
    largeOptionArea.style.display = "block";
    largeOptionText.textContent = `+${largeOption.price}円 / +${largeOption.energy_kcal}kcal`;
  } else {
    largeOptionArea.style.display = "none";
  }
  const canSoupMenu = ["udon", "ramen"].includes(selectedFood.category);

  soupOptionArea.style.display = canSoupMenu ? "block" : "none";
  soupOptionCheck.checked = false;

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

  if (totalFood.energy_kcal > ideal.energy_kcal + 100) {
    advice.push("エネルギーが基準より多めです。");
  }

  if (totalFood.energy_kcal < ideal.energy_kcal - 100) { advice.push("エネルギーが基準より少なめです。"); } if
    (totalFood.protein_g < ideal.protein_g * 0.8) { advice.push("たんぱく質が不足しています。"); } if (totalFood.fat_g >
      ideal.fat_g * 1.2) {
    advice.push("脂質を摂りすぎています。");
  }

  if (totalFood.salt_g > ideal.salt_g) {
    advice.push("食塩相当量が昼食の基準値を超えています。");
  }
  if (totalFood.carb_g > ideal.carb_g * 1.2) {
    advice.push("炭水化物が多めです。");
  }

  if (advice.length === 0) {
    advice.push("全体的に基準に近い食事です。");
  }

  return advice;
}

function renderConfirmModal() {
  const totalFood = makeTotalFood();
  const ideal = getIdealNutrition();

  document.getElementById("confirmModalContent").innerHTML = `
                <h3>選択したメニュー</h3>

                <ul class="today-menu-list">
                  ${selectedFoods.map((f, index) => `
                  <li class="confirm-food-item">
                    <div class="confirm-food-name">
                      ${f.name}
                    </div>

                    <div class="confirm-food-actions">
                      ${f.isLarge ? `
                      <button type="button" class="modal-cancel-large-btn" data-index="${index}">
                        大盛り解除
                      </button>
                      ` : `
                      <button type="button" class="modal-add-large-btn" data-index="${index}">
                        大盛り追加
                      </button>
                      `}

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

    const nutritionState =
      f.key === "salt_g"
        ? (ratio > 1 ? "is-high" : "is-good")
        : ratio < 0.8 ? "is-low"
          : ratio > 1.2 ? "is-high"
            : "is-good";

    return `
    <div class="nutrition-item ${nutritionState}">
      <div class="n-label">${f.label}</div>

      <div class="nutrition-top">
        <div class="n-value">
          ${actual.toFixed(1)}
          <span class="n-unit">${f.unit}</span>
        </div>
        <span class="${diffClass}">${diffText}</span>
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

      if (selectedFoods.length === 0) {
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

  document.querySelectorAll(".modal-cancel-large-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = Number(btn.dataset.index);
      const food = selectedFoods[index];

      if (!food) return;

      const baseId = food.baseId || food.id;
      const baseFood = MENU_DATA.items.find(item => item.id === baseId);
      if (!baseFood) return;

      selectedFoods[index] = {
        ...baseFood,
        baseId: baseFood.id,
        isLarge: false
      };

      renderConfirmModal();
      renderConfirmRadarChart();
      renderMenuList();
      updateSelectedBar();
    });
  });

  document.querySelectorAll(".modal-add-large-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = Number(btn.dataset.index);
      const food = selectedFoods[index];

      if (!food) return;

      const baseId = food.baseId || food.id;
      const baseFood = MENU_DATA.items.find(item => item.id === baseId);
      if (!baseFood) return;

      const largeOption = MENU_DATA.items.find(item =>
        item.category === baseFood.category &&
        item.tags.includes("option")
      );

      if (!largeOption) return;

      selectedFoods[index] = {
        ...baseFood,
        baseId: baseFood.id,
        isLarge: true,
        name: `${baseFood.name} 大盛り`,
        price: baseFood.price + largeOption.price,
        energy_kcal: baseFood.energy_kcal + largeOption.energy_kcal,
        protein_g: baseFood.protein_g + largeOption.protein_g,
        fat_g: baseFood.fat_g + largeOption.fat_g,
        carb_g: baseFood.carb_g + largeOption.carb_g,
        salt_g: baseFood.salt_g + largeOption.salt_g
      };

      renderConfirmModal();
      renderConfirmRadarChart();
      renderMenuList();
      updateSelectedBar();
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
          backgroundColor: "rgba(66,165,245,0.55)",
          borderWidth: 0,
          pointRadius: 0,
          pointHoverRadius: 0
        },
        {
          label: "選択合計",
          data: toRadarData(totalFood),
          borderColor: "#ff5722",
          backgroundColor: "rgba(255,87,34,0.3)",
          borderWidth: 3
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
      total: registeredTotalFood
    };
  }

  storage.setItem(
    getUserKey("mealHistory"),
    JSON.stringify(mealHistory)
  );
}
function getLackingNutrients(totalFood, ideal) {
  const lacking = [];

  if (totalFood.protein_g < ideal.protein_g * 0.8) { lacking.push("たんぱく質"); } if (totalFood.fat_g <
    ideal.fat_g * 0.7) { lacking.push("脂質"); } if (totalFood.carb_g < ideal.carb_g * 0.8) {
      lacking.push("炭水化物");
    } if (totalFood.energy_kcal < ideal.energy_kcal * 0.8) {
      lacking.push("エネルギー");
    } return lacking;
}
function getRecommendFoods(lackingNutrients) {
  if (!registeredTotalFood) return [];

  const ideal = getIdealNutrition();

  const registeredNames = new Set(
    registeredFoods.map(food => food.name)
  );

  const candidates = MENU_DATA.items.filter(item =>
    item.category === "side" &&
    !item.tags.includes("option") &&
    !registeredNames.has(item.name)
  );

  const nutrientKeys = [
    "energy_kcal",
    "protein_g",
    "fat_g",
    "carb_g"
  ];

  function calculateScore(food) {
    let score = 0;

    for (const key of nutrientKeys) {
      const target = Number(ideal[key]) || 0;
      if (target <= 0) continue;

      const before = Number(registeredTotalFood[key]) || 0;
      const after = before + (Number(food[key]) || 0);

      const beforeGap = Math.abs(1 - before / target);
      const afterGap = Math.abs(1 - after / target);

      score += beforeGap - afterGap;
    }

    const saltLimit = Number(ideal.salt_g) || 0;

    if (saltLimit > 0) {
      const beforeSalt = Number(registeredTotalFood.salt_g) || 0;
      const afterSalt = beforeSalt + (Number(food.salt_g) || 0);

      const beforeExcess = Math.max(
        0, beforeSalt / saltLimit - 1
      );

      const afterExcess = Math.max(
        0, afterSalt / saltLimit - 1
      );

      score -= (afterExcess - beforeExcess) * 2;
    }

    return score;
  }

  return candidates
    .map(food => ({
      food,
      score: calculateScore(food)
    }))
    .filter(result => result.score > 0)
    .sort((a, b) => b.score - a.score)
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

  compareText.innerHTML = `
                  <div class="nutrition-grid">
                    ${NUTRITION_FIELDS.map(f => `
                    <div class="nutrition-item">
                      <div class="n-label">${f.label}</div>
                      <div class="n-value">
                        ${registeredTotalFood[f.key].toFixed(1)}
                        <span class="n-unit">${f.unit}</span>
                        →
                        ${afterFood[f.key].toFixed(1)}
                        <span class="n-unit">${f.unit}</span>
                      </div>
                    </div>
                    `).join("")}
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
          borderWidth: 2,
          pointRadius: 0
        },
        {
          label: "現在",
          data: toRadarData(registeredTotalFood),
          borderWidth: 2
        },
        {
          label: "追加後",
          data: toRadarData(afterFood),
          borderWidth: 2
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
  renderTodayPage();

  document.getElementById("recommendModal").style.display = "none";
  pendingRecommendFood = null;
});

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
  const advice = getNutritionAdvice(totalFood, ideal);
  const lackingNutrients = getLackingNutrients(totalFood, ideal);
  const recommendFoods = getRecommendFoods(lackingNutrients);

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
                          ${registeredFoods.length}品
                        </span>

                      </div>

                      <ul class="today-menu-list">

                        ${registeredFoods.map((food, index) => {
    const baseId = food.baseId || food.id;

    const baseFood = MENU_DATA.items.find(item =>
      item.id === baseId
    );

    const category = baseFood
      ? baseFood.category
      : food.category;

    const imageId = baseFood
      ? baseFood.id
      : baseId;

    const canLargeMenu =
      baseFood &&
      ["udon", "ramen", "curry"].includes(baseFood.category);

    const canSoupMenu =
      baseFood &&
      ["udon", "ramen"].includes(baseFood.category);

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

    /* 既存の栄養状態の判定は維持 */
    if (field.key === "salt_g") {
      nutritionState = ratio > 1.0 ? "is-high" : "is-good";
    } else if (ratio < 0.8) {
      nutritionState = "is-low";
    } else if (ratio > 1.2) {
      nutritionState = "is-high";
    }

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

                    </section>

                    <!-- =========================
         栄養コメント
    ========================== -->
                    <section class="today-section">

                      <div class="today-section-title">

                        <div>
                          <span class="today-section-icon">💡</span>
                          <span>今日の食事コメント</span>
                        </div>

                      </div>

                      <div class="advice-box">

                        <ul>
                          ${advice.map(comment => `
                          <li>${comment}</li>
                          `).join("")}
                        </ul>

                      </div>

                    </section>
                  </div>
                  `;

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
            backgroundColor: "rgba(66,165,245,0.55)",
            borderWidth: 0,
            pointRadius: 0,
            pointHoverRadius: 0
          },
          {
            label: "本日の合計",
            data: toRadarData(totalFood),
            borderColor: "#ff5722",
            backgroundColor: "rgba(255,87,34,0.3)",
            borderWidth: 3
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
      const baseFood = MENU_DATA.items.find(item => item.id === baseId);
      if (!baseFood) return;

      const largeOption = MENU_DATA.items.find(item =>
        item.category === baseFood.category &&
        item.tags.includes("option")
      );

      if (!largeOption) return;

      registeredFoods[index] = {
        ...baseFood,
        baseId: baseFood.id,
        isLarge: true,
        name: `${baseFood.name} 大盛り`,
        price: baseFood.price + largeOption.price,
        energy_kcal: baseFood.energy_kcal + largeOption.energy_kcal,
        protein_g: baseFood.protein_g + largeOption.protein_g,
        fat_g: baseFood.fat_g + largeOption.fat_g,
        carb_g: baseFood.carb_g + largeOption.carb_g,
        salt_g: baseFood.salt_g + largeOption.salt_g
      };

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
      const baseFood = MENU_DATA.items.find(item => item.id === baseId);
      if (!baseFood) return;

      registeredFoods[index] = {
        ...baseFood,
        baseId: baseFood.id,
        isLarge: false
      };

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
        salt_g: food.salt_g * 0.5
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
      const baseFood = MENU_DATA.items.find(item => item.id === baseId);
      if (!baseFood) return;

      registeredFoods[index] = {
        ...baseFood,
        baseId: baseFood.id,
        isLarge: food.isLarge || false,
        isSoupLess: false
      };

      registeredTotalFood = calcTotalFood(registeredFoods);
      saveTodayMealToHistory();
      renderTodayPage();
    });
  });
  document.querySelectorAll(".recommend-food-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const foodId = btn.dataset.id;

      const recommendFood = MENU_DATA.items.find(item => item.id === foodId);
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
  const weight = storage.getItem(getUserKey("weight"));

  document.getElementById("profileCard").innerHTML = `
                  <div class="profile-card">

<h3>基本情報</h3>

<div class="profile-student">
  <span>学籍番号</span>
  <strong>${studentId || "未登録"}</strong>
</div>

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

  <div class="profile-info-item">
    <span>体重</span>
    <strong>${weight}kg</strong>
  </div>
</div>
                    <button type="button" id="editProfileBtn" class="edit-profile-btn">
                      基本情報を変更
                    </button>
                  </div>
                  `;

  renderCalendar();

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
class="calendar-day ${hasMeal ? " has-meal" : ""}"
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

  document.querySelectorAll(".calendar-day").forEach(btn => {
    btn.addEventListener("click", () => {

      // ほかの日付の選択状態を解除
      document.querySelectorAll(".calendar-day").forEach(day => {
        day.classList.remove("selected");
      });

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
          ＋ 食事を追加する
        </button>
      </div>
    </div>
  `;
    // カレンダーから追加する日付を保持
    document.getElementById("addHistoryMealBtn").onclick = () => {

      // 選択した日付を保持
      editingMealDate = date;

      // マイページを非表示
      document.getElementById("mypagePage").style.display = "none";

      // メニュー一覧を表示
      document.getElementById("selectMenuPage").style.display = "block";

      // 画面上部へ移動
      window.scrollTo({
        top: 0,
        behavior: "auto"
      });

      console.log("食事追加の対象日:", editingMealDate);
    };
    return;
  }

  const ideal = getIdealNutrition();
  const advice = getNutritionAdvice(data.total, ideal);



  document.getElementById("historyDetail").innerHTML = `
    <div class="history-detail-card">

      <h3>${date} の食事記録</h3>

      <ul>
        ${data.foods.map(f =>
    `<li>${f.name}</li>`
  ).join("")}
      </ul>

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

      <div class="advice-box">
        <h3>📊 栄養コメント</h3>
        <ul>
          ${advice.map(a => `<li>${a}</li>`).join("")}
        </ul>
      </div>

    </div>
    `;
}

document.getElementById("reselectBtn")
  .addEventListener("click", () => {
    document.getElementById("confirmModal").style.display = "none";
  });

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

    // 保存済みの料理を優先し、新しい料理を追加する
    registeredFoods = [
      ...savedFoods,
      ...selectedFoods
    ];

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

    mealHistory[targetDateKey] = {
      date: targetDateKey,
      foods: registeredFoods,
      total: registeredTotalFood
    };

    storage.setItem(
      getUserKey("mealHistory"),
      JSON.stringify(mealHistory)
    );

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

      window.scrollTo({
        top: 0,
        behavior: "auto"
      });

    });
  });

document.getElementById("registerBtn")
  .addEventListener("click", () => {

    if (!selectedFood) return;

    // 13号館：価格・栄養価が未登録なら登録を防止
    if (
      activeBuilding === "13" &&
      (
        !hasCompleteNutrition(selectedFood) ||
        typeof selectedFood.price !== "number" ||
        !Number.isFinite(selectedFood.price) ||
        selectedFood.price < 0
      )
    ) {
      alert("このメニューは価格または栄養情報を確認中のため、現在は食事登録できません。");
      return;
    }

    const alreadySelected = selectedFoods.some(f => f.id === selectedFood.id);

    if (alreadySelected) {
      return;
    }

    let foodToAdd = {
      ...selectedFood,
      baseId: selectedFood.id,
      isLarge: false
    };

    const largeOptionCheck = document.getElementById("largeOptionCheck");

    if (largeOptionCheck.checked) {
      const largeOption = MENU_DATA.items.find(item =>
        item.category === selectedFood.category &&
        item.tags.includes("option")
      );

      if (largeOption) {
        foodToAdd = {
          ...foodToAdd,
          isLarge: true,
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
      foodToAdd = {
        ...foodToAdd,
        isSoupLess: true,
        name: `${foodToAdd.name}（スープなし）`,
        salt_g: foodToAdd.salt_g * 0.5
      };
    }

    selectedFoods.push(foodToAdd);

    document.getElementById("detailPage").style.display = "none";
    document.getElementById("selectMenuPage").style.display = "block";

    renderMenuList();
    updateSelectedBar();

    window.scrollTo({
      top: 0,
      behavior: "auto"
    });

  });

document.getElementById("finishSelectBtn")
  .addEventListener("click", () => {

    if (selectedFoods.length === 0) return;

    const totalFood = makeTotalFood();

    renderConfirmModal();

    if (registeredFoods.length === 0) {
      document.getElementById("confirmRegisterBtn").textContent = "この内容で登録";
    } else {
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

