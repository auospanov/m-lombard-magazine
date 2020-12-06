<template>
    <section class="registration-cabinet">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="registration-cab-wrap">
                        <h1 class="h1">Новый пользователь</h1>
                        <!-- <label class="form-cab-label">Номер телефона</label> -->
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Имя"
                            autocomplete="on"
                            class="registration-cab-input"
                            v-model="firstname"
                        />
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Фамилия"
                            autocomplete="on"
                            class="registration-cab-input"
                            v-model="lastname"
                        />
                        <input
                            type="tel"
                            name=""
                            id=""
                            placeholder="Номер телефона"
                            autocomplete="on"
                            class="registration-cab-input"
                            v-model="phone"
                        />
                        <input
                            type="password"
                            name=""
                            id=""
                            placeholder="Пароль"
                            autocomplete="on"
                            class="registration-cab-input"
                            v-model="password"
                        />
                        <input
                            type="password"
                            name=""
                            id=""
                            placeholder="Подтвердите пароль"
                            autocomplete="on"
                            class="registration-cab-input"
                            v-model="confirmpassword"
                        />
                        <div class="d-flex confirm">
                            <input type="checkbox" id="checkbox" v-model="checked">
                            <p>Настоящим я подтверждаю, что ознакомлен и согласен с условиями <a href="">Политики конфиденциальности</a></p>
                        </div>
                        <div class="d-flex">
                            <button type="submit" class="registration-cab-button" @click="registerCustomer" >
                                Регистрация
                            </button>
                            <router-link  to="/personal-cabinet" class="registration-cab-button-create" tag="button">
                                Вернуться к авторизации
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { appLoader } from '@shared/utils/app-loader';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Registration',
  data() {
    return {
      firstname: '',
      lastname: '',
      phone: '',
      password: '',
      confirmpassword: '',
    };
  },
  computed: {
    ...mapState(['customerId']),
  },
  methods: {
    ...mapActions(['AUTH_CUSTOMER']),
    registerCustomer() {
      appLoader.show();
      this.REGISTER_CUSTOMER({
        LastName: this.lastname,
        Name: this.firstname,
        SecondName: '',
        ClientIIN: this.customerId,
        PhoneNumber: this.phone,
        EMail: '',
        PSW: this.password,
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
