import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MainComponent} from './main.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';


const mainRoutes: Routes = [
  {path: '', component: MainComponent, children: [
      { path: '', component: HomeComponent}
    ]
  },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent}

];

@NgModule({
  imports: [
    RouterModule.forChild(mainRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class MainRoutingModule {

}
