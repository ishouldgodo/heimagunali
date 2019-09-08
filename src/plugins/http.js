import axios from "axios";
const MyHttpServer = {};
MyHttpServer.install = Vue => {
  axios.defaults.baseURL = "http://api.xiaomadagege.cn:8808/api/private/v1/";

  // 添加请求拦截器--new add
  axios.interceptors.request.use(
    function(config) {
      // 在发送请求之前做些什么--判断是否是login的请求
      // config返回的是一个对象 {url: "rights/list", method: "get", headers: {…}, baseURL: "http://api.xiaomadagege.cn:8808/api/private/v1/", transformRequest: Array(1), …}
      if (config.url !== "login") {
        //不是login 清代请求头
        const AUTH_TOKEN = localStorage.getItem("token");
        config.headers.common["Authorization"] = AUTH_TOKEN;
      }
      return config;
    },
    function(error) {
      // 对请求错误做些什么
      return Promise.reject(error);
    }
  );

  // 添加响应拦截器
  axios.interceptors.response.use(
    function(response) {
      // 对响应数据做点什么
      return response;
    },
    function(error) {
      // 对响应错误做点什么
      return Promise.reject(error);
    }
  );

  //新增结束

  // 添加实例的方法
  Vue.prototype.$http = axios;
};

export default MyHttpServer;
