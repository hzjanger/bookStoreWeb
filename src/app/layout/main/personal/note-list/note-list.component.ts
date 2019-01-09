import { Component, OnInit } from '@angular/core';
import {BookNoteService} from '../../../../service/book-note.service';
import {BookNote} from '../../../../entity/book-note';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {

  //用户存储用户收藏书籍信息
  bookNotes: BookNote[];
  constructor(private bookNoteService: BookNoteService,
              private snackBar: MatSnackBar,
              private router: Router) { }



  ngOnInit() {
    this.findUserNote();
  }


  /**
   * 查找用户所有的笔记
   */
  findUserNote() {
    this.bookNoteService.findUserNote(+localStorage.getItem("userId"))
      .subscribe((data: BookNote[]) => {
        console.log(data);
        this.bookNotes = data;
      })
  }

  /**
   * 删除笔记
   * @param bookNote
   */
  deleteNote(bookNote: BookNote) {
    this.bookNoteService.deleteNote(bookNote)
      .subscribe(data => {
        this.findUserNote();
        this.snackBar.open('删除成功', 'close', {
          duration: 2000,
        });
      })
  }

  /**
   * 编辑笔记
   */
  editorNote(bookNote: BookNote) {
    console.log(bookNote.noteId);
    this.router.navigate(['/note'], {
      queryParams: {
        isbn: bookNote.isbn,
        type: bookNote.noteId
      }
    })

  }

  /**
   * 显示笔记
   */
  showNote(bookNote: BookNote) {
    console.log(bookNote.isbn);
    console.log(bookNote.note_title);
    this.router.navigate(['/shownote'], {
      queryParams: {
        isbn: bookNote.isbn,
        noteId: bookNote.noteId
      }
    })
  }





}
