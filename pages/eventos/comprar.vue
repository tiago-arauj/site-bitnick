<script>
  import EventBanner from '~/components/eventos/banner'
  import EventInformations from '~/components/eventos/informations'
  import EventCounter from '~/components/eventos/counter'
  import EventPrice from '~/components/eventos/price'
  import EventFooter from '~/components/eventos/footer'
  import * as Vibrant from 'node-vibrant'
  import { HalfCircleSpinner } from 'epic-spinners/dist/lib/epic-spinners.min';


  export default {
    layout: 'eventos',
    components: {
      HalfCircleSpinner,
      EventBanner,
      EventInformations,
      EventCounter,
      EventPrice,
      EventFooter,
    },
    data() {
      return {
        event: {
          id: undefined,
          image: undefined,
        },
        style: {},
        loading: false
      }
    },
    mounted() {
      this.resolveQuery(this.$route.query)

    },
    methods: {
      resolveQuery(query) {
        if (query.id) {
          this.event.id = query.id;
          this.getData();
        }
      },

      async getData() {
        try {
          this.loading = true;

          await this.$event.show(this.event.id).then(data => {
            //Tratamento de erro
            if (data.data === undefined) {
              this.notification('error', 'Evento indisponível', data.error.message);
              this.loading = false;
              return
            }

            this.getColor(data.data);
          });
        } catch (error) {
          this.notification('error', 'Evento indisponível', 'Tente novamente mais tarde');
          this.loading = false;
        }
      },

      async getColor(data) {
        data.image.url = "https://cdn.criptorganik.com/" + data.image.id + ".jpg";
        Vibrant.from(data.image.url).getPalette((err, palette) => {
          this.style = {'--highlightColor': palette.Vibrant.hex, '--gradientColor': palette.LightMuted.hex, '--darkMuted': palette.DarkMuted.hex};
          this.event = data;
          this.loading = false
        });
      }
    },
  }
</script>

<template lang="pug">
  .page(v-if="event.image !== undefined" :style="style" ref="banner")
    EventBanner(v-bind="event")
    EventInformations(v-bind="event")
    EventCounter(v-bind="event")
    EventPrice(v-bind="event" :event="event" ref="price")
    EventFooter
  div.loading(v-else)
    HalfCircleSpinner(:animation-duration="2000", :size="100", color="rgba(0,0,0,.3)")
</template>

<style lang="scss" scoped>
  @import '../../node_modules/epic-spinners/dist/lib/epic-spinners.min.css';

  .loading {
    position: absolute;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
