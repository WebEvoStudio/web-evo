import axios, {AxiosRequestConfig, AxiosResponse, Method} from 'axios';
import ObjectUnit from "./object-unit";

/**
 * 请求
 * @property {function} get GET请求
 */
export default class Request {
  config: AxiosRequestConfig = {};
  /**
   * 构造器
   */
  constructor() {
    this.config.baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  }

  /**
   * 请求配置
   * @param {string} url
   * @param {Method} method
   * @param {any} data
   * @return {Promise<AxiosResponse<any>>}
   */
  request(url: string, method: Method, data?: {[index: string]: any}): Promise<any> {
    const config = {...this.config, url, method, data};
    const instance = axios.create();
    instance.interceptors.response.use(this.responseInterceptor);
    return instance.request(config);
  }
  /**
   * GET请求
   * @param {string} url
   * @param {Object} requestParam
   * @return {any}
   */
  get(url: string, requestParam: {[index: string]: string}): Promise<any> {
    return this.request(`${url}?${ObjectUnit.toParams(requestParam)}`, 'get');
  }

  /**
   * 响应拦截器
   * @param {any} response
   * @return {any}
   */
  responseInterceptor(response: AxiosResponse<any>): any {
    switch (response.status) {
      case 200:
        return response.data;
      default:
        return Promise.reject(response);
    }
  }
}
