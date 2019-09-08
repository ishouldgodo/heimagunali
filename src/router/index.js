import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
import { Message } from "element-ui";

const router = new Router({
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("../components/login/login.vue")
    },

    {
      path: "/",
      name: "home",
      component: () => import("../components/home/home.vue"),
      children: [
        {
          path: "/users",
          name: "users",
          component: () => import("../components/users/users.vue")
        },
        {
          path: "/rights",
          name: "rights",
          component: () => import("../components/rights/rights.vue")
        },
        {
          path: "/role",
          name: "role",
          component: () => import("../components/rights/role.vue")
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path == "/login") {
    next();
  } else {
    const token = localStorage.getItem("token");
    if (!token) {
      Message.success("回到登录页");
      // 没有token
      router.push({
        name: "login"
      });
      return false;
    } else {
      next();
    }
  }
});

export default router;
