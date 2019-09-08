import axios from "axios";
const MyHttpServer = {};
MyHttpServer.install = Vue => {
  axios.defaults.baseURL = "http://api.xiaomadagege.cn:8808/api/private/v1/";


  Vue.prototype.$http = axios;
};

export default MyHttpServer;
