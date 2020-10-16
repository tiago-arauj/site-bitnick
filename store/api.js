const DEV_API = 'http://localhost:8080/api/';
const PROD_API = 'https://api.organik.net.br/java/';

const DEV_APP = 'http://localhost:3001/';
const PROD_APP = 'https://app.organik.net.br/';

export const state = () => ({
  url: process.env.GENERATION_TYPE === 'production' ? PROD_API : DEV_API,
  app: process.env.GENERATION_TYPE === 'production' ? PROD_APP : DEV_APP,
});
