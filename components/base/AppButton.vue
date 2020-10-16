<script>
import { SpringSpinner  } from 'epic-spinners/dist/lib/epic-spinners.min';

export default {
  name: 'AppButton',
  components: {SpringSpinner},
  props: {
    icon: {
      type: String,
      default: '',
    },
    loading: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<template lang="pug">
  el-button.appButton(round, :class="{ hasIcon: icon }", v-if="!loading")
    slot
    i.el-icon-right(v-if="icon", :class="icon")
  el-button.appButton.loading(round, v-else)
    SpringSpinner(:animation-duration="3000", :size="18", color="white")
</template>

<style lang="sass" scoped>
  .appButton
    background-color: transparent
    border: 1px solid var(--highlightColor)
    color: var(--highlightColor)
    position: relative
    &.hasIcon
      padding-right: 3.5em
    .el-icon-right
      background-color: var(--highlightColor)
      color: #FFFFFF
      border-radius: 50%
      position: absolute
      right: 4px
      top: 4px
      padding: 4px
      font:
        size: 1.5em
        weight: bolder
    &.gradient
      background-image: linear-gradient(to top, var(--gradientColor) , var(--highlightColor))
      border: transparent
      color: #FFFFFF
      .el-icon-right
        background-color: #FFFFFF
        color: #16755e
</style>


