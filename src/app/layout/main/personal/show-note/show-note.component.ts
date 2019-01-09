import { Component, OnInit } from '@angular/core';
import {BookNoteService} from '../../../../service/book-note.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ActivateRoutes} from '@angular/router/src/operators/activate_routes';
import {BookNote} from '../../../../entity/book-note';
import {DomSanitizer} from '@angular/platform-browser';
import {Book} from '../../../../entity/book';
import {BookService} from '../../../../service/book.service';

@Component({
  selector: 'app-show-note',
  templateUrl: './show-note.component.html',
  styleUrls: ['./show-note.component.scss']
})
export class ShowNoteComponent implements OnInit {

  //存储笔记信息
  bookNote: BookNote = new BookNote();
  //存储书籍信息
  book: Book = new Book();
  constructor(private bookNoteService: BookNoteService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private sanitizer: DomSanitizer,
              private bookService: BookService) { }
  ngOnInit() {
    this.activatedRoute.queryParams
      .subscribe((param: Params) => {
        //isbn=9781451578270&note_title=水电费水电费发斯蒂芬
        this.bookNote.isbn = param['isbn'];
        this.bookNote.noteId = param['noteId'];
        this.bookNote.user_id = +localStorage.getItem("userId");
        this.findOneNote();
      })
  }

  /**
   * 查找笔记信息, 通过笔记的主键查找
   */
  findOneNote() {
    this.bookNoteService.findNoteByNoteId(this.bookNote.noteId)
      .subscribe((data: BookNote) => {
        this.bookNote = data;
        this.findOneBook(this.bookNote.isbn);
        // this.bookNote.noteHtml = this.sanitizer.bypassSecurityTrustHtml(this.bookNote.noteHtml);
      })
  }

  /**
   * 查找书籍细信息
   * @param isbn
   */
  findOneBook(isbn: string) {
    this.bookService.findOneBook(isbn)
      .subscribe((data: Book) => {
        this.book = data;
      })
  }

  /**
   * 点击编辑, 跳转到Note编辑页面
   */
  editorNote() {
    this.router.navigate(['/note'],{
      queryParams: {
        isbn: this.bookNote.isbn,
        type: this.bookNote.noteId
      }
    })
  }


}
