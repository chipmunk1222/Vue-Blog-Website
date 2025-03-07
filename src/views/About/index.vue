<template>
  <div class="about-container">
    <Loading v-if="loading&&!src" />
    <!-- <iframe :src="src" frameborder="0" class="about-content"></iframe> -->
    <iframe src="https://xnmy.cdstm.cn/vr/65921/" frameborder="0" class="about-content"></iframe>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Loading from '@/components/Loading'
export default {
  computed:mapState({
    src: state => state.about.data,
    loading:'loading'
  }),
  components:{
    Loading 
  },
  created(){
    this.$store.dispatch('about/getAbout')
  }
}
</script>

<style scoped lang="scss">
  .about-container{
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    .about-content{
      object-fit: fill;
      width: 100%;
      height: 100%;
      display: block;
      box-sizing: border-box;
    }
  }
</style>