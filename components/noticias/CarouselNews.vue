<script>
  import CarouselNewsItem from "~/components/noticias/CarouselNewsItem";
  // noinspection ES6CheckImport
  import { ScalingSquaresSpinner  } from 'epic-spinners/dist/lib/epic-spinners.min'


  export default {
    name: 'CarouselNews',
    components: {
      Slick: () => import('vue-slick'),
      CarouselNewsItem,
      ScalingSquaresSpinner
    },
    props: {
      feeds: {
        type: Array,
        default: () => ([])
      },
      numItems: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        slickOptions: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,

          autoplay: true,
          autoplaySpeed: 3000,
        },
        slickComp: ''
      };
    },
    mounted() {
      this.$nextTick(function () {
        this.slickComp = 'slick'
      })
    },
  }
</script>

<template lang="pug">
  .div
    component(:is="slickComp", ref="slick", :options="slickOptions", v-if="feeds.length === numItems")
      CarouselNewsItem(v-for="feed, key in feeds", :item="feed", :key="key")
    .flex-center(v-else)
      ScalingSquaresSpinner(:animation-duration="1500", :size="40", color="var(--highlightColor)")
</template>

<style lang="sass">
  @import "../../node_modules/slick-carousel/slick/slick.css"

  .flex-center
    display: flex
    justify-content: center
</style>
