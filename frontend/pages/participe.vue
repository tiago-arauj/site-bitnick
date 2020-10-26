<script>
  import CardTips from '~/components/participe/CardTips'
  import CardPartner from '~/components/participe/CardPartner'
  import SectionNetwork from '~/components/participe/SectionNetwork'

  const OBSERVER = null;
  export default {
    components: {
      CardTips,
      CardPartner,
      SectionNetwork,
    },
    image: () => ({
      checkList: ['emagrecer'],
      tips: [
        {
          image: 'https://d33wubrfki0l68.cloudfront.net/326c0f7655566d44907b049a160041fb87cb3b04/f90d5/_nuxt/img/7573f1a.png',
          title: 'Organik',
          link: 'https://www.organik.net.br'
        },
        {
          image: 'https://source.unsplash.com/-YHSwy6uqvk/315x195',
          title: 'O que acontece se comermos apenas orgânicos?',
          link: 'https://www.greenme.com.br/alimentar-se/produtos-organicos/1850-o-que-acontece-quando-comemos-somente-organicos'
        },
        {
          image: 'https://source.unsplash.com/y3aP9oo9Pjc/315x195',
          title: 'Qual a importância de escolher orgânicos?',
          link: 'http://www.organicsnet.com.br/2015/07/10-beneficios-que-os-alimentos-organicos-podem-proporcionar-a-sua-saude/'
        },
      ],
    }),
    mounted: function () {
      this.createObserver(document.querySelector('#bannerImage'))
      document.getElementById("changeMenu").checked = false
    },
    beforeDestroy() {
      this.OBSERVER.disconnect();
    },
    methods: {
      callback: function (entries) {
        entries.forEach(function (entry) {
          document.querySelector('#theHeader').classList.toggle('isSticky', !entry.intersectionRatio > 0)
          document.querySelector('#bannerImage').classList.toggle('isSticky', !entry.intersectionRatio > 0)
        })
      },
      createObserver: function (target) {
        const options = {
          rootMargin: '0px',
          threshold: 0
        };
        this.OBSERVER = new IntersectionObserver(this.callback, options);
        this.OBSERVER.observe(target)
      }
    }
  }
</script>


<template lang="pug">
  .page
    PageBanner(label="Partícipe", title="Compromisso e honestidade com nossos partícipe", image="black.jpg")
      p Tendo em vista o cenário geo político mundial, nós da bitnick entendemos que o fruto do trabalho é um direito natural do indivíduo. Segundo Aristóteles base para Tomás de Aquino, Michel Foucault, Javier Hervada, dentre outros o direito natural sempre foi visto inerente à natureza humana que deve ser respeitado independentemente de sua positivação no ordenamento jurídico, social e econômico. O respeito ao direito natural independe de fronteiras territoriais e temporais. Tendo este princípio como alicerce, nos propomos a estruturar uma rede de negócios ética e transparente. Entendemos também a necessidade de que nossos partícipes compactuem com estes pensamentos. Assim em mutua cooperação poderemos estabelecer padrões éticos e morais nas relações comerciais.

    .page-content
      section.sectionPageTitle
        .sectionPageTitle-header
          BoxTitle.sectionPageTitle-boxTitle(label="Saiba o que é ideal", title="Para Você")
          p.sectionPageTitle-description O ideal para se obter bons resultados financeiros é que você tenha em mente a necessidade de bons relacionamentos comerciais que somente são atingidos através de relações verdadeiras e transparentes.

      section.sectionTips
       // h4.sectionTips-title Dicas e orientações:
        .sectionTips-list
          CardTips.sectionTips-card(v-for="tip, key in tips", v-bind="tip", :key="key")
    //  section.sectionPartners
        h4.sectionPartners-title Profissionais que recomendamos:
        .sectionPartners-list
          CardPartner.sectionPartners-card(v-for="partner, key in [1,2,3]", :key="key")
      SectionNetwork
</template>

<style lang="sass" scoped>
  .sectionPageTitle
    width: fit-content
    max-width: 1024px
    padding: 24px 16px
    &-header
      display: flex
      align-items: baseline
    &-boxTitle
      flex-basis: 380px
      padding: 16px 0 16px 50px
    &-description
      margin: 0 30px
      text-align: justify
  .sectionFilter
    box-sizing: border-box
    width: 100%
    max-width: 1024px
    padding: 16px 16px 24px
    &-question
      font:
        family: 'BarlowCondensed-Medium'
        size: 1.25em
      margin-bottom: 16px
    &-group
      display: flex
      flex-direction: column
    &-checkbox
      display: flex
      margin-bottom: 10px
      align-items: center
      &.is-checked .el-checkbox__label
          color: red
    /deep/
      .el-checkbox+.el-checkbox
        margin-left: 0
      .el-checkbox__inner, .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner
        background-color: transparent
        border: 1px solid
          color: var(--highlightColor)
          radius: 3px
        color: var(--highlightColor)
        width: 16px
        height: 16px
        &::after
          border-color: var(--highlightColor)
          margin-left: 1px
          margin-top: 1px
      .el-checkbox__label
        font:
          family: 'Signika-SemiBold'
          size: 1.15em



  .sectionTips, .sectionPartners
    box-sizing: border-box
    width: 100%
    max-width: 1024px
    padding: 16px 16px 24px
    &-title
      font:
        family: 'BarlowCondensed-Medium'
        size: 1.25em
      margin-bottom: 16px
    &-list
      margin: 24px 0
      display: grid
      grid-template-columns: repeat(auto-fill,minmax(280px,1fr))
      grid-column-gap: 24px
      grid-row-gap: 32px
    &-divButton
      display: flex
      align-items: center
      justify-content: center
      margin-top: 32px

  .sectionPartners
    border-top: 1px dashed var(--highlightColor)
    border-bottom: 1px dashed var(--highlightColor)
    padding-top: 50px

  @media (max-width: 600px)
    .sectionPageTitle
      &-header
        flex-direction: column
      &-boxTitle
        flex-basis: auto
      &-description
        margin: 0
</style>

<style lang="sass">
  .theBanner
    &-text
      text-align: justify

    &-title
      font-size: 3.3em !important

  .el-checkbox__input.is-checked+.el-checkbox__label
    color: var(--highlightColor)
</style>

