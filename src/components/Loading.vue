<template>
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="loading-container"> 
      <circle class="circle-path" cx="50" cy="50" r="50" />
    </svg>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import '~@/assets/style/mixin.scss';
$primary : #6b9eee;
.loading-container {
  width: 50px;
  height: 50px;
  position: absolute;
  top: calc(50% - 25px);
  left: calc(50% - 25px);
  margin: auto;
  overflow: visible;
  animation: rotate 2s linear infinite;
  @keyframes rotate{
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }
}
.circle-path{
  width: 100%;
  height: 100%;
  filter:drop-shadow(0 0 1px $primary)
  drop-shadow(0 0 2px $primary)
  drop-shadow(0 0 4px $primary);
  fill: none;
  stroke: $primary;
  stroke-width: 5px;
  stroke-dasharray: 200 400;
  stroke-dashoffset: 0;
  animation: dash 1.5s ease-in-out infinite;
  @keyframes dash {
    0% {
      stroke-dasharray: 1 400;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 200 400;
      stroke-dashoffset: -83px;
    }
    100% {
      stroke-dasharray: 1 400;
      stroke-dashoffset: -313px;
    }
  }
}
</style>