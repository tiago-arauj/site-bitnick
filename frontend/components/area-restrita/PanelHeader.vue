<script>
  // noinspection ES6CheckImport
  import { ScalingSquaresSpinner  } from 'epic-spinners/dist/lib/epic-spinners.min'

  export default {
    name: 'PanelHeader',
    components: {ScalingSquaresSpinner},
    data() {
      return {
        USD: {},
        BTC: {},
        OGK: {},
        ETH: {},
      }
    },
    mounted() {
      this.getDataCoins()
    },
    methods: {
      getDataCoins: async function () {
        if (this.$store.getters["coins/usd"] === null) {
          this.getRequest()
        } else {
          this.USD = this.$store.getters["coins/usd"];
          this.BTC = this.$store.getters["coins/btc"];
          this.OGK = this.$store.getters["coins/ogk"];
          this.ETH = this.$store.getters["coins/eth"];
        }
      },
      getRequest: async function () {
        const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

        let {data} = await this.$axios.get(CORS_PROXY + "https://economia.awesomeapi.com.br/all/USD-BRL,BTC-BRL,ETH-BRL");
        this.USD = Object.create(data.USD);
        this.BTC = Object.create(data.BTC);
        this.ETH = Object.create(data.ETH);
        this.OGK = {
          bid: parseFloat(parseFloat(data.USD.bid.replace(",",".")) * 0.15)
        };

        this.$store.commit('coins/SET_COINS', {
          USD: this.USD,
          BTC: this.BTC,
          OGK: this.OGK,
          ETH: this.ETH
        });
      }
    }
  }
</script>

<template lang="pug">
  .panelHeader
    .panelHeader-boxInfo
      el-tooltip(content='Valor de venda do Bitcoin', placement='top')
        h4.panelHeader-title Valor BTC:
      p.panelHeader-info(v-if="BTC.bid !== undefined") R$ {{BTC.bid | numeral('0,0.00')}}
      .flex-center(v-else)
        ScalingSquaresSpinner(:animation-duration="1500", :size="20", color="var(--highlightColor)")
    .panelHeader-boxInfo
      el-tooltip(content='Valor de venda do Etherium', placement='top')
        h4.panelHeader-title Valor ETH:
      p.panelHeader-info(v-if="ETH.bid !== undefined") R$ {{ETH.bid | numeral('0,0.00')}}
      .flex-center(v-else)
        ScalingSquaresSpinner(:animation-duration="1500", :size="20", color="var(--highlightColor)")
    .panelHeader-boxInfo
      el-tooltip(content='Valor de venda da ORGANIK', placement='top')
        h4.panelHeader-title Valor OGK:
      p.panelHeader-info(v-if="OGK.bid !== undefined") R$ {{ OGK.bid | numeral('0,0.000')}}
      .flex-center(v-else)
        ScalingSquaresSpinner(:animation-duration="1500", :size="20", color="var(--highlightColor)")
    .panelHeader-boxInfo
      el-tooltip(content='Valor de venda do dolar.', placement='top')
        h4.panelHeader-title Valor Dolar:
      p.panelHeader-info(v-if="USD.bid !== undefined") R$ {{USD.bid  | numeral('0,0.000')}}
      .flex-center(v-else)
        ScalingSquaresSpinner(:animation-duration="1500", :size="20", color="var(--highlightColor)")
</template>

<style lang="sass" scoped>
  .panelHeader
    display: flex
    justify-content: space-between

    &-boxInfo
      padding: 16px
      width: calc(100% - 32px)

    &-title
      text-transform: uppercase
      font-family: 'BarlowSemiCondensed-Light', serif

    &-info
      font-family: 'Barlow-Bold',serif

  .flex-center
    display: flex
    justify-content: center
    margin: 5px

  @media (max-width: 600px)
    .panelHeader
      display: grid
      grid-template-columns: repeat(auto-fit, minmax(150px, auto))
      justify-items: center
</style>


