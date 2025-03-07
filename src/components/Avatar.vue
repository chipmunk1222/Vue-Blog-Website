<template>
  <div class="avatar-container">
    <img class="avatar-img" :src="url" alt="Avatar" :style="{
      width: size + 'px',
      height: size + 'px'
    }">
    <p class="avatar-text">{{content}}</p>
  </div>


</template>

<script>
export default {
  props:{
    url:{
      type: String,
      required: true,
      default: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200&d=robohash&r=x'
    },
    size:{
      type:Number,
      required: true,
      default: 50
    },
    content:{
      type: String,
      required: true,
      default: '张三'
    }
  }
}
</script>

<style scoped lang="scss">
  .avatar-container {
    .avatar-img{
      border-radius: 50%;
      display: block;
      object-fit: fill;
    }
    .avatar-text{
      color:#eee;
      text-align: center;
      font-size:22px;
      font-weight: 550;
      margin-top:5px;
      margin-bottom: 5px;
    }
  }
</style>