import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
import { Message } from "element-ui";

const router = new Router({
  routes: [
    {
      path: "/local",
      name: "local",
      component: () => import("../components/local/local.vue")
    },

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
          path: "/tablehover",
          name: "tablehover",
          component: () => import("../../src/page/tablehover/tablehover.vue")
        },
        {
          path: "/lizichajain",
          name: "lizichajain",
          component: () => import("../components/lizichajain/lizichajain.vue")
        },
        {
          path: "/newuser",
          name: "newuser",
          component: () => import("../components/newuser/newuser.vue")
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
        },
        {
          path: "/goodsadd",
          name: "goodsadd",
          component: () => import("../components/goodsadd/goodsadd.vue")
        },
        {
          path: "/fenleiparams",
          name: "fenleiparams",
          component: () => import("../components/fenleiparams/fenleiparams.vue")
        },
        {
          path: "/categories",
          name: "categories",
          component: () => import("../components/categories/categories.vue")
        },
        {
          path: "/order",
          name: "order",
          component: () => import("../components/order/order.vue")
        },
        {
          path: "/markdown",
          name: "markdown",
          component: () => import("../page/markdown/markdown.vue")
        },
        {
          path: "/newcomponent",
          name: "newcomponent",
          component: () => import("../page/newcomponent/newcomponent.vue")
        },

        // 平常练习
        {
          path: "/pingshilianxi",
          name: "pingshilianxi",
          component: () => import("../page/pingshilianxi/pingshilianxi.vue")
        },
        {
          path: "/zujian",
          name: "zujian",
          component: () => import("../page/zujian/zujian.vue")
        },

         {
           path: "/tuozhuai",
           name: "tuozhuai",
          component: () => import("../page/tabletz/tabletz.vue")
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
