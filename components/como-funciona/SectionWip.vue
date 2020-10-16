<script>
  export default {
    name: 'SectionWip',
    data: () => ({
      date: ''
    }),
    mounted() {
      setInterval(this.getDate, 1000)
    },
    methods: {
      getDate: function () {
        this.date = this.$moment("07/15/2019").diff(this.$moment(), 'days');
      }
    }
  }
</script>

<template lang="pug">
  section.sectionWIP
    h4 Esta funcionalidade ficará pronta em:
    h6.time {{date}} Dias
</template>

<style lang="sass" scoped>
  .sectionWIP
    height: 50vh
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    h4, h6
      font-family: 'BarlowCondensed-SemiBold', sans-serif
      font-size: 1.3em
      line-height: 1.15em
      text-transform: uppercase
      &.time
        margin-top: 10vh
        font-size: 3.5em
        color: var(--highlightColor)
</style>


