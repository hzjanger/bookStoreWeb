import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../entity/book';
import {FileUploader, FileUploadModule} from 'ng2-file-upload';

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

  /**
   * 添加一本书
   * @param book
   */
  addOneBOok(book: Book) {
    return this.http.post(this.bookUrl + `/addOneBook`, book);
  }

  /**
   * 查找所有的书籍
   */
  findAllBook() {
    return this.http.get(this.bookUrl + `/findAllBook`)
  }

  /**
   * 删除书籍
   * @param isbn
   */
  deleteBook(isbn: String) {
    return this.http.get(this.bookUrl + `/deleteByISBN?isbn=${isbn}`)
  }

  /**
   * 更新书籍
   * @param book
   */
  updateBook(book: Book) {
    return this.http.post(this.bookUrl + `/updateBook`, book);
  }

  /**
   * 爬取豆瓣上的一本书籍
   * @param url
   */
  crawlingOneBook(url: string) {
    return this.http.get(this.bookUrl + `/crawlingOneBook?url=${url}`);
  }


  /**
   * 查找星级最大的10本书籍
   */
  findBookByGrade() {
    return this.http.get(this.bookUrl + `/findBookByGrade`);
  }

  /**
   * 查找最贵的8本书籍
   */
  orderByPrices() {
    return this.http.get(this.bookUrl + `/orderByPrices`);
  }

  /**
   * 按照书籍的页数进行排序
   * @return
   */
  orderByPage() {
    return this.http.get(this.bookUrl + `/orderByPage`);
  }

}
