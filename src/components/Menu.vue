<template>
  <ul class="menu-container">
    <li class="menu-list" v-for="menu in menus" :key="menu.id">
      <RouterLink 
        :to="menu.link" 
        class="menu-item" 
        active-class="selected" 
        exact-active-class=""
        :exact="menu.exact"
      >
        <Icon :type="menu.icon" />
        {{menu.name}}
      </RouterLink>
    </li>
  </ul>
</template>

<script>
import Icon from '@/components/Icon';
export default {
  name: 'Menu',
  data(){
    return{
      menus: [
        {
          id: 1,
          name: '首页',
          icon: 'home',
          link: '/',
          exact:true,
        },
        {
          id: 2,
          name: '文章',
          icon:'blog',
          link: '/blog',
          startWith:true,
          exact:false,
        },
        {
          id: 3,
          name: '关于我',
          icon: 'about',
          link: '/about',
          startWith:true,
          exact:true,
        },
        {
          id: 4,
          name: '项目&效果',
          icon: 'code',
          link: '/project',
          startWith:true,
          exact:true,
        },
        {
          id: 5,
          name: '留言板',
          icon: 'message',
          link: '/message',
          startWith:true,
          exact:true,
        }
      ]
    }
  },
  components: {
    Icon,
  }

}
</script>

<style scoped lang="scss">
@import '@/assets/style/var.scss';
.menu-container{
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: 100%;
  list-style-type: none;
  padding: 0;
  margin-top:0px;
  color:$gray;
  .menu-list{ 
    width: 100%;
    height: 40px;
    line-height: 30px;
    display: flex;
    align-items: center;
    font-size:15.5px;
    .menu-item{
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      display: flex;
      padding-top: 5px;
      padding-bottom: 5px;
      padding-left:55px;
      align-items: center;
      &:hover{
        color:#fff;
      }
      &.selected{
        background-color:#3d3d3d;
      }
      .icon-container{
        font-size:17px;
        padding: 0 10px;
      }
    }

  }
}

</style>