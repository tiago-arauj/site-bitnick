<script>

  export default {
    name: 'BankSlip',
    props: {
      name: {
        type: String,
        default: ''
      },
      price: {
        type: Number,
        default: 0
      },
      ticket: {
        type: Object,
        default: () => ({})
      },
      event: {
        type: Object,
        default: () => ({})
      }
    },
    data() {
      return {
        loading: false,
        quantity: 1,
        complement: {
          cpf: '',
          phone: '',
          name: '',
          email: ''
        },
        rules: {
          complement: {
            cpf: [
              {required: true, message: 'Por favor insira o CPF', trigger: 'blur'},
              {len: 14, message: 'CPF inválido', trigger: 'change'}
            ],
            phone: [
              {required: true, message: 'Por favor insira o telefone', trigger: 'blur'},
              {min: 14, message: 'Telefone inválido', trigger: 'change'}
            ], name: [
              {required: true, message: 'Por favor insira o nome', trigger: 'blur'},
            ],
            email: [
              {required: true, message: 'Por favor insira o email', trigger: 'blur'},
              {min: 5, message: 'Email muito curto', trigger: 'change'}
            ],
          },
        },
      }
    },
    methods: {
      submit() {
        if (this.loading) {
          return
        }

        //Validar Comprador
        this.$refs["userForm"].validate((valid) => {
          if (valid) {
            this.sendRequest()
          } else {
            this.notification('error', 'Pedido de compra não realizado', 'Preencha os campos do formulário');
          }
        });
      },


      async sendRequest() {

        let json = Object.assign({}, this.complement);

        json.event = {
          id: this.event.id,
          name: this.event.name,
          address: this.event.address,
          dateTime: this.event.dateTime,
        };

        json.purchase = {buyer: Object.assign({}, this.complement)};
        json.purchase.tickets = [{quantity: this.quantity, ticket: Object.assign({}, this.ticket)}];

        json = this.removeSpecialChar(json);

        try {
          this.loading = true;

          await this.$evtPurchase.bankSlip(
            json
          ).then(data => {
            if (data.data !== undefined) {
              this.notification('success', 'Pedido de compra realizado', 'Você receberá o boleto no e-mail ' + this.complement.email);
              this.resetForm();

              this.$SmoothScroll(this.$parent.$parent.$parent.$parent.$refs['banner'], 1500, undefined, undefined, 'y');
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
        this.$refs['userForm'].resetFields();
        this.ticket.id = null
      },

      removeSpecialChar(json) {
        json.purchase.buyer.cpf = json.purchase.buyer.cpf.replace(/[^a-zA-Z0-9]/g, '');
        json.purchase.buyer.phone = json.purchase.buyer.phone.replace(/[^a-zA-Z0-9]/g, '');
        json.cpf = json.cpf.replace(/[^a-zA-Z0-9]/g, '');
        json.phone = json.phone.replace(/[^a-zA-Z0-9]/g, '');
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
      el-form(v-if="ticket.name !== undefined" )
        .restrictAreaForm-formBuy
          el-form-item(label='Ingresso')
            el-input(:value='ticket.name' disabled)
          el-form-item(label='Valor Unitário(R$)')
            el-input(:value='"R$ " + ticket.price.toFixed(2)' disabled)
          el-form-item(label='Quantidade')
            el-input(v-model="quantity" type="number" min="1")
      .subtitle Dados do Comprador
      el-form(ref='userForm', :model='complement' :rules="rules.complement")
        .restrictAreaForm-formComplement
          el-form-item(label='Nome do Comprador' prop="name")
            el-input(v-model='complement.name')
          el-form-item(label='Email' prop="email")
            el-input(v-model='complement.email')
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
    border: 1px solid #ddd

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
      border-top: 1px solid rgba(0, 0, 0, .2)

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

              &__content
                width: 100%

            @import "../../../assets/scss/editItems"
            @import "../../../assets/scss/buttonAsInput"

      &-formBuy
        grid-template-columns: 1fr 1fr 1fr

      &-formComplement
        grid-template-columns: 1fr 1fr 1fr 1fr

    .appButton
      height: 38px
      width: 134px

      &.loading
        display: flex
        justify-content: center
</style>
