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
    <div class="home-goods home-goods--mobile">
      <div class="container">
        <div class="col-12">
          <vueper-slides
            class="no-shadow"
            :bullets="false"
            :arrows="false"
            :visible-slides="3"
            slide-multiple
            :dragging-distance="200"
          >
            <vueper-slide
              v-for="(slide, i) in slides"
              :key="i"
              :image="slide.image"
            />
          </vueper-slides>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';

import Slider from '@/components/home/Slider';

function getSlidesForMobileGoods() {
  return Array(12).fill({}).map((slide, index) => ({
    image: require(`@/assets/images/img${index + 1}.png`),
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
      slides: getSlidesForMobileGoods(),
    };
  },
};
</script>
