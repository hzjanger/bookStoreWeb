import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {User} from "../../../entity/user";
import {LocalStorageInfo} from "../../../utils/LocalStorageInfo";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  login: boolean = false;

  search = new FormControl('');

  /**
   * 用户信息
   */
  userInfo: User;
  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    //获取存储在localStorage中的用户信息
    this.userInfo = LocalStorageInfo.userInfo;
  }

  /**
   * 注销
   */
  quitLogin() {
    this.userService.quitLogin();
  }

  /**
   * 搜索
   */
  searchBook() {
    console.log('anxiale');
    this.router.navigate(['/search'], {
      queryParams: {
        searchValue: this.search.value
      }
    })

  }



}
