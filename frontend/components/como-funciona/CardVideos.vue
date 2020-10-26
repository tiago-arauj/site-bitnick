<script>
export default {
  name: 'CardVideos'
}
</script>

<template lang="pug">
  .cardNews
    a.cardNews-link(href="#")
      img.cardNews-picture(src="https://picsum.photos/400/250/?random" alt="video")
    h4.cardNews-title Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    .cardNews-info
      span.cardNews-label LOCAL: 
      span.cardNews-data Brasília - DF
    a.cardNews-link Assista
      IconEye.cardNews-icon
</template>

<style lang="sass" scoped>
.cardNews
  flex-basis: 33%
  margin: 16px
  &-picture
    width: 100%
  &-title
    font-family: 'BarlowCondensed-Medium'
    margin: 8px 0
    text-align: justify
  &-info
    border-top: 1px solid var(--primaryColor)
    padding: 4px 0
  &-label
    font-family: 'BarlowCondensed-SemiBold'
  &-link
    color: var(--primaryColor)
    margin: 8px 0
    display: inline-flex
    align-items: center
  &-icon
    fill: var(--highlightColor)
    width: auto
    height: 1em
    margin: 0 8px
</style>
