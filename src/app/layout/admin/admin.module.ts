import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import {SharedModule} from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';

import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AddBookComponent } from './manageBook/add-book/add-book.component';
import { DeleteBookComponent } from './manageBook/delete-book/delete-book.component';
import { ManageListComponent } from './manageBook/manage-list/manage-list.component';
import { UpdateBookComponent } from './manageBook/update-book/update-book.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
  declarations: [
    AdminComponent,
    ContentComponent,
    SidemenuComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AddBookComponent,
    DeleteBookComponent,
    ManageListComponent,
    UpdateBookComponent
  ]
})
export class AdminModule { }
