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
import { BookInfoComponent } from './book-info/book-info.component';
import { EbooksComponent } from './ebooks/ebooks.component';
import { WantReadComponent } from './personal/want-read/want-read.component';
import { ReadingComponent } from './personal/reading/reading.component';
import { ReadedComponent } from './personal/readed/readed.component';
import { PersonalHomeComponent } from './personal/personal-home/personal-home.component';
import { CollectionDialogComponent } from './collection-dialog/collection-dialog.component';
import { NoteListComponent } from './personal/note-list/note-list.component';
import { ShowNoteComponent } from './personal/show-note/show-note.component';
import {HtmlPipe} from '../../pipe/HtmlPipe';

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
    MainComponent,
    BookInfoComponent,
    EbooksComponent,
    WantReadComponent,
    ReadingComponent,
    ReadedComponent,
    PersonalHomeComponent,
    CollectionDialogComponent,
    NoteListComponent,
    ShowNoteComponent,
    HtmlPipe
  ],
  entryComponents: [
    CollectionDialogComponent
  ]
})
export class MainModule { }
