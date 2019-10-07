import { Component, OnInit } from '@angular/core';
import {User} from '../../../entity/user';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../service/user.service';
import {Router} from '@angular/router';
import {ImgUrl} from "../../../entity/const/consts";
import {Result} from "../../../entity/comment/Result";
import {ResultCode} from "../../../entity/comment/ResultCode";
import {MatSnackBar} from "@angular/material";

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

  registerGroup: FormGroup;
  cc: number = 1;



  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.registerGroup = this.fb.group({
      nickName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      code: [null, Validators.required],
      imgUrl: [ImgUrl]
    })
  }

  /**
   * 注册
   */
  onSubmit() {
    if (this.registerGroup.valid) {
      this.userService.register(this.registerGroup.value)
        .subscribe((data: Result) => {
          this.snackBar.open(data.message, "关闭", {
            duration: 1000
          });
          if (data.success && data.code === ResultCode.registerSuccess) {
            this.router.navigate(['/login']);
          }

        })
    }
  }

  get nickName(): FormControl {
    return this.registerGroup.get('nickName') as FormControl;
  }

  get email(): FormControl {
    return this.registerGroup.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.registerGroup.get('password') as FormControl;
  }

  get code(): FormControl {
    return this.registerGroup.get('code') as FormControl;
  }

  /**
   * 获取昵称的错误信息
   */
  getNickNameError() {
    return this.nickName.hasError('required') ? '输入不能为空' : '';
  }

  /**
   * 获取邮箱的错误信息
   */
  getEmailError() {
    return this.email.hasError('required') ? '输入不能为空' :
       this.email.hasError('email') ? '邮箱格式错误':'';
  }

  /**
   * 获取密码的错误信息
   */
  getPasswordError() {
    return this.password.hasError('required') ? '输入不能为空' : '';
  }

  /**
   * 获取验证码的错误信息
   */
  getCodeError() {
    return this.code.hasError('required') ? '输入不能为空' : '';
  }
}
