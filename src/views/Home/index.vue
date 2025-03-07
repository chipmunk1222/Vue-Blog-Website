<template>
  <div class="home-container" @wheel="handleWheel">
    <Loading v-if="loading"/>
    <ul class="carousel-container" ref="myDiv" :style="{marginTop}" @transitionend="endChange">
      <li v-for="banner in data" :key="banner.id">
        <CarouselItem :banner="banner"/>
      </li>
    </ul>
    <div v-show="index>0" class="icon icon-up" @click="switchTo(index-1)">
      <Icon :type="'arrow-up'" />
    </div>
    <div v-show="index<data.length-1" class="icon icon-down" @click="switchTo(index+1)">
      <Icon :type="'arrow-down'" />
    </div>
    <ul class="indicator">
      <li v-for="banner in data" 
        :key="banner.id"
        class="indicator-item"
        :class="{active:banner.id-1===index}"
        @click="switchTo(banner.id-1)"
      >
      </li>
    </ul>
  </div>
</template>

<script>
// import {getBanner} from '@/api/banner' 
import CarouselItem from './CarouselItem.vue'
import Icon from '@/components/Icon.vue'
import Loading from '@/components/Loading.vue'
import {mapState} from 'vuex'
// import fetchData from '@/mixins/fetchData.js'

export default {
  // mixins: [fetchData([])],
  components: {
    CarouselItem,
    Icon,
    Loading,
  },
  data(){
    return{
      index:0,
      containerHeight:0,
      isChanging:false,
    }
  },
  computed: {
    marginTop(){
      return -this.containerHeight*this.index+'px'
    },
    ...mapState('banner',['loading','data'])
  },
  methods: {
    switchTo(index){
      this.isChanging = true
      this.index = index
    },
    handleWheel(e){
      if(this.isChanging) return
      if(e.deltaY>5 && this.index<this.data.length-1){
        this.isChanging = true
        this.index++
      }
      else if(e.deltaY<-5 && this.index>0){
        this.isChanging = true
        this.index--
      }
    },
    endChange(){
      this.isChanging = false
    },
    resize(){
        this.containerHeight = this.$refs.myDiv.clientHeight
    },
  },
  created(){
    this.$store.dispatch('banner/fetchBanner')
  },
  mounted(){
    this.resize()
    window.addEventListener('resize',this.resize)
  },
  beforeDestroy(){
    window.removeEventListener('resize',this.resize)
  }
}
</script>

<style scoped lang="scss">
@import '~@/assets/style/var.scss';
@import '~@/assets/style/mixin.scss';
.home-container{
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  position: relative;
}
.carousel-container{
  list-style-type: none;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  transition:500ms ease-in-out;
  background-color: $dark;

  li{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    color:$gray;
    // background-color: $dark;
  }
}
.icon{
  @include self-center();
  font-weight: 900;
  font-size:35px;
  color:$gray;
  &.icon-up{
    top: 25px;
    transform: translate(-50%);
    animation: jump-up 1s ease-in-out infinite;
  }
  &.icon-down{
    top:auto;
    bottom: 25px;
    transform:translate(-50%);
    animation: jump-down 1s ease-in-out infinite;
  }
  &:hover{
    animation-play-state: paused;
    cursor: pointer;
    color:#fff
  }
  &::before{
    content:"";
    position: absolute;
    top:-5px;
    left:-5px;
    right: -5px;
    bottom: -5px;
  }
  @keyframes jump-up{
    0%{
      transform: translate(-50%,0);
    }
    50%{
      transform: translate(-50%,-10px);
    }
    100%{
      transform: translate(-50%,0);
    }
  }
  @keyframes jump-down{
    0%{
      transform: translate(-50%,0);
    }
    50%{
      transform: translate(-50%,10px);
    }
    100%{
      transform: translate(-50%,0);
    }
  }
}
.indicator{
  @include self-center();
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
  left: auto;
  right: 25px;
  .indicator-item{
    width: 8px;
    height: 8px;
    margin: 8px;
    border-radius: 50%;
    border: solid 1px #fff;
    background-color: transparent;
    position: relative;
    &.active{
      background-color: #fff;
    }
    &:hover{
      border-color:$primary;
      cursor: pointer;
    }
    &::before{
      content: "";
      position: absolute;
      top: -5px;
      left: -5px;
      right: -5px;
      bottom: -5px;
    }
  }
}
</style>