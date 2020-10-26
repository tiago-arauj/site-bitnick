<template lang="pug">
  .instructions
    h5.instructions-title Instruções
    ul.instructions-list
      li.instructions-item(v-for="value, key in instructions", :key="key") 
        span.instructions-index {{ key + 1 }})
        p {{ value }}
</template>

<script>
export default {
  name: 'BoxInstructions',
  props: {
    instructions: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>

<style lang="sass" scoped>
.instructions
  margin-bottom: 16px
  &-title
    font:
      family: 'BarlowCondensed-Medium'
      size: 1.5em
    margin: 8px 0
  &-index
    font-family: 'Barlow-Bold'
    float: left
    margin-right: 4px
  &-item
    font-family: 'Barlow-light'
    margin: 4px 0
</style>


