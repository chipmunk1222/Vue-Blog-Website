<template>
  <div class="sidebar-container">
    <Avatar :url="img" :size="120" :content="'chipmunk'"/>
    <Menu />
    <Contact />
  </div>
</template>

<script>
import Contact from '@/components/Contact.vue'
import Menu from '@/components/Menu.vue'
import Avatar from '@/components/Avatar.vue'
export default {
  name: 'App',
  data () {
    return {
      img: require("@/assets/image/Avatar.jpg"),
    }
  },
  components: {
    Contact,
    Menu,
    Avatar,
  }
}
</script>

<style scoped lang="scss">
  .sidebar-container{
    .avatar-container{
      margin: 20px auto;
    }
    width: 250px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid #e9e9e9;
    background-color: #111;
    overflow-y:hidden;
    overflow-x: none;
  }
</style>