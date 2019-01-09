import { Component, OnInit } from '@angular/core';
import {EditorConfig} from '../../editor/model/editor-config';
import {MatDialog, MatSnackBar} from '@angular/material';
import {NoteinfoDailogComponent} from './noteinfo-dailog/noteinfo-dailog.component';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {BookService} from '../../service/book.service';
import {Book} from '../../entity/book';
import {BookNote} from '../../entity/book-note';
import {BookNoteService} from '../../service/book-note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {


  //笔记的标题
  title = '';
  //存贮书籍信息
  bookInfo: Book;
  //editor的配置
  conf = new EditorConfig();
  //用户输入的Markdown文本
  markdown = '';
  //书籍的主键
  isbn = '';
  //笔记的id
  nodeId: number;
  saveType: string = '';
  //根据用户输入的Markdown文本生成的html代码
  markdownHtml: string = '';

  //存储用户收藏笔记的信息
  bookNote: BookNote = new BookNote();

  constructor(private dialog: MatDialog,
              private activateRoute: ActivatedRoute,
              private bookService: BookService,
              private bookNoteService: BookNoteService,
              private router: Router,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.activateRoute.queryParams
      .subscribe((params: Params) => {
        //获取书籍的主键
        this.isbn = params['isbn'];
        this.saveType = params['type'];
        if (this.saveType != 'add') {
          this.nodeId = params['type'];
          this.findUserNote();
        }
        this.findBook();

      });

    // this.conf.previewing()

  }

  /**
   * 通过书籍的isbn查找书籍
   */
  findBook() {
    this.bookService.findOneBook(this.isbn)
      .subscribe((data: Book) => {
        this.bookInfo = data;
        console.log(this.bookInfo);
      })
  }


  /**
   * 同步属性内容, 用户写的markdown笔记
   * @param str
   */
  syncModel(str): void {
    this.markdown = str;
  }


  /**
   * 同步笔记内容, 更具用户写的文档, 生成的html代码
   * @param value
   */
  setNoteHtml(value) {
    this.markdownHtml = value;
  }

  /**
   * 存储到数据库的之前设置下存储的html文档
   */
  getNoteHtml() {
    return '<div id="hzj-editormd-preview" class="editormd-preview" style="display: block; width: 100%;">' + this.markdownHtml + '</div>';
  }

  /**
   * 点击保存笔记
   */
  saveNote() {
    const dialogRef = this.dialog.open(NoteinfoDailogComponent, {
      width: '45%',
      data: {
        bookName: this.bookInfo.book_name,
        bookNote: this.bookNote
      }
    });
    dialogRef.afterClosed()
      .subscribe(data => {
        if (data) {
          this.bookNote.begain_page = +data.begin_page;
          this.bookNote.book_chapter = data.book_chapter;
          this.bookNote.end_page = +data.end_page;
          this.bookNote.user_id = +localStorage.getItem('userId');
          this.bookNote.isbn = this.isbn;
          this.bookNote.note_value = this.markdown;
          this.bookNote.note_title = this.title;
          this.bookNote.createTime = new Date();
          this.bookNote.noteHtml = this.getNoteHtml();
          if (this.saveType === 'add') {
            this.bookNoteService.saveNote(this.bookNote)
              .subscribe(data => {
                this.snackBar.open('保存成功', 'close', {
                  duration: 2000
                });
                this.router.navigate(['/personal']);
              })
          } else {

          }

        }
      });
  }

  /**
   * 查找用户的笔记
   */
  findUserNote() {
    let userNote = new BookNote();

    // bookNote.
    console.log(this.nodeId);
    console.log(typeof this.nodeId);
    this.bookNoteService.findNoteByNoteId(this.nodeId)
      .subscribe((data: BookNote) => {
        this.markdown = data.note_value;
        this.title = data.note_title;
        this.bookNote = data;
        console.log(this.bookNote);
      })
  }

}
