import { Component, OnInit } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute, Params} from '@angular/router';
import {BookService} from '../../../service/book.service';
import {Book} from '../../../entity/book';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  bookName: string = '';
  author: string = '';
  bookInfo: Book[] = [];
  constructor(config: NgbRatingConfig,
              private activateRoute: ActivatedRoute,
              private bookService: BookService) {
    config.max = 5;
    config.readonly = true;

  }

  ngOnInit() {
    this.activateRoute.queryParams
      .subscribe((params: Params) => {
        this.bookName = params['searchValue'];
        this.author = params['author'];
        console.log('进入了');
        if (this.bookName != undefined) {
          this.searchBook();
        }
      });
  }

  searchBook() {
    this.bookService.searchBook(this.bookName)
      .subscribe(data => {
        this.bookInfo = data;
      })
  }

}
