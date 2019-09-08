import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// router.js
// 路由表元信息
export default new Router({
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("../components/login/login.vue")
    },

    {
      path: "/home",
      name: "home",
      component: () => import("../components/home/home.vue"),
      children: [
        {
          path: "/users",
          name: "users",
          component: () => import("../components/users/users.vue")
        }
      ]
    }
  ]
});
