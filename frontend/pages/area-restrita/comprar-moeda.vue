<script>
  import BankTransfer from '~/components/area-restrita/comprar-moeda/BankTransfer'
  import BankSlip from '~/components/area-restrita/comprar-moeda/BankSlip'
  import CreditCard from '~/components/area-restrita/comprar-moeda/CreditCard'

  export default {
    layout: 'area-restrita',
    components: {
      BankTransfer,
      BankSlip,
      CreditCard
    },

    mounted: function () {
      document.getElementById("changeMenu").checked = false;
      document.getElementById("changeSidebar").checked = false;
      this.createObserver(document.querySelector('#bannerImage'));
    },
    beforeDestroy() {
      this.OBSERVER.disconnect();
    },
    methods: {
      //Manipulacao do Header
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
      },
    }
  }
</script>

<template lang="pug">
  .pagePanel
    .pagePanel-header
      BoxTitle.pagePanel-title(label="Comprar", title="Moeda")
    .pagePanel-content
      span.subtitle Selecione a Forma de Pagamento
      el-tabs
        el-tab-pane
          span(slot='label')
            i.el-icon-bank-card
            |  Cartão
          CreditCard

        el-tab-pane
          span(slot='label')
            i.el-icon-document
            |  Boleto
          BankSlip
        el-tab-pane
          span(slot='label')
            i.el-icon-money
            |  Transferência
          BankTransfer
</template>

<style lang="sass" scoped>
  .pagePanel
    &-content
      border: 1px solid rgba(0,0,0,.1)
      padding: 15px
      border-radius: 3px
      margin: 5px
      .subtitle
        font-size: 18px
        font-weight: bold
        position: relative
        color: var(--textColor) !important
        white-space: normal
        word-break: break-word

        @media (min-width: 600px)
          margin-left: 15px

          &:before
            background-color: var(--highlightColor)
            content: ''
            height: 2px
            width: 10px
            position: absolute
            left: -15px
            top: 10px
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
