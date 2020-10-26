<script>
  export default {
    name: 'EventCounter',
    components: {},
    props: {
      dateTime: {
        type: String,
        default: '',
      },
      image: {
        type: String,
        default: '',
      },
    },
    data: () => ({
      date: '',
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      style: {
        background: {},
      }
    }),
    mounted() {
      setInterval(this.getDate, 1000);
      setTimeout(this.setStyles, 300)
    },
    methods: {
      getDate() {
        this.date = this.$moment(this.dateTime).diff(this.$moment(), 'seconds');
        this.days = Math.floor(this.date / (60 * 60 * 24));
        this.date %= 60 * 60 * 24;
        this.hours = Math.floor(this.date / (60 * 60));
        this.date %= 60 * 60,

          this.minutes = Math.floor(this.date / 60);
        this.seconds = this.date % 60;
      },
      setStyles() {
        this.style.background = {
          'background-image': "url(" + this.image.url + ")"
        };
      }
    }
  }
</script>

<template lang="pug">
  .container
    .background(:style="style.background")
    .content
      h4 Contagem até o grande evento
      .grid
        .countdown
          .value {{days}}
          .unit Dias
        .countdown
          .value {{hours}}
          .unit Horas
        .countdown
          .value {{minutes}}
          .unit Minutos
        .countdown
          .value {{seconds}}
          .unit Segundos
</template>



<style lang="sass" scoped>
  .container
    width: 100vw
    padding: 50px 0
    overflow: hidden
    position: relative

    h4
      text-shadow: var(--textShadow)

    .background
      background:
        size: cover
        repeat: no-repeat
        position-x: left
        position-y: center
      width: 100%
      height: 100%
      position: absolute
      top: 0
      right: 0

    .content
      display: grid
      grid-template-columns: 1fr
      width: 80vw
      margin: 0 auto
      z-index: 1
      text-align: center

      @media (max-width: 600px)
        width: 100vw

      h4
        color: white

      .grid
        display: grid
        grid-template-columns: 1fr 1fr 1fr 1fr
        width: 80%
        margin: 0 auto
        justify-items: center

        @media (max-width: 600px)
          grid-column-gap: 10px
          width: 95%

        .countdown
          z-index: 1
          padding: 20px
          min-width: 100px
          background-color: var(--highlightColor)
          font-family: Montserrat, serif
          box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)

          @media (max-width: 600px)
            min-width: 20vw
            padding: 20px 0

          .value
            color: #ffffff
            font-size: 48px
            font-weight: 600
            text-align: center
            line-height: 1.2

            @media (max-width: 600px)
              font-size: 30px

          .unit
            font-size: 14px
            font-weight: 400
            color: white


      h4
        z-index: 1

</style>
