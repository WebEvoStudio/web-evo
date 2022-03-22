import Request from '../unit/request';

/**
 * 文章相关请求
 * @author city-hunter
 * @email dongjun1997@outlook.com
 * @property {function} search - 搜索博客
 */
export default class BlogRequests {
  /**
   * 获取文章列表
   * @param {string} query
   * @return {any}
   */
  static search = (query: string) => new Request().get('api/blogs', {query});
}
