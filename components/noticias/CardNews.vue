<script>
export default {
  name: 'CardNews',
  props: {
    picture: {
      type: String,
      default: 'default'
    },
    link: {
      type: String,
      default: '#'
    },
    title: {
      type: String,
      default: 'Corretora chinesa chega ao Brasil com 150 opções de criptomoeda'
    },
    from: {
      type: String,
      default: 'Exame'
    },
    date: {
      type: String,
      default: '27/10/2018'
    },
  }
}
</script>

<template lang="pug">
  .cardNews
    a.cardNews-link(v-bind:href="link", target="blank")
      img.cardNews-picture(v-bind:src="picture === 'default' ? 'https://source.unsplash.com/collection/2174705/325x'+ Math.floor(Math.random()*(50)+170) : picture" alt="picture")
    h4.cardNews-title {{title}}
    .cardNews-info
      span.cardNews-label FONTE: 
      span.cardNews-data {{from}}
    .cardNews-info
      span.cardNews-label DATA: 
      span.cardNews-data {{date}}
    a.cardNews-link(v-bind:href="link", target="blank") Leia mais +
</template>

<style lang="sass" scoped>
.cardNews
  &-picture
    width: 100%
    height: 217px
    object-fit: cover
  &-title
    margin: 8px 0
    height: 40px
    overflow: hidden
  &-info
    border-top: 1px solid var(--highlightColor)
    padding: 4px 0
  &-label
    font-family: 'BarlowCondensed-SemiBold'
  &-link
    color: var(--highlightColor)
    margin: 16px 0 8px
    text-transform: lowercase
</style>
