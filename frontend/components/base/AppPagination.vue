<script>
export default {
 name: 'AppPagination'
}
</script>

<template lang="pug">
  ul.pagination
    li.pagination-item.active 1
    li.pagination-item
      a(href="#") 2
    li.pagination-item
      a(href="#") 3
    li.pagination-item ...
    li.pagination-item
      a(href="#") 15
    li.pagination-item
      a(href="#") 16
</template>

<style lang="sass" scoped>
  .pagination
    display: flex
    align-items: flex-start
    &-item
      margin: 0 2px
      padding: 2px 8px
      &.active
        background-color: var(--highlightColor)
        color: #FFFFFF
        border-radius: 100%
  @media (max-width: 600px)
    .pagination
      margin-top: 16px
      padding: 0 16px
</style>

