import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../entity/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  bookUrl = `/bookshop/book`;

  constructor(private http: HttpClient) { }


  /**
   * 搜索书籍
   * @param bookName
   */
  searchBook(bookName: string): Observable<any> {
    // if (searchValue.con)
    //将包含的+号变为%2B
    bookName = bookName.replace(/\+/g, '%2B');
    // searchValue = searchValue.trim();
    // let options = searchValue ? {params: new HttpParams().set("bookName", searchValue).toString()}: {};
    // console.log(options);
    // options = options.
    // const url = `/bookshop/book/searchBook?bookName=${searchValue}`;
    return this.http.get(`${this.bookUrl}/searchBook?bookName=${bookName}`);
  }

  /**
   * 查找书籍,通过主键查找
   * @param ISBN
   */
  findOneBook(ISBN: string): Observable<Book> {
    return this.http.get<Book>(`${this.bookUrl}/findOneBook/${ISBN}`);
  }

}
