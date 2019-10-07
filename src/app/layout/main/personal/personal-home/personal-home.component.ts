import { Component, OnInit } from '@angular/core';
import {User} from "../../../../entity/user";
import {LocalStorageInfo} from "../../../../utils/LocalStorageInfo";

@Component({
  selector: 'app-personal-home',
  templateUrl: './personal-home.component.html',
  styleUrls: ['./personal-home.component.scss']
})
export class PersonalHomeComponent implements OnInit {

  /**
   * 用户信息
   */
  userInfo: User;

  course_menu: any[] = [
    {icon: 'book', value: '想读', link: 'wantread'},
    {icon: 'book', value: '在读', link: 'reading'},
    {icon: 'book', value: '已读', link: 'readed'},
    {icon: 'edit', value: '笔记', link: 'note'},
    // {icon: 'edit', value: '笔记', link: 'notebook'},
    // {icon: 'help', value: '猿问', link: 'problem'},
    // {icon: 'library-book', value: '文章', link: 'articles'},
  ];

  constructor() { }

  ngOnInit() {
    //获取存储的用户信息
    this.userInfo = LocalStorageInfo.userInfo;
  }

}
