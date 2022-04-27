export default {
  state: {
    page_collect: 'list-ing'
  },
  mutations: {
    changePageCollect(state,data){
      console.log(123123)
      state.page_collect = data
    }
  },
  actions: {},
  getters: {}
}
