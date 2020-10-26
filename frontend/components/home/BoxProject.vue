<script>
export default {
  name: 'BoxProject',
  props: {
    label: {
      type: String,
      default: 'Label'
    },
    title: {
      type: String,
      default: 'Title'
    },
    buttonText: {
      type: String,
      default: 'Button Text'
    },
    image: {
      type: String,
      default: 'Capturar.png'
    },
    link: {
      type: String,
      default: '#'
    },
  },
}
</script>

<template lang="pug">
  .theProject
    .theProject-box
      .theProject-infos
        BoxTitle(:label="label", :title="title")
        .theProject-text
          slot
        .appButton(@click="$router.push(link)")
          AppButton.theProject-button(icon="el-icon-arrow-right") {{ buttonText }}
      img.theProject-image(:src="require('~/static/images/' + image)" alt="project")
</template>

<style lang="sass" scoped>
  .theProject
    padding: 0 16px
    &-infos
      flex: 1
    &-image
      margin-left: 15px
      max-width: 350px
    &-box
      margin: 16px 0
      padding: 16px 16px 16px 50px
      position: relative
      display: flex
      align-items: center
      &::before
        background-color: var(--highlightColor)
        border-radius: 100%
        content: ''
        height: 24px
        left: -36px
        position: absolute
        top: calc(50% - 12px)
        width: 24px
    &-text
      line-height: 1.5em
      padding: 8px 0
    &-button
      margin: 8px 0

  @media (max-width: 600px)
    .theProject
      box-sizing: border-box
      &-box
        flex-direction: column
        padding: 16px
        &::before
          display: none
      &-image
        margin: 16px 0 0
    .partners-list
      justify-content: flex-start
</style>


