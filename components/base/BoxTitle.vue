<script>
export default {
  name: 'BoxTitle',
  props: {
    label: {
      type: String,
      default: 'Label'
    },
    title: {
      type: String,
      default: 'Title'
    },
  }
}
</script>

<template lang="pug">
  .boxTitle
    h6.boxTitle-label {{ label }}
    h4.boxTitle-title {{ title }}
</template>

<style lang="sass" scoped>
.boxTitle
  position: relative
  &-label
    color: var(--highlightColor)
    font:
      family: 'Barlow-Medium'
      size: 1.25em
    position: relative
    &::before
      background-color: var(--highlightColor)
      content: ''
      height: 2px
      width: 40px
      position: absolute
      left: -50px
      top: 8px
  &-title
    font:
      family: 'BarlowCondensed-SemiBold'
      size: 2em
    line-height: 1.15em
    padding: 16px 0 4px
    text-transform: uppercase
</style>


