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
  let activityLevel = getActivityLevel(age); if (bmi >= 25) {
    activityLevel -= 0.1;
  } else if (bmi < 18.5) { activityLevel += 0.1; } const dailyEnergy = weight * basalRate * activityLevel; const
    mealEnergy = dailyEnergy / 3; return {
      energy_kcal: mealEnergy, protein_g: mealEnergy * 0.165 / 4, fat_g:
        mealEnergy * 0.25 / 9, carb_g: mealEnergy * 0.575 / 4, salt_g: gender === "male" ? 2.5 : 2.2
    };
} function
  toRadarData(item) {
  return [item.energy_kcal / RADAR_MAX.energy_kcal * 10, item.protein_g / RADAR_MAX.protein_g
    * 10, item.fat_g / RADAR_MAX.fat_g * 10, item.carb_g / RADAR_MAX.carb_g * 10, item.salt_g / RADAR_MAX.salt_g *
  10].map(v => Math.round(Math.min(v, 10) * 10) / 10);
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
   起動時はログアウト状態にする
========================= */
localStorage.removeItem("currentUser");

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

function sendMealDataToSheet() {
  if (!registeredTotalFood || registeredFoods.length === 0) return;

  const data = {
    studentId: storage.getItem(getUserKey("studentId")) || "",
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

/* =========================
基本設定と要素の取得
========================= */


let currentStep = 0;
let selectedFood = null;
let activeCategory = MENU_DATA.categories[0].id;
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
const studentIdInput = document.getElementById("studentId");

let selectedGender = null;

/* =========================
   学籍番号を入力したら次へを有効化
========================= */
function updateStudentIdButton() {
  if (studentIdInput.value.trim() !== "") {
    enableButton();
  } else {
    disableButton();
  }
}

studentIdInput.addEventListener("input", updateStudentIdButton);

// 最初から値が入っている場合も判定
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

  // ★ログインしたユーザーの基本情報を読み込む
  loadUserProfileIntoForm();

  // ★ログインしたユーザーの今日の食事を読み込む
  loadTodayMealFromHistory();

  loginPage.style.display = "none";

  /* 保存済みの基本情報を確認 */
  const savedStudentId = storage.getItem(getUserKey("studentId"));
  const savedGender = storage.getItem(getUserKey("gender"));
  const savedAge = storage.getItem(getUserKey("age"));
  const savedHeight = storage.getItem(getUserKey("height"));
  const savedWeight = storage.getItem(getUserKey("weight"));

  const hasAllProfileData =
    savedStudentId &&
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

  currentStep = 0;

  questions.forEach((question, index) => {
    question.classList.toggle("active", index === 0);
  });

  progressSteps.forEach((step, index) => {
    step.classList.toggle("active", index === 0);
  });

  if (savedStudentId) {
    studentIdInput.value = savedStudentId;
  }

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

  // ★新規登録したユーザーの基本情報を読み込む
  loadUserProfileIntoForm();

  // ★新規登録したユーザーの今日の食事を読み込む
  loadTodayMealFromHistory();

  registerPage.style.display = "none";

  progressContainer.style.display = "flex";
  inputCard.style.display = "flex";

  currentStep = 0;

  questions.forEach((question, index) => {
    question.classList.toggle("active", index === 0);
  });

  progressSteps.forEach((step, index) => {
    step.classList.toggle("active", index === 0);
  });

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

  const savedStudentId = storage.getItem(getUserKey("studentId"));
  const savedGender = storage.getItem(getUserKey("gender"));
  const savedAge = storage.getItem(getUserKey("age"));
  const savedHeight = storage.getItem(getUserKey("height"));
  const savedWeight = storage.getItem(getUserKey("weight"));
  if (savedStudentId) {
    studentIdInput.value = savedStudentId;
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

  if (savedStudentId) {
    currentStep = 1;

    questions[0].classList.remove("active");
    questions[1].classList.add("active");

    progressSteps[0].classList.add("active");
    progressSteps[1].classList.add("active");

    if (selectedGender) {
      enableButton();
    } else {
      disableButton();
    }
  } else {
    if (studentIdInput.value.trim() !== "") {
      enableButton();
    } else {
      disableButton();
    }
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
    storage.setItem(getUserKey("studentId"), studentIdInput.value.trim());
    storage.setItem(getUserKey("gender"), selectedGender);
    storage.setItem(getUserKey("age"), ageSelect.value);
    storage.setItem(getUserKey("height"), heightSelect.value);
    storage.setItem(getUserKey("weight"), weightSelect.value);

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
    window.scrollTo({ top: 0, behavior: "auto" });
    return;
  }

  questions[currentStep].classList.remove("active");
  currentStep++;
  questions[currentStep].classList.add("active");
  progressSteps[currentStep].classList.add("active");

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
  tabBar.innerHTML = MENU_DATA.categories.map(cat => `
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

    if (ratio > 1.2) {
      status = "多め";
      className = "high";
    } else {
      status = "控えめ";
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

  /* =========================
     現在のユーザーの1食基準
  ========================= */
  const ideal = getIdealNutrition();

  const items = MENU_DATA.items.filter(item =>
    item.category === activeCategory &&
    !item.tags.includes("option")
  );

  if (items.length === 0) {
    menuList.innerHTML =
      `<div class="empty-msg">このカテゴリのメニューはまだありません</div>`;
    return;
  }


  menuList.innerHTML = items.map(item => {

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
                src="images/${item.category}/${item.id}.png"
                alt="${item.name}"
                loading="lazy"
                onerror="
                  this.onerror = null;
                  this.src = 'images/no-image.png';
                "
              >

              <span class="menu-calorie-badge">
                ${item.energy_kcal} kcal
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
                  ¥${item.price}
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

  document.getElementById("detailPrice").textContent = `¥${displayFood.price}`;

  document.getElementById("nutritionGrid").innerHTML =
    NUTRITION_FIELDS.map(f => {
      const diff = displayFood[f.key] - ideal[f.key];
      const diffClass = diff >= 0 ? "diff-plus" : "diff-minus";
      const diffText =
        diff >= 0
          ? `↑+${diff.toFixed(1)}${f.unit}`
          : `↓${Math.abs(diff).toFixed(1)}${f.unit}`;

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
                  基準 ${ideal[f.key].toFixed(1)}${f.unit}
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
          label: "理想",
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
  selectedFood = MENU_DATA.items.find(i => i.id === itemId);
  if (!selectedFood) return;

  const alreadySelected = selectedFoods.some(f => f.id === selectedFood.id);

  document.getElementById("registerBtn").style.display =
    menuMode === "select" && !alreadySelected ? "block" : "none";

  const category = MENU_DATA.categories.find(c => c.id === selectedFood.category);

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
              <img src="images/${selectedFood.category}/${selectedFood.id}.png" alt="${selectedFood.name}"
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

  if (totalFood.salt_g > ideal.salt_g * 1.2) {
    advice.push("食塩相当量が高めです。");
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

                <div class="nutrition-grid">
                  ${NUTRITION_FIELDS.map(f => `
                  <div class="nutrition-item">
                    <div class="n-label">${f.label}</div>
                    <div class="n-value">
                      ${totalFood[f.key].toFixed(1)}
                      <span class="n-unit">${f.unit}</span>
                    </div>
                  </div>
                  `).join("")}
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
          label: "理想",
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
  const todayKey = new Date().toISOString().slice(0, 10);
  const mealHistory = JSON.parse(
    storage.getItem(getUserKey("mealHistory")) || "{}"
  );

  if (!mealHistory[todayKey]) return;

  registeredFoods = mealHistory[todayKey].foods || [];
  registeredTotalFood = mealHistory[todayKey].total || null;
}
function saveTodayMealToHistory() {
  const todayKey = new Date().toISOString().slice(0, 10);
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
} function getRecommendFoods(lackingNutrients) {
  const
    sideFoods = MENU_DATA.items.filter(item =>
      item.category === "side" &&
      !item.tags.includes("option")
    );

  if (lackingNutrients.includes("たんぱく質")) {
    return sideFoods.filter(item =>
      item.protein_g >= 3
    );
  }

  if (lackingNutrients.includes("炭水化物")) {
    return sideFoods.filter(item =>
      item.carb_g >= 10
    );
  }

  if (lackingNutrients.includes("エネルギー")) {
    return sideFoods.filter(item =>
      item.energy_kcal >= 80
    );
  }

  return sideFoods.slice(0, 3);
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
          label: "理想",
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

                            <img class="today-food-image" src="images/${category}/${imageId}.png" alt="${food.name}"
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
                        青色が目標、オレンジ色が今日の摂取量です。
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

                      <div class="nutrition-grid">

                        ${NUTRITION_FIELDS.map(field => {
    const actualValue = totalFood[field.key];
    const idealValue = ideal[field.key];
    const diff = actualValue - idealValue;

    const ratio = actualValue / idealValue;

    let nutritionState = "is-good";
    let diffClass = "diff-good";
    let diffText = "適正";

    if (ratio < 0.8) {
      nutritionState = "is-low"; diffClass = "diff-minus"; diffText = `不足
                          ${Math.abs(diff).toFixed(1)}${field.unit}`;
    } else if (ratio > 1.2) {
      nutritionState = "is-high";
      diffClass = "diff-plus";
      diffText = `多め +${diff.toFixed(1)}${field.unit}`;
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
                              目標 ${idealValue.toFixed(1)}${field.unit}
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
            label: "理想",
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
                    <p>学籍番号：${studentId || "未登録"}</p>
                    <p>性別：${gender === "male" ? "男性" : "女性"}</p>
                    <p>年齢：${age}歳</p>
                    <p>身長：${height}cm</p>
                    <p>体重：${weight}kg</p>
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

    currentStep = 0;

    studentIdInput.value = "";
    nextBtn.disabled = true;
    nextBtn.classList.remove("enabled");

    questions.forEach(q => q.classList.remove("active"));
    questions[0].classList.add("active");

    progressSteps.forEach((step, index) => {
      step.classList.toggle("active", index === 0);
    });

    window.scrollTo({ top: 0, behavior: "auto" });
  };
}

function renderCalendar() {

  const mealHistory =
    JSON.parse(storage.getItem(getUserKey("mealHistory")) || "{}");

  const year = calendarYear;
  const month = calendarMonth;

  const firstDay = new Date(year, month, 1).getDay();

  const lastDate = new Date(year, month + 1, 0).getDate();

  let html = `
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
        todayKey = new Date().toISOString().slice(0, 10); const isToday = dateKey === todayKey; html += ` <button
                      class="calendar-day ${hasMeal ? " has-meal" : ""}" data-date="${dateKey}" ${hasMeal ? ""
            : "disabled"}>
                      ${day}

                      ${hasMeal ? "<div>🍽</div>" : ""}
                      </button>
                      `;
  }

  html += `
                  </div>
  </div>
  `;

  document.getElementById("calendarArea").innerHTML = html;

  document.querySelectorAll(".calendar-day").forEach(btn => {
    btn.addEventListener("click", () => {
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

  if (!data) return;

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

      <p>エネルギー：${data.total.energy_kcal.toFixed(1)}kcal</p>
      <p>たんぱく質：${data.total.protein_g.toFixed(1)}g</p>
      <p>脂質：${data.total.fat_g.toFixed(1)}g</p>
      <p>炭水化物：${data.total.carb_g.toFixed(1)}g</p>
      <p>食塩相当量：${data.total.salt_g.toFixed(1)}g</p>
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

    registeredFoods = [
      ...registeredFoods,
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
    sendMealDataToSheet();
    const todayKey = new Date().toISOString().slice(0, 10);

    const mealHistory = JSON.parse(
      storage.getItem(getUserKey("mealHistory")) || "{}"
    );

    mealHistory[todayKey] = {
      date: todayKey,
      foods: registeredFoods,
      total: registeredTotalFood
    };

    storage.setItem(
      getUserKey("mealHistory"),
      JSON.stringify(mealHistory)
    );

    selectedFoods = [];
    renderMenuList();
    updateSelectedBar();

    document.getElementById("confirmModal").style.display = "none";
    document.getElementById("selectMenuPage").style.display = "none";
    document.getElementById("detailPage").style.display = "none";
    document.getElementById("todayPage").style.display = "block";
    document.getElementById("mypagePage").style.display = "none";

    document
      .getElementById("appContainer")
      .classList.add("has-bottom-nav");

    document.getElementById("bottomNav").style.display = "flex";

    renderTodayPage();
    setActiveTab(todayTab);

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

