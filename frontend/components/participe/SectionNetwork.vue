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

        .sectionNetwork-text
          p.paragraphOS INTERVENIENTES NO PRESENTE CONTRATO DE CÂMBIO - COMPRADOR, VENDEDOR
          p E CORRETOR -DECLARAM TER PLENO CONHECIMENTO DAS NORMAS CAMBIAIS VIGENTES, NOTADAMENTE
          p DA LEI NR. 4131, DE 03/09/1962, E ALTERAÇÕES SUBSEQUENTES, EM ESPECIAL DO ART. 23 DO CITADO
          p DIPLOMA, “VERBIS”: “ART. 23 - AS OPERAÇÕES CAMBIAIS NO MERCADO DE TAXA LIVRE SERÃO EFETUADAS
          p ATRAVÉS DE ESTABELECIMENTOS AUTORIZADOS A OPERAR EM CÂMBIO, COM A INTERVENÇÃO DE CORRETOR OFICIAL QUANDO PREVISTO EM LEI OU REGULAMENTO, RESPONDENDO AMBOS PELA IDENTIDADE DO CLIENTE, ASSIM COMO PELA CORRETA CLASSIFICAÇÃO DAS INFORMAÇÕES POR ESTE PRESTADAS, SEGUNDO NORMAS FIXADAS PELA SUPERINTENDÊNCIA DA MOEDA E DO CRÉDITO. PARÁGRAFO PRIMEIRO - AS OPERAÇÕES QUE NÃO SE ENQUADREM CLARAMENTE NOS ITENS ESPECÍFICOS DO CÓDIGO DE CLASSIFICAÇÃO ADOTADO PELA SUMOC, OU SEJAM CLASSIFICÁVEIS EM RUBRICAS RESIDUAIS, COMO “OUTROS” E “DIVERSOS”, SÓ PODERÃO SER REALIZADAS ATRAVÉS DO BANCO DO BRASIL S.A. PARÁGRAFO SEGUNDO - CONSTITUI INFRAÇÃO IMPUTÁVEL AO ESTABELECIMENTO BANCÁRIO, AO CORRETOR E AO CLIENTE, PUNÍVEL COM MULTA DE 50 (CINQÜENTA) A 300 POR CENTO (TREZENTOS POR CENTO) DO VALOR DA OPERAÇÃO PARA CADA UM DOS INFRATORES, A DECLARAÇÃO DE FALSA IDENTIDADE NO FORMULÁRIO QUE, EM NÚMERO DE VIAS E SEGUNDO O MODELO DETERMINADO PELO BANCO CENTRAL DO BRASIL, SERÁ EXIGIDO EM CADA OPERAÇÃO, ASSINADO PELO CLIENTE E VISADO PELO ESTABELECIMENTO BANCÁRIO E PELO CORRETOR QUE NELA INTERVIEREM. (REDAÇÃO DADA PELO ART. 72 DA LEI 9069, DE 29/06/95. PARÁGRAFO TERCEIRO - CONSTITUI INFRAÇÃO, DE RESPONSABILIDADE EXCLUSIVA DO CLIENTE, PUNÍVEL COM MULTA DE 5 (CINCO) A 100 POR CENTO (CEM POR CENTO) DO VALOR DA OPERAÇÃO, A DECLARAÇÃO DE INFORMAÇÕES FALSAS NO FORMULÁRIO A QUE SE REFERE O PARÁGRAFO SEGUNDO. (REDAÇÃO DADA PELO ART. 72 DA LEI NR. 9069, DE 29/06/95). PARÁGRAFO QUARTO - CONSTITUI INFRAÇÃO, IMPUTÁVEL AO ESTABELECIMENTO BANCÁRIO E AO CORRETOR QUE INTERVIEREM NA OPERAÇÃO, PUNÍVEL COM MULTA EQUIVALENTE DE 5 (CINCO) A 100 POR CENTO (CEM POR CENTO) DO RESPECTIVO VALOR, PARA CADA UM DOS INFRATORES, A CLASSIFICAÇÃO INCORRETA, DENTRO DAS NORMAS FIXADAS PELO CONSELHO DA SUPERINTENDÊNCIA DA MOEDA E DO CRÉDITO, DAS INFORMAÇÕES MAÇÕES PRESTADAS PELO CLIENTE NO FORMULÁRIO A QUE SE REFERE O PARÁGRAFO SEGUNDO DESTE ARTIGO. PARÁGRAFO QUINTO - EM CASO DE REINCIDÊNCIA, PODERÁ O CONSELHO DA SUPERINTENDÊNCIA DA MOEDA E DO CRÉDITO CASSAR A AUTORIZAÇÃO PARA OPERAR EM CÂMBIO AOS ESTABELECIMENTOS BANCÁRIOS QUE NEGLIGENCIAREM O CUMPRIMENTO DO DISPOSTO NO PRESENTE ARTIGO E PROPOR À AUTORIDADE COMPETENTE IGUAL MEDIDA EM RELAÇÃO AOS CORRETORES. PARÁGRAFO SEXTO - O TEXTO DO PRESENTE ARTIGO CONSTARÁ OBRIGATORIAMENTE DO FORMULÁRIO A QUE SE REFERE O PARÁGRAFO SEGUNDO.

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


