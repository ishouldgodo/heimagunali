<template>
  <div>
    <!-- 面包写 -->
    <my-bread value1="权限管理" value2="角色列表"></my-bread>

    <!-- 添加按钮 -->
    <el-row class="addbtn">
      <el-col>
        <el-button type="primary">添加角色</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  created() {
    this.getRolelist();
  },

  methods: {
    async getRolelist() {
      const res = await this.$http.get(`roles`);
      console.log("aa", res);
    }
  }
};
</script>

<style  scoped>
.addbtn {
  margin-top: 20px;
}
</style>