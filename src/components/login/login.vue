<template>
    <div class="maxnbox" ref="clcheight">
        <!-- 插件开始 外层使用了appp包裹-->
        <div id="apppp">
            <vue-particles
                color="#dedede"
                height="700px"
                :particleOpacity="0.7"
                :particlesNumber="90"
                shapeType="circle"
                :particleSize="4"
                linesColor="#dedede"
                :linesWidth="1"
                :lineLinked="true"
                :lineOpacity="0.4"
                :linesDistance="200"
                :moveSpeed="3"
                :hoverEffect="true"
                hoverMode="grab"
                :clickEffect="true"
                clickMode="push"
                class="beijing"
            ></vue-particles>
        </div>
        <!-- end -->

        <div class="login-wrap">
            <!--  -->
            <div class="loginbox">
                <el-form :model="formLabelAlign" label-Width="80px" label-position="left">
                    <h2 class="mytitle">
                        <i class="el-icon-menu"></i>
                        某某登陆系统
                        账号：admin 密码：www.xiaomadagege.cn
                    </h2>

                    <el-form-item label="用户名">
                        <el-input
                            type="text"
                            v-model="formLabelAlign.username"
                            placeholder="请输入用户名"
                        ></el-input>
                    </el-form-item>

                    <el-form-item v-if="visible" label="密码">
                        <el-input
                            type="password"
                            v-model="formLabelAlign.password"
                            placeholder="请输入密码"
                        >
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
    },
    mounted() {
        this.$refs.clcheight.style.height = `${document.documentElement.clientHeight}px`
        console.log(this.$refs.clcheight)
        console.log(`${document.documentElement.clientHeight}`) //获取屏幕可视化区域的高度
    }
};
</script>

<style  scoped>
.maxnbox {
    overflow-y: hidden;
    padding: 0;
    margin: 0;
}
.login-wrap {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
/*  */

.beijing {
    background: url("../../assets/img/bg.jpg") center;
    padding: 0;
    margin: 0;
    overflow-y: hidden;
}
.a {
    clear: both;
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