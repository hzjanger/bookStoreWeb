import { ThemeRoutingModule } from './theme-routing.module';
import {DialogLayout} from "./layout";
import {CommonModule, registerLocaleData} from "@angular/common";
import {
  NZ_I18N,
  NzButtonModule,
  NzFormModule,
  NzInputModule,
  NzPaginationModule,
  NzRateModule,
  zh_CN
} from "ng-zorro-antd";
import {ModuleWithProviders, NgModule} from "@angular/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import zh from '@angular/common/locales/zh';
import {EditorMarkdownComponent} from "./component";
import {ReactiveFormsModule} from "@angular/forms";
import {EditorMdDirective} from "../../@plugin/editor/editor-md.directive";
import { MatButtonModule} from "@angular/material";
registerLocaleData(zh);

const COMPONENT = [
  DialogLayout,
  EditorMarkdownComponent
];

const MatModule = [
  MatIconModule,
  MatDialogModule,
  MatButtonModule
];

const NzModule = [
  NzPaginationModule,
  NzFormModule,
  NzInputModule,
  NzButtonModule,
  NzRateModule
];

const Directive = [
  EditorMdDirective
];
@NgModule({
  declarations: [
    ...COMPONENT,
    ...Directive
  ],
  imports: [
    CommonModule,
    ThemeRoutingModule,
    ReactiveFormsModule,
    ...MatModule,
    ...NzModule
  ],
  exports: [
    ...COMPONENT,
    ...MatModule,
    ...NzModule,
    ...Directive
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
