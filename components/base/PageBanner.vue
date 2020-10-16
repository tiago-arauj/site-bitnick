<script>
export default {
  name: 'PageBanner',
  props: {
    label: {
      type: String,
      default: 'Label'
    },
    title: {
      type: String,
      default: 'Title'
    },
    image: {
      type: String,
      default: 'banner-como-funciona.png'
    },
  }
}
</script>

<template lang="pug">
  section.theBanner
    .theBanner-content
      .theBanner-textBox
        span.theBanner-label {{ label }}
        h3.theBanner-title {{ title }}
        .theBanner-text
          slot
    img#bannerImage.theBanner-image(:src="require('~/static/images/' + image)" alt="banner")
</template>

<style lang="sass" scoped>
  .theBanner
    z-index: -1
    align-items: center
    display: contents
    flex-direction: column
    width: 100%
    &-content
      position: relative
      max-width: 1024px
      min-width: 650px
      width: 50%
    &-textBox
      color: #FFFFFF
      position: absolute
      top: 160px
      left: 0
      text-align: center
      width: 100%
    &-label
      border-bottom: 2px solid var(--highlightColor)
      text-transform: uppercase
      margin: 16px 0
      padding-bottom: 8px
    &-title
      font:
        family: 'Barlow-Bold'
        size: 3.5em
      line-height: 1em
      color: white !important
      margin: 16px 0 24px
    &-text
      line-height: 1.5em
      margin: 16px 0
    &-button
      background-color: var(--highlightColor)
      border: none
      color: #FFFFFF
      margin: 16px 0
      text-transform: lowercase
    &-image
      width: 100%
      height: 95vh
      min-height: 480px
      object-fit: cover
      &.isSticky
        margin-top: -76px

  @media (max-width: 1024px)
    .theBanner
      &-title
        font-size: 2.5em
        margin-bottom: 16px

  @media (max-width: 600px)
    .theBanner
      display: none
</style>
