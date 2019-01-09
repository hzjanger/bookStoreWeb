import { Component, OnInit } from '@angular/core';
import {BookCollectionService} from '../../../../service/book-collection.service';
import {User} from '../../../../entity/user';
import {Router} from '@angular/router';
import {Book} from '../../../../entity/book';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.scss']
})
export class ReadingComponent implements OnInit {

  bookInfo: Book[];

  constructor(private bookCollectionService: BookCollectionService,
              private router: Router) {
  }



  ngOnInit() {
    this.getCollection();
  }


  getCollection() {
    this.bookCollectionService.findCollectionBook("在读", +localStorage.getItem("userId"))
      .subscribe((data: User[]) => {
        if (data.length != 0) {
          this.bookInfo = data[0].bookList;
        }
      })
  }


  /**
   * 添加笔记
   * @param index
   */
  writeNote(index) {
    this.router.navigate(['/note'], {
      queryParams: {
        isbn: this.bookInfo[index].isbn,
        type: 'add'
      }
    })
  }
}
