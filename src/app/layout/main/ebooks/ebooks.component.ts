import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ebooks',
  templateUrl: './ebooks.component.html',
  styleUrls: ['./ebooks.component.scss']
})
export class EbooksComponent implements OnInit {


  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
  }

  menus: string[] = ['小说', '文学', '人文社科', '经济管理学', '科技科普', '计算机与互联网', '成功励志', '生活', '少儿', '技术设计', '漫画绘本', '教育考试', '杂志'];
  // images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  images: string[] = [
    'https://img3.doubanio.com/view/ark_campaign_pic/large/public/6970.jpg',
    'https://img3.doubanio.com/view/ark_campaign_pic/large/public/6981.jpg',
    'https://img3.doubanio.com/view/ark_campaign_pic/large/public/6963.jpg',
    'https://img3.doubanio.com/view/ark_campaign_pic/large/public/6982.jpg',
    'https://img1.doubanio.com/view/ark_campaign_pic/large/public/6999.jpg',
    'https://img1.doubanio.com/view/ark_campaign_pic/large/public/6998.jpg'
  ];

  //主编推荐
  chiefEditorRecommendes: any[] = [
    {imgUrl: 'https://img3.doubanio.com/view/ark_article_cover/retina/public/106348385.jpg', bookName: '易中天中华史：朱明王朝', author: '易中天', prices: 16.00},
    {imgUrl: 'https://img3.doubanio.com/view/ark_article_cover/retina/public/106351354.jpg', bookName: '走出剧情', author: '李雪', prices: 24.90},
    {imgUrl: 'https://img3.doubanio.com/view/ark_article_cover/retina/public/54230342.jpg', bookName: '观山海', author: '杉泽 绘 等', prices: 29.99},
    {imgUrl: 'https://img3.doubanio.com/view/ark_article_cover/retina/public/106138231.jpg', bookName: '维特根斯坦的侄子', author: '〔奥地利〕托马斯·伯恩哈德马文韬译', prices: 19.46},
    {imgUrl: 'https://img3.doubanio.com/view/ark_article_cover/retina/public/53497963.jpg', bookName: '失踪的孩子', author: '意〕埃莱娜·费兰特陈英译', prices: 32.00},
    {imgUrl: 'https://img3.doubanio.com/view/ark_article_cover/retina/public/60778814.jpg', bookName: '远处的拉莫', author: '胡迁', prices: 9.99},
  ];
  ngOnInit() {
  }


}
