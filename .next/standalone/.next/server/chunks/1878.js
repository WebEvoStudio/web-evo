"use strict";
exports.id = 1878;
exports.ids = [1878];
exports.modules = {

/***/ 35164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ObjectUnit)
/* harmony export */ });
/**
 * Object unit
 */ class ObjectUnit {
    /**
   * object 转 params
   * @param {Object} obj
   * @return {string}
   */ static toParams(obj) {
        let params = "";
        for(const key in obj){
            if (obj.hasOwnProperty(key)) {
                params += `${key}=${obj[key]}&`;
            }
        }
        return params.substring(0, params.length - 1);
    }
    /**
   * object 转 FormData
   * @param {Object} obj
   * @return {FormData}
   */ static toFormData(obj) {
        const formData = new FormData();
        for(const key in obj){
            if (obj.hasOwnProperty(key)) {
                formData.append(key, obj[key]);
            }
        }
        return formData;
    }
}


/***/ }),

/***/ 81878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Request)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2463);
/* harmony import */ var _object_unit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35164);


/**
 * 请求
 * @property {function} get GET请求
 */ class Request {
    /**
   * 构造器
   * @param {string} baseURL 请求地址
   */ constructor(baseURL){
        this.config = {};
        this.config.baseURL = "https://web-evo.bulv.life/service/";
        if (baseURL) this.config.baseURL = baseURL;
    }
    /**
   * 请求配置
   * @param {string} url
   * @param {Method} method
   * @param {any} data
   * @param {any} headers
   * @return {Promise<AxiosResponse<any>>}
   */ request(url, method, data, headers) {
        const config = {
            ...this.config,
            url,
            method,
            data,
            headers
        };
        const instance = axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.create();
        instance.interceptors.response.use(this.responseInterceptor, this.errorInterceptor);
        return instance.request(config);
    }
    /**
   * GET请求
   * @param {string} url
   * @param {Object} requestParam
   * @return {any}
   */ get(url, requestParam) {
        return this.request(`${url}?${_object_unit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.toParams(requestParam)}`, "get");
    }
    /**
   * POST请求
   * @param {string} url
   * @param {Object} data
   * @param {Object} headers
   * @return {any}
   */ post(url, data, headers) {
        return this.request(url, "post", data, headers);
    }
    /**
   * 响应拦截器
   * @param {any} response
   * @return {any}
   */ responseInterceptor(response) {
        switch(response.status){
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
   */ errorInterceptor(err) {
        const error = {
            message: "服务器错误",
            ...err.response.data
        };
        return Promise.reject(error);
    }
}


/***/ })

};
;