<script>
  import TheHeader from '~/components/TheHeader'
  import PanelBanner from '~/components/area-restrita/PanelBanner'
  import TheSidebar from '~/components/area-restrita/TheSidebar'
  import PanelHeader from '~/components/area-restrita/PanelHeader'
  import TheFooter from '~/components/TheFooter'
  import Cookies from 'js-cookie'

  // noinspection ES6CheckImport
  import { ScalingSquaresSpinner  } from 'epic-spinners/dist/lib/epic-spinners.min'
  let interval = {};
  export default {
    name: 'LayoutRestrict',
    components: {
      TheHeader,
      PanelBanner,
      TheSidebar,
      PanelHeader,
      TheFooter,
      ScalingSquaresSpinner
    },
    data() {
      return {
        balance: undefined,
        loading: false,
        mounted: false
      }
    },
    computed: {
      user: {
        get() {
          return this.$store.getters['auth/user'];
        },
      },
      ogk: {
        get() {
          return this.$store.getters['coins/ogk'];
        },
      },
    },
    mounted: function () {
      this.$nextTick(function () {
        const self = this;
        self.setScreenWidth();
        window.addEventListener('resize', function () {
          self.setScreenWidth()
        })
      });

      setTimeout(this.init, 500);
    },
    beforeDestroy() {
      clearInterval(interval);
    },

    methods: {
      init() {
        if (this.user === null) {
          this.notification("info", "Sessão inválida", "Por favor, faça novamente o seu login");
          this.$router.push("/")
        } else {
          this.getData();
          this.mounted = true;

          interval = setInterval(this.check, 5000)
        }
      },
      async check() {
        const user = Cookies.get('ogk_user');
        if (!user) {
          this.notification("info", "Sessão inválida", "Por favor, faça novamente o seu login");

          await this.$store.dispatch('auth/logout');
          this.$router.push('/')
        }
      },

      async getData() {
        try {
          this.loading = true;

          await this.$investiment.getBalance(this.user.token, this.user.hash).then(data => {
            //Tratamento de erro
            if (data.data === undefined) {
              this.notification('error', 'Não foi possível carregar seu saldo', data.error.message);
              this.loading = false;
              return
            }

            this.balance = data.data;
            this.loading = false;
            this.$store.commit('coins/SET_BALANCE', this.balance);

            setTimeout(this.getData, 1000 * 60 * 5)
          });
        } catch (error) {
          this.notification('error', 'Não foi possível carregar seu saldo', 'Tente novamente mais tarde');
          this.loading = false;
        }
      },
      balanceToBRL() {
        return this.balance * this.ogk.bid
      },
      // Manipulador de layout
      setScreenWidth: function () {
        this.$store.commit('layout/setPageAttrs', {
          screenWidth: screen.width
        })
      },
    },
  }
</script>

<template lang="pug">
  .__layout(v-if="mounted")
    TheHeader
    .pannel
      PanelBanner
      .pannel-content
        .pannel-balance(v-if="balance !== undefined && ogk !== null && !loading")
          span Saldo disponível
          .flex-inline
            h4 R$ {{balanceToBRL()  | numeral('0,0.00')}}
            h4 {{balance | numeral('0,0.00')}} OGK
        .pannel-balance.flex-center(v-else)
          ScalingSquaresSpinner(:animation-duration="1500", :size="20", color="#FFF")
        PanelHeader.pannel-header
        TheSidebar.pannel-sidenav
        .pannel-innerContent
          nuxt
    TheFooter
</template>

<style lang="sass">
  html, body, #__nuxt, #__layout, .__layout
    max-width: 100vw
  body
    --textColor: #4c4c4c
    --primaryColor: #015747
    --primaryColorLight: #0FA57F
    --primaryColorDark: #08291F
    --highlightColor: #41BF61
    --successColor: #41BF61
    --warningColor: #ec9c05
    --errorColor: #f7472e
    --backgroundColor: #F1F3F3
    background-color: var(--backgroundColor)
    color: var(--textColor)
    font:
      family: 'Barlow-Light'
      size: 16px
    line-height: 1.25em
  span.textStrong
    margin: 0 .35em
    font-family: 'Barlow-Bold',serif
  a
    color: #57b952
    text-decoration: none
  .pannel
    background-color: #EDE9EA
    align-items: center
    display: flex
    flex-direction: column
    width: 100%
    &-balance
      background-color: var(--highlightColor)
      padding: 16px
      color: #FFF
      grid-area: balance
      text-align: center
      &.flex
        &-center
          display: flex
          justify-content: center
          align-items: center
      .flex-inline
        display: flex
        justify-content: space-around
        @media (max-width: 600px)
          flex-direction: column
    &-header
      grid-area: header
    &-sidenav
      grid-area: sidenav
    &-innerContent
      grid-area: content
    &-content
      width: 100%
      max-width: 100%
      display: grid
      grid-template-columns: 25% 75%
      grid-template-rows: 80px 1fr
      grid-template-areas: "balance header" "sidenav content"

  .pagePanel
    padding: 16px
    &-header
      display: flex
      align-items: flex-end
      justify-content: flex-end
    &-title
      padding-left: 50px
      margin-right: auto
    &-content
      padding: 16px 0

  .el-table
    width: 100%
    thead
      th
        background-color: #41BF61 !important
        color: #fff
        text-transform: uppercase
        text-align: left
        font:
          family: 'BarlowCondensed-Medium'
          size: 1.25em
        padding: 8px 0
    tbody
      tr
        background-color: #DBF3D9
      td
        padding: 8px 16px

  .restrictAreaForm
    margin: 24px 0 16px
    &-formItems
      display: grid
      grid-template-columns: 1fr 1fr
      grid-gap: 16px
    &-footer
      display: flex
      justify-content: flex-end
    /deep/
      .el-form-item__label
        font:
          size: 1em
        color: var(--highlightColor)
        line-height: 1.25em
        margin-bottom: 4px
      .el-input__inner
        border-color: var(--highlightColor)
      .el-select
        width: 100%
      .el-radio__label
        font-family: 'Barlow-Medium',serif
      .el-radio__input.is-checked .el-radio__inner
        background: var(--highlightColor)
        border-color: var(--highlightColor)
      .el-radio__input.is-checked+.el-radio__label
        color: var(--textColor)

  @media (max-width: 600px)
    .pannel
      &-header
        background-color: var(--backgroundColor)

      &-balance
        text-align: center
        font-family: 'Barlow-Medium', serif
        align-items: center
        display: flex
        flex-direction: column
        justify-content: center
      &-content
        width: 100%
        max-width: 1024px
        grid-template-columns: 10% 90%
        grid-template-rows: 80px 1fr
        grid-template-areas: "sidenav balance" "sidenav header" "sidenav content"

    .restrictAreaForm
      /deep/
        .el-form-item
          display: flex
          flex-direction: column
          align-items: flex-start
          justify-content: flex-end
</style>


<style lang="scss">
  @import '../node_modules/epic-spinners/dist/lib/epic-spinners.min.css';
</style>
