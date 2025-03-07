<template>
  <div class="detail-container">
    <Layout>
      <div ref="mainContainer" class="main-container">
        <Loading v-if="isLoading" />
        <BlogDetail v-if="!isLoading" :list="data" />
        <BlogComment id="article-comment" v-if="!isLoading" />
      </div>
      <template #right>
        <Loading v-if="isLoading" />
        <BlogTOC v-if="!isLoading" :toc="data.toc" />
      </template>
    </Layout>
    <ToTop />
  </div>
</template>

<script>
import Loading from '@/components/Loading'
import Layout from '@/components/Layout.vue'
import BlogDetail from './components/BlogDetail.vue'
import BlogTOC from './components/BlogTOC.vue'
import BlogComment from './components/BlogComment.vue'
import fetchData from '@/mixins/fetchData'
import {getBlog} from '@/api/blog'
import ToTop from '@/components/ToTop'
import setScrollToTop from '@/mixins/setScrollToTop'
import {titleController} from '@/utils'

export default {
  mixins: [fetchData({}),setScrollToTop('mainContainer')],
  components: {
    Loading,
    Layout,
    BlogDetail,
    BlogTOC,
    BlogComment,
    ToTop,
  },
  methods: {
    async fetchData() {
      let resp = await getBlog(this.$route.params.id)
      if(!resp){
        this.$router.push('/404')
        return
      }
      titleController.setRouteTitle(resp.title)
      return resp
    },
  },
  updated(){
    const hash = location.hash
    location.hash = ''
    setTimeout(()=>{
      location.hash = hash
    },50)
  },

}
</script>

<style scoped lang="scss">
.detail-container {
  position: relative;
  width: 100%;
  height: 100%;
  .main-container {
    position: relative;
    height: 100%;
    overflow-y: scroll;
    box-sizing: border-box;
    padding: 20px;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
}
</style>