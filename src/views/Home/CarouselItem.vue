<template>
  <div class="carousel-item-container" ref="container" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
    <div class="carousel-img" ref="image" :style="imgPosition">
      <img :src="banner.midImg" alt="">
    </div>
    <div class="carousel-title" ref="title">{{banner.title}} </div>
    <div class="carousel-des" ref="des">{{banner.description}}</div>
  </div>
</template>

<script>
export default {
  props: ["banner"],
  data() {
    return {
      titleWidth: 0,
      desWidth: 0,
      containerSize: null,
      imageSize: null,
      mouseX: 0,
      mouseY: 0,
    }
  },
  computed: {
    imgPosition(){
      if(!this.containerSize||!this.imageSize){
        return;
      }
      const extraX = (this.containerSize.width - this.imageSize.width)*this.mouseX/this.containerSize.width;
      const extraY = (this.containerSize.height - this.imageSize.height)*this.mouseY/this.containerSize.height;  
      return {
        transform: `translate(${extraX}px, ${extraY}px)`
      }
    },
    centerPosition(){
      if(!this.containerSize){
        return;
      }
      return {
        x:this.containerSize.width/2,
        y:this.containerSize.height/2
      }
    }
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.desWidth = this.$refs.des.clientWidth;
    this.showText();
    this.setSize();
    this.mouseX = this.centerPosition.x;
    this.mouseY = this.centerPosition.y;
    window.addEventListener("resize", this.setSize);
  },
  destroyed() {
    window.removeEventListener("resize", this.setSize);
  },
  methods: {
    showText(){
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      this.$refs.title.clientWidth;
      this.$refs.title.style.transition = "1s";
      this.$refs.title.style.width = this.titleWidth + "px";

      this.$refs.des.style.opacity = 1;
      this.$refs.des.style.width = 0;
      this.$refs.des.clientWidth;
      this.$refs.des.style.transition = "2s 1s";
      this.$refs.des.style.width = this.desWidth + "px";
    },
    setSize(){
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight
      };
      this.imageSize = {
        width: this.$refs.image.clientWidth,
        height: this.$refs.image.clientHeight
      };
    },
    handleMouseMove(e){
      const containerLeft = this.$refs.container.getBoundingClientRect().left;
      const containerTop = this.$refs.container.getBoundingClientRect().top;
      this.mouseX = e.clientX - containerLeft;
      this.mouseY = e.clientY - containerTop;
    },
    handleMouseLeave(){
      this.mouseX = this.centerPosition.x;
      this.mouseY = this.centerPosition.y;
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/style/var.scss';
.carousel-item-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  .carousel-img {
    width: 110%;
    height: 110%;
    position: absolute;
    top: 0;
    left: 0;
    transition: .3s linear;
    overflow: visible;
    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }
  .carousel-title,.carousel-des {
    position: absolute;
    letter-spacing: 3px;
    left: 30px;
    text-shadow: 1px 1px 0 rgba(0, 0, 0, .5), -1px -1px 0 rgba(0, 0, 0, .5);
    white-space: nowrap;
    overflow: hidden;
    opacity: 0;
  }
  .carousel-title{
    top:calc(50% - 40px);
    font-size:2em;
    color: #fff;
  }
  .carousel-des {
    top: calc(50% + 20px);
    font-size:1.2em;
    color:lighten($gray, 20%);
  }
}
</style>