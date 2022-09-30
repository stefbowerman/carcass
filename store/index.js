export const state = () => ({
  isTouch: false
})

export const mutations = {
  SET_IS_TOUCH(state, data) {
    state.isTouch = !!data
  }
}

export const actions = {
  // async nuxtServerInit({ dispatch }, { app }) {
  //   await Promise.all([
  //     dispatch('init')
  //   ])
  // },

  async init() {
    // Do initial queries and mutations here..
  }
}
