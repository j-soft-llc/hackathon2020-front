<template>
  <q-page class="flex flex-center">
    <q-form class="q-gutter-md" @submit="onSubmit">
      <q-input
        filled
        v-model="login"
        label="Email"
        hint="Email или номер телефона"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Пожалуйста введите логин']">
      </q-input>
      <q-input
        filled
        type="password"
        v-model="password"
        label="Пароль"
        lazy-rules
        :rules="[ val => val && val.length > 3 || 'Пожалуйста введите пароль']">
      </q-input>
      <div>
          <q-btn label="Войти" type="submit" color="primary"></q-btn>
          <q-btn class="q-ml-sm" label="Регистрация" color="primary" flat></q-btn>
      </div>
    </q-form>
    <q-dialog v-model="error">
      <q-card>
        <q-card-section>
          <div class="text-h6">Ошибка</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <div>{{ errorMessage }}</div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn label="Ок" :ripple="false" color="primary" v-close-popup></q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AuthPage',
  data() {
    return {
      login: '',
      password: '',
      error: false,
      errorMessage: '',
    };
  },
  methods: {
    ...mapActions('app', {
      loginApp: 'login',
    }),
    async onSubmit() {
      this.$q.loading.show({
        delay: 400,
      });
      try {
        await this.loginApp({
          login: this.login,
          password: this.password,
        });
        setTimeout(() => {
          this.$router.push('/home');
        }, 500);
      } catch (error) {
        this.error = true;
        this.errorMessage = error.message;
        console.log(error.message);
      }
      this.$q.loading.hide();
    },
  },
};
</script>
