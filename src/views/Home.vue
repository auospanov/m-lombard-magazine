<template>
  <div class="home">
    <Slider />
    <div class="home-goods home-goods--desktop">
      <div class="container">
        <div class="row goods-row">
          <div class="col-md-6 col-lg-6 col-sm-12 col-12">
            <a href="#">
              <img src="@/assets/images/img3.png" alt="" />
            </a>
          </div>
          <div class="col-md-3 col-lg-3 col-sm-12 col-12">
            <a href="#">
              <img src="@/assets/images/img1.png" alt="" />
            </a>
          </div>
          <div class="col-md-3 col-lg-3 col-sm-12 col-12">
            <a href="#">
              <img src="@/assets/images/img2.png" alt="" />
            </a>
          </div>
        </div>
        <div class="row goods-row">
          <div class="col-md-3 col-lg-3 col-sm-12 col-12">
            <a href="#">
              <img src="@/assets/images/img5.png" alt="" />
            </a>
          </div>
          <div class="col-md-3 col-lg-3 col-sm-12 col-12">
            <a href="#">
              <img src="@/assets/images/img6.png" alt="" />
            </a>
          </div>
          <div class="col-md-6 col-lg-6 col-sm-12 col-12">
            <a href="#">
              <img src="@/assets/images/img4.png" alt="" />
            </a>
          </div>
        </div>
        <div class="row goods-row">
          <div class="col-md-6 col-lg-6 col-sm-12 col-12">
            <a href="#">
              <img src="@/assets/images/img9.png" alt="" />
            </a>
          </div>
          <div class="col-md-3 col-lg-3 col-sm-12 col-12">
            <a href="#">
              <img src="@/assets/images/img7.png" alt="" />
            </a>
          </div>
          <div class="col-md-3 col-lg-3 col-sm-12 col-12">
            <a href="#">
              <img src="@/assets/images/img8.png" alt="" />
            </a>
          </div>
        </div>
        <div class="row goods-row">
          <div class="col-md-6 col-lg-6 col-sm-12 col-12">
            <a href="#">
              <img src="@/assets/images/img10.png" alt="" />
            </a>
          </div>
          <div class="col-md-3 col-lg-3 col-sm-12 col-12">
            <a href="#">
              <img src="@/assets/images/img11.png" alt="" />
            </a>
          </div>
          <div class="col-md-3 col-lg-3 col-sm-12 col-12">
            <a href="#">
              <img src="@/assets/images/img12.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="home-goods--mobile">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <vueper-slides
              class="no-shadow"
              :bullets="false"
              :arrows="false"
              :visible-slides="2"
              slide-multiple
              :dragging-distance="50"
              :slide-ratio="1 / 2"
            >
              <vueper-slide
                v-for="(slide, i) in categorySlides"
                :key="i"
                :image="slide.image"
              />
            </vueper-slides>
          </div>
        </div>
      </div>
    </div>
    <div class="home-recent">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 class="global-title">Вы недавно смотрели</h2>
          </div>
        </div>
        <div class="row home-recent__slides-row">
          <div class="col-12">
            <vueper-slides
              class="no-shadow"
              :bullets="false"
              :arrows="false"
              :visible-slides="4"
              :slide-ratio="1 / 5"
              slide-multiple
              :dragging-distance="50"
              :breakpoints="{ 768: { visibleSlides: 3, slideMultiple: 3 } }"
            >
              <vueper-slide
                v-for="(slide, i) in recentSlides"
                :key="i"
                :image="slide.image"
              />
            </vueper-slides>
          </div>
        </div>
      </div>
    </div>
    <div class="home-suggestions">
       <div class="container">
         <div class="row">
           <div class="col-12">
             <h2 class="global-title">Вам может понравиться</h2>
           </div>
         </div>
         <div class="row home-suggestions__products-row home-suggestions__products-row--first">
           <div class="col-md-3 col-6">
              <a href="#">
                <img src="@/assets/images/suggestion-1.jpg" alt="" />
              </a>
           </div>
           <div class="col-md-3 col-6">
              <a href="#">
                <img src="@/assets/images/suggestion-2.jpg" alt="" />
              </a>
           </div>
           <div class="col-md-3 col-6">
              <a href="#">
                <img src="@/assets/images/suggestion-3.jpg" alt="" />
              </a>
           </div>
           <div class="col-md-3 col-6">
              <a href="#">
                <img src="@/assets/images/suggestion-4.jpg" alt="" />
              </a>
           </div>
         </div>
         <div class="row home-suggestions__products-row">
           <div class="col-md-3 col-6">
              <a href="#">
                <img src="@/assets/images/suggestion-5.jpg" alt="" />
              </a>
           </div>
           <div class="col-md-3 col-6">
              <a href="#">
                <img src="@/assets/images/suggestion-6.jpg" alt="" />
              </a>
           </div>
           <div class="col-md-3 col-6">
              <a href="#">
                <img src="@/assets/images/suggestion-7.jpg" alt="" />
              </a>
           </div>
           <div class="col-md-3 col-6">
              <a href="#">
                <img src="@/assets/images/suggestion-8.jpg" alt="" />
              </a>
           </div>
         </div>
       </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable import/no-dynamic-require  */
/* eslint-disable global-require  */
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';

import Slider from '@/components/home/Slider';

function getCategoriesForMobileGoods() {
  return Array(12).fill({}).map((slide, index) => ({
    image: require(`@/assets/images/img${index + 1}.png`),
  }));
}

function getRecentSlides() {
  return Array(8).fill({}).map((_, index) => ({
    image: require(`@/assets/images/product-${index + 1}.jpg`),
  }));
}

export default {
  name: 'Home',
  components: {
    VueperSlides,
    VueperSlide,
    Slider,
  },
  data() {
    return {
      categorySlides: getCategoriesForMobileGoods(),
      recentSlides: getRecentSlides(),
    };
  },
};
</script>
