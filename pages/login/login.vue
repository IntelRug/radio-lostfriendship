<template>
  <!-- begin .login-->
  <div class="login">
    <div class="login__form">
      <b-form title="Вам сюда нельзя!">
        <b-text-field id="login_email" placeholder="E-mail" width-full />
        <b-text-field
          id="login_password"
          placeholder="Пароль"
          type="password"
          width-full
        />
        <b-button class="login__button" width-full>
          Войти
        </b-button>
      </b-form>
    </div>
  </div>
  <!-- end .login-->
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import BForm from '~/components/form/form.vue';
import BTextField from '~/components/text-field/text-field.vue';
import BButton from '~/components/button/button.vue';

@Component({
  name: 'pg-login',
  components: { BButton, BTextField, BForm },
})
export default class Login extends Vue {}
</script>

<style lang="stylus" src="./login.styl" />
