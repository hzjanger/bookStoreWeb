import {Book} from './book';

export class BookCollection {
  /**
   * 书籍主键
   */
  isbn: string;
  /**
   * 作者主键
   */
  user_id: number;
  /**
   * 读者状态, 想读\在读\读过
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

  /**
   * 收藏书籍的信息
   */
  book: Book;

}
