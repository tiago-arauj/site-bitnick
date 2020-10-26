// Provide nuxt-axios instance to use same configuration across the whole project
// I've used typical CRUD method names and actions here
export default $axios => resource => ({
  login(payload) {
    return $axios.$post(`${resource}` + 'auth/login', payload)
  },
  register(payload) {
    return $axios.$post(`${resource}` + 'auth/register', payload)
  },
})
