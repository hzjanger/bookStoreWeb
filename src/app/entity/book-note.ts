export class BookNote {

  /**
   * 笔记的主键
   */
  noteId: number;
  /**
   * 用户主键
   */
  user_id: number;
  /**
   * 书籍主键
   */
  isbn: string;
  /**
   * 书籍开始页数
   */
  begain_page: number;

  /**
   * 结束页数
   */
  end_page: number;
  /**
   * 书籍章节
   */
  book_chapter: string;
  /**
   * 笔记内容
   */
  note_value: string;
  /**
   * 笔记标题
   */
  note_title: string;

  /**
   * 笔记创建时间
   */
  createTime: Date;

  /**
   *笔记的html代码
   */
  noteHtml: any;

}
