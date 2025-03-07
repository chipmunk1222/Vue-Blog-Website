import {getBanner} from '@/api/banner'

export default{
  namespaced: true,
  state: {
    loading:false,
    data:[]
  },
  mutations: {
    setLoading(state, payload) {
      this.loading = payload
    },
    setBanner(state, payload) {
      state.data = payload
    }
  },
  actions: {
    async fetchBanner(context) {
      if(context.state.data.length) return
      context.commit('setLoading',true)
      const res =await getBanner()
      context.commit('setBanner',res)
      context.commit('setLoading',false)   
    }
  }
}