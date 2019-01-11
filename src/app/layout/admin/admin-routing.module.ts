import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin.component';
import {AddBookComponent} from './manageBook/add-book/add-book.component';
import {DeleteBookComponent} from './manageBook/delete-book/delete-book.component';
import {ManageListComponent} from './manageBook/manage-list/manage-list.component';
import {UpdateBookComponent} from './manageBook/update-book/update-book.component';

const routes: Routes = [
  { path: '', component: AdminComponent, children: [
      { path: 'addBook', component: AddBookComponent},
      { path: 'deleteBook', component: DeleteBookComponent},
      { path: 'managelist', component: ManageListComponent},
      { path: 'updateBook', component: UpdateBookComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
