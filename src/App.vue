<!--
 * @Descripttion: 
 * @Author: chenxch
 * @Date: 2020-09-19 18:25:58
-->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  position: absolute !important;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  min-width: 1320px;
  min-height: 600px;
  height:100vh;
  overflow: hidden;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
