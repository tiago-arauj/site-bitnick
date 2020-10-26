<script>
export default {
  name: 'TheHeader',
  computed: {
    isLoggedIn: function() {
      return this.$store.getters['auth/check'];
    },
    user: {
      get() {
        return this.$store.getters['auth/user'];
      },
    },
  },
  methods: {
    openDialog() {
      this.$store.commit('layout/setModalStatus', true)
    },
    goToHome() {
      this.$confirm('Caso tenha algum dado não salvo, eles não poderão ser recuperados', 'Você realmente deseja sair?', {
        confirmButtonText: 'Sim',
        cancelButtonText: 'Não',
        type: 'warning'
      }).then(() => {
        this.logout()
      });
    },
    async logout() {
      await this.$store.dispatch('auth/logout');
      this.$router.push('/')
    }
  },
}
</script>

<template lang="pug">
  header#theHeader.theHeader
    .theHeader-content
      .logo
        nuxt-link(to="/")
          img.2-img(src="~/static/images/bitnick-branco.png" alt="bitinick")

      input.changeMenu#changeMenu(type="checkbox")
      label(for="changeMenu")
        svg.iconMenu
          line(x1="0" y1="6" x2="32" y2="6" stroke="#0FA57F" stroke-width="3")
          line(x1="0" y1="16" x2="32" y2="16" stroke="#0FA57F" stroke-width="3")
          line(x1="0" y1="26" x2="32" y2="26" stroke="#0FA57F" stroke-width="3")
      .navArea
        nav.navbar
          ul.navbar-list
            li.navbar-item(v-if="isLoggedIn")
              nuxt-link.navbar-link(to="/area-restrita/comprar-moeda") Comprar Moeda
            li.navbar-item.active
              nuxt-link.navbar-link(to="/como-funciona") Como Funciona
            li.navbar-item
              nuxt-link.navbar-link(to="/documentos") Taxas e serviços
            li.navbar-item
              nuxt-link.navbar-link(to="/participe") Participe
            li.navbar-item
              nuxt-link.navbar-link(to="/noticias") Notícias
        el-button.theHeader-openBtn(round, @click="goToHome", v-if="isLoggedIn") {{user ? user.name : ''}}
        el-button.theHeader-openBtn(round, @click="openDialog", v-else) Login
</template>

<style lang="sass" scoped>
  .theHeader
    align-items: center
    display: flex
    flex-direction: column
    position: absolute
    width: 100%
    z-index: 0
    &-content
      display: flex
      align-items: center
      justify-content: space-between
      padding: 16px
      width: -webkit-fill-available
      max-width: 1024px
      z-index: 15
    &-openBtn
      background-color: transparent
      border: 1px solid var(--highlightColor)
      color: #FFFFFF
  .logo
    display: table
    &-img
      width: auto
      height: 80px
    &-imgMini
      width: auto
      height: 60px
      display: none
      margin-top: 8px
  .changeMenu, .iconMenu
    display: none
  .navArea
    display: flex
    flex: 1
    justify-content: center
    align-items: center
  .navbar
    &-list
      display: flex
      align-items: center
    &-item
      padding: 8px 16px
      text-align: center
      &:hover > a, & > a.nuxt-link-active
        border-bottom: 2px solid var(--highlightColor)
    &-link
      padding-bottom: 8px
      color: #FFFFFF
      text-decoration: none

  @media (min-width: 600px)
    .theHeader.isSticky
      background-color: var(--backgroundColor)
      position: sticky
      top: 0
      z-index: 10
      box-shadow: 0px 0px 10px rgba(0,0,0,.3)
      .theHeader-content
        padding: 8px
      .theHeader-openBtn
        color: var(--textColor)
      .logo
        &-img
          display: none
        &-imgMini
          display: block
      .navbar-link
        font-family: 'Barlow-Regular'
        color: var(--textColor)

  @media (max-width: 680px)
    .logo-img
      height: 60px
    .navbar-item
      padding: 8px
      font-size: .9em
    /deep/
      .el-button.is-round
        padding: 8px 12px

  @media (max-width: 600px)
    .theHeader
      position: sticky
      top: 0
      z-index: 10
      background-color: var(--backgroundColor)
      height: 60px
      &-content
        padding: 0 16px
    .logo
      z-index: 20
      &-img
        display: none
      &-imgMini
        display: inline-block
        width: auto
        height: 48px
    .changeMenu
      display: block
      visibility: hidden
    .iconMenu
      display: block
      height: 32px
      position: fixed
      right: 32px
      top: 16px
      width: 32px
      z-index: 20
    .navArea
      background-color: var(--backgroundColor)
      min-height: 100vh
      width: 100vw
      position: fixed
      top: 0
      left: 0
      flex-direction: column-reverse
      .navbar
        &-list
          display: flex
          flex-direction: column
        &-item
          margin: 16px 0
          text-align: center
        &-link
          color: var(--primaryColorLight)
      .theHeader-openBtn
        margin: 16px 0
        color: var(--primaryColorLight)
      .changeMenu:not(:checked) ~ &
        transform: scaleY(0)
          origin: top
        transition: all .6s
        .navbar, .actionBtn
          opacity: 0
          transition: opacity 1s
      .changeMenu:checked ~ &
        transform: scaleY(1)
          origin: top
        transition: all 1s
        .navbar, .actionBtn
          opacity: 1
          transition: opacity 1s
</style>
