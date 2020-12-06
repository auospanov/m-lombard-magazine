<template>
  <section class="personal-cabinet">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="personal-cab-wrap">
            <h1 class="h1">Вход или регистрация</h1>
            <label class="personal-cab-label">Номер телефона</label>
            <input
              type="tel"
              name=""
              id=""
              placeholder="+7"
              autocomplete="on"
              class="personal-cab-input"
              v-model="phone"
            />
            <p class="personal-cab-under-input">
              Введите номер телефона для доступа к личному кабинету
            </p>
            <label class="personal-cab-label mt-5">Пароль</label>
            <input
              type="password"
              name=""
              id=""
              autocomplete="on"
              class="personal-cab-input"
              v-model="password"
            />
            <p class="personal-cab-under-input">
              Введите номер телефона для доступа к личному кабинету
            </p>
            <button type="submit" class="personal-cab-button" @click="authCustomer" :disabled="!phone || !password">
              Войти в личный кабинет
            </button>
            <router-link  to="/registration" class="personal-cab-button-create" @click="authCustomer" tag="button">
              Создать личный кабинет
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { appLoader } from '@shared/utils/app-loader';
import { mapActions } from 'vuex';

export default {
  name: 'PersonalCabinet',
  data() {
    return {
      phone: '3',
      password: '3',
    };
  },
  methods: {
    ...mapActions(['AUTH_CUSTOMER']),
    authCustomer() {
      appLoader.show();
      this.AUTH_CUSTOMER({
        PhoneNumber: '77001245687',
        PSW: '77001245687',
        deviceID: '',
      })
        .then(() => appLoader.hide())
        .catch((err) => {
          appLoader.hide();
          this.$toasted.show(err.message);
        });
    },
  },
};
</script>
