<script>
  export default {
    name: 'TheFooter',
    methods: {
      openDialogRegister() {
        this.$store.commit('layout/setModalType', 'register')
        this.$store.commit('layout/setModalStatus', true)
      },
    }
  }
</script>

<template lang="pug">
  footer.theFooter
    .theFooter-partners.partners
      ul.partners-list
        li.partners-item(v-for="index in [1,2,3,4,5,6]", :key="index")
          nuxt-link(to="/")
            img.partners-img(:src="require('~/static/images/partner'+index+'.png')" :alt="'parceiro' + index")
    .theFooter-content
      .theFooter-column.logo
        nuxt-link(to="/")
          img.logo-img(src="~/static/images/2.png" alt="logo")
        span.logo-copy Organik © Todos os direitos reservados. 2018.
      .theFooter-column.siteMap
        h4.theFooter-title Mapa do site
        ul.theFooter-list
          li.theFooter-item
            nuxt-link(to="/area-restrita/comprar-moeda") Comprar moeda
          li.theFooter-item
            nuxt-link(to="/como-funciona") Como funciona
          li.theFooter-item
            nuxt-link(to="/documentos") Documentos
          li.theFooter-item
            nuxt-link(to="/participe") Participe
          li.theFooter-item
            nuxt-link(to="/noticias") Notícias
          li.theFooter-item
            a(href="/termos-e-condicoes" target="_blank") Termos e condições
          li.theFooter-item
            a(href="/politica-privacidade" target="_blank") Política de privacidade
      .theFooter-column.socialMedia
        h4.theFooter-title Redes Sociais
        ul.theFooter-list
          li.theFooter-item
            a(href="https://www.facebook.com/Organik-2262710963798415/", target="_blank")
              i.el-icon-message
              | Siga a Organik no Facebook
          li.theFooter-item
            a(href="https://twitter.com/Organik99029266", target="_blank")
              i.el-icon-message
              | Siga Organik no Twitter
          li.theFooter-item
            a(href="https://www.linkedin.com/company/organikcrypt", target="_blank")
              i.el-icon-message
              | Siga Organik no Linkedin
      .theFooter-column.contactInfo
        h4.theFooter-title Contato
        ul.theFooter-list
          li.theFooter-item
            a(href="mailto:contato@organik.net.br" target="_top")
              i.el-icon-message
              | contato@organik.net.br
          li.theFooter-item
            a(href="tel:556133555500")
              i.el-icon-message
              | (61) 3355-5500
</template>

<style lang="sass" scoped>
  .theFooter
    align-items: center
    background-color: #21211E
    color: #57b952
    display: flex
    flex-direction: column
    justify-content: center
    @media (max-width: 600px)
      padding-left: 32px
    &-content
      display: flex
      width: 100%
      max-width: 1024px
    &-column
      width: 25%
      padding: 16px
      margin: 16px 0
    &-title
      color: #FFFFFF
      font:
        family: 'BarlowCondensed-SemiBold'
        size: 1.25em
      margin-bottom: 8px
      text-transform: uppercase
    &-item
      font-size: .85em
      padding: 4px 0
      i[class^="el-icon"]
        background-color: #52a94b
        border-radius: 100%
        color: #08332d
        padding: 6px
        margin-right: 8px
        text-align: center
      a
        cursor: pointer
  .siteMap
    .theFooter-item
      padding-left: 16px
      position: relative
      &::before
        content: ">"
        color: #16735d
        position: absolute
        left: 0
        top: 3px
        font:
          family: "Signika-SemiBold"
          size: 1.25em
        line-height: 1.25em
  .logo
    &-img, &-copy
      display: block
    &-copy
      font-size: .85em
      margin: 16px 0
  .partners
    align-items: center
    background-color: #21211E
    display: flex
    justify-content: center
    width: 100%
    overflow-x: scroll
    &::-webkit-scrollbar
      width: 0
      height: 0
      background: transparent
    &::-webkit-scrollbar-thumb
      background: transparent
    &-list
      display: flex
      width: 100%
      max-width: 1024px
      align-items: center
      justify-content: space-around
    &-img
          mix-blend-mode: screen

  @media (max-width: 600px)
    .theFooter
      &-content
        flex-direction: column
        margin: 16px 0
      &-column
        width: 100%
        padding: 0 24px
        margin: 10px 0
        box-sizing: border-box
    .logo
      display: none
    .partners-list
      justify-content: flex-start
</style>
