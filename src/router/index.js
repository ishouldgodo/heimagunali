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
