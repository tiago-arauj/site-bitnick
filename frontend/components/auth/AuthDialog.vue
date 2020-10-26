<script>
import LoginForm from '~/components/auth/LoginForm'
import RegisterForm from '~/components/auth/RegisterForm'
export default {
  name: 'LoginDialog',
  components: {
    LoginForm,
    RegisterForm,
  },
  computed: {
    authModal () {
      return this.$store.state.layout.authModal
    }
  },
  methods: {
    open() {
      this.$store.commit('layout/setModalStatus', true)
    },
    closeDialog() {
      this.$store.commit('layout/setModalStatus', false)
    },
  }
}
</script>

<template lang="pug">
  el-dialog(:visible='authModal.dialogVisible', width='80%', center='', @close='closeDialog')
    LoginForm(v-if="authModal.type === 'login'")
    RegisterForm(v-if="authModal.type === 'register'")
</template>

<style lang="sass" scoped>
  .authDialog
    &-openBtn
      background-color: transparent
      border: 1px solid var(--highlightColor)
      color: #FFFFFF
</style>

