import apiAuth from '~/api/AuthApiModel'
import apiUser from '~/api/UserApiModel'
import apiTransaction from '~/api/TransactionApiModel'

const DEV_API = 'http://localhost:8080/api/';
// const DEV_API = 'http://192.168.25.187:8080/api/';
const PROD_API = 'https://api.organik.net.br/java/';

export default (ctx, inject) => {
  //Configurando Axios
  let BASE_API = ctx.isDev ? DEV_API : PROD_API;

  //Injecões da api de autenticacao
  const apiAuthAxios = apiAuth(ctx.$axios);
  inject('auth', apiAuthAxios(BASE_API));

  //Injeções da api do usuario
  const apiUserAxios = apiUser(ctx.$axios);
  inject('user', apiUserAxios(BASE_API + 'user'));
  inject('collaborator', apiUserAxios(BASE_API + 'collaborator'));
  inject('partner', apiUserAxios(BASE_API + 'collaborator'));
  inject('document', apiUserAxios(BASE_API + 'document'));

  //Evento
  inject('event', apiUserAxios(BASE_API + 'event'));

  //Injeções da api do usuario
  const apiTransactionAxios = apiTransaction(ctx.$axios);
  inject('investiment', apiTransactionAxios(BASE_API + 'investiment'));

  //Sistema de Evento
  inject('evtPurchase', apiTransactionAxios(BASE_API + 'purchase'));
}
