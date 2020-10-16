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
          BoxProject(label="Saiba", title="Quem Somos", buttonText="Saiba mais", image="conheca-01.png", link="como-funciona")
            p Somos uma empresa que nasceu da necessidade de boas praticas do manejo no campo e da preservação da natureza, que investe em agricultura orgânica e auto sustentável. Através de técnicas especializadas, conseguimos restabelecer o ciclo natural que respeita as especificidades da planta. Produzir em grande escala, tornando assim a agricultura orgânica competitiva aos métodos convencionais geneticamente modificados e protegidos quimicamente. Utilizamos novos sistemas e metodologias cientificas replicáveis buscando, através de processos naturais e combinações orgânicas, obter o melhor resultado para resgatar a agricultura original e a mantutenção da saúde humana.
          BoxProject(label="Como", title="Funciona", buttonText="Saiba mais", image="conheca-05.jpg", link="como-funciona")
            p Hoje a maior parte dos produtos orgânicos são produzidos por empresas especializadas, cooperativas, pequenos produtores e assentamentos. Dentro deste contexto, você tem uma dificuldade em gerar alta produtividade pois quem produz de forma orgânica normalmente é independente e trabalha por convicção sem auxílio de grandes empresas e orgãos especializados. Os alimentos convencionais são muito mais fáceis de produzir e comercializar, assim atraindo muito mais agricultores. Quem opta em trabalhar de maneira orgânica é porque acredita em valores de cunho moral e sabem dos malefícios da agricultura convencional. Pensando nisso, desenvolvemos um Contrato Inteligente que envolve o financiamento de toda a linha de produção, colheita, preparação, logística e vendas integradas, possibilitando assim um aumento de produção e diminuição dos preços no mercado.
          BoxProject(label="Como", title="Comprar", buttonText="Saiba mais", image="conheca-04.jpg", link="area-restrita/comprar-moeda")
            p Para comprar você precisa preencher a lista de cadastro, nos enviar uma cópia de sua habilitação e informar sua carteira. Você pode fazer qualquer tipo de investimento, além de usar suas criptomoedas para comprar em todos os estabelecimentos associados
      section.testimonials
        .testimonials-image
        .testimonials-content
          blockquote.testimonials-text A
            span.textStrong Organik
            | me
            span.textStrong beneficiou
            | não só pelo fato do
            span.textStrong investimento,
            | mas também pela mudança de hábito e ganho de saúde através do incentivo a
            span.textStrong agricultura orgânica e auto sustentável!
          .testimonials-name Bruno Abrantes, Diretor de Tecnologia da empresa PabaCorp.
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
         image: url("~static/images/fundo-depoimentos.png")
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
