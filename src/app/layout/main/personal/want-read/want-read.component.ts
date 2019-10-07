import { Component, OnInit } from '@angular/core';
import {BookCollectionService} from '../../../../service/book-collection.service';
import {User} from '../../../../entity/user';
import {LocalStorageInfo} from "../../../../utils/LocalStorageInfo";

@Component({
  selector: 'app-want-read',
  templateUrl: './want-read.component.html',
  styleUrls: ['./want-read.component.scss']
})
export class WantReadComponent implements OnInit {

  bookInfo: any;

  constructor(private bookCollectionService: BookCollectionService) {
  }



  ngOnInit() {
    this.getCollection();
  }


  getCollection() {
    this.bookCollectionService.findCollectionBook("想读", LocalStorageInfo.userInfo.user_id)
      .subscribe((data: User[]) => {
        if (data.length != 0) {
          this.bookInfo = data[0].bookList;
        }
      })
  }

}
