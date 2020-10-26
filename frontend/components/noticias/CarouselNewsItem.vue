<script>
  import CardNews from "~/components/noticias/CardNews";


  export default {
    name: 'CarouselNewsItem',
    components: {CardNews},
    props: {
      item: {
        type: Object,
        default: null
      }
    },
  }
</script>

<template lang="pug">
  CardNews.mg-cards(:picture="item.enclosure !== undefined ? item.enclosure.url : 'default'", :from="item.from", :title="item.title", :link="item.link", :date="item.isoDate | moment('DD/MM/YYYY')", :key="item.guid")
</template>

<style lang="sass">
  .mg-cards
    margin: 2%
    width: 96% !important
</style>
