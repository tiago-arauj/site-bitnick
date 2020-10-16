<script>
  import { SpringSpinner  } from 'epic-spinners/dist/lib/epic-spinners.min';

  export default {
    name: 'LoginForm',
    components: {SpringSpinner},
    data: () => ({
      form: {
        email: '',
        password: '',
        keepAuth: false,
      },
      rules: {
        email: [
          { required: true, message: 'Email inválido', type: "email", trigger: 'blur' },
          { min: 5, message: 'Email muito curto', trigger: 'change' }
        ],
        password: [
          { required: true, message: 'Por favor insira a senha', trigger: 'change' }
        ]
      },
      loading: false
    }),
    computed: {
      BASE_API: function () {
        return this.$store.state.api.url;
      },
    },
    methods: {
      //Manipulação de Dialog
      showRegisterForm() {
        this.$store.commit('layout/setModalType', 'register')
      },

      //Manipulações de Login
      submit() {
        this.$refs["formLogin"].validate((valid) => {
          if (valid) {
            this.sendRequest()
          } else {
            this.notification('error', 'Login não realizado', 'Preencha os campos do formulário')
            return false;
          }
        });
      },
      async sendRequest() {
        this.loading = true;

        try {
          await this.$auth.login(this.form).then(data => {
            //Tratamento da resposta
            if (data.data !== undefined) {
              this.$store.dispatch('auth/saveUser', {user: data.data, token: data.token, hash: data.hash, remember: true});
              this.$store.commit('layout/setModalStatus', false);
              this.$router.push('area-restrita/comprar-moeda')
            } else {
              this.notification('error', 'Login não realizado', data.error.message);
            }
            this.loading = false;
          });
        } catch (error) {
          this.notification('error', 'Login não realizado', 'Verifique os dados do formulário');
          this.loading = false;
        }
      }
    }
  }
</script>

<template lang="pug">
  el-form.loginForm(:model="form", :rules="rules", ref="formLogin")
    .loginForm-divider
      SectionTitle Faça login para continuar
    .loginForm-item
      span.loginForm-register Ainda não é cadastrado?
        a.registerLink(href="#" @click="showRegisterForm") Registrar agora
      el-form-item(prop="email")
        el-input(v-model='form.email', placeholder="Email")
    .loginForm-item
      el-form-item(prop="password")
        el-input(v-model='form.password', placeholder="Senha", type="password", @keyup.enter.native="submit")
    //.loginForm-item.loginFooter
      el-checkbox(label='Mantenha-me conectado', v-model='form.keepAuth')
      a.loginForm-forgotLink(href="#") Esqueceu a senha?
    .loginForm-divider
      el-button.loginForm-send(round, @click="submit", v-if="!loading") Enviar
      el-button.loginForm-sended(round, disabled=true, v-else)
        SpringSpinner(:animation-duration="3000", :size="18", color="white")

  // @todo Descomentar WIP Versao 0.0.1
    .loginForm-divider
      SectionTitle ou entre com
    .loginForm-divider
      el-button.loginForm-btnSocialMedia(@click="goToPanel") Google
      el-button.loginForm-btnSocialMedia(@click="goToPanel") Facebook
</template>

<style lang="sass" scoped>
  .loginForm
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    font-size: 1.25em
    &-divider
      display: flex
      justify-content: center
      margin: 10px 0
    &-item
      width: 100%
      max-width: 380px
      &.loginFooter
        display: flex
        justify-content: flex-end
    &-register
      text-align: right
      font-size: .75em
      margin-bottom: 5px
      display: block
      .registerLink
        margin-left: 5px
    &-forgotLink
      font-size: .75em

    &-send
      width: 86px
      border: 1px solid var(--highlightColor)
      position: relative
      background-image: linear-gradient(to top, #00d5c1 , #03b658)
      border: transparent
      color: #FFFFFF

    &-sended
      display: flex
      justify-content: center
      width: 86px
      border: 1px solid #DDD
      position: relative
      background-image: linear-gradient(to top, rgba(0, 213, 193, 0.71), rgba(3, 182, 88, 0.71))
      color: #FFFFFF
</style>

