import { Component, OnInit } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //新书信息
  newBookInfoes = [
    {imgurl: 'https://img3.doubanio.com/view/subject/m/public/s29927164.jpg', bookName: '一定有人在祈祷着', author: '[日]山田宗树'},
    {imgurl: 'https://img1.doubanio.com/view/subject/m/public/s29922928.jpg', bookName: '海上明信片', author: '[英] 维多利亚·希斯洛普'},
    {imgurl: 'https://img3.doubanio.com/view/subject/m/public/s29954495.jpg', bookName: '一想到还有95%的问题留给人类，我就放心了', author: '【巴拿马】豪尔赫•陈 / [美] 丹尼尔·凯斯'},
    {imgurl: 'https://img3.doubanio.com/view/subject/m/public/s29923715.jpg', bookName: '世界观（原书第2版）', author: '[美]理查德·德威特'},
    {imgurl: 'https://img3.doubanio.com/view/subject/m/public/s29923802.jpg', bookName: '一定有人在祈祷着', author: '[日]山田宗树'},
    {imgurl: 'https://img3.doubanio.com/view/subject/m/public/s29958142.jpg', bookName: '一定有人在祈祷着', author: '[日]山田宗树'},
    {imgurl: 'https://img3.doubanio.com/view/subject/m/public/s29905903.jpg', bookName: '一定有人在祈祷着', author: '[日]山田宗树'},
    {imgurl: 'https://img1.doubanio.com/view/subject/m/public/s29960267.jpg', bookName: '一定有人在祈祷着', author: '[日]山田宗树'},
  ];
  //最受关注的书籍信息
  focusOnBookInfoes = [
    {imgUrl: 'https://img3.doubanio.com/view/subject/m/public/s29930566.jpg', bookName: '4321', rate: 8.8, author: '[美] 保罗·奥斯特', type: '小说 / 美国文学'},
    {imgUrl: 'https://img3.doubanio.com/view/subject/m/public/s29930566.jpg', bookName: '4321', rate: 8.8, author: '[美] 保罗·奥斯特', type: '小说 / 美国文学'},
    {imgUrl: 'https://img3.doubanio.com/view/subject/m/public/s29930566.jpg', bookName: '4321', rate: 8.8, author: '[美] 保罗·奥斯特', type: '小说 / 美国文学'},
    {imgUrl: 'https://img3.doubanio.com/view/subject/m/public/s29930566.jpg', bookName: '4321', rate: 8.8, author: '[美] 保罗·奥斯特', type: '小说 / 美国文学'},
    {imgUrl: 'https://img3.doubanio.com/view/subject/m/public/s29930566.jpg', bookName: '4321', rate: 8.8, author: '[美] 保罗·奥斯特', type: '小说 / 美国文学'},
    {imgUrl: 'https://img3.doubanio.com/view/subject/m/public/s29930566.jpg', bookName: '4321', rate: 8.8, author: '[美] 保罗·奥斯特', type: '小说 / 美国文学'},
    {imgUrl: 'https://img3.doubanio.com/view/subject/m/public/s29930566.jpg', bookName: '4321', rate: 8.8, author: '[美] 保罗·奥斯特', type: '小说 / 美国文学'},
    {imgUrl: 'https://img3.doubanio.com/view/subject/m/public/s29930566.jpg', bookName: '4321', rate: 8.8, author: '[美] 保罗·奥斯特', type: '小说 / 美国文学'},
    {imgUrl: 'https://img3.doubanio.com/view/subject/m/public/s29930566.jpg', bookName: '4321', rate: 8.8, author: '[美] 保罗·奥斯特', type: '小说 / 美国文学'},
    {imgUrl: 'https://img3.doubanio.com/view/subject/m/public/s29930566.jpg', bookName: '4321', rate: 8.8, author: '[美] 保罗·奥斯特', type: '小说 / 美国文学'},
  ];
  //电子图书
  eBookInfoes = [
    {imgurl: 'https://img3.doubanio.com/view/subject/m/public/s29927164.jpg', bookName: '一定有人在祈祷着', price: 33.80},
    {imgurl: 'https://img1.doubanio.com/view/subject/m/public/s29922928.jpg', bookName: '海上明信片', price: 33.80},
    {imgurl: 'https://img3.doubanio.com/view/subject/m/public/s29954495.jpg', bookName: '一想到还有95%的问题留给人类，我就放心了', price: 33.80},
    {imgurl: 'https://img3.doubanio.com/view/subject/m/public/s29923715.jpg', bookName: '世界观（原书第2版）', price: 33.80},
    {imgurl: 'https://img3.doubanio.com/view/subject/m/public/s29923802.jpg', bookName: '一定有人在祈祷着', price: 33.80},
    {imgurl: 'https://img3.doubanio.com/view/subject/m/public/s29958142.jpg', bookName: '一定有人在祈祷着', price: 33.80},
    {imgurl: 'https://img3.doubanio.com/view/subject/m/public/s29905903.jpg', bookName: '一定有人在祈祷着', price: 33.80},
    {imgurl: 'https://img1.doubanio.com/view/subject/m/public/s29960267.jpg', bookName: '一定有人在祈祷着', price: 33.80},
  ];
  //标签
  tages = [
    {tag_title: '文学', tag_value: ['小说', '随笔', '日本文学', '散文', '诗歌', '童话', '名著', '港台', '更多']},
    {tag_title: '流行', tag_value: ['漫画', '推理', '绘本', '青春', '科幻', '言情', '玄幻', '武侠', '更多']},
    {tag_title: '文化', tag_value: ['历史', '哲学', '传记', '设计', '建筑', '电影', '回忆录', '音乐', '更多']},
    {tag_title: '生活', tag_value: ['旅行', '励志', '教育', '职场', '美食', '灵修', '健康', '家居', '更多']},
    {tag_title: '经营', tag_value: ['经济学', '管理', '商业', '金融', '营销', '理财', '股票', '企业史', '更多']},
    {tag_title: '科技', tag_value: ['科普', '互联网', '编程', '交互设计', '算法', '通信', '神经网络', '更多']},

  ];
  currentRate: number = 3.75;


  constructor(config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit() {
  }

}
