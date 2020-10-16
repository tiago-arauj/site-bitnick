<script>
export default {
  name: 'SectionForm',
  data() {
    return {
      form: {
        name: '',
        email: '',
        companyName: '',
        cnpj: '',
        phone: '',
        message: ''
      },
      rules: {
        name: [
          { required: true, message: 'Por favor insira o nome', trigger: 'blur' },
          { min: 5, message: 'Nome muito curto', trigger: 'change' }
        ],
        email: [
          { required: true, message: 'Por favor insira o email', trigger: 'blur' },
          { min: 5, message: 'Email muito curto', trigger: 'change' }
        ],
        companyName: [
          { required: true, message: 'Por favor insira a Razão Social', trigger: 'blur' },
          { min: 5, message: 'Razão Social muito curta', trigger: 'change' }
        ],
        cnpj: [
          { required: true, message: 'Por favor insira o CNPJ', trigger: 'blur' },
          { min: 18, max: 18, message: 'Por favor insira o CNPJ corretamente', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: 'Por favor insira o telefone de contato', trigger: 'blur' },
          { min: 14, max: 15, message: 'Por favor insira o telefone de contato corretamente', trigger: 'blur' }
        ],
        message: [
          { required: true, message: 'Por favor insira uma messagem', trigger: 'change' },
          { max: 200, message: 'Mensagem muito grande', trigger: 'blur' }
        ]
      },
      loading: true
    }
  },
  methods: {
    submit() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          this.sendRequest()
        } else {
          this.notification('error', 'Registro não realizado', 'Preencha os campos do formulário');
          return false;
        }
      });
    },
    async sendRequest() {
      this.loading = true;

      try {
        await this.$partner.create(this.form).then(data => {
          //Tratamento da resposta
          if (data.data !== undefined) {
            this.notification('success', 'Registro realizado', "Em breve entraremos em contato");
            this.$refs["form"].resetFields()
          } else {
            this.notification('error', 'Registro não realizado', data.error.message);
          }
          this.loading = false;
        });
      } catch (error) {
        this.notification('error', 'Registro não realizado', 'Verifique os dados do formulário');
        this.loading = false;
      }
    }
  }
}
</script>

<template lang="pug">
  section.sectionNetwork
    SectionTitle Seja nosso parceiro
    .sectionNetwork-content
      .sectionNetwork-knowIt
        BoxTitle.sectionNetwork-boxTitle(label="Venha fazer, seja", title="Nosso Parceiro")
        .sectionNetwork-text
          p.paragraph O Brasil está se consolidando como um grande produtor de alimentos orgânicos. Já são, aproximadamente, 17 mil propriedades certificadas em todas as unidades da federação. A maior parte da produção é oriunda de pequenos produtores.
          p.paragraph A Região Sul vem à frente, com pouco mais de seis mil produtores, seguida das regiões Sudeste e Nordeste com cerca de quatro mil produtores. Os estados que se destacam em número de produtores são: Paraná, Rio Grande do Sul, São Paulo, Santa Catarina, Pará, Minas Gerais, Pernambuco, Rio de Janeiro, Ceará, Distrito Federal e Bahia.
          p.paragraph 63% são produtores exclusivos de orgânicos e 25% trabalham essencialmente com produtos orgânicos. Estima-se que cerca de um milhão de hectares é cultivado organicamente no Brasil e que os principais produtos são: Frutas, Hortaliças, Raízes, Tubérculos, Grãos e Produtos agroindustrializados
          p.paragraph O consumo de produtos orgânicos cresce anualmente cerca de 25%, sendo que havia sido previsto R$ 4 bilhões para 2018. (Fonte: Sebrae Nacional - 05/04/2019)
          a(href='#').paragraph.color-edir Conheça nossos produtos
      .sectionNetwork-formArea
        h6.sectionNetwork-formTitle Faça seu cadastro
        el-form.sectionNetwork-form(ref='form', :model='form', :rules="rules", status-icon=true)
          el-form-item(prop="name")
            el-input(v-model='form.name', placeholder="Nome Completo")
          el-form-item(prop="email")
            el-input(v-model='form.email', placeholder="email@dominio.com")
          el-form-item(prop="companyName")
            el-input(v-model='form.companyName', placeholder="Razão Social")
          el-form-item(prop="cnpj")
            el-input(v-model='form.cnpj', placeholder="CNPJ", v-mask="'##.###.###/####-##'")
          el-form-item(prop="phone")
            el-input(v-model='form.phone', placeholder="Telefone para contato", v-mask="['(##) #####-####', '(##) ####-####']")
          el-form-item(prop="message")
            el-input(type='textarea', v-model='form.message', placeholder="Escreva uma mensagem", maxlength="200", show-word-limit)
          .submit(@click="submit")
            AppButton.sectionNetwork-button.gradient(icon="el-icon-arrow-right") Enviar
</template>

<style lang="sass" scoped>
  .sectionNetwork
    width: fit-content
    max-width: 1024px
    padding: 24px 16px
    &-content
      display: flex
      flex-basis: 100%
      padding-left: 50px
      padding-top: 16px
    &-formArea
      width: 30vw
    &-knowIt
      width: 70vw
    &-text
      padding-right: 32px
      .paragraph
        margin: 8px 0
        line-height: 1.5em
    &-formTitle
      color: var(--highlightColor)
      font:
        family: 'Barlow-Medium'
        size: 1.25em
    &-form
      margin: 16px 0
      .el-input, .el-textarea
        border: 1px solid  var(--highlightColor)
        margin: 4px 0
        border-radius: 5px

      .submit
        width: fit-content
    &-button
      margin-top: 16px
  @media (max-width: 600px)
    .sectionNetwork
      &-content
        flex-direction: column
        padding-left: 16px
      &-knowIt
        width: auto
      &-formArea
        margin-top: 24px
        width: 80vw
  .color-edir
    color: var(--highlightColor)
</style>


