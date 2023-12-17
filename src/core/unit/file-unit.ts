/**
 * File Unit
 */
export default class FileUnit {
  /**
   * toBase64
   * @param {File} file
   * @return {Promise<string>}
   */
  static toBase64(file: File): Promise<unknown> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
    });
  }
}
