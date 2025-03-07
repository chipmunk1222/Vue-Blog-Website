<template>
  <div class="blog-comment-container">
    <MessageArea :list="data" v-if="data" @submit="handleSubmit" />
    <div class="loading-area">
      <Loading v-if="isLoading" />
    </div>
  </div>
</template>

<script>
import MessageArea from '@/components/MessageArea.vue'
import fetchData from '@/mixins/fetchData'
import {getComments,postComment} from '@/api/blog'
import Loading from '@/components/Loading'
export default {
  mixins: [fetchData({})],
  components: {
    MessageArea,
    Loading
  },
  created(){
    this.$bus.$on('handleScroll',this.handleScroll)
  },
  destroyed(){
    this.$bus.$off('handleScroll',this.handleScroll)
  },
  computed:{
    hasMore(){
      return this.data.row.length < this.data.total
    }
  },
  methods:{
    async handleScroll(dom){
      if(this.isLoading) return
      const range = 50
      if(dom.scrollHeight - dom.scrollTop - dom.clientHeight< range){
        await this.fetchMore()
        this.isLoading = false
      }
    },
    async fetchData(){
      return await getComments(this.$route.params.id,1,10)
    },
    async fetchMore(){
      if(!this.hasMore) return
      this.isLoading = true
      const resp = await getComments(this.$route.params.id,this.data.page+1,10)
      this.data.row = this.data.row.concat(resp.row)
      this.page++
      this.data.total = resp.total
    },
    async handleSubmit(data,callback){
      const resp = await postComment({
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
.blog-comment-container{
  position: relative; 
  margin-top: 100px; 
  .loading-area{
    height: 150px;
    position: relative;
  }
}
</style>