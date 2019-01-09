import {BookTag} from './booktag';

export class Book {
  /**
   * 书名
   */
  book_name: string;
  /**
   * 书籍图片路径
   */
  book_img: string;
  /**
   * 主键, 唯一标识
   */
  isbn: string;
  /**
   * 书籍内容简介
   */
  book_introduction: string;
  /**
   * 作者简介
   */
  author_introduction: string;
  /**
   * 书籍目录
   */
  book_direction: string;
  /**
   * 书籍作者
   */
  book_author: string;
  /**
   * 书籍出版社
   */
  book_press:string;
  /**
   * 书籍装帧类型
   */
  book_binding: string;
  /**
   * 书籍译者
   */
  book_translator: string;
  /**
   * 出版年
   */
  publisher_time: string;
  /**
   * 书籍总页数
   */
  book_page: number;
  /**
   * 书籍价格
   */
  book_prices: number;

  /**
   * 一本书对应多个标签
   */

  /**
   * 书籍评价等级
   */
  grade: number;
  bookTagList: BookTag[];
}
