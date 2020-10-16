<script>

  export default {
    name: 'CreditCard',
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
        card: {
          number: '',
          name: '',
          expiry: '',
          cvv: ''
        },
        quantity: 1,
        complement: {
          cpf: '',
          phone: '',
          name: '',
          email: ''
        },
        address: {
          country: '',
          state: '',
          city: '',
          street: '',
          street_number: '',
          zipcode: '',
        },
        rules: {
          card: {
            number: [
              { required: true, message: 'Por favor insira o número do cartão', trigger: 'blur' },
              { len: 19, message: 'Número de cartão inválido', trigger: 'change' }
            ],
            name: [
              { required: true, message: 'Por favor insira o nome do titular', trigger: 'blur' },
            ],
            expiry: [
              { required: true, message: 'Por favor insira a data de expiração', trigger: 'blur' },
              { len: 7, message: 'Data de validade inválido', trigger: 'change' }
            ],
            cvv: [
              { required: true, message: 'Por favor insira o cvv', trigger: 'blur' },
              { len: 3, message: 'CVV inválido', trigger: 'change' }
            ],
          },
          complement: {
            cpf: [
              { required: true, message: 'Por favor insira o CPF', trigger: 'blur' },
              { len: 14, message: 'CPF inválido', trigger: 'change' }
            ],
            phone: [
              { required: true, message: 'Por favor insira o telefone', trigger: 'blur' },
              { min: 14, message: 'Telefone inválido', trigger: 'change' }
            ],
            name: [
              { required: true, message: 'Por favor insira o nome', trigger: 'blur' },
            ],
            email: [
              { required: true, message: 'Por favor insira o email', trigger: 'blur' },
              { min: 5, message: 'Email muito curto', trigger: 'change' }
            ],
          },
          address: {
            country: [
              { required: true, message: 'Por favor insira o país', trigger: 'blur' },
            ],
            state: [
              { required: true, message: 'Por favor insira o estado', trigger: 'blur' },
            ],
            city: [
              { required: true, message: 'Por favor insira a cidade', trigger: 'blur' },
            ],
            street: [
              { required: true, message: 'Por favor insira a rua', trigger: 'blur' },
            ],
            street_number: [
              { required: true, message: 'Por favor insira o número', trigger: 'blur' },
            ],
            zipcode: [
              { required: true, message: 'Por favor insira o cep', trigger: 'blur' },
              { len: 9, message: 'CEP inválido', trigger: 'change' }
            ],
          },
        },
      }
    },
    methods: {

      getAdress() {
        if(/^[0-9]{5}-[0-9]{3}$/.test(this.address.zipcode)) {
          this.$axios.get("https://viacep.com.br/ws/" + this.address.zipcode + "/json/").then(res => {
            if (res.data) {
              if (res.data.erro) {
                this.notification('info', 'CEP não encontrado', '')
              } else {
                this.address.state = res.data.uf;
                this.address.country = "br";
                this.address.city = res.data.localidade + " - " + res.data.bairro;
                this.address.street = res.data.logradouro;
              }
            }
          })
        }
      },

      submit() {
        if (this.loading) {
          return
        }

        //Validar cartao
        this.$refs["cardForm"].validate((valid) => {
          if (valid) {

            //Validar Usuario
            this.$refs["userForm"].validate((valid) => {
              if (valid) {

                //Validar Endereco
                this.$refs["addressForm"].validate((valid) => {
                  if (valid) {
                      this.sendRequest()
                  } else {
                    this.notification('error', 'Compra não realizada', 'Preencha os campos do formulário');
                  }
                });
              } else {
                this.notification('error', 'Compra não realizada', 'Preencha os campos do formulário');
              }
            });
          } else {
            this.notification('error', 'Compra não realizada', 'Preencha os campos do formulário');
          }
        });
      },

      async sendRequest() {

        let json = Object.assign({},this.complement);

        json.event = {
          id: this.event.id,
          name: this.event.name,
          address: this.event.address,
          dateTime: this.event.dateTime,
        };

        json.card_number = this.card.number;
        json.card_cvv = this.card.cvv;
        json.card_expiration_date = this.card.expiry;
        json.card_holder_name = this.card.name;

        json.address = Object.assign({},this.address);

        json.purchase = {buyer: Object.assign({},this.complement)};
        json.purchase.tickets = [{quantity: this.quantity, ticket: Object.assign({},this.ticket)}];

        json = this.removeSpecialChar(json);

        try {
          this.loading = true;

          await this.$evtPurchase.creditCard(
            json
          ).then(data => {
            if (data.data !== undefined) {
              this.notification('success', 'Compra realizada', 'Você receberá seu ingresso no e-mail');
              this.resetForm();

              this.$SmoothScroll(this.$parent.$parent.$parent.$parent.$refs['banner'],1500,undefined,undefined,'y');
            } else {
              this.notification('error', 'Compra não realizada', data.error.message);
            }
            this.loading = false;
          });
        } catch (error) {
          console.log(error);
          this.notification('error', 'Compra não realizada', 'Verifique os dados do formulário');
          this.loading = false;
        }
      },

      resetForm() {
        this.$refs['cardForm'].resetFields();
        this.$refs['userForm'].resetFields();
        this.$refs['addressForm'].resetFields();
        document.getElementById("expiry").value = '';

        this.ticket.id = null
      },

      removeSpecialChar(json) {
        json.card_number = json.card_number.replace(/[^a-zA-Z0-9]/g, '');
        json.card_cvv = json.card_cvv.replace(/[^a-zA-Z0-9]/g, '');
        json.card_expiration_date = json.card_expiration_date.replace(/[^a-zA-Z0-9]/g, '');
        json.purchase.buyer.cpf = json.purchase.buyer.cpf.replace(/[^a-zA-Z0-9]/g, '');
        json.purchase.buyer.phone = json.purchase.buyer.phone.replace(/[^a-zA-Z0-9]/g, '');
        json.cpf = json.cpf.replace(/[^a-zA-Z0-9]/g, '');
        json.phone = json.phone.replace(/[^a-zA-Z0-9]/g, '');

        json.address.zipcode = json.address.zipcode.replace(/[^a-zA-Z0-9]/g, '');
        return json;
      }
    }
  }
