import {AfterViewInit, Attribute, Directive, EventEmitter, Input, Output} from '@angular/core';
import {EditorConfig} from './model/editor-config';

declare var editormd: any;
declare var $: any;

@Directive({
  selector: '[appEditorMd]'
})
export class EditorMdDirective implements AfterViewInit {
  @Input() editormdConfig: EditorConfig; // 配置选项
  // 发射器, markdown 文本
  @Output() onEditorChange: EventEmitter<string> = new EventEmitter<string>();

  // 发射器, markdown html文本
  @Output() editorHtml: EventEmitter<String> = new EventEmitter<string>();
  editor: any; // editormd编辑器

  constructor(@Attribute('id') private id: string) {
  }

  ngAfterViewInit(): void {

    //可以调用editor中的方法
    this.editor = editormd(this.id, this.editormdConfig); // 创建编辑器

    const out = this.onEditorChange;
    const outhtml = this.editorHtml;
    const textarea = $('#' + this.id + ' :first'); // 获取textarea元素
    const htmlarea = $('.editormd-preview');

    // 当编辑器内容改变时，触发textarea的change事件
    this.editor.on('change', function () {
      // console.log(this.editor.getHTML());
      // console.log(htmlarea.html());
      out.emit(textarea.val());
      outhtml.emit(htmlarea.html());

    });





  }
}
