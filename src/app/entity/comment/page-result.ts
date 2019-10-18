export class PageResult<T> {
  /**
   * 分页数据
   */
  rows: T[];
  /**
   * 总页数
   */
  total: number;
}
