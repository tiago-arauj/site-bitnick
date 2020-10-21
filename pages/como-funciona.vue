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
      p O aplicativo da Bitnick constitui-se no sistema baseado em bitcoins que utiliza a blockchain como plataforma. Nele é possível fazer transferências, compras e vendas de maneira pratica, segura e rápida contando com a proteção das operações criptografadas da cadeia de blocos. O aplicativo trabalha exclusivamente com bitcoins convertendo assim com quaisquer valores de quaisquer moedas após 24 horas da efetivação da transação assim sendo seu dinheiro estará aplicado no melhor investimento comprovadamente dos últimos 10 anos. Não resta duvidas que a blockchain será a plataforma comercial do futuro assim como a internet é a plataforma comercial do presente. Os benefícios do aplicativo envolvem confidencialidade, criptografia em camadas, múltiplas fontes de identificação além de ser imune as políticas econômicas de cada região. Dessa maneira a Bitnick protege seu capital da inflação decorrente de politicas econômicas garante a segurança e promove verdadeira rentabilidade de seu capital.

    .page-content
      section.sectionVideos
        SectionTitle Acompanhe nossa rede
        .sectionVideos-header
          BoxTitle.sectionVideos-boxTitle(label="Assista", title="Tempo real")
          p.sectionVideos-description Exibimos tudo que acontece em tempo real porque a transparência do nosso processo e produto, e a honestidade da nossa rede de colaboradores são os pilares morais do projeto, garantindo garantindo a fidedignidade de um produto orgânico e de uma rede comprometida.
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

