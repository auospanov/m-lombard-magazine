<template>
  <section class="order-cabinet">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="order-cab-wrap">
                    <h1 class="h1">Оформление заказа</h1>
                    <label class="order-cab-label">Адрес доставки</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Улица, город"
                        autocomplete="on"
                        class="order-cab-input"
                        v-model="address"
                    />
                    <label class="order-cab-label">Время доставки</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder=""
                        autocomplete="on"
                        class="order-cab-input"
                        v-model="delivery_date"
                    />
                    <hr class="diveder">
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder=""
                        autocomplete="on"
                        class="order-cab-input"
                        v-model="delivery_time"
                    />
                    <input
                        type="text"
                        name="Имя"
                        id=""
                        placeholder="Имя"
                        autocomplete="on"
                        class="order-cab-input"
                        v-model="first_name"
                    />
                    <input
                        type="text"
                        name="Фамилия"
                        id=""
                        placeholder="Фамилия"
                        autocomplete="on"
                        class="order-cab-input"
                        v-model="second_name"
                    />
                    <input
                        type="tel"
                        name="Номер телефона"
                        id=""
                        placeholder="Номер телефона"
                        autocomplete="on"
                        class="order-cab-input"
                        v-model="phone"
                    />
                    <input
                        type="text"
                        name="Электронная почта"
                        id=""
                        placeholder="Электронная почта"
                        autocomplete="on"
                        class="order-cab-input"
                        v-model="email"
                    />
                    <textarea
                        name="Комментарии"
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Комментарии"
                        class="order-cab-input"
                        v-model="comment"
                    ></textarea>
                    <p class="order-cab-label">1 товар на сумму 1к тг</p><br>
                    <h2>Способ оплаты</h2>
                    <div class="d-flex confirm">
                        <input type="radio" id="radio" value="Онлайн оплата картой" v-model="payment_type">
                        <p>Онлайн оплата картой</p>
                    </div>
                    <div class="d-flex">
                        <p class="order-cab-label">Товары на сумму:</p>
                        <p>10 000тг</p>
                    </div>
                    <div class="d-flex">
                        <p class="order-cab-label">Доставка:</p>
                        <p>Бесплатно</p>
                    </div>
                    <p>Нажимая на кнопку “Оформить заказ”, вы принимаете условия <a href="">Публичной оферты</a></p>
                    <button type="submit" class="order-cab-button" @click="createOrder" >
                        Оформить заказ
                    </button>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
// import { appLoader } from '@shared/utils/app-loader';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'CreateOrder',
  data() {
    return {
      address: '',
      delivery_date: '',
      delivery_time: '',
      first_name: '',
      second_name: '',
      phone: '',
      email: '',
      comment: '',
      payment_type: '',
    };
  },
  computed: {
    ...mapState(['customerId']),
  },
  methods: {
    ...mapActions(['AUTH_CUSTOMER']),
    createOrder() {
    },
  },
};
</script>
<style lang="scss">
   @import '@/assets/scss/pages/create-order.scss';
</style>
