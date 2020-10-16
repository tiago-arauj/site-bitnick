<script>
export default {
  name: 'TheSidebar',
  computed: {
    user: {
      get() {
        return this.$store.getters['auth/user'];
      },
    },
  }
}
</script>

<template lang="pug">
  .sidebar
    input.changeSidebar#changeSidebar(type="checkbox")
    label.sidebar-arrow(for="changeSidebar")
      svg.svg(xmlns='http://www.w3.org/2000/svg', xmlns:xlink='http://www.w3.org/1999/xlink', viewBox='0 0 50 80', xml:space='preserve')
        polyline(fill='none', stroke='#FFFFFF', stroke-width='3', points='\
          0.375,0.375 45.63,38.087 0.375,75.8 ')
    .sidebar-content
      //nuxt-link.sidebar-link(to="/area-restrita/fazer-deposito") Fazer depósito
      //nuxt-link.sidebar-link(to="/area-restrita/saque") Realizar saque


      nuxt-link.sidebar-link(to="/area-restrita/comprar-moeda") Comprar  moeda

      hr.sidebar-divider

      nuxt-link.sidebar-link(to="/area-restrita/extrato") Ver Extrato

      hr.sidebar-divider(v-if="user.roles.indexOf('ROLE_ADMIN') > -1")
      a.sidebar-link(href="https://admin.organik.net.br", target="_blank", v-if="user.roles.indexOf('ROLE_ADMIN') > -1") Painel de Admin

      //h4.sidebar-title Saldo Organik disponível
      //h3.sidebar-organiks R$ 00,00

      //nuxt-link.sidebar-link(to="/area-restrita/vender-moeda") Vender moeda
      //nuxt-link.sidebar-link(to="/area-restrita/receber-moeda") Receber moeda
      //nuxt-link.sidebar-link(to="/area-restrita/transferir-moeda") Tranferir moeda

      //hr.sidebar-divider
      //h4.sidebar-title Financeiro
      //nuxt-link.sidebar-link(to="/area-restrita/contas-bancarias") Contas bancárias
      //nuxt-link.sidebar-link(to="/area-restrita/chaves") Chaves de API de Negociações

      //hr.sidebar-divider
      //h4.sidebar-title Preferências
      //nuxt-link.sidebar-link(to="/area-restrita/notificacoes") Notificações
</template>

<style lang="sass" scoped>
  .sidebar
    background-color: var(--primaryColor)
    color: #FFFFFF
    &-arrow, .changeSidebar
      display: none
    &-content
      padding: 16px
    &-divider
      border: 1px solid var(--highlightColor)
      margin: 10px 0
    &-title
      font-weight: 800
    &-link
      display: block
      color: #FFFFFF
      margin: 5px 0
      transition: .3s

      &.nuxt-link-active
        font-weight: bold
        border-left: 3px solid var(--highlightColor)
        padding-left: 5px


  @media (max-width: 600px)
    .sidebar
      z-index: 2
      position: fixed
      left: 0
      width: 10vw
      top: 60px
      height: 100%
      &-arrow
        height: 100%
        z-index: 10
        display: flex
        align-items: center
        justify-content: center
        padding: 16px 0 0
        position: absolute
        top: 0
        left: 0
        transition: all .6s
        width: 10vw
        .svg
          width: 16px
          transition: all .6s
        .changeSidebar:checked ~ &
          background-color: var(--primaryColorLight)
          z-index: 1
          transition: all .6s
          .svg
            width: 16px
            transform: rotate(180deg)
            transition: all .6s
      .changeSidebar
        display: block
        visibility: hidden
        height: 0
        width: 0
      &-content
        padding-left: calc(10vw + 16px)
        margin-top: -3px
        background-color: var(--primaryColor)
        box-sizing: border-box
        display: flex
        flex-direction: column
        align-items: stretch
        justify-content: space-evenly
        transform: scaleX(1)
          origin: left
        z-index: 0
        width: 100vw
        min-height: calc(100vh - 60px)
        opacity: 1
        transition: all 1s
        .changeSidebar:not(:checked) ~ &
          opacity: 0
          transform: scaleX(0)
            origin: left
          transition: all .6s


</style>

