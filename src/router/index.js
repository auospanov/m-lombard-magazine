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

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
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
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
