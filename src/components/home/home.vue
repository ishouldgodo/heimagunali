<template>
  <div class="mycontainner">
    <el-container>
      <!-- 头部 -->
      <el-header>
        <el-row>
          <el-col :span="4">
            <div class="grid-content bg-purple myheaderleft">12</div>
          </el-col>
          <el-col :span="16">
            <div class="grid-content bg-purple-light">1212</div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <a @click.prevent="outsys">退出</a>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <!--头部结束 -->

      <el-container>
        <el-aside width="200px">
          <!--  -->
          <el-row class="tac mytac">
            <el-col :span="24">
              <!-- unique-opened="true" 只保留一个菜单
                    :router="true"开启路由标识
                    index="users" 是标识 它就会去找这个路由
              -->
              <el-menu
                default-active="2"
                :router="true"
                :unique-opened="true"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#d3dce6"
                text-color="#fff"
                active-text-color="#ffd04b"
              >
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>用户管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="users">用户列表</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="1-3">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-3-1">选项1</el-menu-item>
                  </el-submenu>
                </el-submenu>

                <el-submenu index="2">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航二</span>
                  </template>

                  <el-menu-item-group>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                  </el-menu-item-group>

                  <el-submenu index="2-3">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-3-1">选项1</el-menu-item>
                  </el-submenu>
                </el-submenu>

                <el-submenu index="3">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航三</span>
                  </template>

                  <el-menu-item-group>
                    <el-menu-item index="3-1">选项1</el-menu-item>
                    <el-menu-item index="3-2">选项2</el-menu-item>
                  </el-menu-item-group>

                  <el-submenu index="3-3">
                    <template slot="title">选项4</template>
                    <el-menu-item index="3-3-1">选项1</el-menu-item>
                  </el-submenu>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>
          <!--  -->
        </el-aside>
        <el-container>
          <el-main>
            <!-- 中间部分的容器 -->
            <router-view></router-view>
          </el-main>

          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
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
  },

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },

    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },

    // 退出按钮
    outsys() {
      localStorage.removeItem("token"); //
      localStorage.clear();
      this.$message({
        showClose: true,
        message: "退出成功",
        type: "success"
      });
      this.$router.push({ name: "login" });
    }
  }
};
</script>

<style scoped>
/* 最大的容器 铺满屏 高度要一层一层的传 */
.mycontainner {
  /* 满屏高度*/
  height: 100%;
}
.el-container.is-vertical {
  height: 100%;
}

/*股价*/
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

/* 中间容器注意样似 */
.el-main {
  background-color: #e9eef3;
  color: #333;
  /* text-align: center; */
  /* line-height: 160px; */
}
/*护甲结束*/

/*菜单css*/
.el-menu {
  border-right-width: 0; /*去除从菜单的边框*/
}

.mytac > .el-col-24 {
  text-align: left;
}

/*toubu*/
.el-header {
  padding: 0; /*去除头部两端间距*/
}

/* 左边头部 */
.myheaderleft {
  width: 200px;
  padding: 0;
  margin: 0;
  background-size: 100%;
  background-image: url("../../assets/logo.png");
  background-size: 100%;
}
</style>