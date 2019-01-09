import {Book} from './book';

export class User {
  /**
   * 用户id, 主键
   */
  user_id: number;
  /**
   * 用户账户
   */
  user_account: string;
  /**
   * 用户密码
   */
  user_password: string;
  /**
   * 昵称
   */
  user_name: string;
  /**
   * 图片路径
   */
  user_imgUrl: string;
  /**
   * 用户绑定邮箱
   */
  user_email: string;
  /**
   * 激活验证码
   */
  code_url: string;
  /**
   * 登录验证码
   */
  email_login: string;
  /**
   * 用户激活状态
   */
  activated: number;

  bookList: Book[];




}
