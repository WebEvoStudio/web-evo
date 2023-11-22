/**
 * String unit
 */
export default class StringUnit {
  /**
   * base64转File
   * @param {string} base64
   * @param {string} fileName
   * @return {File}
   */
  static toFile(base64: string, fileName: string): File {
    const arr = base64.split(',');
    if (arr.length === 0) {
      throw new Error('base64转file失败');
    }
    const mime = arr[0].match(/:(.*?);/)?.[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], fileName, {type: mime});
  }
}
export const isObjectId = (str: string) => {
  return /^[0-9a-fA-F]{24}$/.test(str);
};
