import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BookCollection} from '../entity/book-collection';
import {catchError, retry} from 'rxjs/operators';
import {MyError} from '../entity/error';

@Injectable({
  providedIn: 'root'
})
export class BookCollectionService {

  url = '/bookshop/bookCollection';

  constructor(private http: HttpClient) { }

  /**
   * 用户添加收藏
   * @param bookCollection
   */
  saveCollection(bookCollection: BookCollection): Observable<BookCollection> {
    return this.http.post<BookCollection>(this.url + `/addBookCollection`, bookCollection)
      .pipe(
        retry(3),
        catchError(new MyError().handleError)
      );
  }

  deleteByUserIdAndISBN(bookCollection: BookCollection) {
    return this.http.post(this.url + `/deleteByUserIdAndISBN`, bookCollection);

  }

  /**
   * 查找用户收藏的书籍
   * @param bookCollection
   */
  findByUserIdAndISBN(userId: number, isbn: string): Observable<BookCollection> {
    let bookCollection = new BookCollection();
    bookCollection.user_id = userId;
    bookCollection.isbn = isbn;
    return this.http.post<BookCollection>(this.url + `/findByUserIdAndISBN`, bookCollection);
  }

  /**
   * 查找用户收藏的书籍
   */
  findCollectionBook(book_status_type: string, userId: number) {
    return this.http.post(this.url + `/findCollectionBook`, {book_status_type: book_status_type, user_id: userId});
  }
}
