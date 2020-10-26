<script>
export default {
  name: 'CardPartner'
}
</script>

<template lang="pug">
  .cardPartner
    h4.cardPartner-title Dr. Fábio Faria Antunes
    h6.cardPartner-jobTitle Nutricionista
    .cardPartner-info
      span.cardPartner-label LOCAL: 
      span.cardPartner-data Avenida Independência, 5000, sala 1350
    .cardPartner-info
      span.cardPartner-label CONTATO: 
      span.cardPartner-data (00) 98899-5588
</template>

<style lang="sass" scoped>
.cardPartner
  &-picture
    width: 100%
  &-title
    margin: 8px 0
    font:
      family: 'BarlowCondensed-Medium'
      size: 1.25em
    position: relative
  &-jobTitle
    margin: 8px 0
    font:
      family: 'BarlowCondensed-Medium'
      size: 1em
    position: relative
    text-transform: uppercase
  &-info
    padding: 4px 0
    &:first-of-type
      border-top: 1px solid var(--highlightColor)
  &-label
    font-family: 'BarlowCondensed-SemiBold'
  &-link
    color: var(--highlightColor)
    margin: 16px 0 8px
    text-transform: lowercase
</style>
