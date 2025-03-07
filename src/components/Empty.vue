<template>
  <div class="empty-container">
    <Icon type="empty"/>
    <p>{{text}}</p>
  </div>
</template>

<script>
import Icon from '@/components/Icon.vue'
export default {
  props: {
    text:{
      type:String,
      default:'无数据',
    }
  },
  components: {
    Icon,
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/style/mixin.scss';
@import '@/assets/style/var.scss';
.icon-container{
   font-size: 72px;
}
.empty-container{
  @include self-center();
  text-align: center;
  color:$gray;
}
</style>