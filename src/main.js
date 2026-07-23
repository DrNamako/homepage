import "./style.css";

// =========================
// ライブラリ
// =========================
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

import JustValidate from "just-validate";

import AOS from "aos";
import "aos/dist/aos.css";

import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

// =========================
// tsParticles
// =========================
async function initParticles() {
  await loadSlim(tsParticles);

  await tsParticles.load({
    id: "tsparticles",
    options: {
      fullScreen: {
        enable: true,
        zIndex: -1,
      },

      background: {
        color: "transparent",
      },

      fpsLimit: 60,

      particles: {
        number: {
          value: 25,
          density: {
            enable: true,
            area: 900,
          },
        },

        color: {
          value: "#ffd54f",
        },

        opacity: {
          value: 0.2,
        },

        size: {
          value: {
            min: 2,
            max: 5,
          },
        },

        shape: {
          type: "circle",
        },

        move: {
          enable: true,
          speed: 0.6,
          direction: "top",
          random: true,
          straight: false,
          outModes: {
            default: "out",
          },
        },
      },

      detectRetina: true,
    },
  });
}

initParticles();

// =========================
// AOS
// =========================
AOS.init({
  duration: 900,
  once: true,
});

// =========================
// 1つ目のSwiper
// =========================

// スライド下の名前を更新する関数
const catNames = [
  "なおなお",
  "ちゃこくん",
  "はなまる",
  "ましゅ",
];

function updateCatName(index) {
  const counter = document.getElementById("slide-counter");

  if (!counter) return;

  counter.textContent = `${catNames[index]} を表示しています`;
}

const swiperFirst = new Swiper(".swiper-first", {
  loop: true,

  pagination: {
    el: ".swiper-first .swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-first .swiper-button-next",
    prevEl: ".swiper-first .swiper-button-prev",
  },

  on: {
    init() {
      updateCatName(this.realIndex);
    },

    slideChange() {
      updateCatName(this.realIndex);
    },
  },
});

// =========================
// 2つ目のSwiper
// =========================
const swiperSecond = new Swiper(".swiper-second", {
  loop: true,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-second .swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-second .swiper-button-next",
    prevEl: ".swiper-second .swiper-button-prev",
  },
});

// =========================
// フォームバリデーション
// =========================
const validator = new JustValidate("#basic_form", {
  errorFieldCssClass: "is-invalid",

  errorLabelStyle: {
    color: "#d9534f",
    fontSize: "13px",
    marginTop: "5px",
  },
});

validator
  .addField("#basic_name", [
    {
      rule: "required",
      errorMessage: "お名前を入力してください。",
    },
    {
      rule: "minLength",
      value: 2,
      errorMessage: "2文字以上入力してください。",
    },
  ])

  .addField("#basic_email", [
    {
      rule: "required",
      errorMessage: "メールアドレスを入力してください。",
    },
    {
      rule: "email",
      errorMessage: "メールアドレスの形式が正しくありません。",
    },
  ])

  .addField("#basic_password", [
    {
      rule: "required",
      errorMessage: "パスワードを入力してください。",
    },
    {
      rule: "password",
      errorMessage: "8文字以上・数字を含めてください。",
    },
  ])

  .addField("#basic_age", [
    {
      rule: "required",
      errorMessage: "猫歴を入力してください。",
    },
    {
      rule: "number",
      errorMessage: "数字を入力してください。",
    },
    {
      rule: "minNumber",
      value: 0,
      errorMessage: "0以上を入力してください。",
    },
  ])

  .addField("#basic_address", [
    {
      rule: "required",
      errorMessage: "地域を入力してください。",
    },
  ])

  .onSuccess((event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    alert("送信ありがとうございました！");

    console.log(formData.get("name"));
  });