import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-noteinfo-dailog',
  templateUrl: './noteinfo-dailog.component.html',
  styleUrls: ['./noteinfo-dailog.component.scss']
})
export class NoteinfoDailogComponent implements OnInit {

  bookName: '';

  bookNoteFrom = new FormGroup({
    begin_page: new FormControl(''),
    end_page: new FormControl(''),
    book_chapter: new FormControl('')
  });

  //开始页数输入框中初始值
  beginPage: number;
  //截止页数输入框中的初始值
  endPage: number;
  //
  bookChapter: string = '';


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef: MatDialogRef<NoteinfoDailogComponent>) { }

  ngOnInit() {

    this.bookName = this.data.bookName;
    if (this.data.bookNote) {
      /*
      begain_page: 1
book_chapter: "入门章节"
createTime: "2019-01-08T13:13:29.000+0000"
end_page: 11
isbn: "9781451578270"
noteHtml: "<div id="hzj-editormd-preview" class="editormd-preview" style="display: block; width: 100%;"><div class="markdown-body editormd-preview-container" previewcontainer="true" style="padding: 20px;"><h3 id="h3--java-"><a name="我的第一个 JAVA 程序" class="reference-link"></a><span class="header-link octicon octicon-link"></span>我的第一个 JAVA 程序</h3><p>我的第一个 JAVA 程序</p>↵<pre class="prettyprint linenums prettyprinted" style=""><ol class="linenums"><li class="L0"><code class="lang-java"><span class="kwd">public</span><span class="pln"> </span><span class="kwd">class</span><span class="pln"> </span><span class="typ">HelloWorld</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L1"><code class="lang-java"><span class="pln">    </span><span class="kwd">public</span><span class="pln"> </span><span class="kwd">static</span><span class="pln"> </span><span class="kwd">void</span><span class="pln"> main</span><span class="pun">(</span><span class="typ">String</span><span class="pun">[]</span><span class="pln"> args</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L2"><code class="lang-java"><span class="pln">        </span><span class="typ">System</span><span class="pun">.</span><span class="pln">out</span><span class="pun">.</span><span class="pln">println</span><span class="pun">(</span><span class="str">"Hello World"</span><span class="pun">);</span></code></li><li class="L3"><code class="lang-java"><span class="pln">    </span><span class="pun">}</span></code></li><li class="L4"><code class="lang-java"><span class="pun">}</span></code></li></ol></pre>↵<blockquote>↵<p>注：String args[] 与 String[] args 都可以执行，但推荐使用 String[] args，这样可以避免歧义和误读。</p>↵</blockquote>↵<p>运行以上实例，输出结果如下：</p>↵<pre class="prettyprint linenums prettyprinted" style=""><ol class="linenums"><li class="L0"><code class="lang-java"><span class="pln">$ javac </span><span class="typ">HelloWorld</span><span class="pun">.</span><span class="pln">java</span></code></li><li class="L1"><code class="lang-java"><span class="pln">$ java </span><span class="typ">HelloWorld</span></code></li><li class="L2"><code class="lang-java"><span class="typ">Hello</span><span class="pln"> </span><span class="typ">World</span></code></li></ol></pre>↵</div></div>"
noteId: 1
note_title: "入门笔记"
note_value: "### 我的第一个 JAVA 程序↵我的第一个 JAVA 程序↵```java↵public class HelloWorld {↵    public static void main(String[] args) {↵        System.out.println("Hello World");↵    }↵}↵```↵> 注：String args[] 与 String[] args 都可以执行，但推荐使用 String[] args，这样可以避免歧义和误读。↵↵运行以上实例，输出结果如下：↵```java↵$ javac HelloWorld.java↵$ java HelloWorld↵Hello World↵```↵"
user_id: 8
       */
      this.beginPage = this.data.bookNote.begain_page;
      this.endPage = this.data.bookNote.end_page;
      this.bookChapter = this.data.bookNote.book_chapter;
      this.bookNoteFrom.value.begin_page = this.data.begain_page;
      this.bookNoteFrom.value.end_page = this.data.end_page;
      this.bookNoteFrom.value.book_chapter = this.data.book_chapter;
    } else {

    }
  }

  saveNote() {
    this.dialogRef.close({"beginPage": this.beginPage, "endPage": this.endPage, "bookChapter": this.bookChapter})

  }
}
