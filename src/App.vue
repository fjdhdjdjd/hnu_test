<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
*{
  margin:0;
  padding:0;
  outline: none;
  box-sizing: border-box;
  color:#2b2b2b;
  font-family: '微软雅黑';
}
html,body,#app{
  height: 100%;
  font-size: 62.5%;
  min-width: 1250px;
}
li{
  list-style: none;
}
a{
  text-decoration: none;
  padding:0;
}
</style>
