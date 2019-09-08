// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;

// 过滤器
Vue.filter("fmtdata",(v)=>{
  return moment(v).format("YYYY-MM-DD")
})


//
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// 引入
import MyServerHttp from "@/plugins/http.js";
import moment from "_moment@2.24.0@moment";
Vue.use(MyServerHttp);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
