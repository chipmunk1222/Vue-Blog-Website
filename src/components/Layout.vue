<template>
  <div class="layout-container">
    <div class="left">
      <slot name="left"></slot>
    </div>  
    <div class="main">
      <slot></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.layout-container{
  display: flex;
  width: 100%;
  height: 100%;
  .left,.right{
    flex: 0 0 auto;
    position: relative;
  }
  .main{ 
    width: 100%;
    flex: 1 1 auto;
    overflow: hidden;
  }
}
</style>