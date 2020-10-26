import Vue from 'vue'

Vue.mixin({
  methods: {
    notification(type, title, message) {
      const h = this.$createElement;
      this.$notify({
        type: type,
        title: title,
        message: h('i', {style: 'color: ' + type === 'error' ? 'red' : '#015747'}, message),
        showClose: false,
        position: 'bottom-right'
      })
    },
    toFormData(json) {
      let formData = new FormData();

      for (let prop in json) {
        formData.append('' + prop, this.form['' + prop]);
      }

      return formData;
    }
  }
});
