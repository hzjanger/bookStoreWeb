import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MainComponent} from './main.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {SearchComponent} from './search/search.component';
import {BookInfoComponent} from './book-info/book-info.component';
import {EbooksComponent} from './ebooks/ebooks.component';
import {PersonalHomeComponent} from './personal/personal-home/personal-home.component';
import {ReadedComponent} from './personal/readed/readed.component';
import {ReadingComponent} from './personal/reading/reading.component';
import {WantReadComponent} from './personal/want-read/want-read.component';
import {NoteListComponent} from './personal/note-list/note-list.component';
import {ShowNoteComponent} from './personal/show-note/show-note.component';


const mainRoutes: Routes = [
  {path: '', component: MainComponent, children: [
      { path: '', component: HomeComponent},
      { path: 'search', component: SearchComponent},
      { path: 'bookinfo', component: BookInfoComponent},
      { path: 'ebooks', component: EbooksComponent},
      { path: 'personal', component: PersonalHomeComponent, children: [
          { path: 'notelist', component: NoteListComponent},
          { path: 'readed', component: ReadedComponent},
          { path: 'reading', component: ReadingComponent},
          { path: 'wantread', component: WantReadComponent},
          { path: '', redirectTo: '/personal/notelist', pathMatch: 'full'}
        ]
      },
      { path: 'shownote', component: ShowNoteComponent}
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
