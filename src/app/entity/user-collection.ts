/**
 * 用户收藏书籍信息
 */
export class UserCollection {

  /**
   * 书籍主键
   */
  isbn: string;
  /**
   * 作者主键
   */
  user_id: number;
  /**
   * 读者状态, 想读\在读\读过三个状态
   */
  book_status_type: string;
  /**
   * 简短附注
   */
  short_note: string;
  /**
   * 评价星级
   */
  command_gradue: number;
  /**
   * 评价时间
   */
  command_time: Date;
}
