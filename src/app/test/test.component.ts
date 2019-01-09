import { Component, OnInit } from '@angular/core';
import {EditorConfig} from '../editor/model/editor-config';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) { }
  htmltext: string = '<div id="hzj-editormd-preview" class="editormd-preview" style="display: block; width: 100%; top: 0px; height: 100%;"><div class="markdown-body editormd-preview-container" previewcontainer="true" style="padding: 20px;"><pre class="prettyprint linenums prettyprinted" style=""><ol class="linenums"><li class="L0"><code class="lang-java"><span class="pln">pubic </span><span class="kwd">static</span><span class="pln"> </span><span class="kwd">void</span><span class="pln"> main</span><span class="pun">(</span><span class="typ">String</span><span class="pun">[]</span><span class="pln"> args</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li class="L1"><code class="lang-java"><span class="pln">    </span><span class="typ">System</span><span class="pun">.</span><span class="pln">out</span><span class="pun">.</span><span class="pln">println</span><span class="pun">(</span><span class="str">"hello world"</span><span class="pun">);</span></code></li><li class="L2"><code class="lang-java"><span class="pun">}</span></code></li></ol></pre>\n' +
    '</div></div>';
  str: any;
  ngOnInit() {
    this.str = this.sanitizer.bypassSecurityTrustHtml(this.htmltext);
  }
}
