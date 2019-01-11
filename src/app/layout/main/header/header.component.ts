import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  login: boolean = false;

  search = new FormControl('');




  constructor(private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('userId')) {
      this.login = true;
    }

  }

  /**
   * 注销
   */
  loginout() {
    localStorage.removeItem('userId');
    this.login = false;
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
