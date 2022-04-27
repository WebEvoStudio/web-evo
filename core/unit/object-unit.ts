/**
 * Object unit
 */
export default class ObjectUnit {
  /**
   * object 转 params
   * @param {Object} obj
   * @return {string}
   */
  static toParams(obj: any): string {
    let params = '';
    for (const key in obj) {
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
   */
  static toFormData(obj: any): FormData {
    const formData = new FormData();
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        formData.append(key, obj[key]);
      }
    }
    return formData;
  }
}
