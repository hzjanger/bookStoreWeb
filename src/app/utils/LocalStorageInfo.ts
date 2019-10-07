import {User} from "../entity/user";

export class LocalStorageInfo {
  static get userInfo(): User {
    return JSON.parse(localStorage.getItem('user'));
  }

  static set userInfo(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

}
