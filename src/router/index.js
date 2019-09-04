import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// router.js
// 路由表元信息
export default new Router({
  routes: [
    {
      path: "",
      redirect: "/home"
    },

    {
      path: "/login",
      name: "login",
      component: () => import("../components/login/login.vue")
    }
  ]
});
