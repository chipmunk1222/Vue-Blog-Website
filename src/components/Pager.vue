<template>
  <div class="page-container" v-if="(total-1) > 1">
    <a href="#" :class="{disabled : currentPage === 1}" @click="pageChange(1)">|&lt;&lt;</a>
    <a href="#" :class="{disabled : currentPage === 1}" @click="pageChange(currentPage-1)">&lt;&lt;</a>
    <a href="#" v-for="(item,index) in displayPage" :key="index" :class="{active : currentPage === item}" @click="pageChange(item)">{{item}}</a>
    <a href="#" :class="{disabled : currentPage === Math.ceil(total/limitPage)}" @click="pageChange(currentPage+1)">&gt;&gt;</a>
    <a href="#" :class="{disabled : currentPage === Math.ceil(total/limitPage)}" @click="pageChange(Math.ceil(total/limitPage))">&gt;&gt;|</a>
  </div>

</template>

<script>
export default {
  props:{
    currentPage:{
      type:Number,
      default:1
    },
    total:{
      type:Number,
      default:0
    },
    limitPage:{
      type:Number,
      default:10
    },
    visiblePage:{
      type:Number,
      default:10
    }
  },
  computed: {
    displayPage() {
      let nums = [];
      for(let i=this.minPage;i<=this.maxPage;i++){
        nums.push(i)
      }
      return nums;
    },
    minPage(){
      let min = this.currentPage - Math.floor(this.visiblePage/2);
      if(min<1){
        min =1
      }
      return min;
    },
    maxPage(){
      let max = this.currentPage + Math.floor(this.visiblePage/2)-1;
      if(max>Math.ceil(this.total/this.limitPage)){
        max = Math.ceil(this.total/this.limitPage)
      }
      return max;
    }
  },
  methods: {
    pageChange(newPage){
      if(newPage<1){
        newPage = 1
      }
      if(newPage>Math.ceil(this.total/this.limitPage)){
        newPage = Math.ceil(this.total/this.limitPage)
      }
      if(newPage === this.currentPage){
        return;
      }
      this.$emit('pageChange',newPage)
    }
  }
}
</script>

<style scope lang="scss">
@import "@/assets/style/var.scss";
.page-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px 0;
  a{
    color:$primary;
    margin: 0 6px;
    &:hover{
      color:$words;
    }
    &.active{
      cursor: pointer;
      color: $words;
      font-weight: bold;
    }
    &.disabled{
      cursor: text;
      color:$lightWords;
    }
  }
}

</style>