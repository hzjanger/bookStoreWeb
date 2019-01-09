import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../service/user.service';
import {User} from '../../../entity/user';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

export class ddd {
  id:number;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  constructor(private userService: UserService, private router: Router) { }


  login = new FormGroup({
    password: new FormControl(''),
    userAccount: new FormControl(''),
  });
  ngOnInit() {
  }



  caa: ddd;

  /**
   * 登录
   */
  onSubmit() {
    this.caa = new ddd();
    let c = new ddd();
    this.user.user_account = this.login.value.userAccount;
    this.user.user_password = this.login.value.password;
    this.userService.login(this.user)
      .subscribe(data => {
        if (data) {
          localStorage.setItem('userId', String(data));
          this.router.navigate(['/']);
        } else {
          alert('用户名或密码错误');
        }
      })
  }
}
