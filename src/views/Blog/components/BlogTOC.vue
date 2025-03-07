<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :lists="tocWithSelect" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from './RightList'
import {debounce} from '@/utils'
export default {
  props: {
    toc: {
      type: Array,
      required: true
    }
  },
  data(){
    return{
      activeAnchor:''
    }
  },
  computed:{
    doms(){
      let dom = []
      const getDoms = (toc = []) => {
        if(toc.length > 0){
          for(const item of toc){
            dom.push(document.getElementById(item.anchor))
            if(item.children){
              getDoms(item.children)
            }
          }
        }
      }
      getDoms(this.toc)
      return dom
    },
    tocWithSelect(){
      const getToc = (toc = []) => {
        return toc.map(item => ({
          ...item,
          isChecked: item.anchor === this.activeAnchor,
          children:getToc(item.children)
        }))
      }
      return getToc(this.toc)
    }
  },
  methods: {
    handleSelect(item){
      location.hash = item.anchor 
    },
    setSelect(){
      const range = 200
      this.activeAnchor = ''
      for (let dom of this.doms) {
        if(!dom){
          continue
        }
        const top = dom.getBoundingClientRect().top
        if(top>=-10&&top<=range){
          this.activeAnchor = dom.id
          return
        }
        else if(top>range){
          return
        }
        else{
          this.activeAnchor = dom.id
        }
      }
    }
  },
  created(){
    this.setSelectDebounce = debounce(this.setSelect,50)
    this.$bus.$on('handleScroll',this.setSelectDebounce)
  },
  destroyed(){
    this.$bus.$off('handleScroll',this.setSelectDebounce)
  },
  components: {
    RightList
  },
}
</script>

<style scoped lang="scss">
.blog-toc-container{
  width: 250px;
  height: 100%;
  position: relative;
  padding: 20px;
  overflow-y: auto;
  box-sizing: border-box;
  h2{
    margin-bottom: 8px;
    font-weight: bold;
    font-size: 1em;
    letter-spacing: 2px;
  }
  .rightlist-container{
    font-size: 14px;
  }
}
</style>