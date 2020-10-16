<script>
export default {
  name: 'SectionNetwork',
  data() {
    return {
      form: {
        name: '',
        email: '',
        cpf: '',
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
        cpf: [
          { required: true, message: 'Por favor insira o CPF', trigger: 'blur' },
          { min: 14, max: 14, message: 'Por favor insira o CPF corretamente', trigger: 'blur' }
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
        await this.$collaborator.create(this.form).then(data => {
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
    },
  }
}
</script>

<template lang="pug">
  section.sectionNetwork
    SectionTitle Nossa rede colaborativa
    .sectionNetwork-content
      .sectionNetwork-knowIt
        BoxTitle.sectionNetwork-boxTitle(label="Conheça nossa", title="Rede Colaborativa")
        .sectionNetwork-text
          p.paragraph A rede colaborativa se consiste em um sistema que possibilita uma rede de assistência mútua e pessoal em busca de uma vida saudável. No entedimento do que é vida saudável se destaca como fatores primordiais: A busca de sabedoria, alimentação saudável, prática de exercícios regulares, meditações e orações em forma de gratidão. O processo da vida é complexo e necessita maestria para compreender que tudo e todos estão ligados e participam de um conjunto evolutivo único, partindo dessas premissas, você compreende que individualmente você pode viver bem e ser feliz, mas para a plena realização do seu ser é necessário que você ajude aos seus semelhantes da melhor maneira possível. Isso envolve conhecer o processo natural da vida e servir ao próximo de maneira altruísta e voluntária.
          p.paragraph Pensando assim, imaginamos uma forma de auxiliar nossos amigos, parceiros, colaboradores  e todos aqueles que também façam parte dessa filosofia para tornar essa transformação mais fácil e prazerosa, juntos trabalharemos colaborativamente para criar um sistema que facilite e maximize o processo de uma vida saudável.
          p.paragraph Tal qual organizamos grupos para realização de tarefas cotidianas, assim como coaching com os melhores profissionais de cada area, da medicina alopática, a meditação tântrica.
          p.separator Formação de grupos
          p.paragraph Os grupos serão formados por convergência dos anseios, buscas de resultados. Pela aptidão e desenvolvimento físico e emocional, pela capacidade cognitiva, meditativa e emocional.
          p.separator Técnica
          p.paragraph A técnica consiste em uma mudança gradual dos hábitos e costumes em uma transformação interna principalmente, para após essa mudança deixar a nova personalidade formar a base de sustentação de uma vida feliz e saudável
      .sectionNetwork-formArea
        h6.sectionNetwork-formTitle Faça parte da nossa rede
        el-form.sectionNetwork-form(:model="form", :rules="rules", ref="form", status-icon=true)
          el-form-item(prop="name")
            el-input(v-model='form.name', placeholder="Nome Completo")
          el-form-item(prop="email")
            el-input(v-model='form.email', placeholder="email@dominio.com")
          el-form-item(prop="cpf")
            el-input(v-model='form.cpf', placeholder="CPF", v-mask="'###.###.###-##'")
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
    &-text
      padding-right: 32px
      .paragraph
        margin: 8px 0
        line-height: 1.5em
        font-size: 14px
      .separator
        margin: 8px 0
        line-height: 1.5em
        font-weight: 600
    &-formTitle
      color: var(--highlightColor)
      font:
        family: 'Barlow-Medium'
        size: 1.25em
    &-knowIt
      width: 70vw
    &-formArea
      width: 30vw
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
        padding: 16px
      &-knowIt
        width: auto
      &-formArea
        margin-top: 24px
        width: 80vw
</style>


