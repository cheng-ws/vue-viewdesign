import Vue from 'vue'
import App from './App.vue'
//全局css
import 'minireset.css/minireset.css';
import '@/assets/styles/global.scss';
// import '@/components/element.js';
//引入字体图标库
import '@/assets/font/iconfont.css';
// 路由文件
import router from "@/router";
// 状态管理
import store from "@/store";
import * as echarts from 'echarts';
// Vue.config.productionTip = false;
import walden from '@/assets/json/walden.json';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);
// console.log(walden);
// let waldenTheme = JSON.parse(walden);
echarts.registerTheme('walden',walden);
Vue.use(echarts);
Vue.prototype.$echarts = echarts;
// import {Loading,MessageBox,Notification,Message} from 'element-ui';
// Vue.use(Loading);
// Vue.use(MessageBox);
// Vue.use(Notification);
// Vue.use(Message);
// Vue.prototype.$loading = Loading.service;
// Vue.prototype.$msgbox = MessageBox;
// Vue.prototype.$alert = MessageBox.alert;
// Vue.prototype.$confirm = MessageBox.confirm;
// Vue.prototype.$prompt = MessageBox.prompt;
// Vue.prototype.$notify = Notification;
// Vue.prototype.$message = Message;
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
