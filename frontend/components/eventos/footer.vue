<script>
  export default {
    name: 'EventFooter',
  }
</script>

<template lang="pug">
  footer.eventFooter
    .columns
      .column
        nuxt-link(to="/")
          img.logo-img(src="~/static/images/eventos/logo.png")
        span.logo-copy </br> Organik © </br>
        | Todos os direitos reservados. 2019.
      .column
        h4.title Dados da Empresa
        ul.list
          li.item CNPJ: 30.229.246/0001-09
          li.item E-mail: contato@organik.net.br
          li.item Telefone: +55 (61) 99663-9257
      .column
        h4.title Termos e Políticas
        ul.list
          li.item
            a(href="http://assets.criptorganik.com/legal/pol%C3%ADtica-de-privacidade-eventos.pdf", target="_blank") Política de Privacidade
          li.item
            a(href="http://assets.criptorganik.com/legal/termos-de-uso-eventos.pdf", target="_blank") Termos de Uso

</template>

<style lang="sass" scoped>
  .eventFooter
    align-items: center
    background-color: var(--darkMuted)
    color: #fff
    width: 100vw
    padding: 30px 0

    .columns
      display: grid
      grid-template-columns: 1fr 1fr 1fr
      grid-column-gap: 24px
      grid-row-gap: 32px
      width: 70vw
      margin: 0 auto

      @media (max-width: 600px)
        grid-template-columns: 1fr
        width: 90vw

    .logo-img
      width: 40%
      margin-bottom: 20px

      @media (max-width: 600px)
        width: 60px

    .title
      color: white

    .column
      justify-self: center
      align-self: center

      @media (max-width: 600px)
        justify-self: unset
        align-self: center

</style>
