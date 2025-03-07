import {getProject} from '@/api/project'

export default {
  namespaced:true,
  state:{
    data:[],
    loading:false,
  },
  mutations:{
    setProject(state,payload){
      state.data = payload
    },
    setLoading(state,loading){
      state.loading = loading
    }
  },
  actions:{
    async fetchProject(context){
      if(context.state.data.length)return
      context.commit('setLoading',true)
      const resp = await getProject()
      context.commit('setProject',resp)
      context.commit('setLoading',false)
    }
  }
}