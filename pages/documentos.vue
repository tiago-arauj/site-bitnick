<script>
  import CardFile from '~/components/documentos/CardFile'
  import { ScalingSquaresSpinner } from 'epic-spinners/dist/lib/epic-spinners.min';


  const OBSERVER = null;
  export default {
    components: {
      CardFile,
      ScalingSquaresSpinner
    },
    data() {
      return {
        documents: undefined,
        loading: true
      }
    },
    computed: {
      isLoggedIn: function() {
        return this.$store.getters['auth/check'];
      }
    },
    mounted: function () {
      this.createObserver(document.querySelector('#bannerImage'));
      document.getElementById("changeMenu").checked = false

      this.getData();
    },
    beforeDestroy() {
      this.OBSERVER.disconnect();
    },
    methods: {
      async getData() {
        try {
          this.loading = true;

          await this.$document.index().then(data => {
            //Tratamento de erro
            if (data.data === undefined) {
              this.notification('error', 'Os documentos não foram carregados', data.error.message);
              this.loading = false;
              return
            }

            this.documents = data.data;
            this.loading = false
          });
        } catch (error) {
          this.notification('error', 'Os documentos não foram carregados', 'Tente novamente mais tarde');
          this.loading = false;
        }
      },
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
    PageBanner(label="Documentos", title="Entenda e acompanhe detalhadamente nosso empreendimente", image="black.jpg")
      p A segurança desse empreendimento está findada nas melhores ferramentas garantidoras da integridade, confiabilidade e disponibilidade de informações que existem no mundo atualmente. Sendo assim, toda a documentação inerente ao negócio, é original, confiavel e está disponível a todos, 24 horas por dia.
    .page-content
      section.sectionFiles
        SectionTitle Documentos importantes
        .sectionFiles-header
          BoxTitle.sectionFiles-boxTitle(label="Acesse todos os", title="Documentos")
          p.sectionFiles-description Disponibilizamos toda a documentação inerente ao empreendimento porque acreditamos na liberdade de acesso a informação e a transparência de processo, para garantir uma parceria produtiva, próspera e longa. Valorizamos todos os nossos colaboradores, oferencendo-o todo o suporte e informações possíveis.
        .sectionFiles-list
          CardFile(v-for="file, key in documents", :key="key", v-if="!loading", v-bind="file")
          ScalingSquaresSpinner(:animation-duration="2000", :size="40", color="var(--highlightColor)", v-else)
</template>

<style lang="sass" scoped>
  .sectionFiles
    position: relative
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
      margin: 24px 0
      display: grid
      grid-template-columns: repeat(auto-fill,minmax(280px,1fr))
      grid-column-gap: 24px
      grid-row-gap: 32px
    @media (max-width: 600px)
      .sectionFiles
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

