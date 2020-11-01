<template>
  <div class="home">
    <Slider />
    <div class="home-goods">
      <div class="container">
        <div class="row goods-row">
          <div class="col-md-3 col-lg-3 col-sm-12 col-12">
            <a href="#">
              <img src="@/assets/images/img1.jpg" alt="" />
            </a>
          </div>
          <div class="col-md-3 col-lg-3 col-sm-12 col-12">
            <a href="#">
              <img src="@/assets/images/img2.jpg" alt="" />
            </a>
          </div>
          <div class="col-md-6 col-lg-6 col-sm-12 col-12">
            <a href="#">
              <img src="@/assets/images/img3.jpg" alt="" />
            </a>
          </div>
        </div>
        <div class="row goods-row">
          <div class="col-md-6 col-lg-6 col-sm-12 col-12">
            <a href="#">
              <img src="@/assets/images/img4.jpg" alt="" />
            </a>
          </div>
          <div class="col-md-3 col-lg-3 col-sm-12 col-12">
            <a href="#">
              <img src="@/assets/images/img5.jpg" alt="" />
            </a>
          </div>
          <div class="col-md-3 col-lg-3 col-sm-12 col-12">
            <a href="#">
              <img src="@/assets/images/img6.jpg" alt="" />
            </a>
          </div>
        </div>
        <div class="row goods-row">
          <div class="col-md-3 col-lg-3 col-sm-12 col-12">
            <a href="#">
              <img src="@/assets/images/img7.jpg" alt="" />
            </a>
          </div>
          <div class="col-md-3 col-lg-3 col-sm-12 col-12">
            <a href="#">
              <img src="@/assets/images/img8.jpg" alt="" />
            </a>
          </div>
          <div class="col-md-6 col-lg-6 col-sm-12 col-12">
            <a href="#">
              <img src="@/assets/images/img9.jpg" alt="" />
            </a>
          </div>
        </div>
        <div class="row goods-row">
          <div class="col-md-6 col-lg-6 col-sm-12 col-12">
            <a href="#">
              <img src="@/assets/images/img10.jpg" alt="" />
            </a>
          </div>
          <div class="col-md-3 col-lg-3 col-sm-12 col-12">
            <a href="#">
              <img src="@/assets/images/img11.jpg" alt="" />
            </a>
          </div>
          <div class="col-md-3 col-lg-3 col-sm-12 col-12">
            <a href="#">
              <img src="@/assets/images/img12.jpg" alt="" />
            </a>
          </div>
        </div>
        <div class="row goods-row">
          <div class="col-md-3 col-lg-3 col-sm-12 col-12">
            <a href="#">
              <img src="@/assets/images/img13.jpg" alt="" />
            </a>
          </div>
          <div class="col-md-3 col-lg-3 col-sm-12 col-12">
            <a href="#">
              <img src="@/assets/images/img14.jpg" alt="" />
            </a>
          </div>
          <div class="col-md-6 col-lg-6 col-sm-12 col-12">
            <a href="#">
              <img src="@/assets/images/img10.jpg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="home-text">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="home-text-wrap">
              <h1 class="h1">Ваш главный ювелирный!</h1>
              <p>
                Ювелирный магазин, далеко-далеко за, словесными горами в стране
                гласных и согласных живут рыбные тексты. Грамматики подзаголовок
                взгляд всемогущая живет меня дал единственное страна, точках.
              </p>
              <p>Ювелирный магазин!</p>
              <h2>Интернет магазин ювелирных изделий!</h2>
              <p>
                Вам далеко-далеко за, словесными горами в стране гласных и
                согласных живут рыбные тексты. Грамматики подзаголовок взгляд
                всемогущая живет меня дал единственное страна, точках.
              </p>
              <h2>Ювелирный магазин Алматы!</h2>
              <p>
                Вам далеко-далеко за, словесными горами в стране гласных и
                согласных живут рыбные тексты. Грамматики подзаголовок взгляд
                всемогущая живет меня дал единственное страна, точках.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from '@/components/home/Slider';

export default {
  name: 'Home',
  components: {
    Slider,
  },
};
</script>
