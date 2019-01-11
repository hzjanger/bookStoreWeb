import { Component, OnInit } from '@angular/core';
import {FileUploader} from 'ng2-file-upload';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';
import {BookService} from '../../../../service/book.service';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {Book} from '../../../../entity/book';
import {MessageServiceService} from '../../../../service/message-service.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent implements OnInit {

  private uploader: FileUploader = new FileUploader({
    url: '/bookshop/book/uploadClient',
    method: 'POST',
    itemAlias: 'file'
  });

  bookInfoForm = this.fb.group({
    bookname: ['', Validators.required],
    author: [''],
    press: [''],
    translator: [''],
    page: [''],
    publisher_time: [''],
    binding: [''],
    isbn: [''],
    prices: [''],
    book_introduction: [''],
    author_introduction: [''],
    book_direction: [''],
    imgurl: [''],
    type: ['']

  });

  imgsrc: string = 'https://img3.doubanio.com/view/subject/l/public/s29767862.jpg';

  constructor(private fb: FormBuilder,
              private http: HttpClient,
              public domSanizer: DomSanitizer,
              private bookService: BookService,
              private snackBar: MatSnackBar,
              private router: Router,
              private messageService: MessageServiceService) { }

  ngOnInit() {
    console.log('从管理界面得到的消息');
    console.log(this.messageService.getMessage())

  }

  saveBook() {
    let book = new Book();
    book.book_name = this.bookInfoForm.value.bookname;
    book.isbn = this.bookInfoForm.value.isbn;
    book.book_introduction = this.bookInfoForm.value.book_introduction;
    book.book_author = this.bookInfoForm.value.author;
    book.author_introduction = this.bookInfoForm.value.author_introduction;
    book.book_press = this.bookInfoForm.value.press;
    book.book_binding = this.bookInfoForm.value.binding;
    book.book_translator = this.bookInfoForm.value.translator;
    book.publisher_time = this.bookInfoForm.value.publisher_time;
    book.book_page = this.bookInfoForm.value.page;
    book.book_prices = this.bookInfoForm.value.prices;
    book.book_direction = this.bookInfoForm.value.book_direction;
    book.grade = 0;
    let tempBookService = this.bookService;
    let reg = /doubanio.com/;
    let route = this.router;
    if (reg.test(this.imgsrc)) {
      console.log("是豆瓣网址");
      book.book_img = this.imgsrc;
      tempBookService.addOneBOok(book)
        .subscribe(data => {
          this.snackBar.open('添加成功', 'close', {
            duration: 2000
          });
          this.router.navigate(['/admin']);
        });
    } else {
      console.log("不是豆瓣网址");
      this.uploader.queue[0].onSuccess = function (response, status, headers) {
        if (status == 200) {
          book.book_img = response;
          console.log(book.book_img);
          tempBookService.addOneBOok(book)
            .subscribe(data => {
              this.snackBar.open('添加成功', 'close', {
                duration: 2000
              });
              route.navigate(['/admin']);
            });
        } else {
          alert('保存失败');
        }
        return response;
      };
      this.uploader.queue[0].upload();
    }
    console.log(book.book_img);
  }

  fileChange(event) {
    let fi = event.srcElement.files[0];// 获取图片这里只操作一张图片
    this.imgsrc = window.URL.createObjectURL(fi); // 获取上传的图片临时路径
  }

}
