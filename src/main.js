// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

// 导入自定义组件
// MyBread是一个对象
import MyBread from "@/components/cuscom/myBread.vue";

Vue.config.productionTip = false;

// 过滤器
Vue.filter("fmtdata", v => {
  return moment(v).format("YYYY-MM-DD");
});

//
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// 引入
import MyServerHttp from "@/plugins/http.js";
import moment from "moment";
Vue.use(MyServerHttp);

Vue.component(MyBread.name, MyBread); //注册组件

//插件
import VueParticles from "vue-particles";
Vue.use(VueParticles);

// import VueCropper from "vue-cropper";
// Vue.use(VueCropper);
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
