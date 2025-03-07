<template>
    <i class="iconfont icon-container" :class="fontClass"></i>
</template>

<script>
const fontMap = {
  'wx':'icon-wx',
  'github':'icon-github',
  'QQ':'icon-QQ',
  'password':'icon-password',
  'eyes':'icon-eyes',
  'eyes-close':'icon-eyes-close',
  'email':'icon-email',
  'empty':'icon-empty',
  'home':'icon-home',
  'about':'icon-about',
  'code':'icon-code',
  'message':'icon-message',
  'blog':'icon-blog',
  'arrow-up':'icon-arrow-up',
  'arrow-down':'icon-arrow-down',
}

export default {
  props: {
    type:{
      type:String,
    }
  },
  computed: {
    fontClass() {
      return fontMap[this.type];
    }
  }
}
</script>

<style scoped lang="scss">
@import '//at.alicdn.com/t/c/font_4587574_5d0ickawbeo.css';
.icon-container {
  font-size:inherit;
}
</style>  