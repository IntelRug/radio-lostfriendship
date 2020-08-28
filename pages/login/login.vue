<template>
  <!-- begin .login-->
  <div class="login">
    <div class="login__form">
      <b-form title="Вам сюда нельзя!" :errors="errors">
        <b-text-field
          id="login_email"
          v-model="email"
          placeholder="E-mail"
          width-full
        />
        <b-text-field
          id="login_password"
          ref="password"
          v-model="password"
          placeholder="Пароль"
          type="password"
          width-full
          @keydown.enter="next()"
        />
        <b-button class="login__button" width-full @click="next()">
          Войти
        </b-button>
      </b-form>
    </div>
  </div>
  <!-- end .login-->
</template>

<script lang="ts">
import { Component, Vue, Ref } from 'nuxt-property-decorator';
import BForm from '~/components/form/form.vue';
import BTextField from '~/components/text-field/text-field.vue';
import BButton from '~/components/button/button.vue';
import { MutationSignInArgs, SignInMutation } from '~/graphql/schema';
import SignIn from '~/graphql/mutations/login.graphql';
import { ExecutionResult } from '~/types/apollo';

@Component({
  name: 'pg-login',
  components: { BButton, BTextField, BForm },
})
export default class Login extends Vue {
  @Ref('password') passwordField!: BTextField;

  errors: string[] = [];

  email: string = '';
  password: string = '';

  clearErrors() {
    this.errors = [];
  }

  validateForm(): boolean {
    this.clearErrors();
    return true;
  }

  async next() {
    if (!this.validateForm()) return;
    await this.requestSignIn();
  }

  async requestSignIn() {
    const variables: MutationSignInArgs = {
      email: this.email,
      password: this.password,
    };

    try {
      const {
        data,
        errors,
      }: ExecutionResult<SignInMutation> = await this.$apollo.mutate({
        mutation: SignIn,
        variables,
      });

      if (errors) this.errors = [errors.message];
      if (!data) return;

      await this.$apolloHelpers.onLogin(data.signIn.value, undefined, {
        maxAge: 86400 * 365 * 10,
      });
      this.$accessor.auth.SET_USER_ID(data.signIn.ownerId);
      this.$accessor.auth.SET_LOGGED_IN(true);
      await this.$router.push('/');
    } catch (e) {}
  }
}
</script>

<style lang="stylus" src="./login.styl" />
