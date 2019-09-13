<template>
  <el-card>
    <!-- 使用自定义面包组件 -->
    <my-bread value1="商品管理" value2="商品列表"></my-bread>

    <!-- 提示 -->
    <el-alert class="myalert" title="成功提示的文案" type="success" center show-icon></el-alert>

    <!-- 使用简单风格的步骤条 -->
    <el-steps :active="1*active" finish-status="success" simple style="margin-top: 20px">
      <el-step title="基本信息"></el-step>
      <el-step title="商品参数"></el-step>
      <el-step title="商品属性"></el-step>
      <el-step title="商品图片"></el-step>
      <el-step title="商品内容"></el-step>
    </el-steps>

    <!-- tab切换 -->
    <h1>测试tab当前点击的是第几个{{active}}</h1>
    <el-tabs v-model="active" class="mytab" tab-position="left" style="height: 200px;">
      <el-tab-pane name="1" label="基本信息">用户管理</el-tab-pane>
      <el-tab-pane name="2" label="商品参数">配置管理</el-tab-pane>
      <el-tab-pane name="3" label="商品属性">角色管理</el-tab-pane>
      <el-tab-pane name="4" label="商品图片">定时任务补偿</el-tab-pane>
      <el-tab-pane name="5" label="商品内容">定时任务补偿2</el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      active: "1" //tab栏默认选中第一个
    };
  }
};
</script>

<style  scoped>
.myalert {
  margin: 20px auto;
}
.mytab {
  margin-top: 20px;
}
</style>