import { Component, OnInit } from '@angular/core';
import {Book} from '../../../../entity/book';
import {BookService} from '../../../../service/book.service';
import {MatSnackBar} from '@angular/material';
import {MessageServiceService} from '../../../../service/message-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-manage-list',
  templateUrl: './manage-list.component.html',
  styleUrls: ['./manage-list.component.scss']
})
export class ManageListComponent implements OnInit {

  bookInfo: Book[];

  constructor(private bookService: BookService,
              private snackBar: MatSnackBar,
              private messageService: MessageServiceService,
              private router: Router) {
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

  /**
   * 点击更改书籍, 跳转到更改页面
   * @param book
   */
  updateBook(book) {
    this.messageService.sendMessage(book);
    this.router.navigate(['/admin/addBook'], {
      queryParams: {
        opty: 'up'
      }
    });


  }

}
