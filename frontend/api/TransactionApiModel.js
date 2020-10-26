// Provide nuxt-axios instance to use same configuration across the whole project
// I've used typical CRUD method names and actions here
export default $axios => resource => ({

  getExtract(auth = false) {
    if (auth) {
      return $axios.$get(`${resource}`,{headers: {'Authorization': 'Bearer ' + auth}})
    }
  },

  getBalance(auth = false, id) {
    if (auth) {
      return $axios.$get(`${resource}/balance/{id}`, {headers: {'Authorization': 'Bearer ' + auth}})
    }
  },

  bankSlip(payload, auth = false) {
    if (auth) {
      return $axios.$post(`${resource}`+ '/bank-slip', payload, {headers: {'Authorization': 'Bearer ' + auth}})
    } else {
      return $axios.$post(`${resource}`+ '/bank-slip', payload)
    }
  },

  creditCard(payload, auth = false) {
    if (auth) {
      return $axios.$post(`${resource}`+ '/credit-card', payload, {headers: {'Authorization': 'Bearer ' + auth}})
    } else {
      return $axios.$post(`${resource}`+ '/credit-card', payload)
    }
  },

  bankTransfer(payload, auth = false) {
    if (auth) {
      return $axios.$post(`${resource}`+ '/deposit', payload, {headers: {'Authorization': 'Bearer ' + auth}})
    }
  },
})
