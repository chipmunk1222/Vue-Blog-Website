<template>
  <ul class="rightlist-container">
    <li v-for="(item,index) in lists" :key="index">
      <span @click="handleClick(item)" :class="{active:item.isChecked}">{{item.name}}</span>
      <span @click="handleClick(item)" v-if="item.aside" class="aside" :class="{active:item.isChecked}">{{item.aside}}</span>
      <RightList :lists="item.children" @select="handleClick" />
    </li>
  </ul>
</template>

<script>
export default {
  name:'RightList',
  props: {
    lists:{
      type: Array,
      default: ()=>[]
    }
  },
  methods: {
    handleClick(item){
      this.$emit('select',item)
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/var.scss";
.rightlist-container{
  list-style-type: none;
  padding: 0;
  .rightlist-container{
    margin-left: 1em;
  }
  li{
    min-height: 33px;
    line-height: 33px;
    span{
      cursor: pointer;
      &.active{
        color: $warning;
        font-weight: bold;
      }
    }

  }
}
.aside{
  font-size: 12px;
  padding-left: 1em;
  color:$lightWords
}

</style>