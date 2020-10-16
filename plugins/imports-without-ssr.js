import Vue from 'vue'
import vueNumeralFilterInstaller from 'vue-numeral-filter';
import money from 'v-money'
import VueSlick from 'vue-slick';
import Card from "vue-credit-card";
import VueSmoothScroll  from "vue-smoothscroll";

export default () => {
  //Filters
  Vue.use(vueNumeralFilterInstaller, {locale: 'pt-br'});
  Vue.use(money, {decimal: ',', thousands: '.', prefix: 'R$ ', precision: 2, masked: false});

  //Slick
  Vue.use(VueSlick);

  Vue.component('CreditCardComponent', Card);

  //Vue Smooth
  Vue.use(VueSmoothScroll);

};
