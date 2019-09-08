<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>
      <a href="/">{{value1}}</a>
    </el-breadcrumb-item>
    <el-breadcrumb-item>{{value2}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>


<script>
// 自定义组件  面包屑
export default {
  name: "my-bread", //给组件起一个名字
  data() {
    return {};
  },
  // props外界来的数据
  // props值是字符串数组
  // props中的数据的值，来源于使用组件时 传递的值
  props: ["value1", "value2"]
};
</script>

<style  scoped>
</style>