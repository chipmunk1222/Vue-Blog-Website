<template>
  <div class="blog-detail-container">
    <h2>{{list.title}}</h2>
    <div class="aside">
      <span>日期:{{list.createDate}}</span>
      <span>浏览:{{list.scanNumber}}</span>
      <span><a href="#article-comment">评论:{{list.commentNumber}}</a></span>
      <span>
        <RouterLink :to="{
          name:'CategoryBlog',
          params:{
            category:list.category.id
          }
        }">{{list.category.name}}
        </RouterLink>
      </span>
    </div>
    <div class="markdown-body" v-html="list.htmlContent"></div>
  </div>
</template>

<script>
export default {
  props: {
    list:{
      type: Object,
      required: true
    }
  },
}
</script>

<style scoped lang="scss">
@import '~@/assets/style/markdown.css';
@import '~@/assets/style/var.scss';
@import 'highlight.js/styles/github.css';
.blog-detail-container{
  position: relative;
  h2{
    font-size: 2.3em;
    margin: 40px 0 20px 0;
  }
  .aside{
    font-size:15px;
    color: $lightWords;
    margin-bottom: 30px;
    span{
      padding: 10px;
    }
  }
}
</style>