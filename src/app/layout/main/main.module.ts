import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainRoutingModule} from './main-routing.module';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {MatButtonModule} from '@angular/material';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    MatButtonModule,
    SharedModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    SearchComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent
  ]
})
export class MainModule { }
