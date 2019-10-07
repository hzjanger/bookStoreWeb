import { Component, OnInit } from '@angular/core';
import {BookCollectionService} from '../../../../service/book-collection.service';
import {User} from '../../../../entity/user';
import {LocalStorageInfo} from "../../../../utils/LocalStorageInfo";

@Component({
  selector: 'app-readed',
  templateUrl: './readed.component.html',
  styleUrls: ['./readed.component.scss']
})
export class ReadedComponent implements OnInit {

  bookInfo: any;

  constructor(private bookCollectionService: BookCollectionService) {
  }



  ngOnInit() {
    this.getCollection();
  }


  getCollection() {
    this.bookCollectionService.findCollectionBook("读过", LocalStorageInfo.userInfo.user_id)
      .subscribe((data: User[]) => {
        if (data.length != 0) {
          this.bookInfo = data[0].bookList;
        }
      });
  }

}
