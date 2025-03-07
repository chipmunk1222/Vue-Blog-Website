import { getAbout } from "@/api/about";

export default{
  namespaced: true,
  state: {
    loading:false,
    data:''
  },
  mutations: {
    setLoading(state,loading){
      state.loading = loading
    },
    setAbout(state,about) {
      state.data = about
    }
  },
  actions: {
    async getAbout(context){
      if(context.state.data)return
      context.commit('setLoading',true);
      const resp = await getAbout();
      context.commit('setAbout',resp);
      context.commit('setLoading',false)
    }
  }
}