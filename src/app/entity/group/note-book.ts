/**
 * 笔记和书籍的组合实体
 */
import {UserNote} from "../user-note";
import {Book} from "../book";

export class NoteBook {
  /**
   * 用户笔记信息
   */
  userNote: UserNote;
  /**
   * 书籍信息
   */
  book: Book;
}
