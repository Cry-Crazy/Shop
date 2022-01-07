function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
});

const body = document.querySelector('body');
const burgerButton = document.querySelector('.icon-menu');
if (burgerButton) {
	const menuBurger = document.querySelector('.menu__body');
	burgerButton.addEventListener("click", function (e) {
		burgerButton.classList.toggle('_active')
		menuBurger.classList.toggle('_active')
        body.classList.toggle('lock');
	})
};

const goodsFW = new Swiper('.goods-for-wooman__swiper', {

    loop: true,

    navigation: {
        nextEl: '.goods-for-wooman__btn-next',
        prevEl: '.goods-for-wooman__btn-prev',
      },

      slidesPerView: "auto",

      spaceBetween: 5,
  
      grabCursor: true,

      breakpoints: {
          320: {
            centeredSlides: true,
          },

          767: {
            centeredSlides: false,
          }
      },

})

const goodsFM = new Swiper('.goods-for-man__swiper', {
  
    loop: true,

    navigation: {
        nextEl: '.goods-for-man__btn-next',
        prevEl: '.goods-for-man__btn-prev',
      },

      slidesPerView: "auto",

      spaceBetween: 5,
  
      grabCursor: true,

      breakpoints: {
          320: {
            centeredSlides: true,
          },

          767: {
            centeredSlides: false,
          }
      },

})

const goodsFK = new Swiper('.goods-for-kid__swiper', {

    loop: true,

    navigation: {
        nextEl: '.goods-for-kid__btn-next',
        prevEl: '.goods-for-kid__btn-prev',
      },

      slidesPerView: "auto",

      spaceBetween: 5,
  
      grabCursor: true,

      breakpoints: {
          320: {
            centeredSlides: true,
          },

          767: {
            centeredSlides: false,
          }
      },

})

const searchIcon = document.querySelector('.search-icon');
const searchInput = document.querySelector('.menu__input');

const expand = () => {
  searchInput.classList.toggle('open');
}

searchIcon.addEventListener("click", expand);


