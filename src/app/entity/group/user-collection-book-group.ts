import {Book} from "../book";
import {UserCollection} from "../user-collection";

/**
 * 用户收藏书籍组合实体
 */
export class UserCollectionBookGroup {
  /**
   * 书籍信息
   */
  book: Book;
  /**
   * 用户收藏书籍信息
   */
  userCollection: UserCollection;
}
