<template>
  <div class="blog-category-container">
    <Loading v-if="isLoading" />
    <h2>全部分类</h2>
    <RightList :lists="list" @select="handleSelect" />
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData'
import {getBlogType} from '@/api/blog.js'
import RightList from './RightList'
import Loading from '@/components/Loading'
export default {
  mixins: [fetchData([])],
  methods: {
    async fetchData(){
      return await getBlogType();
    },
    handleSelect(item){
      if(item.id === this.routeInfo.categoryId){
        return     
      }
      const query = {
        page:1,
        limit:this.routeInfo.limit,
      }
      if(item.id === -1){
        this.$router.push({
          name:'Blog',
          query,
        })
      }
      else{
        this.$router.push({
          name:'CategoryBlog',
          query,
          params:{
            category:item.id
          }
        })
      }
    },
  },
  computed: {
    routeInfo(){
      const categoryId = +this.$route.params.category || -1;
      const page = +this.$route.query.page || 1;
      const limit = +this.$route.query.limit || 10
      return {
        categoryId,
        page,
        limit
      }
    },
    categoryId(){
      return +this.$route.params.category || -1
    },
    list(){
      const totalArticleCount = this.data.reduce((a,b)=>a+b.articlecount,0);
      const result = [
        {name:'全部',id:-1,articlecount:totalArticleCount},
        ...this.data
      ];
      return result.map(item=>({
        ...item,
        isChecked: item.id === this.categoryId,
        aside:`${item.articlecount}篇`
      }))
    }
  },
  components: {
    RightList,
    Loading
  }
}
</script>

<style scoped lang="scss">
.blog-category-container{
  width: 250px;
  height: 100%;
  position: relative;
  padding: 20px;
  overflow-y: auto;
  box-sizing: border-box;
  h2{
    margin-bottom: 8px;
    font-weight: bold;
    font-size: 1em;
    letter-spacing: 2px;
  }
  .rightlist-container{
    font-size: 14px;
  }
}
</style>