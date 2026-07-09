import './style.css';
import JustValidate from 'just-validate';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// --- 1. 1つ目のスライダー（横スライド・番号表示機能付き） ---
const swiperFirst = new Swiper('.swiper-first', {
  direction: 'horizontal', // 縦から横（← →）スライドに変更
  loop: true,
  pagination: {
    el: '.swiper-first .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-first .swiper-button-next',
    prevEl: '.swiper-first .swiper-button-prev',
  },
  // イベント（Events）の設定
  on: {
    slideChange: function () {
      // 授業で習った getElementById で表示場所を特定
      const counterEl = document.getElementById('slide-counter');
      if (counterEl) {
        // loop: true の時は realIndex プロパティで現在表示中の正しい番号(0から始まる)が取れる
        const currentNumber = this.realIndex + 1;
        
        // 既存の文字を綺麗にしてから、新しいテキストを流し込む
        counterEl.innerHTML = '';
        const textNode = document.createTextNode(`スライド${currentNumber}を表示しています。`);
        counterEl.appendChild(textNode);
      }
    },
  },
});

// --- 2. 2つ目のスライダー（画像＋タイトル用） ---
const swiperSecond = new Swiper('.swiper-second', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 4000,
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

// --- 3. JustValidate（バリデーション）の設定 ---
const validator = new JustValidate('#basic_form', {
  errorFieldCssClass: 'is-invalid',
  errorLabelStyle: {
    color: '#e04444',
    fontSize: '13px',
    marginTop: '5px'
  }
});

validator
  .addField('#basic_name', [
    { rule: 'required', errorMessage: '必須入力項目です。' },
    { rule: 'minLength', value: 3, errorMessage: '3文字以上で入力してください。' },
    { rule: 'maxLength', value: 15, errorMessage: '最大入力文字数は15文字です。' },
  ])
  .addField('#basic_email', [
    { rule: 'required', errorMessage: '必須入力項目です。' },
    { rule: 'email', errorMessage: 'メールアドレスの形式が正しくありません。' },
  ])
  .addField('#basic_password', [
    { rule: 'required', errorMessage: '必須入力項目です。' },
    { rule: 'password', errorMessage: 'パスワードは8文字以上、数字を1文字以上含めてください。' },
  ])
  .addField('#basic_age', [
    { rule: 'required', errorMessage: '必須入力項目です。' },
    { rule: 'number', errorMessage: '数字で入力してください。' },
    { rule: 'minNumber', value: 18, errorMessage: '18以上の数字を入力してください。' },
    { rule: 'maxNumber', value: 150, errorMessage: '150以下の数字を入力してください。' },
  ])
  .addField('#basic_address', [
    { rule: 'required', errorMessage: '必須入力項目です。' },
  ])
  .onSuccess((event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    alert('送信に成功しました！');
    console.log('名前:', formData.get('name'));
  });