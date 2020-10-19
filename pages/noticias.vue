<!--suppress JSIgnoredPromiseFromCall -->
<script>
  import Parser from "rss-parser";
  import CarouselNews from "~/components/noticias/CarouselNews";

  const OBSERVER = null;
  export default {
    components: {
      CarouselNews,
    },
    data() {
      return {
        feeds: [],
        numSlides: 3,
        rss : [
          "https://exame.abril.com.br/noticias-sobre/bitcoin/feed/",
          "https://www.disruptordaily.com/category/industries/agriculture/feed/",
          "http://guiadobitcoin.com.br/feed/",
          "https://www.valor.com.br/financas/rss",
          "https://revistagloborural.globo.com/rss/ultimas/feed.xml"
        ]
      };
    },
    mounted: function () {
      this.createObserver(document.querySelector('#bannerImage'));
      document.getElementById("changeMenu").checked = false;

      this.getData();
    },
    beforeDestroy() {
      this.OBSERVER.disconnect();
    },
    methods: {
      //Manipulador de noticias
      async getData() {
        try {

          this.rss.forEach(item => {
            this.getRSS(item)
          });

          // setTimeout( , 8000)
        } catch (error) {
          this.notification('error', 'Não foi possivel carregar as  noticias', 'Tente novamente mais tarde');
          this.loading = false;
        }
      },
      async getRSS(rss) {
        try {
          let parser = new Parser();
          const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

          let feed = await parser.parseURL(CORS_PROXY + rss);

          feed.items.slice(0,this.numSlides).forEach(item => {
            item.from = feed.title;
            this.feeds.push(item);
          });
        } catch (e) {
          // console.log(e)
        }

      },

      //Manipulador do banner
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
    PageBanner(label="O mundo da criptomoeda", title="Mantenha-se atualizado sobre Criptomoedas", image="black.jpg")
      p As criptomoedas estão se reinventando continuamente, para isso separamos as principais notícias do mundo sobre Criptomoedas a fim de garantir a informação de qualidade a todos os interessados sobre nosso empreendimento
    .page-content
      section.sectionNews
        SectionTitle Notícias sobre criptomoeda
        .sectionNews-header
          BoxTitle.sectionNews-boxTitle(label="Informação é", title="Conhecimento")
          p.sectionNews-description A informação é o maior ativo de toda organização, então assim como distriuimos os demais ativos, também distribuímos o principal. Tenha as principais notícias sobre o mundo das moedas virtuais para manter-se atualizado e confiante da nova revolução mundial
        .sectionNews-list
          CarouselNews(:feeds="feeds", :numItems="numSlides * rss.length")
        .sectionNews-divButton
</template>

<style lang="sass" scoped>
  .sectionNews
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
    &-divButton
      display: flex
      align-items: center
      justify-content: center
      margin-top: 32px
    @media (max-width: 600px)
      .sectionNews
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

</style>

