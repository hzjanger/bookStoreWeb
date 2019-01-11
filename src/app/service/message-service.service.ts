import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  message: any;

  constructor() { }

  /**
   * 得到发送的消息
   */
  getMessage() {
    return this.message;
  }

  /**
   * 其他组件发送的消息
   * @param message
   */
  sendMessage(message) {
    this.message = message;
  }


  /**
   * 清理消息
   */
  clearMessage() {
    this.message = undefined;
  }
}
