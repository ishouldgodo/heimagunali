<template>
  <div>我是我后台 需要全县</div>
</template>

<script>
export default {
  data() {
    return {};
  },

  beforeCreate() {
    //发送青丘前
    const token = localStorage.getItem("token");
    if (!token) {
      //  说明没有token
      this.$router.push({ name: "login" }); //跳转到登录页面
    }
    //  如果有token继续然然组件
  }
};
</script>

<style>
</style>
