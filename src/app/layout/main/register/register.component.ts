import { Component, OnInit } from '@angular/core';
import {User} from '../../../entity/user';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../../../service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User = new User();

  //注册表单控件
  register = new FormGroup({
    userAccount: new FormControl(''),
    password: new FormControl(''),
    userName: new FormControl(''),
    verificationCode: new FormControl(''),
  });

  cc: number = 1;



  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    // console.log(this.user.activated)
  }

  onSubmit() {
    this.user.user_account = this.register.value.userAccount;
    this.user.user_password = this.register.value.password;
    this.user.user_name = this.register.value.userName;
    console.log(this.user);
    this.userService.register(this.user)
      .subscribe(data => {
        console.log(data);
        if (data) {
          this.router.navigate(['/login']);
        } else {
          alert('注册失败');
        }
      })
  }


}
