<template>
  <div class="login-wrap">
    <!--  -->
    <div class="loginbox">
      <el-form :model="formLabelAlign" label-Width="80px" label-position="left">
        <h2 class="mytitle">
          <i class="el-icon-menu"></i>
          某某登陆系统
        </h2>

        <el-form-item label="用户名">
          <el-input type="text" v-model="formLabelAlign.username" placeholder="请输入用户名"></el-input>
        </el-form-item>

        <el-form-item v-if="visible" label="密码">
          <el-input type="password" v-model="formLabelAlign.password" placeholder="请输入密码">
            <i
              slot="suffix"
              title="显示密码"
              @click="changePass('show')"
              style="cursor:pointer;"
              class="el-input__icon el-icon-success"
            ></i>
          </el-input>
        </el-form-item>

        <el-form-item v-else="visible" label="密码">
          <el-input type="text" v-model="formLabelAlign.password" placeholder="请输入密码">
            <i
              slot="suffix"
              title="隐藏密码"
              @click="changePass('hide')"
              style="cursor:pointer;"
              class="el-input__icon el-icon-service"
            ></i>
          </el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click.prevent="handleLogin">登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      //
      formLabelAlign: {
        username: "",
        password: ""
      },
      visible: true //是否显示密码
    };
  },

 

  methods: {
    changePass(value) {
      //判断渲染，true:暗文显示，false:明文显示
      if (value == "show") {
        this.visible = false;
      } else {
        this.visible = true;
      }
    },

    async handleLogin() {
      const res = await this.$http.post("login", this.formLabelAlign);
      console.log(res);
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

        localStorage.setItem("token", data.token); //保存token
        this.$router.push({ name: "home" });
      } else {
        this.$message({
          showClose: true,
          message: msg,
          type: "error"
        });
      }
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
  /* background: pink; */
  background: url("../../assets/img/bg.jpg") no-repeat;
}

.mytitle {
  text-align: center;
}
/*居中*/
.loginbox {
  background: #f5f5f5;
  width: 40%;
  padding: 20px;
  height: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 20%;
  margin: auto;
}

/*登录按钮的长度*/
.el-button--primary {
  width: 100%;
}
</style>