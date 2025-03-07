<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="left">
          <SideBar />
        </div>
      </template>
      <template class="main">
        <RouterView />
      </template>
      <template #right>
        <div class="right">
          右侧
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import Layout from '@/components/Layout.vue'
export default {
  name: 'App',
  components: {
    SideBar,
    Layout,
  }
}
</script>

<style scoped lang="scss">
  .app-container{
    width: 100vw;
    height: 100vh;
    // position: fixed;
    .left {
      width: 250px;
    }
    .right{
      width: 0px;
    }
    .main{
      width: 100%;
    }
  }

</style>