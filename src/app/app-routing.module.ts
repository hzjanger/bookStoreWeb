import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './layout/main/main.module#MainModule'},
  // { path: 'admin', loadChildren: './layout/admin/admin.module#'},
  { path: '', redirectTo: '', pathMatch: 'full'},
  // { path: '*', component: E}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
