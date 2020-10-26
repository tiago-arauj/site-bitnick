<script>
  import TheBanner from '~/components/home/TheBanner'
  import BoxProject from '~/components/home/BoxProject'

  const OBSERVER = null;
  export default {
    components: {
      TheBanner,
      BoxProject,
    },
    mounted: function () {
      this.createObserver(document.querySelector('#bannerImage'));
      document.getElementById("changeMenu").checked = false;
    },
    beforeDestroy() {
      this.OBSERVER.disconnect();
    },
    methods: {
      //Manipulador de pagina
      callback: function (entries) {
        entries.forEach(function (entry) {
          document.querySelector('#theHeader').classList.toggle('isSticky', !entry.intersectionRatio > 0);
          document.querySelector('#bannerImage').classList.toggle('isSticky', !entry.intersectionRatio > 0);
        })
      },
      createObserver: function (target) {
        const options = {
          rootMargin: '10px',
          threshold: 0
        };
        this.OBSERVER = new IntersectionObserver(this.callback, options);
        this.OBSERVER.observe(target)
      }
    },
  }
</script>

<template lang="pug">
  .page
    TheBanner
    .page-content
      section.theProject
        SectionTitle Conheça o projeto
        .theProject-list
          BoxProject(label="Saiba", title="Quem Somos", buttonText="Saiba mais", image="Capturar.png", link="como-funciona")
            p Somos uma organização voltada a mediação de risco e arbitragem profissional com o objetivo de minimizar perdas e sinistros. A bitnick.co é uma empresa especializada em operações financeiras, mediação de risco e sistemas de pagamento que objetivam reduzir perdas nessas relações. Criamos assim um aplicativo que valoriza seu dinheiro investindo de maneira correta, intermediando as relações para que as expectativas sejam claras e objetivas, garantindo uma operação financeira rápida e segura.

          BoxProject(label="Como", title="Funciona", buttonText="Saiba mais", image="conheca-05.jpg", link="como-funciona")
            p Para todo o investimentos é necessário um processo contínuo de investigação e mediação, possibilitando assim transparência e segurança a relação de negócios,
          BoxProject(label="Como", title="Comprar", buttonText="Saiba mais", image="como-comprar.png", link="area-restrita/comprar-moeda")
            p Para comprar você precisa preencher a lista de cadastro, nos enviar uma cópia de sua habilitação e informar sua carteira. Você pode fazer qualquer tipo de investimento, além de usar suas criptomoedas para comprar em todos os estabelecimentos associados
      section.testimonials
        .testimonials-image
        .testimonials-content
          blockquote.testimonials-text Escolhe um
            span.textStrong trabalho
            | de
            span.textStrong que gostes
            | e não terás
            span.textStrong que trabalhar,
            | nem um dia na tua vida
          .testimonials-name Confúcio
</template>

<style lang="sass" scoped>
  .theProject
    width: 100%
    max-width: 1024px

    &-list
      padding: 16px 0
      position: relative

      &::before
        background-color: #6b8cad
        content: ''
        height: 100%
        left: -9px
        opacity: .3
        position: absolute
        top: 0
        width: 1px

  .testimonials
     align-items: center
     background-image: linear-gradient(145deg, #21211E, #21211E, #21211E, #21211E)
     display: flex
     flex-direction: column
     width: calc(100% - 48px)
     padding: 80px 24px
     position: relative

     &-image
       background:

         size: contain
         repeat: no-repeat
         position-x: left
       width: 100%
       height: 100%
       position: absolute
       top: 0
       right: 0
       z-index: 0

     &-content
       color: #FFFFFF
       width: 100%
       max-width: 1024px
       z-index: 1
       &::before
         background:
           image: url("~static/images/quote.png")
           size: contain
           repeat: no-repeat
         content: ''
         float: left
         line-height: 1em
         margin: -10px 15px 0
         width: 3em
         height: 7em

     &-text
      font-size: 1.5em
      line-height: 1.25em

     &-name
       margin: 15px 0
       display: flex
       align-items: center

       &::before
         content: ""
         width: 25px
         height: 1px
         background-color: #FFFFFF
         margin-right: 5px

  .lastNews
    width: 100%
    max-width: 1024px
    &-title
      display: flex
      justify-content: space-between
  .flex-center
    display: flex
    justify-content: center
</style>
