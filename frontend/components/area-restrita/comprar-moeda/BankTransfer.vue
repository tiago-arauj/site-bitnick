<script>
  import BoxInstructions from '~/components/area-restrita/BoxInstructions'

  export default {
    name: 'BankTransfer',
    components: {BoxInstructions},
    data: () => ({
      tableData: [
        {index: '', date: '', quantity: '', value: '', credit: '', comission: '', price: '', status: ''},
        {index: '', date: '', quantity: '', value: '', credit: '', comission: '', price: '', status: ''},
        {index: '', date: '', quantity: '', value: '', credit: '', comission: '', price: '', status: ''},
        {index: '', date: '', quantity: '', value: '', credit: '', comission: '', price: '', status: ''},
        {index: '', date: '', quantity: '', value: '', credit: '', comission: '', price: '', status: ''},
      ],
      form: {
        organikAmount: '',
        doc: undefined,
        idUser: '',
        realValue: '',
        dollarValue: ''
      },
      instructions: [
        'A operação de compra é irreversível',
        'Insira o valor que deseja depositar',
        'Confira os dados para depósito',
        'Insira o comprovante do depósito',
        'A confirmação demora de acordo com o tipo de transferencia. Recomendação TED',
        'Os valores pode sofrer pequena alteração devido a atividades do mercado.',
      ],
      loading: false,
    }),
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
      //Manipulacao do formulario
      submit() {
        if (this.loading) {
          return
        }
        if (this.form.doc !== undefined && this.form.organikAmount > 0) {
          if (this.form.realValue >= 50) {
            this.sendRequest()
          } else {
            this.notification('error', 'Compra não realizada', 'Valor mínimo de R$ 50,00');
          }
        } else {
          this.notification('error', 'Compra não realizada', 'É obrigatório o valor e o comprovante de depósito');
        }
      },
      async sendRequest() {
        try {
          this.loading = true;

          //Seta o valores]
          this.form.dollarValue = Object.create(this.usd).bid.replace(",", ".");

          var form = Object.assign({}, this.form);
          form.organikAmount = form.organikAmount.toFixed(10);

          await this.$investiment.bankTransfer(
            this.toFormData(form), this.user.token, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
          ).then(data => {
            if (data.data !== undefined) {
              this.notification('success', 'Pedido de compra realizado', 'Você receberá uma confirmação de pagamento em breve');

              //Reseta o form
              this.form.realValue = 0;
              this.form.doc = undefined;
            } else {
              this.notification('error', 'Pedido de compra não realizado', data.error.message);
              this.form.realValue = 0;
              this.form.doc = undefined;
            }
            this.loading = false;
          });
        } catch (error) {
          this.notification('error', 'Pedido de compra não realizado', 'Verifique os dados do formulário');
          this.loading = false;
        }
      },
      computValues: function () {
        if (this.ogk !== null) {
          this.form.organikAmount = this.form.realValue / this.ogk.bid;
        }
      },

      //Manipulacao de Files
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
  .component-bankTransfer
    .title Transferência Bancária
    BoxInstructions(:instructions="instructions")
    .info
      p.info-text.center
        span.info-textStrong Dados para depósito/transferência
      p.info-text
        span.info-textStrong Banco:
        | 341 - ITAU
      p.info-text
        span.info-textStrong Agência:
        | 6892
      p.info-text
        span.info-textStrong Conta:
        | 24883-9

    .restrictAreaForm
      el-form(@keyup.enter.native="submit")
        .restrictAreaForm-formBuyItem
          el-form-item(label='Valor (R$)')
            money(v-model.lazy="form.realValue" , @input="computValues")
          .restrictAreaForm-computedItems
            .block
              .text Quantidade (OGK)
              .value {{form.organikAmount  | numeral('0,0.0000000000')}}
            .block
              .text Valor do Dolar (R$)
              .value R$ {{usd !== null ? usd.bid : 0 | numeral('0,0.0000')}}
          el-form-item.bigger(label='Comprovante de depósito')
            el-button.el-input(@click="addIdentificationFile", v-if="form.doc === undefined") Clique aqui para anexar seu comprovante
              i
            el-button.el-input.is-with-texts(v-else, @click="addIdentificationFile") {{this.form.doc.name}}
            input(@change="previewFiles", type='file', ref='files')
    .restrictAreaForm-footer
      .submit(@click="submit")
        AppButton.gradient(icon="el-icon-arrow-right", :loading="loading") Confirmar
</template>

<style lang="sass" scoped>
  .component-bankTransfer
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

  .restrictAreaForm
    @media (max-width: 600px)
      /deep/
        .el-form-item__content
          width: 100%

    &-formBuyItem
      display: grid
      grid-template-columns: 1fr 2fr
      grid-gap: 16px
      @media (max-width: 600px)
        grid-template-columns: 1fr
        grid-gap: 5px

      /deep/
        .el-form-item
          width: 80%
          @media (max-width: 600px)
            text-align: center
            width: 100%
            margin: 15px 0

          @import "../../../assets/scss/editItems"
          @import "../../../assets/scss/buttonAsInput"

          input, button.el-input
            background-color: white !important

    &-computedItems
      display: grid
      grid-template-columns: 1fr 1fr
      grid-gap: 5px
      @media (max-width: 600px)
        grid-template-columns: 1fr

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

  /*Box verder de informacoes*/
  .info
    margin: 32px 0
    background-color: var(--highlightColor)
    color: #fff
    padding: 10px 20px 20px 20px
    border-radius: 8px

    &-text
      margin: 4px 0

      &.center
        text-align: center
        margin: 12px

    &-textStrong
      font-family: 'Barlow-Bold', serif
      margin-right: 4px


  /*Botao de upload*/
  .bigger
    grid-column: 1 / span 2
    @media (max-width: 600px)
      grid-column: 1
</style>
