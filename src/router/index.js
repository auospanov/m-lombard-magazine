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
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: Category,
    props: true,
  },
  {
    path: '/category/:id/:productKindId',
    name: 'Category',
    component: Category,
    props: true,
  },
  {
    path: '/about-company',
    name: 'AboutCompany',
    component: AboutCompany,
  },
  {
    path: '/cart-empty',
    name: 'CartEmpty',
    component: CartEmpty,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts,
  },
  {
    path: '/delivery-payment',
    name: 'DeliveryPayment',
    component: DeliveryPayment,
  },
  {
    path: '/faq',
    name: 'Faq',
    component: Faq,
  },
  {
    path: '/favorites-empty',
    name: 'FavoritesEmpty',
    component: FavoritesEmpty,
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites,
  },
  {
    path: '/personal-cabinet',
    name: 'PersonalCabinet',
    component: PersonalCabinet,
  },
  {
    path: '/product-1',
    name: 'Product1',
    component: Product1,
  },
  {
    path: '/product-2',
    name: 'Product2',
    component: Product2,
  },
  {
    path: '/return-exchange',
    name: 'ReturnExchange',
    component: ReturnExchange,
  },
  {
    path: '/shops',
    name: 'Shops',
    component: Shops,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
