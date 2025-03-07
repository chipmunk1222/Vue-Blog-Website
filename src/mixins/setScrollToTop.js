export default function(dom){
  return{
    mounted(){
      this.$bus.$on('toTop',this.toTop)
      this.$refs[dom].addEventListener('scroll',this.handleScroll)
    },
    beforeDestroy(){
      this.$refs[dom].removeEventListener('scroll',this.handleScroll)
      this.$bus.$off('toTop',this.toTop)  
    },
    methods:{
      handleScroll(){
        this.$bus.$emit('handleScroll',this.$refs[dom])
      },
      toTop(){
        this.$refs[dom].scrollTop = 0
      }
    }
  }
}