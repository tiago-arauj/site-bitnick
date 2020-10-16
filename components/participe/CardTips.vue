<script>
export default {
  name: 'CardTips',
  props: {
    image: {
      type: String,
      default: 'https://picsum.photos/400/250/?random'
    },
    title: {
      type: String,
      default: 'Ut enim ad minim veniam, quis nostrud exercitation'
    },
    link: {
      type: String,
      default: '#'
    }
  }
}
</script>

<template lang="pug">
  .cardNews
    a.cardNews-link(:href="link", target="_blank")
      img.cardNews-picture(:src="image" alt="tips")
    h4.cardNews-title {{ title }}
    a(:href="link", target="_blank").cardNews-link Leia mais +
</template>

<style lang="sass" scoped>
.cardNews
  &-picture
    width: 100%
  &-title
    font:
      family: 'BarlowCondensed-Medium'
      size: 1.25em
    margin: 8px 0
  &-link
    color: var(--highlightColor)
    margin: 16px 0 8px
    text-transform: lowercase
</style>
