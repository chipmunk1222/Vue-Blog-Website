<template>
  <div class="message-container" ref="MainContainer">
    <MessageArea :title="'留言板'" :list="data" v-if="data" @submit="handleSubmit" />
    <div class="loading-area">
      <Loading v-if="isLoading" />
    </div>
    <ToTop />
  </div>
  
</template>

<script>
import MessageArea from '@/components/MessageArea'
import fetchData from '@/mixins/fetchData'
import {getMessage} from '@/api/message'
import {postMessage} from '@/api/message'
import setScrollToTop from '@/mixins/setScrollToTop'
import Loading from '@/components/Loading'
import ToTop from '@/components/ToTop'
export default {
  mixins:[fetchData({}),setScrollToTop('MainContainer')],
  components:{
    MessageArea,
    Loading,
    ToTop
  },
  data(){
    return {
      page:1,
      limit:10
    }
  },
  computed:{
    hasMore(){
      return this.data.row.length < this.data.total
    }
  },
  created(){
    this.$bus.$on('handleScroll',this.setScroll)
  },
  destroyed(){
    this.$bus.$off('handleScroll',this.setScroll)
  },
  methods:{
    async setScroll(dom){
      if(this.isLoading) return
      const range = 50
      if(dom.scrollHeight - dom.scrollTop - dom.clientHeight< range){
        await this.fetchMore()
        this.isLoading = false
      }
    },
    async fetchData(){
      return await getMessage(this.page,this.limit)
    },
    async fetchMore(){
      if(!this.hasMore) return
      this.isLoading = true
      const resp = await getMessage(this.page+1,this.limit)
      this.data.row = this.data.row.concat(resp.row)
      this.page++
      this.data.total = resp.total
    },
    async handleSubmit(data,callback){
      const resp = await postMessage({
        blogId: this.$route.params.id,
        ...data
      })
      this.data.row.unshift(resp)
      this.data.total++
      callback()
    }
  }
}
</script>

<style scoped lang="scss">
.message-container{
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  scroll-behavior: smooth;
  .message-area-container{
    width: 700px;
    padding: 25px 0;
    margin: 0 auto;
  }
  .loading-area{
    height: 150px;
    position: relative;
  }
}
</style>