import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';
import {BookService} from '../../../../service/book.service';
import {FileUploader} from 'ng2-file-upload';
import {Book} from '../../../../entity/book';
import {MatSnackBar} from '@angular/material';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {MessageServiceService} from '../../../../service/message-service.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({
    url: '/bookshop/book/uploadClient',
    method: 'POST',
    itemAlias: 'file'
  });


  crawlingUrl: FormControl = new FormControl('');

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

  operationType: string = '';

  imgsrc: string = 'https://img3.doubanio.com/view/subject/l/public/s29767862.jpg';

  constructor(private fb: FormBuilder,
              private http: HttpClient,
              public domSanizer: DomSanitizer,
              private bookService: BookService,
              private snackBar: MatSnackBar,
              private router: Router,
              private activateRoute: ActivatedRoute,
              private messageService: MessageServiceService) { }

  ngOnInit() {
    this.activateRoute.queryParams
      .subscribe((params: Params) => {
        this.operationType = params['opty'];
        console.log(this.operationType);
      });

    if (this.messageService.getMessage()) {
      console.log(this.messageService.getMessage())
      let book = this.messageService.getMessage();
      this.messageService.clearMessage();
      this.setBookInfoForm(book);
    }

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
    let operation = this.operationType;
    let tempBookService = this.bookService;
    let reg = /doubanio.com/;
    let route = this.router;
    if (reg.test(this.imgsrc)) {
      book.book_img = this.imgsrc;
      if (operation === 'add') {
        //是豆瓣网址
        tempBookService.addOneBOok(book)
          .subscribe(data => {
            this.snackBar.open('添加成功', 'close', {
              duration: 2000
            });
            this.router.navigate(['/admin']);
          });
      } else {
        tempBookService.updateBook(book)
          .subscribe(data => {
            this.snackBar.open('更新成功', 'close', {
              duration: 2000
            });
            this.router.navigate(['/admin']);
          });
      }
    } else {
      //用户自己上传的文件
      let snack = this.snackBar;
      this.uploader.queue[0].onSuccess = function (response, status, headers) {
        if (status == 200) {

          book.book_img = response;
          if (operation === 'add') {
            tempBookService.addOneBOok(book)
              .subscribe(data => {
                snack.open('添加成功', 'close', {
                  duration: 2000
                });
                route.navigate(['/admin']);
              });
          } else {
            tempBookService.updateBook(book)
              .subscribe(data => {
                snack.open('更新成功', 'close', {
                  duration: 2000
                });
                route.navigate(['/admin']);
              });
          }

        } else {
          alert('保存失败');
        }
        return response;
      };
      this.uploader.queue[0].upload();
    }
  }

  fileChange(event) {
    let fi = event.srcElement.files[0];// 获取图片这里只操作一张图片
    this.imgsrc = window.URL.createObjectURL(fi); // 获取上传的图片临时路径
  }


  setBookInfoForm(book: Book) {
    this.bookInfoForm.patchValue({
      bookname: book.book_name,
      author: book.book_author,
      press: book.book_press,
      translator: book.book_translator,
      page: book.book_page,
      publisher_time: book.publisher_time,
      binding: book.book_binding,
      isbn: book.isbn,
      prices: book.book_prices,
      book_introduction: book.book_introduction,
      author_introduction: book.author_introduction,
      book_direction: book.book_direction,
    });
    this.imgsrc = book.book_img;
  }

  crawlingOneBook() {
    this.bookService.crawlingOneBook(this.crawlingUrl.value)
      .subscribe((data: Book) => {
        this.setBookInfoForm(data);
      })
  }
}
