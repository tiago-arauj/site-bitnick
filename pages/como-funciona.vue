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
    PageBanner(label="Como Funciona", title="Entenda um pouco mais sobre a revolução na cultura orgânica", image="black.jpg")
      p Os investimentos assegurados pelos SmartContract, ajudarão no planejamento agrícola através de um plano específico para cada setor. Dentro da agricultura organica existem diversas categorias de produtores: da cultura familiar ao grande fazendeiro. Cada modalidade agrícola tem suas especificidades que tornam a gestão agrícola orgânica mais complexa que o convencional. O modelo utilizado para a agricultura familiar, é exclusivo para esta modalidade de plantio, assim como os grandes latifundios tem sua própria modalidade. Se faz necessário uma rede própria exclusiva para alimentos orgânicos, por causa de suas caracteristicas próprias.
    .page-content
      section.sectionVideos
        SectionTitle Acompanhe nossa rede
        .sectionVideos-header
          BoxTitle.sectionVideos-boxTitle(label="Assista", title="Tempo real")
          p.sectionVideos-description Exibimos tudo que acontece em tempo real porque a transparência do nosso processo e produto, e a honestidade da nossa rede de colaboradores são os pilares morais do projeto, garantindo garantindo a fidedignidade de um produto orgânico e de uma rede comprometida.
          //AppPagination
        //.sectionVideos-list
          //CardVideos(v-for="video, key in [1,2,3,4,5,6]", :key="key")
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

