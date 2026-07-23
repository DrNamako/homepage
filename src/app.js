import "./style.css";

// ==========================
// Swiper
// ==========================
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

// ==========================
// AOS
// ==========================
import AOS from "aos";
import "aos/dist/aos.css";

// ==========================
// JustValidate
// ==========================
import JustValidate from "just-validate";

// ==========================
// tsParticles
// ==========================
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

// =================================================
// tsParticles 初期化
// =================================================
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
          value: 20,
          density: {
            enable: true,
            area: 800,
          },
        },

        color: {
          value: "#FFD54F",
        },

        shape: {
          type: "circle",
        },

        opacity: {
          value: 0.35,
        },

        size: {
          value: {
            min: 2,
            max: 6,
          },
        },

        move: {
          enable: true,
          speed: 0.8,
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

// =================================================
// AOS
// =================================================
AOS.init({

  duration: 800,
  once: true,

});

// =================================================
// Swiper
// =================================================
new Swiper(".swiper", {

  loop: true,

  autoplay: {

    delay: 3000,
    disableOnInteraction: false,

  },

  pagination: {

    el: ".swiper-pagination",
    clickable: true,

  },

  navigation: {

    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",

  },

});

// =================================================
// JustValidate
// =================================================
const validator = new JustValidate("#basic_form", {

  errorFieldCssClass: "is-invalid",

  errorLabelStyle: {

    color: "#d9534f",
    fontSize: "13px",

  },

});

validator

.addField("#basic_name", [

  {
    rule: "required",
    errorMessage: "名前を入力してください",
  },

])

.addField("#basic_email", [

  {
    rule: "required",
    errorMessage: "メールアドレスを入力してください",
  },

  {
    rule: "email",
    errorMessage: "メールアドレスの形式が正しくありません",
  },

])

.onSuccess((event) => {

  event.preventDefault();

  alert("送信ありがとうございました！");

});