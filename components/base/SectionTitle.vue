<template lang="pug">
  h2.sectionTitle
    slot
</template>

<script>
export default {
  name: 'SectionTitle'
}
</script>

<style lang="sass" scoped>
.sectionTitle
  font:
    family: 'Signika-SemiBold'
    size: 1.5em
  margin: 36px 0 16px
  padding: 0 16px
</style>