</script>

<template lang="pug">
  .component-creditCard
    .title Cartão de Crédito

    .restrictAreaForm
      .creditCard
        CreditCardComponent(v-model="card")
      el-form(ref='cardForm', :model='card', :rules="rules.card")
        .restrictAreaForm-formCreditCard
          el-form-item(label='Número do Cartão' prop="number")
            el-input(v-model='card.number' v-mask="'#### #### #### ####'")
          el-form-item(label='Data de Expiração' prop="expiry")
            el-input(v-model='card.expiry' v-mask="'##/##'" id="expiry")
          el-form-item(label='CVV'  prop="cvv")
            el-input(v-model='card.cvv' v-mask="'###'")
        .restrictAreaForm-formCreditCard.full
          el-form-item(label='Nome do Titular' prop="name")
            el-input(v-model='card.name')

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

      .subtitle Endereço do Comprador
      el-form(ref='addressForm', :model='address' :rules="rules.address")
        .restrictAreaForm-formAddress
          el-form-item(label='CEP' prop="zipcode" autocomplete="off")
            el-input(v-model="address.zipcode" @input="getAdress" v-mask="'#####-###'")
          el-form-item(label='País' prop="country")
            el-input(value="Brasil")
          el-form-item(label='Estado' prop="state")
            el-input(v-model="address.state")
          el-form-item(label='Cidade' prop="city")
            el-input(v-model="address.city")
          el-form-item(label='Rua' prop="street")
            el-input(v-model="address.street")
          el-form-item(label='Número' prop="street_number")
            el-input(v-model="address.street_number")

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
      border-top: 1px solid rgba(0,0,0,.2)

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
      /deep/
        .creditCard
          margin-bottom: 25px !important
        .jp-card
          min-width: unset
        .jp-card-front
          background-color: var(--highlightColor)
        .jp-card-invalid
          color: rgba(255,255,255,.3) !important

      &-formCreditCard, &-formBuy, &-formComplement, &-formAddress
        display: grid
        grid-template-columns: 2fr 1fr 1fr
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
      &-formAddress
        grid-template-columns: 1fr 1fr 1fr

    .appButton
      height: 38px
      width: 134px

      &.loading
        display: flex
        justify-content: center



</style>
