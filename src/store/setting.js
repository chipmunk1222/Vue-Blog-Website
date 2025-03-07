import {getSettings} from '@/api/setting'
import { titleController } from '@/utils'

export default {
  namespaced: true,
  state: {
    loading:false,
    setting:[]
  },
  mutations: {
    setLoading(state,loading){
      state.loading = loading
    },
    setSetting(state, setting){
      state.setting = setting
    }
  },
  actions: {
    async getSetting(context){
      context.commit('setLoading',true)
      const res = await getSettings()
      context.commit('setSetting',res)
      context.commit('setLoading',false)
      if(context.state.setting.siteTitle){
        titleController.setSiteTitle(context.state.setting.siteTitle)
      }
    }
  }
}