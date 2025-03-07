<template>
  <div ref="mainContainer" class="blog-container">
    <Layout>
      <BlogList />
      <template #right>
        <BlogCategory />
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/Layout.vue'
import BlogCategory from './components/BlogCategory'
import BlogList from './components/BlogList'
export default {
  components: {
    Layout,
    BlogCategory,
    BlogList,
  },
}
</script>

<style scoped lang="scss">
.blog-container{
  position: relative;
  width: 100%;
  height: 100%;
}


</style>