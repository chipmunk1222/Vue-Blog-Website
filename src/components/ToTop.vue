<template>
  <div v-show="show" class="to-top-container" @click="handleClick">
    top
  </div>
</template>

<script>
export default {
  data(){
    return {
      show: false
    }
  },
  methods: {
    handleClick(){
      this.$bus.$emit('toTop',0)
    },
    handleScroll(dom){
      if(!dom){
        this.show = false
        return
      } 
      if(dom.scrollTop >= 1000)this.show = true;
      else this.show = false;
    }
  },
  created(){
    this.$bus.$on('handleScroll',this.handleScroll)
  },
  beforeDestroy(){
    this.$bus.$off('handleScroll',this.handleScroll)
  }
}
</script>

<style scoped lang="scss">
@import '~@/assets/style/var.scss';
.to-top-container{
  position: fixed;
  right: 25px;
  bottom: 25px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: $primary;
  color: #fff;
  text-align: center;
  line-height: 50px;
  z-index: 10;
  cursor: pointer;
  &:hover{
    background-color: darken($primary, 20%);
  }
}
</style>