export const state = () => ({
  page: {
    screenWidth: 1024,
  },
  authModal: {
    dialogVisible: false,
    type: 'login',
  },
});

export const mutations = {
  setPageAttrs(state, data) {
    state.page.screenWidth = data.screenWidth
  },
  setModalType(state, type) {
    state.authModal.type = type
  },
  setModalStatus(state, dialogVisible) {
    state.authModal.dialogVisible = dialogVisible
  }
};
