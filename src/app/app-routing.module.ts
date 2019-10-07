import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestComponent} from './test/test.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./layout/main/main.module').then(m => m.MainModule)},
  { path: 'admin', loadChildren: () => import('./layout/admin/admin.module').then(m => m.AdminModule)},
  { path: 'note', loadChildren: () => import('./layout/note/note.module').then(m => m.NoteModule)},
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
