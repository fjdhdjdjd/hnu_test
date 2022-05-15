<template>
  <div class="P-Main">
    <!-- 头部组件 -->
    <main-header />
    <!-- 导航条组件 -->
    <main-nav />
    <router-view />
  </div>
</template>
<script>
import MainHeader from '../../components/main/header.vue'
import MainNav from '../../components/main/nav.vue'
export default {
  name:'p_main',
  components:{
    MainHeader,
    MainNav
  },
}
</script>
<style lang="less" scoped>
.P-Main{
  position: relative;
}
</style>