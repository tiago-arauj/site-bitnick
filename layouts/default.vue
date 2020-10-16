<template lang="pug">
  .__layout
    TheHeader
    nuxt
    TheFooter
    AuthDialog(ref="dialog")
</template>

<script>
import TheHeader from '~/components/TheHeader'
import TheFooter from '~/components/TheFooter'
import AuthDialog from '~/components/auth/AuthDialog'
export default {
  name: 'LayoutDefault',
  components: {
    TheHeader,
    TheFooter,
    AuthDialog,
  },
  mounted: function () {
    this.$nextTick(function () {
      const self = this
      self.setScreenWidth()
      window.addEventListener('resize', function(){
        self.setScreenWidth()
      })
    })
  },
  methods: {
    setScreenWidth: function() {
      this.$store.commit('layout/setPageAttrs', {
        screenWidth: screen.width
      })
    }
  },
}
</script>

<style lang="sass">
  html, body, #__nuxt, #__layout, .__layout
    max-width: 100vw
  body
    --textColor: #4c4c4c
    --primaryColor: #015747
    --primaryColorLight: #0FA57F
    --primaryColorDark: #08291F
    --highlightColor: #41BF61
    --gradientColor: #00d5c1
    --backgroundColor: #F1F3F3
    background-color: var(--backgroundColor)
    color: var(--textColor)
    font:
      family: 'Barlow-Light'
      size: 16px
    line-height: 1.25em
  span.textStrong
    margin: 0 .35em
    font-family: 'Barlow-Bold'
  a
    color: #57b952
    text-decoration: none
  .page
    background-color: #EDE9EA
    align-items: center
    display: flex
    flex-direction: column
    width: 100%
    &-content
      width: 100%
      display: flex
      flex-direction: column
      align-items: center
</style>

