import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'dialog-layout',
  template: `
    <div mat-dialog-title>
      <div class="d-flex align-items-center justify-content-between mat-header">
        <span>{{dialogTitle}}</span>
        <div>
          <button mat-icon-button (click)="cancel()">
            <mat-icon svgIcon="baseline-close"></mat-icon>
          </button>
        </div>
      </div>
    </div>
    <mat-dialog-content>
      <ng-content></ng-content>
    </mat-dialog-content>

    <mat-dialog-actions class="d-flex justify-content-end">
      <button nz-button type="button" (click)="cancel()" class="mr-2">取消</button>
      <button nz-button *ngIf="isShowOk" (click)="handleOk()">确定</button>
    </mat-dialog-actions>
  `,
  styles: [`
    @import "../../../../../assets/scss/dialog.scss";
    button {
      outline: none;
    }
    
    button:focus {
      outline: none;
    }
  `]
})
export class DialogLayout implements OnInit{

  /**
   * 弹窗的标题
   */
  @Input() dialogTitle: string;

  @Input() isShowOk: boolean = true;

  /**
   * 点击取消事件
   */
  @Output() clickCancel: EventEmitter<void> = new EventEmitter<void>();

  /**
   * 点击确定事件
   */
  @Output() clickOk: EventEmitter<void> = new EventEmitter<void>();

  constructor() {

  }


  ngOnInit() {

  }

  /**
   * 点击取消
   */
  cancel() {
    this.clickCancel.emit();
  }

  /**
   * 点击确定
   */
  handleOk() {
    this.clickOk.emit();
  }

}
