<template>
  <footer>
    <div class="container footer">
      <div class="row">
        <div class="col-md-3 col-12 footer-app">
          <span class="footer-app__text">Мобильное приложение <br/> М-Ломбард</span>
          <img src="@/assets/images/app-store.png" class="footer-app__img" alt="App Store" />
          <img src="@/assets/images/google-play.png" class="footer-app__img" alt="Google Play" />
        </div>
        <div class="col-md-6 col-12 footer-menu">
          <ul class="footer-menu__row">
            <li class="footer-menu__item">
              <a href="/faq" class="footer-menu__link">Вопросы</a>
            </li>
            <li class="footer-menu__item">
              <a href="#" class="footer-menu__link">Гарантия</a>
            </li>
            <li class="footer-menu__item">
              <a href="#" class="footer-menu__link">Рассрочка</a>
            </li>
            <li class="footer-menu__item">
              <a href="/return-exchange" class="footer-menu__link">Возврат</a>
            </li>
          </ul>
          <ul class="footer-menu__row footer-menu__row--second">
            <li class="footer-menu__item">
              <a href="#" class="footer-menu__link">Клуб</a>
            </li>
            <li class="footer-menu__item">
              <a href="/delivery-payment" class="footer-menu__link">Доставка</a>
            </li>
            <li class="footer-menu__item">
              <a href="/delivery-payment" class="footer-menu__link">Оплата</a>
            </li>
            <li class="footer-menu__item">
              <a href="#" class="footer-menu__link">Оферта</a>
            </li>
          </ul>
        </div>
        <div class="col-md-3 col-12 footer-contacts">
          <p class="footer-contacts__text">
            <span class="footer-contacts__support-text">Центр поддержки</span>
            <a href="tel:87005955555" class="footer-contacts__phone">8-700-595-55-55</a>
          </p>
          <p class="footer-contacts__text footer-contacts__text--mt"> 2020, © М-Ломбард. <br/> Все права защищены. </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>
