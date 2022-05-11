import axios, {AxiosRequestConfig, AxiosResponse, Method} from 'axios';
import ObjectUnit from './object-unit';

/**
 * 请求
 * @property {function} get GET请求
 */
export default class Request {
  config: AxiosRequestConfig = {};
  /**
   * 构造器
   * @param {string} baseURL 请求地址
   */
  constructor(baseURL?: string) {
    this.config.baseURL = process.env.NEXT_PUBLIC_BASE_URL;
    if (baseURL) this.config.baseURL = baseURL;
  }

  /**
   * 请求配置
   * @param {string} url
   * @param {Method} method
   * @param {any} data
   * @param {any} headers
   * @return {Promise<AxiosResponse<any>>}
   */
  request(
      url: string,
      method: Method,
      data?: {[index: string]: any},
      headers?: {[index: string]: string},
  ): Promise<any> {
    const config = {...this.config, url, method, data, headers};
    const instance = axios.create();
    instance.interceptors.response.use(this.responseInterceptor, this.errorInterceptor);
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
   * POST请求
   * @param {string} url
   * @param {Object} data
   * @param {Object} headers
   * @return {any}
   */
  post(url: string, data: {[index: string]: any}, headers?: {[index: string]: string}): Promise<any> {
    return this.request(url, 'post', data, headers);
  }
  /**
   * 响应拦截器
   * @param {any} response
   * @return {any}
   */
  responseInterceptor(response: AxiosResponse<any>): any {
    switch (response.status) {
      case 200:
      case 201:
        return response.data;
      default:
        console.log(response);
        return Promise.reject(response);
    }
  }
  /**
   * 错误拦截器
   * @param {any} err
   * @return {any}
   */
  errorInterceptor(err: any): any {
    const error = {message: '服务器错误', ...err.response.data};
    return Promise.reject(error);
  }
}
