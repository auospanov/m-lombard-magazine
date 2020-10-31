<template>
  <div class="sliders-wrapper">
    <div class="home-slider">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="home-s-w">
              <div class="slideshow-container owl-theme">
                <div class="owl-carousel big-slider">
                  <div class="item">
                    <img src="@/assets/images/banners_ru.jpg" alt="баннер" />
                  </div>
                  <div class="item">
                    <img src="@/assets/images/banners_ru.jpg" alt="баннер" />
                  </div>
                  <div class="item">
                    <img src="@/assets/images/banners_ru.jpg" alt="баннер" />
                  </div>
                  <div class="item">
                    <img src="@/assets/images/banners_ru.jpg" alt="баннер" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="brands-slider">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="brands-s-w">
              <div class="slideshow-container">
                <div class="owl-carousel small-slider">
                  <div class="item">
                    <a href="" class="brands-slider-a">
                      <img src="@/assets/images/logos1.jpg" alt="brand" />
                    </a>
                  </div>
                  <div class="item">
                    <a href="" class="brands-slider-a">
                      <img src="@/assets/images/logos2.jpg" alt="brand" />
                    </a>
                  </div>
                  <div class="item">
                    <a href="" class="brands-slider-a">
                      <img src="@/assets/images/logos3.jpg" alt="brand" />
                    </a>
                  </div>
                  <div class="item">
                    <a href="" class="brands-slider-a">
                      <img src="@/assets/images/logos4.jpg" alt="brand" />
                    </a>
                  </div>
                  <div class="item">
                    <a href="" class="brands-slider-a">
                      <img src="@/assets/images/logos5.jpg" alt="brand" />
                    </a>
                  </div>
                  <div class="item">
                    <a href="" class="brands-slider-a">
                      <img src="@/assets/images/logos6.jpg" alt="brand" />
                    </a>
                  </div>
                  <div class="item">
                    <a href="" class="brands-slider-a">
                      <img src="@/assets/images/logos7.jpg" alt="brand" />
                    </a>
                  </div>
                  <div class="item">
                    <a href="" class="brands-slider-a">
                      <img src="@/assets/images/logos8.jpg" alt="brand" />
                    </a>
                  </div>
                  <div class="item">
                    <a href="" class="brands-slider-a">
                      <img src="@/assets/images/logos9.jpg" alt="brand" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
// import '@/assets/css/owl.carousel.min.css';
// import '@/assets/css/owl.theme.default.min.css';
// import '@/assets/js/owl.carousel.min.js';

export default {
  name: 'Slider',
  mounted() {
        /* big slider */
    $(".big-slider").owlCarousel({
        loop:true, //Зацикливаем слайдер
        // margin:10, Отступ от картино если выводите больше 1
        nav:true, //Отключил навигацию
        autoplay:true, //Автозапуск слайдера
        dots:true,
        smartSpeed:1000, //Время движения слайда
        autoplayTimeout:3000, //Время смены слайда
        responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items:1
            }
        }
    });
    /* big slider */

    /* brands slider */
    $(".small-slider").owlCarousel({
        loop:true, //Зацикливаем слайдер
        // margin:10, Отступ от картино если выводите больше 1
        nav:false, //Отключил навигацию
        autoplay:true, //Автозапуск слайдера
        dots:false,
        smartSpeed:1000, //Время движения слайда
        autoplayTimeout:3000, //Время смены слайда
        responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items:4
            },
            1000:{
                items:9
            }
        }
    });
    /* brands slider */
  }
};
</script>
