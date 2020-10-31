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
              <div class="filter-popular">
                <i class="fas fa-arrows-alt-v"></i>
                Популярное
              </div>
              <div class="filter-wrap-result">Найдено {{ products.length }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="filter-mobile-line">
      <div class="container">
        <div class="row">
          <div class="filter-mobile-wrapper">
            <div class="filter-mobile-left-wrap">
              <div class="filter-mobile-sort">
                <i class="fas fa-arrows-alt-v"></i>
                Сортировка
              </div>
            </div>
            <div class="filter-mobile-right-wrap">
              <div class="filter-mobile-filters">
                <i class="fas fa-filter"></i>
                Фильтры
              </div>
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
