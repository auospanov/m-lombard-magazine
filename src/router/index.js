import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home';
import Category from '../views/Category';
import AboutCompany from '../views/AboutCompany';
import CartEmpty from '../views/CartEmpty';
import Cart from '../views/Cart';
import Contacts from '../views/Contacts';
import DeliveryPayment from '../views/DeliveryPayment';
import Faq from '../views/Faq';
import FavoritesEmpty from '../views/FavoritesEmpty';
import Favorites from '../views/Favorites';
import PersonalCabinet from '../views/PersonalCabinet';
import Product1 from '../views/Product1';
import Product2 from '../views/Product2';
import ReturnExchange from '../views/ReturnExchange';
import Shops from '../views/Shops';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'М-Ломбард' },
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: Category,
    props: true,
    meta: { title: 'М-Ломбард - Товары' },
  },
  {
    path: '/category/:id/:productKindId',
    name: 'Category',
    component: Category,
    props: true,
    meta: { title: 'М-Ломбард - Товары' },
  },
  {
    path: '/about-company',
    name: 'AboutCompany',
    component: AboutCompany,
    meta: { title: 'М-Ломбард - О компании' },
  },
  {
    path: '/cart-empty',
    name: 'CartEmpty',
    component: CartEmpty,
    meta: { title: 'М-Ломбард - Корзина' },
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    meta: { title: 'М-Ломбард - Корзина' },
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts,
    meta: { title: 'М-Ломбард - Контакты' },
  },
  {
    path: '/delivery-payment',
    name: 'DeliveryPayment',
    component: DeliveryPayment,
    meta: { title: 'М-Ломбард - Доставка и оплата' },
  },
  {
    path: '/faq',
    name: 'Faq',
    component: Faq,
    meta: { title: 'М-Ломбард - Вопросы и ответы' },
  },
  {
    path: '/favorites-empty',
    name: 'FavoritesEmpty',
    component: FavoritesEmpty,
    meta: { title: 'М-Ломбард - Предпочтения' },
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites,
    meta: { title: 'М-Ломбард - Предпочтения' },
  },
  {
    path: '/personal-cabinet',
    name: 'PersonalCabinet',
    component: PersonalCabinet,
    meta: { title: 'М-Ломбард - Личный кабинет' },
  },
  {
    path: '/product-1',
    name: 'Product1',
    component: Product1,
    meta: { title: 'М-Ломбард - Товар' },
  },
  {
    path: '/product-2',
    name: 'Product2',
    component: Product2,
    meta: { title: 'М-Ломбард - Товар' },
  },
  {
    path: '/return-exchange',
    name: 'ReturnExchange',
    component: ReturnExchange,
    meta: { title: 'М-Ломбард - Возврат и обмен' },
  },
  {
    path: '/shops',
    name: 'Shops',
    component: Shops,
    meta: { title: 'М-Ломбард - Магазины' },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
