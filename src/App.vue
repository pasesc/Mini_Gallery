<template>
  <div id="app">
    <div id="nav" style="background-color: whitesmoke;background-size: 120px;height: 78px;text-align: center;">
    <span style="font-size:55px;" >
      <p style="color:rgb(118, 78, 8);">画作在线展览平台</p>
    </span>
    </div>
    <div id="nav" style="background-color: rgb(166, 194, 203);background-size: 135px;height: 140px;text-align: center;">
      <span style="line-height:26px;font-size: 43px;">
        <br><br>
        <router-link to="/main" style="color: rgb(47, 61, 71);"><span>画展首页</span></router-link>
        <!-- <br><br> -->
        <span style="padding-left:60px"></span>
        <router-link to="/products" style="color: rgb(37, 50, 61);">作品分类</router-link>
        <!-- <br><br> -->
        <span style="padding-left:60px"></span>
        <router-link to="/author" style="color: rgb(18, 28, 39);">画家简介</router-link>
      </span>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
