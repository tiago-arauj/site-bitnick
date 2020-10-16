import Vue from 'vue'
import moment from 'moment'
import 'moment/locale/pt-br'
import VueTheMask from 'vue-the-mask'

export default () => {
  //Moment
  moment.locale('pt-br');
  Vue.use(require('vue-moment'), {moment});

  //Mask
  Vue.use(VueTheMask);
};

