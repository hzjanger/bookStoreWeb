/**
 * 分页操作
 */
import {ActivatedRoute, Router} from "@angular/router";

export class PageOperating {
  /**
   * 当前页数
   */
  current: number;
  /**
   * 总页数
   */
  pageSize: number;

  /**
   * 路由
   */
  router: Router;

  /**
   *
   */
  route: ActivatedRoute;


  constructor(current: number, pageSize: number, router: Router, route: ActivatedRoute) {
    this.current = current;
    this.pageSize = pageSize;
    this.router = router;
    this.route = route;
  }

  jumpRouter(option: any) {
    this.router.navigate(['../../../', ...option], {
      relativeTo: this.route
    })
  }

  /**
   * 使用参数进行路由跳转
   * @param key 键
   * @param value 值
   */
  queryJumpRouter(key: string, value: string) {
    this.router.navigate(['./'], {
      queryParams: {
        [key]: value,
        current: this.current,
        pageSize: this.pageSize
      },
      relativeTo: this.route
    })
  }
  
}
