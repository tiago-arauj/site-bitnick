<script>
  import { ScalingSquaresSpinner } from 'epic-spinners/dist/lib/epic-spinners.min';

  const OBSERVER = null;
  export default {
    layout: 'area-restrita',
    components: {ScalingSquaresSpinner},
    data: () => ({
      tableData: [],
      loading: true
    }),
    computed: {
      user: {
        get() {
          return this.$store.getters['auth/user'];
        },
      },
      BASE_URL: {
        get() {
          return this.$store.state.api.url;
        },
      },
    },
    mounted: function () {
      document.getElementById("changeMenu").checked = false;
      document.getElementById("changeSidebar").checked = false;
      this.createObserver(document.querySelector('#bannerImage'));

      this.getData();
    },
    beforeDestroy() {
      this.OBSERVER.disconnect();
    },
    methods: {
      async getData() {
        try {
          this.loading = true;

          await this.$investiment.getExtract(this.user.token).then(data => {
            //Tratamento de erro
            if (data.data === undefined) {
              this.notification('error', 'Extrato indisponível', data.error.message);
              this.loading = false;
              return
            }

            this.tableData = data.data;
            this.loading = false
          });
        } catch (error) {
          this.notification('error', 'Extrato indisponível', 'Tente novamente mais tarde');
          this.loading = false;
        }
      },
      getValueOGk(real, usd, ogk) {
        return real / usd / ogk;
      },

      //Manipuladores de download
      openDownloadPage: function(id) {
        window.open(this.BASE_URL + 'investiment/download/' + id + "?a=" + this.user.token, "_blank")
      },

      //Manipuladores do header
      callback: function (entries) {
        entries.forEach(function (entry) {
          document.querySelector('#theHeader').classList.toggle('isSticky', !entry.intersectionRatio > 0);
          document.querySelector('#bannerImage').classList.toggle('isSticky', !entry.intersectionRatio > 0)
        })
      },
      createObserver: function (target) {
        const options = {
          rootMargin: '0px',
          threshold: 0
        };
        this.OBSERVER = new IntersectionObserver(this.callback, options);
        this.OBSERVER.observe(target)
      }
    },
  }
</script>

<template lang="pug">
  .pagePanel
    .pagePanel-header
      BoxTitle.pagePanel-title(label="Veja seu", title="Extrato")
    .pagePanel-content
      el-table.restrictExtractTable(:data='tableData', stripe='', style='width: 100%')
        el-table-column(label='Data')
          template(slot-scope="scope")
            el-tooltip(:content='scope.row.createAt | moment("DD/MM/YY HH:mm:ss")', placement='top')
              .tableText.capitalize {{ scope.row.createAt | moment('from') }}
        el-table-column(label='Pagamento')
          template(slot-scope="scope")
            .tableText(v-if='scope.row.paymentMethod === "BANK_SLIP"') Boleto
            .tableText(v-else-if='scope.row.paymentMethod === "CREDIT_CARD"') Cartão
            div.flex(v-else)
              .tableText Depósito
              el-button.table-button(type="button", @click="openDownloadPage(scope.row.id)" title="Ver Comprovante")
                i.el-icon-download
        el-table-column(label='Status')
          template(slot-scope="scope")
            .tableText.category.pending(v-if='scope.row.status === "PENDING"') Pendente
            .tableText.category.approved(v-else-if='scope.row.status === "APPROVED"') Aprovado
            el-tooltip(v-else, :content='"Motivo: " + scope.row.reason', placement='top')
              .tableText.category.rejected Rejeitado
        el-table-column(label='Valor Pago (R$)')
          template(slot-scope="scope")
            .tableText.capitalize RS {{ scope.row.realValue | numeral('0,0.00') }}
        el-table-column(label='OGK')
          template(slot-scope="scope")
            el-tooltip(placement='top')
              .slot(slot="content") Valor pago: R$ {{scope.row.realValue | numeral('0,0.000')}}<br>
                | Valor do dollar no dia: $ {{scope.row.dollarValue | numeral('0,0.000')}}<br>
                | Valor da Organik no dia: $ {{getValueOGk(scope.row.realValue, scope.row.dollarValue, scope.row.organikAmount)  | numeral('0,0.000')}}<br>

              .tableText.capitalize {{ scope.row.organikAmount | numeral('0,0.0000000000') }}
        template(slot='empty')
          .table-loading
            ScalingSquaresSpinner(:animation-duration="2000", :size="40", color="var(--highlightColor)", v-if="loading")
            .noData(v-else) Não foram encontrados nenhuma transaçao

</template>

<style lang="sass">
  .restrictExtractTable
    /deep/
      .cell
        text-align: center
        white-space: inherit
        word-break: normal

        .tableText
          white-space: nowrap

        .flex
          display: flex
          justify-content: space-evenly

      .table-loading
        height: 100px
        display: flex
        align-items: center
        justify-content: center

      .cell
        text-align: center
        .capitalize
          text-transform: capitalize
        .category
          padding-bottom: 2px
          border-bottom: 3px solid var(--highlightColor)
          width: fit-content
          margin: 0 auto
          &.approved
            border-bottom: 3px solid var(--successColor)
          &.pending
            border-bottom: 3px solid var(--warningColor)
          &.rejected
            border-bottom: 3px solid var(--errorColor)
        .table
          &-button
            width: 25px
            height: 25px
            padding: 0
            display: flex
            justify-content: center
            align-items: center
            margin: 0
            background: var(--highlightColor)
            border-radius: 0
            color: #FFFFFF
            font-size: 16px
</style>
