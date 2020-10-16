<script>

  export default {
    name: 'BankSlip',
    data() {
      return {
        loading: false,
        buy: {
          organikAmount: '',
          realValue: '',
          dollarValue: ''
        },
        complement: {
          cpf: '',
          phone: ''
        },
        rules: {
          complement: {
            cpf: [
              { required: true, message: 'Por favor insira o CPF', trigger: 'blur' },
              { len: 14, message: 'CPF inválido', trigger: 'change' }
            ],
            phone: [
              { required: true, message: 'Por favor insira o telefone', trigger: 'blur' },
              { min: 14, message: 'Telefone inválido', trigger: 'change' }
            ],
          },
        },
      }
    },
    computed: {
      user: {
        get() {
          return this.$store.getters['auth/user'];
        },
      },
      usd: {
        get() {
          return this.$store.getters['coins/usd'];
        },
      },
      ogk: {
        get() {
          return this.$store.getters['coins/ogk'];
        },
      },
    },
    methods: {
      computValues: function () {
        if (this.ogk !== null) {
          this.buy.organikAmount = (this.buy.realValue / this.ogk.bid).toFixed(10);
          this.buy.dollarValue = parseFloat(this.usd.bid.replace(",","."))
        }
      },

      submit() {
        if (this.loading) {
          return
        }

        //Validar Comprador
        this.$refs["userForm"].validate((valid) => {
          if (valid) {
            //Validar Valor
            if (this.buy.realValue >= 50) {
              this.sendRequest()
            } else {
              this.notification('error', 'Pedido de compra não realizado', 'Valor mínimo de 50 reais');
            }
          } else {
            this.notification('error', 'Pedido de compra não realizado', 'Preencha os campos do formulário');
          }
        });
      },

      async sendRequest() {
        let json = Object.assign({},this.complement);
        json.transaction = Object.assign({},this.buy);

        try {
          this.loading = true;

          await this.$investiment.bankSlip(
            this.removeSpecialChar(json),
            this.user.token
          ).then(data => {
            if (data.data !== undefined) {
              this.notification('success', 'Pedido de compra realizado', 'Você receberá o boleto no e-mail: ' + this.user.email);
              this.resetForm()
            } else {
              this.notification('error', 'Pedido de compra não realizado', data.error.message);
            }
            this.loading = false;
          });
        } catch (error) {
          this.notification('error', 'Pedido de compra não realizado', 'Verifique os dados do formulário');
          this.loading = false;
        }
      },

      resetForm() {
        this.$refs['buyForm'].resetFields();
        this.$refs['userForm'].resetFields();

        this.buy.realValue = 0
      },

      removeSpecialChar(json) {
        json.cpf = json.cpf.replace(/[^a-zA-Z0-9]/g, '');
        json.phone = json.phone.replace(/[^a-zA-Z0-9]/g, '');
        json.transaction.realValue = json.transaction.realValue.toFixed(2);
        return json;
      }
    }
  }
</script>

<template lang="pug">
  .component-creditCard
    .title Boleto Bancário

    .restrictAreaForm
      .subtitle Dados da Compra
      el-form(ref='buyForm', :model='buy')
        .restrictAreaForm-formBuy
          el-form-item(label='Valor (R$)')
            money(v-model.lazy="buy.realValue", @input="computValues")
          .restrictAreaForm-computedItems
            .block
              .text Quantidade (OGK)
              .value {{buy.organikAmount  | numeral('0,0.0000000000')}}
            .block
              .text Valor do Dolar (R$)
              .value R$ {{usd !== null ? usd.bid : 0 | numeral('0,0.0000')}}

      .subtitle Dados do Comprador
      el-form(ref='userForm', :model='complement' :rules="rules.complement")
        .restrictAreaForm-formComplement
          el-form-item(label='Nome do Comprador')
            el-input(:value='user.name + " " + user.lastName' disabled)
          el-form-item(label='CPF' prop="cpf")
            el-input(v-model="complement.cpf" v-mask="'###.###.###-##'")
          el-form-item(label='Telefone' prop="phone")
            el-input(v-model="complement.phone" v-mask="['(##) #####-####', '(##) ####-####']")

    .restrictAreaForm-footer
      .submit(@click="submit")
        AppButton.gradient(icon="el-icon-arrow-right", :loading="loading") Confirmar
</template>

<style lang="sass" scoped>
  .component-creditCard
    background-color: white
    padding: 2vw
    margin: 1vw
    border-radius: 3px
    box-shadow: 0 3px 20px rgba(0,0,0,0.19), 0 3px 6px rgba(0,0,0,0.23)
    .title
      font-size: 24px
      border-bottom: 2px solid var(--highlightColor)
      width: fit-content
      margin: 0 auto
      padding: 10px 5px

    .subtitle
      font-size: 18px
      font-weight: bold
      position: relative
      color: var(--textColor) !important
      white-space: normal
      word-break: break-word
      margin-bottom: 25px !important
      margin-top: 10px !important
      padding-top: 25px
      border-top: 1px solid rgba(0,0,0,.2)

      &:first-child
        border: none

      @media (min-width: 600px)
        padding-left: 25px

        &:before
          background-color: var(--highlightColor)
          content: ''
          height: 2px
          width: 15px
          position: absolute
          left: 0
          top: 35px

    .restrictAreaForm

      @media (max-width: 600px)
        /deep/
          .el-form-item__content
            width: 100%

      &-formBuy, &-formComplement
        display: grid
        grid-gap: 8px
        &.full
          grid-template-columns: 1fr
        @media (max-width: 600px)
          grid-template-columns: 1fr !important
          grid-gap: 5px

        /deep/
          .el-form-item
            width: 100%
            @media (max-width: 600px)
              text-align: center
              margin: 15px 0

            @import "../../../assets/scss/editItems"
            @import "../../../assets/scss/buttonAsInput"

      &-formBuy
        grid-template-columns: 1fr 1fr
      &-formComplement
        grid-template-columns: 1fr 1fr 1fr
      &-computedItems
        display: grid
        grid-template-columns: 1fr 1fr
        grid-gap: 5px
        @media (max-width: 600px)
          grid-template-columns: 1fr !important

        /deep/
          .block
            text-align: center
            @import "../../../assets/scss/computedItems"
            @media (max-width: 600px)
              margin: 15px 0

    .appButton
      height: 38px
      width: 134px

      &.loading
        display: flex
        justify-content: center
</style>
