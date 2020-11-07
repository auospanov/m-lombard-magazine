<template>
  <div class="product-page">
    <section class="product-section">
      <div class="container">
        <div class="row">
          <div class="col-md-1 ord1">
            <div class="column-flex">
              <div class="column">
                <img
                  src="@/assets/images/ring-1.jpeg"
                  alt=""
                  class="my js-select-product-image"
                />
              </div>
              <div class="column">
                <img
                  src="@/assets/images/silver-1.jpeg"
                  alt=""
                  class="my js-select-product-image"
                />
              </div>
              <div class="column">
                <img
                  src="@/assets/images/watch-1.jpeg"
                  alt=""
                  class="my js-select-product-image"
                />
              </div>
            </div>
          </div>
          <div class="col-md-6 ord2">
            <div class="product-img-wrap-container">
              <img
                src="@/assets/images/ring-1.jpeg"
                id="expandedImg"
                style="width: 100%"
                class="product-main-img js-open-product-modal"
              />
            </div>
          </div>

          <!-- <div class="col-md-5">
            <div class="product-img-wrap">
              <img src="@/assets/images/ring-1.jpeg" alt="Золотые кольца" class="product-main-img js-open-product-modal">
            </div>
          </div> -->

          <div class="col-md-5">
            <div class="product-wrap">
              <div class="product-first-line-wrap">
                <div class="product-article">Артикул: 8047696</div>
                <div class="product-sale-percent">-30%</div>
              </div>
              <h1 class="h1">Кольцо обручальное гладкое из золота, 2 мм</h1>
              <div class="product-price-wrap">
                <div class="product-price">31 150 тг</div>
                <!-- <strike class="product-old-price">43 500 тг</strike> -->
              </div>

              <div class="product-add-to-cart-wrap">
                <button class="product-add-to-cart e-button">
                  Добавить в корзину
                </button>
                <div class="product-add-to-chosen">
                  <i
                    class="far fa-heart"
                    onclick="myFunction3(this)"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
              <div class="product-buy-advantages-wrapper">
                <div class="product-buy-advantages-wrap">
                  <div class="products-buy-advantage">
                    <img
                      src="@/assets/images/truck2.svg"
                      alt=""
                      class="product-buy-advantage-img"
                    />
                    Бесплатная доставка
                  </div>
                </div>
                <div class="product-buy-advantages-wrap">
                  <div class="products-buy-advantage">
                    <img
                      src="@/assets/images/jewelery.svg"
                      alt=""
                      class="product-buy-advantage-img"
                    />
                    Примерка перед покупкой
                  </div>
                </div>
                <div class="product-buy-advantages-wrap">
                  <div class="products-buy-advantage">
                    <img
                      src="@/assets/images/card-percentage.svg"
                      alt=""
                      class="product-buy-advantage-img"
                    />
                    Скидка при онлайн оплате
                  </div>
                </div>
                <div class="product-buy-advantages-wrap">
                  <div class="products-buy-advantage">
                    <img
                      src="@/assets/images/return.svg"
                      alt=""
                      class="product-buy-advantage-img"
                    />
                    Удобный возврат
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div id="myModall" class="modall">
      <span class="close cursor js-close-product-modal">&times;</span>
      <div class="modall-content">

        <div class="mySlides js-close-product-modal">
          <img src="@/assets/images/ring-1.jpeg" id="expandImgModal" class="full-img">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// modal slider
function openModal() {
  document.getElementById('myModall').style.display = 'block';
}

function closeModal() {
  document.getElementById('myModall').style.display = 'none';
}

function selectImg(e) {
  const expandImg = document.getElementById('expandedImg');
  const expandImgModal = document.getElementById('expandImgModal');
  expandImg.src = e.target.src;
  expandImgModal.src = e.target.src;
  expandImg.parentElement.style.display = 'block';
}
// modal gallery

export default {
  name: 'Product',
  mounted() {
    document.querySelector('.js-open-product-modal').addEventListener('click', openModal);

    document.querySelectorAll('.js-close-product-modal').forEach((closeModalEl) => {
      closeModalEl.addEventListener('click', closeModal);
    });

    document.querySelectorAll('.js-select-product-image').forEach((imageEl) => {
      imageEl.addEventListener('click', selectImg);
    });
  },
};
</script>
