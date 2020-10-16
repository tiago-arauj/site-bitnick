<script>
export default {
  name: 'SectionProjects',
  data: () => ({
    tabs: [
      {title: 'Consumo consciente', text: ' As tendências de mercado mostram que os alimentos orgânicos têm crescido em popularidade, porém os produtos orgânicos ainda são de dificil acesso e com preços elevados. Sendo assim, ao investir nesse Token comprando Organiks (OGK) além de um investimento você patrocina as boas práticas de produção de orgânicos e a logística eficiente que facilitará para os agricultores, consecutivamente baixando os custos e barateando para o mercado consumidor. Por isso os colaboradores são contemplados com ótimos descontos ao comprarem nos estabelecimentos parceiros com a Organik (OGK), sendo recompensados por melhorar a qualidade e disponibilidade dos orgânicos ' },
      {title: 'Garantias Fiduciárias', text: 'O investimento nesse projeto, através da compra de Organiks (OGK), tem a fidúcia do própio alimento que será plantado, alem das reservas fundiárias especialmente separadas para isso. A Organik compra de volta os Contratos Inteligentes pelo preço base de $ 0,12. Sendo assim, todo investimento é garantido pela empresa, e parte lucro gerado pelo cultivo, industrialização e venda é repassado para o investidor.' },
      {title: 'Valorização da moeda', text: 'A moeda OGK é utilizada em todos os estabelecimentos da organização e em todos os seus parceiros, garantindo a alta rotatividade da moeda. Com o investimento através da compra de Organiks (OGK), mais produtos são plantados, colhidos e lançados ao mercado, causando um aumento das transações realizadas com a moeda, e aumentando a probabilidade de valorização da mesma' },
      {title: 'Parceria', text: 'A Organik por oferecer descontos exclusivos, e ser detentora de uma rede inovadora de produção, logística e venda, nossa empresa consegue garantir uma grande entrega de produtos com baixos preços, atraindo consumidores fidelizados pela qualidade, disponibilidade e preços. Sendo assim, os parceiros da Organik são filiados a marca, e consequentemente tem acesso a toda a rede de consumo fidelizada. As parcerias tem um desconto de atacado na compra dos produtos.' },
      {title: 'Agricultor Individual', text: 'O agricultor que coopera com a Organik, tem um investimento que é orientado a profissionalizar seus processos, viabilizando uma produção com maior quantidade e qualidade. A Organik auxilia o produtor em todos seus processos, desde a escolha do grão, à maneira de cultivo e a canalização de venda. Portando, o agricultor Organik recebe um investimento e treinamento para lucrar ainda mais com menos riscos.' },
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
      color: #FFFFFF
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
          color: #FFFFFF
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
            color: #FFFFFF
          .el-tabs__nav-wrap.is-scrollable
            display: flex
            align-items: center
          .el-tabs__item.is-top:nth-child(2)
            padding-left: 20px !important
          .el-tabs__item.is-top:last-child
            padding-right: 20px !important
</style>


