import { ThemeRoutingModule } from './theme-routing.module';
import {DialogLayout} from "./layout";
import {CommonModule, registerLocaleData} from "@angular/common";
import {NZ_I18N, zh_CN} from "ng-zorro-antd";
import {ModuleWithProviders, NgModule} from "@angular/core";
import {MatDialogModule, MatIconModule} from "@angular/material";
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

const COMPONENT = [
  DialogLayout
];

const MatModule = [
  MatIconModule,
  MatDialogModule
];
@NgModule({
  declarations: [
    ...COMPONENT
  ],
  imports: [
    CommonModule,
    ThemeRoutingModule,
    ...MatModule
  ],
  exports: [
    ...COMPONENT
  ]
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: ThemeModule,
      providers: [
        { provide: NZ_I18N, useValue: zh_CN }
      ]
    };
  }

}
