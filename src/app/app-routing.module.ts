import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestComponent} from './test/test.component';

const routes: Routes = [
  { path: '', loadChildren: './layout/main/main.module#MainModule'},
  { path: 'admin', loadChildren: './layout/admin/admin.module#AdminModule'},
  { path: 'note', loadChildren: './layout/note/note.module#NoteModule'},
  { path: 'test', component: TestComponent},
  // { path: 'admin', loadChildren: './layout/admin/admin.module#'},
  { path: '', redirectTo: '', pathMatch: 'full'},

  // { path: '*', component: E}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
