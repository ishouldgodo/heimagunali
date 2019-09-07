<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  padding: 0; /*防止出现滚动条*/
  margin: 0; /*防止出现滚动条*/
}
/*manping*/
#app {
  width: 100%;
  height: 100%;
}
</style>
