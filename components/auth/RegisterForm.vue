<script>
  import { SpringSpinner  } from 'epic-spinners/dist/lib/epic-spinners.min';

  export default {
    name: 'RegisterForm',
    components: {SpringSpinner},
    data() {
      //Validacoes personalizadas
      var isAccepted = (rule, value, callback) => {
        if (value === false) {
          callback(new Error('É necessário aceitar os Termos e Condições'));
        } else {
          callback();
        }
      };
      var isPassEqual = (rule, value, callback) => {
        if (value !== this.form.password) {
          callback(new Error('As senhas não são identicas'));
        } else {
          callback();
        }
      };
      return {
        form: {
          name: '',
          lastName: '',
          email: '',
          wallet: '',
          cpf: '',
          password: '',
          repeatPassword: '',
          acceptTerms: false,
          doc: undefined
        },
        rules: {
          name: [
            { required: true, message: 'Por favor insira o seu nome', trigger: 'change' },
          ],
          lasName: [
            { required: true, message: 'Por favor insira o seu sobrenome', trigger: 'change' },
          ],
          email: [
            { required: true, message: 'Email inválido', type: "email", trigger: 'blur' },
            { min: 5, message: 'Email muito curto', trigger: 'change' }
          ],
          wallet: [
            { required: true, message: 'Por favor insira a sua carteira', trigger: 'change' },
            { len: 42, message: 'Carteira inválida', trigger: 'change' }
          ],
          cpf: [
            { required: true, message: 'Por favor insira o CPF', trigger: 'blur' },
            { min: 14, max: 14, message: 'Por favor insira o CPF corretamente', trigger: 'blur' }
          ],
          password: [
            { required: true, message: 'Por favor insira a senha', trigger: 'change' },
            { min: 5, message: 'Senha muito curta', trigger: 'change' }
          ],
          repeatPassword: [
            { validator: isPassEqual ,trigger: 'blur' }
          ],
          acceptTerms: [
            { validator: isAccepted, trigger: 'blur' }
          ]
        },
        loading: false
      }
    },
    computed: {
      BASE_API: function () {
        return this.$store.state.api.url;
      },
    },
    methods: {
      //Manipulação de Dialog
      showLoginForm() {
        this.$store.commit('layout/setModalType', 'login')
      },

      //Manipulações de Registro
      submit() {
        this.$refs["formRegister"].validate((valid) => {
          if (valid) {
              if (this.form.doc !== undefined) {
                this.sendRequest()
              } else {
                this.notification('error', 'Registro não realizado', 'É obrigatório um documento oficial com foto');
              }
          } else {
            this.notification('error', 'Registro não realizado', 'Preencha os campos do formulário');
            return false;
          }
        });
      },
      async sendRequest() {
        try {
          this.loading = true;

          await this.$auth.register(
            this.toFormData(this.form),
            {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
          ).then(data => {
            if (data.data !== undefined) {
              this.$store.dispatch('auth/saveUser', {user: data.data, token: data.token, hash: data.hash, remember: true});
              this.$store.commit('layout/setModalStatus', false);
              this.$router.push('area-restrita/comprar-moeda')
            } else {
              this.notification('error', 'Registro não realizado', data.error.message);
            }
            this.loading = false;
          });
        } catch (error) {
          this.notification('error', 'Registro não realizado', 'Verifique os dados do formulário');
          this.loading = false;
        }
      },

      //Manipulação de arquivo de Upload
      addIdentificationFile() {
        this.$refs.files.click();
      },
      previewFiles() {
        let limit = 1024 * 1024 * 6; //6MB
        if(this.$refs.files.files[0].size > limit) {
          this.notification('error', 'Arquivo muito grande', 'Arquivo excede limite de 6MB');
        } else {
          this.form.doc = this.$refs.files.files[0];
        }
      },
    }
  }
</script>

<template lang="pug">
  el-form.registerForm(:model="form", :rules="rules", ref="formRegister")
    .registerForm-divider
    .registerForm-divider
      span.registerForm-register Já é cadastrado?
        a.registerForm-link(href="#", @click='showLoginForm') Faça seu login.
    .registerForm-divider
    .registerForm-divider
      SectionTitle Faça seu cadastro com seu e-mail
    .registerForm-item
      el-form-item(prop="name")
        el-input(v-model='form.name', placeholder="Nome")
    .registerForm-item
      el-form-item(prop="lastName")
        el-input(v-model='form.lastName', placeholder="Sobrenome")
    .registerForm-item
      el-form-item(prop="email")
        el-input(v-model='form.email', placeholder="Email")
    .registerForm-item
      el-form-item(prop="wallet")
        el-input(v-model='form.wallet', placeholder="Carteira",  maxlength="42", show-word-limit)
          el-tooltip(slot="append")
            .slot(slot="content")
              p É necessário criar uma carteira virtual
              p Para criar uma carteira acesse
               a(href="https://www.myetherwallet.com/create-wallet", target="_blank") &nbsp;my ether wallet
              p Depois de criar, copie o endereço da sua carteira e cole aqui.
            el-button(icon="el-icon-question")
    .registerForm-item
      el-form-item(prop="cpf")
        el-input(v-model='form.cpf', placeholder="CPF", v-mask="'###.###.###-##'")
    .registerForm-item
      el-form-item(prop="password")
        el-input(v-model='form.password', placeholder="Senha", type="password")
    .registerForm-item
      el-form-item(prop="repeatPassword")
        el-input(v-model='form.repeatPassword', placeholder="Repetir Senha", type="password", @keyup.enter.native="submit")
    .registerForm-item
      el-button.el-input(@click="addIdentificationFile", v-if="this.form.doc === undefined") Documento de idenficação
      el-button.el-input.is-with-texts(v-else, @click="addIdentificationFile") {{this.form.doc.name}}
    .registerForm-item
      el-form-item(prop="acceptTerms")
        el-checkbox(v-model='form.acceptTerms') Eu li e aceito os
          a.registerForm-link(href="/termos-e-condicoes" target="_blank") Termos e condições
          | &nbsp; e
          a.registerForm-link(href="/politicas-privacidade" target="_blank") Política de privacidade
    .registerForm-divider.withMargin
      el-button.registerForm-send(round, @click="submit", v-if="!loading") Cadastrar
      el-button.registerForm-sended(round, disabled=true, v-else)
        SpringSpinner(:animation-duration="3000", :size="18", color="white",)
    input(@change="previewFiles", type='file', ref='files')

</template>

<style lang="sass" scoped>
  .registerForm
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center

    &-divider
      display: flex
      justify-content: center

      &.withMargin
        margin: 10px 0

    &-item
      width: 100%
      max-width: 380px
      /deep/
        .el-checkbox .el-checkbox__label
          white-space: normal
          word-break: break-word
          width: 100%

        .el-input__count-inner
          height: 30px

    &-link
      margin-left: 5px

    &-send
      border: 1px solid var(--highlightColor)
      position: relative
      background-image: linear-gradient(to top, #00d5c1, #03b658)
      border: transparent
      color: #FFFFFF
      width: 108px

    &-sended
      display: flex
      justify-content: center
      width: 108px
      border: 1px solid #DDD
      position: relative
      background-image: linear-gradient(to top, rgba(0, 213, 193, 0.71), rgba(3, 182, 88, 0.71))
      color: #FFFFFF

    @import "../../assets/scss/buttonAsInput"

    button.el-input
      color: #C0C4CC
      border: 1px solid #DCDFE6
      width: 100%

      .is-with-texts
        border-color: #67C23A !important


</style>

