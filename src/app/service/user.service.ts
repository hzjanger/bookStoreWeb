import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {User} from '../entity/user';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {Result} from "../entity/comment/Result";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = '/bookshop/user';

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };



  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  /**
   * 注册
   * @param register 注册信息
   */
  register(register: any): Observable<Result> {
    return this.http.post<Result>(`${this.url}/register`, register)
  }

  /**
   * 登录
   * @param user 用户的信息
   */
  login(user: User): Observable<Result> {
    return this.http.post<Result>(`${this.url}/login`, user);
  }

  /**
   * 退出登录
   */
  quitLogin() {
    //清除存储的数据信息
    localStorage.clear();
    //跳转到登录页面
    this.router.navigate(['/login']);

  }
}
