import {Component, OnInit, ViewChild} from '@angular/core';
import {BookService} from '../../../../service/book.service';
import {Book} from '../../../../entity/book';
import {MatPaginator, MatSnackBar, MatTableDataSource} from '@angular/material';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {BookCollectionService} from '../../../../service/book-collection.service';
import {User} from '../../../../entity/user';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.scss']
})
export class DeleteBookComponent implements OnInit {



  bookInfo: Book[];

  constructor(private bookService: BookService,
              private snackBar: MatSnackBar) {
  }



  ngOnInit() {
    this.findAllBook();
  }

  /**
   * 查找书籍
   */
  findAllBook() {
    this.bookService.findAllBook()
      .subscribe((data: Book[]) => {
        this.bookInfo = data;
      })
  }

  /**
   * 删除书籍
   * @param book
   */
  deleteBook(book) {
    this.bookService.deleteBook(book.isbn)
      .subscribe((data) => {
        this.findAllBook();
        this.snackBar.open('删除成功', 'close', {
          duration: 2000
        })
        console.log(data);
      })
  }

}
