import {Component, Input, OnInit} from '@angular/core';
import {UserCollectionBookGroup} from "../../../../entity/group/user-collection-book-group";

@Component({
  selector: 'app-read-item',
  templateUrl: './read-item.component.html',
  styleUrls: ['./read-item.component.scss']
})
export class ReadItemComponent implements OnInit {

  /**
   * 收藏书籍信息
   */
  @Input() userCollection: UserCollectionBookGroup[];

  /**
   * 是否显示写笔记按钮,默认不显示
   */
  @Input() showWriteNote: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  /**
   * 添加笔记
   * @param isbn 书籍的ISBN
   */
  writeNote(isbn) {

  }

}
