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
    data: () => ({
      checkList: ['emagrecer'],
      tips: [
        {
          image: 'https://source.unsplash.com/4_jhDO54BYg/315x195',
          title: '10 benefícios dos alimentos orgânicos',
          link: 'https://www.natue.com.br/natuelife/por-que-devemos-consumir-alimentos-organicos.html'
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
    PageBanner(label="Participe", title="Compromisso e honestidade com nossos participe", image="black.jpg")
      p Participe da revolução Bitnick, a bitnick pretende reunir o maior numero de pessoas que colaborem e utilizem sua rede para que juntos possamos formar um corpo e reformular o panorama econômico atual, participe dessa rede e usufrua dos benefícios da aplicação correta de capital mediação profissional e transações financeiras rápidas e seguras esse é o nosso compromisso de honestidade de transparência.

    .page-content
      section.sectionPageTitle
        .sectionPageTitle-header
          BoxTitle.sectionPageTitle-boxTitle(label="Saiba o que é ideal", title="Para Você")
          p.sectionPageTitle-description O ideal para uma vida longa e próspera, é que ela seja saudável e feliz, para isso acreditamos que vida saudável se constroi com sabedoria, alimentação saudável, prática de exercícios, orações e meditações em forma de gratidão.
      section.sectionFilter
        h4.sectionFilter-question Quais desses itens abaixo são os mais próximos do que você quer?
        el-checkbox-group.sectionFilter-group(v-model='checkList')
          el-checkbox.sectionFilter-checkbox(label='emagrecer') Quero emagrecer.
          el-checkbox.sectionFilter-checkbox(label='saudavel') Quero obter uma vida mais saudável.
          el-checkbox.sectionFilter-checkbox(label='esporte') Quero otimizar meu esporte.
          el-checkbox.sectionFilter-checkbox(label='sendentarismo') Quero sair do sendentarismo.
      section.sectionTips
        h4.sectionTips-title Dicas e orientações:
        .sectionTips-list
          CardTips.sectionTips-card(v-for="tip, key in tips", v-bind="tip", :key="key")
      //section.sectionPartners
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

