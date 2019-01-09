import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BookNote} from '../entity/book-note';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookNoteService {

  url: string = '/bookshop/note';
  constructor(private http: HttpClient) { }

  /**
   * 用户保存笔记
   * @param bookNote
   */
  saveNote(bookNote: BookNote) {
    return this.http.post(this.url + `/saveNote`, bookNote);
  }

  /**
   * 查找用户所有的笔记
   * @param userId
   */
  findUserNote(userId: number): Observable<BookNote[]>{
    return this.http.get<BookNote[]>(this.url + `/findUserNote?userId=${userId}`);
  }

  /**
   * 删除笔记
   * @param bookNote
   */
  deleteNote(bookNote: BookNote) {
    return this.http.post(this.url + `/deleteNote`, bookNote);
  }

  /**
   * 查找用户的一本笔记
   * @param bookNote
   */
  findOneNote(bookNote: BookNote) {
    return this.http.post(this.url + `/findOneNote`, bookNote)
  }

  /**
   * 更新书籍信息
   * @param bookNote
   */
  updateNote(bookNote: BookNote) {
    return this.http.post(this.url + `/updateNote`, bookNote);
  }

  /**
   * 通过收藏书籍的主键查找收藏的书籍信息
   * @param noteId
   */
  findNoteByNoteId(noteId: number) {
    return this.http.get(this.url + `/findNoteByNoteId?noteId=${noteId}`);
  }
}
