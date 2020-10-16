<script>

  export default {
    name: 'EventBanner',
    props: {
      name: {
        type: String,
        default: '',
      },
      dateTime: {
        type: String,
        default: '',
      },
      address: {
        type: String,
        default: '',
      },
      image: {
        type: String,
        default: '',
      },
    },
    data() {
      return {
        style: {
          background: {},
        }
      }
    },
    mounted () {
      setTimeout(this.setBackground, 300)
    },

    methods: {
      toTickets() {
        this.$SmoothScroll(this.$parent.$refs['price'].$refs['tickets'],1000,undefined,undefined,'y');
      },
      setBackground() {
        this.style.background = {
          'background-image': "url(" + this.image.url + ")"
        };
      }
    }
  }
</script>

<template lang="pug">
  .banner
    .background
      .background_image(:style="style.background" ref="background_image")
      .background_content
        h2.cover-title
          | COMPRE SEUS INGRESSOS
        strong.cover-xl-text {{name}}
        p.cover-date
          | {{dateTime  | moment("LL")}}
        a.btn.btn-primary.btn-rounded(@click="toTickets")
          | Comprar agora


</template>

<style lang="sass" scoped>
  .background
    position: relative
    width: 100vw
    height: 90vh
    overflow: hidden

    &_image
      background:
        size: cover
        repeat: no-repeat
        position-x: left
      width: 104%
      height: 102%
      position: absolute
      top: 0
      right: -2%
      z-index: 0
      filter: blur(10px)

    &_content
      z-index: 5
      position: absolute
      top: 25vh
      width: 100vw
      text-align: center

      .cover-title
        margin-top: 25px
        margin-bottom: 0
        font-weight: 500
        color: #ffffff
        text-transform: uppercase
        opacity: 1
        -webkit-transform: translateY(0px)
        transform: translateY(0px)
        -webkit-transition: all 0.4s 300ms ease-in-out
        transition: all 0.4s 300ms ease-in-out
        text-shadow: var(--textShadow)

      .cover-xl-text
        color: var(--highlightColor)
        text-transform: uppercase
        font-size: 90px
        font-weight: 900
        line-height: 1.1
        opacity: 1
        -webkit-transform: translateY(0px)
        transform: translateY(0px)
        -webkit-transition: all 0.4s 600ms ease-in-out
        transition: all 0.4s 600ms ease-in-out
        text-shadow: var(--textShadow)

        @media (max-width: 600px)
          font-size: 65px
          font-weight: 800

      .cover-date
        font-size: 18px
        color: #ffffff
        margin-bottom: 25px
        text-transform: uppercase
        opacity: 1
        -webkit-transform: translateY(0px)
        transform: translateY(0px)
        -webkit-transition: all 0.4s 900ms ease-in-out
        transition: all 0.4s 900ms ease-in-out
        text-shadow: var(--textShadow)

</style>
