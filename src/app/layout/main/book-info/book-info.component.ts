import { Component, OnInit } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute, Data, ParamMap, Router} from '@angular/router';
import {BookService} from '../../../service/book.service';
import {Book} from '../../../entity/book';
import {MatDialog, MatSnackBar} from '@angular/material';
import {CollectionDialogComponent} from '../collection-dialog/collection-dialog.component';
import {BookCollection} from '../../../entity/book-collection';
import {BookCollectionService} from '../../../service/book-collection.service';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.scss'],
  providers: [NgbRatingConfig] // add NgbRatingConfig to the component providers
})
export class BookInfoComponent implements OnInit {

  //书籍主键
  isbn: string = '';
  //保存书籍信息
  bookInfo: Book = new Book();
  //书籍目录
  book_direction: string[] = [];
  //作者简介
  author_introduction: string[] = [];
  //书籍简介
  book_introduction: string[] = [];
  //书籍目录过多时，判断书籍目录是否显示更多,true： 显示更多， false: 显示一部分
  directoryShowMore: boolean = true;
  //书籍状态类型， 有三种状态，想读\在读\读过
  book_state_type: string = '';
  //读者对书籍的简短备注
  book_short_command: string = '';
  //读者对书籍的评价等级
  command_grade: number = 0;
  //读者收藏的时间
  command_time: Date;
  //判断用户是否收藏了这本书
  isCollection: boolean = false;

  // 用户收藏书籍信息存贮
  bookCollectionInfo: BookCollection = new BookCollection();

  //星级对应的内容, 一共五个档次, 很差\极差\还行\推荐\力荐
  rateValue: string = '';
  constructor(private route: ActivatedRoute,
              private router: Router,
              private bookService: BookService,
              private dialog: MatDialog,
              private bookCollectionService: BookCollectionService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        this.isbn = params.get('id');
        //查找书籍信息
        this.findOneBook();
        //查找用户是否收藏了这本书籍
        console.log("userId = " + localStorage.getItem("userId"));
        this.findCollection();
    });
  }

  //查找书籍
  findOneBook() {
    //通过书籍的主键进行查找
    this.bookService.findOneBook(this.isbn)
      .subscribe((data: Book) => {
        //得到书籍信息
        this.bookInfo = data;
        //设置书籍目录
        this.book_direction = this.bookInfo.book_direction.split('\n');
        //设置作者信息
        this.author_introduction = this.bookInfo.author_introduction.split('\n');
        //设置书籍简介
        this.book_introduction = this.bookInfo.book_introduction.split('\n');
        //判断书籍目录是否大于10行，如果大于10行， 则显示一部分
        if (this.book_direction.length > 10) {
          this.directoryShowMore = false;
        }
      });
  }

  //查找用户收藏的书籍
  findCollection() {
    this.bookCollectionService.findByUserIdAndISBN(+localStorage.getItem('userId'), this.isbn)
      .subscribe((data: BookCollection) => {
        if (data) {
          console.log(data);
          this.bookCollectionInfo = data;
          //标记显示收藏信息
          this.isCollection = true;
          //显示读者是读过、在读还是想读
          this.book_state_type = data.book_status_type;
          //设置读者的评价等级
          this.command_grade = data.command_gradue;
          //显示读者的短评
          this.book_short_command = data.short_note;
          //收藏时间
          this.command_time = data.command_time;
          //设置星级对应的内容,  很差\极差\还行\推荐\力荐
          this.setRateValue(this.bookCollectionInfo.command_gradue);
        } else {
          console.log('没有找到');
          this.isCollection = false;
          this.book_short_command = '';
        }
      });
  }


  //加入收藏
  openCollectionDialog(collectionType: string) {
    const dialogRef = this.dialog.open(CollectionDialogComponent, {
      width: '45%',
      data: {
        //收藏类型
        collectionType: collectionType,
        //书籍主键
        isbn: this.isbn,
        //评价等级
        command_grade: this.command_grade,
        //简短评论
        short_command: this.book_short_command
      }
    });
    //弹窗关闭是获取返回过来的数据
    dialogRef.afterClosed()
      .subscribe((result: BookCollection) => {
        if (result) {
          if (result.book_status_type === '想读') {
            result.command_gradue = 0;
          }
          this.bookCollectionService.saveCollection(result)
            .subscribe(data => {
              this.snackBar.open('收藏成功', 'close', {
                duration: 2000,
              });
              this.findCollection();
            });

        }
      });
  }

  /**
   * 点击修改收藏
   */
  updateBookCollection() {
    //打开弹窗
    const dialogRef = this.dialog.open(CollectionDialogComponent, {
      width: '45%',
      data: {
        //收藏类型
        collectionType: this.book_state_type,
        //书籍主键
        isbn: this.isbn,
        //评价等级
        command_grade: this.command_grade,
        //简短评论
        short_command: this.book_short_command
      }
    });
    //关闭弹窗之后，获取从弹窗返回过来的数据
    dialogRef.afterClosed()
      .subscribe((result: BookCollection) => {
        if (result) {
          if (result.book_status_type === '想读') {
            result.command_gradue = 0;
          }
          this.bookCollectionService.saveCollection(result)
            .subscribe(data => {
              this.snackBar.open('修改成功', 'close', {
                duration: 2000,
              });
              this.findCollection();

            });
        }
      });
  }

  /**
   * 删除收藏
   */
  deleteByUserIdAndISBN() {
    this.bookCollectionService.deleteByUserIdAndISBN(this.bookCollectionInfo)
      .subscribe(data => {
        this.snackBar.open('删除成功', 'close', {
          duration: 2000
        });
        this.findCollection();
      });
  }

  /**
   * 设置星级所对应的评价
   * @param event
   */
  setRateValue(event): void {
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
}
