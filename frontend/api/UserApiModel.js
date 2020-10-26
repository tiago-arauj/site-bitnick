// Provide nuxt-axios instance to use same configuration across the whole project
// I've used typical CRUD method names and actions here
export default $axios => resource => ({
  index(auth = false) {
    if (auth) {
      return $axios.$get(`${resource}`, {headers: {'Authorization': 'Bearer ' + auth}})
    } else {
      return $axios.$get(`${resource}`)
    }
  },

  show(id, auth = false) {
    if (auth) {
      return $axios.$get(`${resource}/${id}`, {headers: {'Authorization': 'Bearer ' + auth}})
    } else {
      return $axios.$get(`${resource}/${id}`)
    }
  },

  create(payload, auth = false) {
    if (auth) {
      return $axios.$post(`${resource}`, payload, {headers: {'Authorization': 'Bearer ' + auth}})
    } else {
      return $axios.$post(`${resource}`, payload)
    }
  },

  update(id, payload, auth = false) {
    if (auth) {
      return $axios.$put(`${resource}/${id}`, payload, {headers: {'Authorization': 'Bearer ' + auth}})
    } else {
      return $axios.$put(`${resource}/${id}`, payload)
    }
  },

  delete(id, auth = false) {
    if (auth) {
      return $axios.$delete(`${resource}/${id}`, {headers: {'Authorization': 'Bearer ' + auth}})
    } else {
      return $axios.$delete(`${resource}/${id}`)
    }
  }
})
