<script>
export default {
  name: 'SectionProjects',
  data: () => ({
    tabs: [
      {title: 'Finanças conscientes', text: ' As tendências de mercado mostram que hoje existem dois caminhos antagônicos para gerir seu capital. Depois de muito pesquisar e acompanhar o mundo financeiro nos últimos 10 anos, concluímos que o pacto selado pelas sociedades modernas não correspondem as expectativas dos pactuantes, levando assim a um sisão por interesses conflituosos e falsas expectativas. Concluímos que para melhor atender nossos colaboradores, precisamos ofertar possibilidades de investimentos rentáveis e confiáveis, com ferramentas tecnológicas seguras e precisas para gestão financeira.  ' },
      {title: 'Garantias Fiduciárias', text: 'O investimento nesse projeto, tem como garantia grãos cotados pela bolsa de Chicago conhecidos como comodites de grãos, 30% do lucro é investido em cripto ativos com essa finalidade www.organik.net.br/ . ' },
      {title: 'Valorização da moeda', text: 'A moeda BTNK é utilizada em todos os estabelecimentos comerciais de serviços e afins podendo ser utilizada também pessoa a pessoa ofertando serviços e vantagens exclusivas para cada categoria da organização, beneficiando todos os seus parceiros, garantindo a alta rotatividade da moeda. Com o investimento através da compra de bitnicks (BTNK). Possibilitando assim uma alta circulação do ativo corrente gerando lucratividade, alta capitalização e valorização de mercado.' },
      {title: 'Parceria', text: 'https://www.organik.net.br https://www.ethereum.org/pt-br/ ' },
      {title: 'Taxas e serviços', text: 'O agricultor que coopera com a Organik, tem um investimento que é orientado a profissionalizar seus processos, viabilizando uma produção com maior quantidade e qualidade. A Organik auxilia o produtor em todos seus processos, desde a escolha do grão, à maneira de cultivo e a canalização de venda. Portando, o agricultor Organik recebe um investimento e treinamento para lucrar ainda mais com menos riscos.' },
    ],
  }),
   computed: {
    tabsPosition () {
      const screenWidth = this.$store.state.layout.page.screenWidth;
      return screenWidth <= 600 ? 'top' : 'left'
    }
  },
}
</script>

<template lang="pug">
  section.sectionProjects
    .sectionProjects-content
      SectionTitle.sectionProjects-title Entenda nosso projeto
      el-tabs.sectionProjects-tabs(:tab-position="tabsPosition")
        el-tab-pane.sectionProjects-tab(
          v-for="tab, key in tabs",
          :key="key",
          :label='tab.title')
          .sectionProjects-tabContent
            BoxTitle.sectionProjects-boxTitle(label="Projeto", :title="tab.title")
            .sectionProjects-text
              p {{tab.text}}
</template>

<style lang="sass" scoped>
  .sectionProjects
    width: 100%
    background-image: linear-gradient(-70deg, #363534, #363534)
    display: flex
    align-items: center
    justify-content: center
    padding: 32px 0
    &-content
      width: fit-content
      max-width: 1024px
      padding: 24px 16px
    &-title
      color: #EBBB17
    &-tabs
      /deep/
        .el-tabs__item
          color: #FFFFFF
          text-align: left
          margin: 8px 0
          &.is-active
            border: 1px solid  var(--highlightColor)
              radius: 24px
        .el-tabs__active-bar, .el-tabs__nav-wrap::after
          display: none
    &-tabContent
      padding-left: 50px
      margin-left: 24px
      position: relative
    &-boxTitle
      margin-bottom: 15px
      /deep/
        .boxTitle-title
          color: #EBBB17
    &-text
      color: #FFFFFF
  @media (max-width: 600px)
    .sectionProjects
      &-content
        width: 100%
        box-sizing: border-box
      &-tabContent
        padding-left: 16px
      &-tabs
        /deep/
          .el-tabs__item
            text-align: center
          .el-tabs__nav-next, .el-tabs__nav-prev
            color: #EBBB17
          .el-tabs__nav-wrap.is-scrollable
            display: flex
            align-items: center
          .el-tabs__item.is-top:nth-child(2)
            padding-left: 20px !important
          .el-tabs__item.is-top:last-child
            padding-right: 20px !important
</style>


