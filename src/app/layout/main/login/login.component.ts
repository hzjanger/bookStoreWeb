import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../service/user.service';
import {User} from '../../../entity/user';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Result} from "../../../entity/comment/Result";
import {ResultCode} from "../../../entity/comment/ResultCode";
import {MatSnackBar} from "@angular/material";
import {LocalStorageInfo} from "../../../utils/LocalStorageInfo";

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

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

  /**
   * 登录表动控件
   */
  loginGroup: FormGroup;

  ngOnInit() {
    this.loginGroup = this.fb.group({
      account: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });
  }

  /**
   * 登录
   */
  onSubmit() {
    if (this.loginGroup.valid) {
      this.userService.login(this.loginGroup.value)
        .subscribe((data: Result) => {
          if (data.success && data.code === ResultCode.loginSuccess) {
            //将用户的信息保存在localStorage中
            LocalStorageInfo.userInfo = data.data;
            this.snackBar.open('登录成功', '关闭', {
              duration: 1000
            });
            this.router.navigate(['/']);
          } else {
            this.snackBar.open(data.message, "关闭", {
              duration: 1000
            });
          }
        });
    }
  }

  /**
   * 用户密码的表单控件
   */
  get password(): FormControl {
    return this.loginGroup.get('password') as FormControl;
  }

  /**
   * 用户账户的表单控件
   */
  get account(): FormControl {
    return this.loginGroup.get('account') as FormControl;
  }

  /**
   * 密码输入的错误信息
   */
  getPasswordError(): string {
    return this.password.hasError('required') ? '输入不能为空' : '';
  }

  /**
   * 账户输入的错误信息
   */
  getAccountError(): string {
    return this.account.hasError('required') ? '输入不能为空' :
      this.account.hasError('email') ? '账户的格式错误': '';
  }

}
