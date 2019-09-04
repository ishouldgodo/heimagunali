import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);


// router.js
// 路由表元信息
export default new Router({
    routes: [
        {
            path: '',
            redirect: '/home'
        },

        {
            path: '/home',
            // meta: {
            //     title: 'home',
            //     icon: 'home'
            // },
            component: () => import("../page/home.vue")
        },

        {
            path: '/userCenter',
            meta: {
                title: '个人中心',
                requireAuth: true // 在需要登录的路由的meta中添加响应的权限标识
            },
            component: () => import("../page/userCenter.vue")
        }
    ]

})






