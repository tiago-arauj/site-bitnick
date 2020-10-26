<script>
  export default {
    name: 'EventHeader'
  }
</script>

<template lang="pug">
  header#eventHeader.eventHeader
    .eventHeader-content
      .logo
        nuxt-link(to="/")
          img.logo-img(src="~/static/images/eventos/logo.png" alt="logo")
</template>

<style lang="sass" scoped>
  .eventHeader
    align-items: center
    display: flex
    flex-direction: column
    position: absolute
    width: 100%
    z-index: 5
    background-image: linear-gradient(to bottom, rgba(0,0,0,.6), rgba(0,0,0,.5),rgba(0,0,0,.4),rgba(0,0,0,.3),transparent)
    &-content
      display: flex
      align-items: center
      justify-content: space-between
      padding: 16px
      width: -webkit-fill-available
      max-width: 1024px
      z-index: 15
    .logo
      display: table
      &-img
        z-index: 10
        width: auto
        height: 50px
</style>
