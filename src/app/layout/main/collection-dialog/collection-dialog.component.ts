import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {BookCollection} from '../../../entity/book-collection';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-collection-dialog',
  templateUrl: './collection-dialog.component.html',
  styleUrls: ['./collection-dialog.component.scss']
})
export class CollectionDialogComponent implements OnInit {

  //存储用户收藏书籍信息
  bookCollectionInfo: BookCollection = new BookCollection();
  command:FormControl =  new FormControl('');
  //星级对应的内容, 一共五个档次, 很差\极差\还行\推荐\力荐
  rateValue: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef: MatDialogRef<CollectionDialogComponent>,
              public snackBar: MatSnackBar) {
    this.bookCollectionInfo.isbn = data.isbn;
    this.bookCollectionInfo.user_id = +localStorage.getItem('userId');
    this.bookCollectionInfo.book_status_type = data.collectionType;
    this.bookCollectionInfo.short_note = data.short_command;
    this.bookCollectionInfo.command_gradue = data.command_grade;
    //设置简短评价中的内容
    this.command.setValue(this.bookCollectionInfo.short_note);
    console.log(this.data);
  }

  ngOnInit() {
  }

  /**
   * 鼠标移过星级评价， 显示相应的内容
   * @param event
   */
  hoverRate(event): void {
    switch (event) {
      case 1:
        this.rateValue = '很差';
        break;
      case 2:
        this.rateValue = '极差';
        break;
      case 3:
        this.rateValue = '还行';
        break;
      case 4:
        this.rateValue = '推荐';
        break;
      case 5:
        this.rateValue = '力荐';
        break;
    }
  }


  //鼠标移开设置星级部分
  resetCurrentRate() {
    this.hoverRate(this.bookCollectionInfo.command_gradue);
  }

  //点击想读、在读、读过选项， 改变读者收藏书籍的状态
  changeChoice(choiceValue: any) {
    this.bookCollectionInfo.book_status_type = choiceValue.value;
  }

  //点击保存按钮
  saveCollection() {
    this.bookCollectionInfo.command_time = new Date();
    this.bookCollectionInfo.short_note = this.command.value;
    this.dialogRef.close(this.bookCollectionInfo);
  }

  //点击关闭按钮
  closeDialog() {
    this.dialogRef.close();
  }

}
