import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  @Output() onSide = new EventEmitter<void>();
  @Output() onVoted = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  /**
   * 打开侧边栏
   */
  openSide() {
    this.onVoted.emit();

  }

}
