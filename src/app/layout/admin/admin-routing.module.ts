import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin.component';
import {AddBookComponent} from './manageBook/add-book/add-book.component';

const routes: Routes = [
  { path: '', component: AdminComponent, children: [
      { path: 'addBook', component: AddBookComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
