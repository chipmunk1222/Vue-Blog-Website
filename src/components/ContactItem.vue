<template>
  <div class="contact-item-container">
    <a class="contact-item-link" href="#">
      <Icon :type="icon" />
      <p>{{content}}</p>
    </a>
    <div class="pop">
      <img :src="image" alt="QRcode">
    </div>
    
  </div>

</template>

<script>
import Icon from '@/components/Icon';
export default {
  props: {
    image: {
      type: String,
      default: '#',
      required: true
    },
    content:{
      type: String,
      default: '无数据',
      required: true
    },
    icon:{
      type: String,
      default: 'empty',
      required: true
    }
  },
  components: {
    Icon,
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/style/var.scss';
.contact-item-container{
  height: 30px;
  position: relative;
  &:hover .pop{
    transform: scaleY(1);
  }
  .contact-item-link{
    position: relative;
    display: flex;
    align-items: center;
    height: 30px;
    line-height: 30px;
    font-size:16px;
    color: $gray;
    &:hover{
      color: $primary;
    }
    .icon-container{
      padding: 0 10px;
      font-size: 25px;
    }
  }
  .pop{
    position: absolute;
    width:180px;
    height: 180px;
    padding: 6px 6px;
    border-radius: 6px;
    left: 8px;
    bottom: 33px;
    background-color: #fff;
    transform: scaleY(0);
    transform-origin: center bottom;
    transition: .3s;
    img{
      width: 100%;
      height: 100%;
      position: relative;
      object-fit: fill;
    }
    &::after{
      content: " ";
      position: absolute;
      bottom: -8px;
      left: 50%;
      width: 8px;
      height: 8px;
      background-color: #fff;
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}

</style>