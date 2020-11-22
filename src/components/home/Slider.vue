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
  </div>
</template>

<script>
/* eslint-disable */
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
  }
};
</script>
