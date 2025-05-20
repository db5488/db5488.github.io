// 找到 swiper-wrapper 元素
const swiperWrapper = document.querySelector(
  '.swiper.mySwiper .swiper-wrapper',
);

// 預先定義 JSON 陣列資料
let jsonData = [
  { picSrc: 'assets/img/inner/t5.jpg', iconSrc: 'mapIcon.png', content: 111 },
  { picSrc: 'assets/img/inner/u2.jpg', iconSrc: 'mapIcon.png', content: 222 },
  { picSrc: 'assets/img/inner/u4.jpg', iconSrc: 'mapIcon.png', content: 333 },
  { picSrc: 'assets/img/inner/u5.jpg', iconSrc: 'mapIcon.png', content: 444 },
  {
    picSrc: 'assets/img/inner/岳陽樓.jpg',
    iconSrc: 'mapIcon.png',
    content: 555,
  },
  {
    picSrc: 'assets/img/inner/鳳凰古城.jpg',
    iconSrc: 'mapIcon.png',
    content: 666,
  },
];

const setBanner = () => {
  // 清空 swiper-wrapper 內容
  swiperWrapper.innerHTML = '';

  // 根據 JSON 陣列動態產生 slide 元素
  jsonData.forEach((data) => {
    // 建立 slide 容器，加入 swiper-slide 與 img-container class
    const slideDiv = document.createElement('div');
    slideDiv.classList.add('swiper-slide', 'img-container');

    // 建立主要圖片
    const mainImg = document.createElement('img');
    mainImg.src = data.picSrc;
    mainImg.alt = '圖' + data.content;
    slideDiv.appendChild(mainImg);

    // 建立 p 元素，加入 icon 與文字
    const pEl = document.createElement('p');
    const iconImg = document.createElement('img');
    iconImg.src = data.iconSrc;
    iconImg.alt = 'icon';
    pEl.appendChild(iconImg);
    pEl.appendChild(document.createTextNode(data.content));
    slideDiv.appendChild(pEl);

    // 將產生的新 slide 加入 swiper-wrapper
    swiperWrapper.appendChild(slideDiv);
  });

  // 初始化 Swiper (包含自動播放、置中放大及響應式斷點)
  const swiper = new Swiper('.mySwiper', {
    slidesPerView: 3,
    centeredSlides: true, // 啟用中間置中
    speed: 700, // 平滑過渡效果
    spaceBetween: 25, // slide 間距
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    initialSlide: -1, // 若要固定從第一張開始，則改為 0
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1024: { slidesPerView: 3, spaceBetween: 25 },
      768: { slidesPerView: 3, spaceBetween: 20 },
      480: { slidesPerView: 2 },
      0: { slidesPerView: 1 },
    },
  });
};

const setfocus = (thisObj) => {
  // 清空原本內容
  swiperWrapper.innerHTML = '';
  let selected = document.querySelector('.selected');
  if (selected) {
    selected.classList.remove('selected');
  }
  thisObj.classList.add('selected');
  selected = document.querySelector('.selected');

  const area = thisObj.getAttribute('data-area');
  if (area == '台灣') {
    jsonData = [
      {
        picSrc: 'assets/img/outter/o1.jpg',
        iconSrc: 'mapIcon.png',
        content: 111,
      },
      {
        picSrc: 'assets/img/outter/o2.jpg',
        iconSrc: 'mapIcon.png',
        content: 222,
      },
      {
        picSrc: 'assets/img/outter/o3.jpg',
        iconSrc: 'mapIcon.png',
        content: 333,
      },
      {
        picSrc: 'assets/img/outter/o4.jpg',
        iconSrc: 'mapIcon.png',
        content: 444,
      },
      {
        picSrc: 'assets/img/outter/o5.jpg',
        iconSrc: 'mapIcon.png',
        content: 555,
      },
      {
        picSrc: 'assets/img/outter/o6.jpg',
        iconSrc: 'mapIcon.png',
        content: 666,
      },
    ];
  } else if (area == '江西') {
    jsonData = [
      {
        picSrc: 'assets/img/inner/t5.jpg',
        iconSrc: 'mapIcon.png',
        content: 111,
      },
      {
        picSrc: 'assets/img/inner/u2.jpg',
        iconSrc: 'mapIcon.png',
        content: 222,
      },
      {
        picSrc: 'assets/img/inner/u4.jpg',
        iconSrc: 'mapIcon.png',
        content: 333,
      },
      {
        picSrc: 'assets/img/inner/u5.jpg',
        iconSrc: 'mapIcon.png',
        content: 444,
      },
      {
        picSrc: 'assets/img/inner/岳陽樓.jpg',
        iconSrc: 'mapIcon.png',
        content: 555,
      },
      {
        picSrc: 'assets/img/inner/鳳凰古城.jpg',
        iconSrc: 'assets/mapIcon.png',
        content: 666,
      },
    ];
  }
  setBanner();
};

document.addEventListener('DOMContentLoaded', () => {
  setBanner();
});
