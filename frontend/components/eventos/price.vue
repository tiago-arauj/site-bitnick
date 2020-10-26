<script>
  import BankSlip from '~/components/eventos/comprar/BankSlip'
  import CreditCard from '~/components/eventos/comprar/CreditCard'

  export default {
    name: 'EventPrice',
    components: {
      BankSlip,
      CreditCard
    },
    props: {
      tickets: {
        type: Array,
        default: () => ([])
      },
      event: {
        type: Object,
        default: () => ({})
      }
    },
    data() {
      return {
        selectedTicket: {id:null},
      }
    },
    methods: {
      selectTicket(ticket) {
        this.selectedTicket = Object.assign({}, ticket);

        setTimeout(this.toPayment, 200)
      },

      toPayment() {
        this.$SmoothScroll(this.$refs['payment'],1000,undefined,undefined,'y');
      },
    }
  }
</script>

<template lang="pug">
  .container
    .section_title(ref="tickets")
      h3.title
        | COMPRE SEUS INGRESSOS
      .tickets
        .ticket(v-for="ticket, key in tickets", :key="key", @click="selectTicket(ticket)")
          .price_box(:class="{ active: selectedTicket.id === ticket.id}")
            .price_highlight(v-if="ticket.recommended") Recomendado
            .price_header
              h4 {{ticket.name}}
              h6 Pelo preço de
            .price_tag(v-if="ticket.price")
              sup R$ &nbsp
              | {{ticket.price.toFixed(2)}}
            .price_features(v-if="ticket.description !== null")
              ul
                li(v-for="item, key in ticket.description.split(';')", :key="key")  {{item}}
            .price_footer
              a.btn.btn-primary.btn-rounded(@click="selectTicket(ticket)") Comprar

    .section-buy(v-if="selectedTicket.id !== null")
      .section_title(ref="payment")
        h3.title
          | FORMA DE PAGAMENTO
      el-tabs
        el-tab-pane
          span(slot='label')
            i.el-icon-bank-card
            |  Cartão
          CreditCard(:ticket="selectedTicket" :event="event")

        el-tab-pane
          span(slot='label')
            i.el-icon-document
            |  Boleto
          BankSlip(:ticket="selectedTicket" :event="event")

</template>

<style lang="sass" scoped>
  .container
    width: 80vw
    margin: 20px auto
    padding: 30px 0

    .tickets
      display: flex
      justify-content: space-evenly
      align-items: stretch

      @media (max-width: 600px)
        display: grid
        grid-template-columns: 1fr

      .ticket
        width: 310px

        .price_box
          min-height: 300px
          position: relative
          padding: 75px 30px
          margin-bottom: 30px
          text-align: center
          background-color: #f0f2f6
          -webkit-transition: all ease-in-out 0.4s
          transition: all ease-in-out 0.4s
          font-family: "Montserrat", serif
          
        .price_footer
          position: absolute
          bottom: 50px
          margin: 0 auto
          width: 100%
          right: 0

        .price_highlight
          font-weight: 700
          text-transform: uppercase
          font-size: 12px
          position: absolute
          top: 0
          left: 0
          padding: 10px 15px
          color: #fff
          background-color: var(--highlightColor)

        .price_header
          h4
            font-size: 24px
            margin-bottom: 5px
            font-weight: 600

          h6
            font-size: 14px
            text-transform: capitalize
            color: #838383
            font-weight: 400

        .price_tag
          padding: 15px 0
          text-transform: capitalize
          color: #18181c
          font-size: 48px
          font-weight: 700

          sup
            font-size: 24px
            font-weight: 400
            top: -15px
            left: -7px
            color: #838383

        .price_features ul
          list-style: none
          padding: 0
          margin: 0

          li
            padding: 7px
            font-size: 14px
            font-weight: 400

        .price_footer
          margin-top: 30px

        .price_box:hover
          background-color: #ffffff
          -webkit-box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15)
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15)
          -webkit-transition: all ease-in-out 0.4s
          transition: all ease-in-out 0.4s


        .price_box.active
          background-color: #ffffff
          -webkit-box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15)
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15)
          -webkit-transition: all ease-in-out 0.4s
          transition: all ease-in-out 0.4s
  
  /deep/
    .el-tabs
      &__header
        margin: 10px 25px 15px
        @media (max-width: 600px)
          margin: 10px 0 15px
      &__active-bar
        background-color: transparent
      &__nav
        z-index: 1 !important
      &__nav-prev, &__nav-next
        line-height: 61px
      &__item
        background-color: var(--highlightColor)
        margin: 10px 5px
        border-radius: 2px
        box-shadow: 0 3px 6px rgba(0,0,0,0.10), 0 3px 6px rgba(0,0,0,0.15)
        color: white
        padding: 0 20px !important
        transition: .5s
        @media (max-width: 600px)
          margin: 10px 2px

        &:hover
          color: white
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.20), 0 3px 6px rgba(0, 0, 0, 0.28)

        &.is-active
          color: white
          font-weight: bold
          font-size: 15px
          border-bottom: 3px solid rgba(0,0,0,.4)
</style>
