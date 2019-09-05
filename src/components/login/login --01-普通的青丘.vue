<template>
  <div class="login-wrap">
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="用户名">
        <el-input v-model="formLabelAlign.username"></el-input>
      </el-form-item>

      <el-form-item label="密码">
        <el-input v-model="formLabelAlign.password"></el-input>
      </el-form-item>

      <el-row>
        <el-button type="primary" @click.prevent="handleLogin">登录</el-button>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: "right", //对齐的方式、

      //
      formLabelAlign: {
        username: "",
        password: ""
      }
    };
  },

  methods: {
    handleLogin() {
      this.$http.post("login", this.formLabelAlign).then(res => {
        // console.log(res);
        const {
          data,
          meta: { msg, status }
        } = res.data;
        if (status === 200) {
          this.$message({
            showClose: true,
            message: msg,
            type: "success"
          });
          this.$router.push({ name: "home" });
        } else {
          this.$message({
            showClose: true,
            message: msg,
            type: "error"
          });
        }
      });
    }
  }
};
</script>

<style  scoped>
.login-wrap {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>