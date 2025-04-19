/* axios 请求模块 */
import axios from 'axios';
import { ElMessage } from 'element-plus';

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL, // 设置基地址
  timeout: import.meta.env.VITE_APP_TIMEOUT // 后台接口超时时间
});

request.interceptors.request.use(config => {
  // 在发送请求之前做一些处理
  config.headers['Content-Type'] = 'application/json;charset=UTF-8';
  return config;
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

request.interceptors.response.use(response => {
  // 对响应数据做点什么
  let res = response.data;
  if (typeof res === 'string') {
    res = res ? JSON.parse(res) : res;
  }
  return res;
}, error => {
  // 对响应错误做点什么
  if (error.response.status === 404) {
    ElMessage.error('未找到请求接口');
  } else if (error.response.status === 500) {
    ElMessage.error('系统异常，请查看后端控制台报错');
  } else {
    ElMessage.error(error.message);
  }
  return Promise.reject(error);
});

export default request;