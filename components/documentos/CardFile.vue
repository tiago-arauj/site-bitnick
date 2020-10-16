<script>
export default {
  name: 'CardFile',
  props: {
    id: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      default: ''
    },
    createAt: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
  },
  computed: {
    BASE_URL: {
      get() {
        return this.$store.state.api.url;
      },
    }
  },
  methods: {
    //Manipulador de dados
    correctName: function () {
      return String(this.name).split(".")[0]
    },
    correctType: function () {
      return String(this.type).split("/")[1]
    },

    //Manipuladores de download
    openDownloadPage: function(id) {
      window.open(this.BASE_URL + 'document/download/' + id, "_blank")
    }
  }
}
</script>

<template lang="pug">
  .cardNews
    h4.cardNews-title {{correctName()}}
    .cardNews-info
      span.cardNews-label ARQUIVO: 
      span.cardNews-data {{correctType()}}
    .cardNews-info
      span.cardNews-label DATA: 
      span.cardNews-data {{createAt | moment("DD/MM/YY")}}
    a.cardNews-link(@click="openDownloadPage(id)") Baixar documento
</template>

<style lang="sass" scoped>
.cardNews
  &-picture
    width: 100%
  &-title
    margin: 8px 0
    text-align: justify
    text-transform: uppercase
    font:
      family: 'BarlowCondensed-Medium'
      size: 1.25em
    padding-left: 16px
    position: relative
    &::before
      content: ''
      width: 4px
      height: 100%
      background-color: var(--highlightColor)
      position: absolute
      left: 0
      top: 0
  &-info
    border-top: 1px dotted var(--textColor)
    padding: 4px 0
    text-transform: uppercase
  &-label
    font-family: 'BarlowCondensed-SemiBold'
  &-link
    color: var(--highlightColor)
    margin: 16px 0 8px
    text-transform: lowercase
    cursor: pointer
</style>
