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

  bookNote: BookNote = new BookNote();
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
        this.bookNote.note_title = param['note_title'];
        this.bookNote.user_id = +localStorage.getItem("userId");
        this.findOneNote();
      })
  }

  //用户id， isbn， 文字标题
  findOneNote() {
    this.bookNoteService.findOneNote(this.bookNote)
      .subscribe((data: BookNote) => {
        this.bookNote = data;
        this.findOneBook(this.bookNote.isbn);
        // this.bookNote.noteHtml = this.sanitizer.bypassSecurityTrustHtml(this.bookNote.noteHtml);
      })
  }

  findOneBook(isbn: string) {
    this.bookService.findOneBook(isbn)
      .subscribe((data: Book) => {
        this.book = data;
      })
  }


}
