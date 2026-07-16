import './style.css';
import JustValidate from 'just-validate';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// === 【追加ライブラリ】AOS (スクロールアニメーション) の読み込み ===
import AOS from 'aos';
import 'aos/dist/aos.css';

// ===================================================
// 1. 1つ目のスライダー（特徴の紹介スライダー）
// ===================================================
const swiperFirst = new Swiper('.swiper-first', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-first .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-first .swiper-button-next',
    prevEl: '.swiper-first .swiper-button-prev',
  },
  on: {
    slideChange: function () {
      const counterEl = document.getElementById('slide-counter');
      if (counterEl) {
        const currentNumber = this.realIndex + 1;
        counterEl.innerHTML = '';
        // 後からここの文言も自由に変更可能です
        const textNode = document.createTextNode(`特徴その ${currentNumber} を表示しています。`);
        counterEl.appendChild(textNode);
      }
    },
  },
});

// ===================================================
// 2. 2つ目のスライダー（フォトギャラリー）
// ===================================================
const swiperSecond = new Swiper('.swiper-second', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 4500, // スライドが切り替わる速度（4.5秒）
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-second .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-second .swiper-button-next',
    prevEl: '.swiper-second .swiper-button-prev',
  },
});

// ===================================================
// 3. フォームの入力バリデーション（JustValidate）
// ===================================================
const validator = new JustValidate('#basic_form', {
  errorFieldCssClass: 'is-invalid',
  errorLabelStyle: {
    color: '#d9534f', // 落ち着いたくすみ赤に変更（AI感削減）
    fontSize: '13px',
    marginTop: '5px'
  }
});

// ルールの設定（ここを書き換えるだけで必須条件や文字数のルールを後から編集可能）
validator
  .addField('#basic_name', [
    { rule: 'required', errorMessage: 'お名前を入力してください。' },
    { rule: 'minLength', value: 2, errorMessage: 'お名前は2文字以上で入力してください。' },
  ])
  .addField('#basic_email', [
    { rule: 'required', errorMessage: 'メールアドレスは必須です。' },
    { rule: 'email', errorMessage: 'メールアドレスの形式が正しくありません。' },
  ])
  .addField('#basic_password', [
    { rule: 'required', errorMessage: 'パスワードを入力してください。' },
    { rule: 'password', errorMessage: 'セキュリティのため8文字以上（数字を1文字以上含む）にしてください。' },
  ])
  .addField('#basic_age', [
    { rule: 'required', errorMessage: '猫歴を入力してください。' },
    { rule: 'number', errorMessage: '半角数字で入力してください。' },
    { rule: 'minNumber', value: 0, errorMessage: '0以上の数値を入力してください。' },
  ])
  .addField('#basic_address', [
    { rule: 'required', errorMessage: 'お住まいの地域を入力してください。' },
  ])
  .onSuccess((event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    alert('温かいメッセージありがとうございました！送信に成功しました。');
    console.log('送信された名前:', formData.get('name'));
  });

// ===================================================
// 4. AOS（スクロールでフワッと出すアニメーション）の初期設定
// ===================================================
AOS.init({
  duration: 900, // フワッと表示される速度（0.9秒かけてなめらかに）
  once: true,    // 1回表示されたら、スクロールを戻しても再アニメーションさせない（落ち着いた挙動）
});