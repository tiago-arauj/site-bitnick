<script>
  import CardVideos from '~/components/como-funciona/CardVideos'
  import SectionProjects from '~/components/como-funciona/SectionProjects'
  import SectionForm from '~/components/como-funciona/SectionForm'
  import SectionWip from '~/components/como-funciona/SectionWip'

  const OBSERVER = null;
  export default {
    components: {
      CardVideos,
      SectionProjects,
      SectionForm,
      SectionWip
    },
    mounted: function () {
      this.createObserver(document.querySelector('#bannerImage'));
      document.getElementById("changeMenu").checked = false
    },
    beforeDestroy() {
      this.OBSERVER.disconnect();
    },
    methods: {
      callback: function (entries) {
        entries.forEach(function (entry) {
          document.querySelector('#theHeader').classList.toggle('isSticky', !entry.intersectionRatio > 0);
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
    PageBanner(label="Como Funciona", title= "Entenda um pouco mais sobre gestão financeira no aplicativo Bitnick.", image="black.jpg")
      p Para todo o investimentos é necessário um processo contínuo de investigação e mediação, possibilitando assim transparência e segurança a relação de negócios, garantindo equidade entre as expectativas das partes. Pensando nisto a Bitnick.co desenvolveu um software que é uma ferramenta eficaz para tal aplicação. Constitui-se de um aplicativo que facilita as transações financeiras, utilizando recursos tecnológicos para mediação de conflitos e análise de investimentos. Esse campo analítico possibilita em si próprio uma infinidade de possibilidades. O aplicativo da Bitnick constitui-se no sistema baseado em bitcoins que utiliza a blockchain como plataforma. Nele é possível fazer transferências, compras e vendas de maneira prática, segura e rápida contando com a proteção das operações criptografadas da cadeia de blocos. O aplicativo trabalha exclusivamente com bitnicks convertendo seus valores após 24 horas da efetivação da transação. Não resta duvidas que a blockchain será a plataforma comercial do futuro assim como a internet é a plataforma comercial do presente. Os benefícios do aplicativo envolvem confidencialidade, criptografia em camadas, múltiplas fontes de identificação além de ser imune as políticas econômicas de cada região. Dessa maneira a Bitnick protege seu capital da inflação, garante a segurança e promove verdadeira rentabilidade de seu capital.

    .page-content
      section.sectionVideos
        SectionTitle Acompanhe nossa rede
        .sectionVideos-header
          BoxTitle.sectionVideos-boxTitle(label="Assista", title="Tempo real")
          p.sectionVideos-description Exibimos tudo que acontece em tempo real porque a transparência é parte do nosso compromisso.
          //AppPagination
        //.sectionVideos-list
          /CardVideos(v-for="video, key in [1,2,3,4,5,6]", :key="key")
        SectionWip
      SectionProjects
      SectionForm

</template>

<style lang="sass" scoped>
  .sectionVideos
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
    &-list
      display: grid
      grid-template-columns: repeat(auto-fill,minmax(280px,1fr))
      grid-column-gap: 4px
      grid-row-gap: 4px


    @media (max-width: 600px)
      .sectionVideos
        &-header
          flex-direction: column
        &-boxTitle
          flex-basis: auto


</style>

<style lang="sass">
  .theBanner
    &-text
      text-align: justify



</style>

