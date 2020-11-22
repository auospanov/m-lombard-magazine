<template>
  <div>
    <div class="filter-desktop-line">
      <div class="container">
        <div class="row">
          <div class="filter-wrapper">
            <div class="filter-wrap-left">
              <ul>
                <li>
                  Цена
                  <i class="fas fa-chevron-down"></i>
                  <div class="dropdown">
                    <ul class="dropdown-menu">
                      <li class="header-second-list">
                        <a href=""></a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  Вид
                  <i class="fas fa-chevron-down"></i>
                </li>
                <li>
                  Размер
                  <i class="fas fa-chevron-down"></i>
                </li>
                <li>
                  Проба
                  <i class="fas fa-chevron-down"></i>
                </li>
                <li>
                  Цвет
                  <i class="fas fa-chevron-down"></i>
                </li>
                <li>
                  Вставка
                  <i class="fas fa-chevron-down"></i>
                </li>
                <li>
                  Состояние
                  <i class="fas fa-chevron-down"></i>
                </li>
              </ul>
            </div>
            <div class="filter-wrap-right">
                <div>
                  По скидкам
                  <i class="fas fa-chevron-down"></i>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="filter-mobile-line">
      <div class="container">
        <div class="row">
          <div class="col-12 filter-mobile-wrapper">
            <div class="filter-mobile-filters">
              Фильтры
              <i class="fas fa-chevron-down"></i>
            </div>
            <div class="filter-mobile-sort">
              По скидкам
              <i class="fas fa-chevron-down"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductFilter',
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
};
</script>
