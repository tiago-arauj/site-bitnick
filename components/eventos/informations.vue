<script>
  export default {
    name: 'EventInformations',
    props: {
      tickets: {
        type: Array,
        default: () => ([])
      },
      dateTime: {
        type: String,
        default: '',
      },
      address: {
        type: String,
        default: '',
      },
      description: {
        type: String,
        default: '',
      },
    },
  }
</script>

<template lang="pug">
  .container
    .informations
      .icon_box_two
        i.el-icon-date
        .content
          h5.box_title DATA
          p {{dateTime  | moment("LLL")}}
      .icon_box_two
        .center
          i.el-icon-location-information
          .content
            h5.box_title  Endereço
            p  {{address}}
      .icon_box_two
        i.el-icon-s-ticket
        .content(v-if="tickets[0] !== undefined")
          h5.box_title Ingressos
            p A partir de R$ {{tickets[0].price.toFixed(2)}}

    .section_title
      h3.title Sobre o evento
    .row.justify-content-center
      p {{description}}
</template>

<style lang="sass" scoped>
  .container
    width: 80vw
    margin: 5vw auto
    padding: 30px
    background: white
    border: 1px solid #ddd
    border-radius: 3px

    .informations
      display: grid
      grid-template-columns: 1fr 2fr 1fr
      grid-column-gap: 24px
      grid-row-gap: 32px
      margin-bottom: 50px

      @media (max-width: 600px)
        grid-template-columns: 1fr
        grid-row-gap: 20px

      .icon_box_two
        position: relative
        padding: 0
        margin: 25px 0

        @media (max-width: 600px)
           margin: 10px 0

      .icon_box_two i
         position: absolute
         left: 0
         font-size: 40px
         width: 50px
         color: var(--highlightColor)
         top: 0
         bottom: auto
         line-height: 56px

      .icon_box_two .content
         margin-left: 60px
         float: left

      .icon_box_two .content .box_title
         margin-bottom: 3px
         font-weight: 500
         text-transform: uppercase
         margin-top: 6px

      .icon_box_two .content p
         font-weight: 500
         color: #838383

  .center
    position: relative
    width: 75%
    margin: 0 auto

    @media(max-width: 600px)
      width: 100%
</style>
