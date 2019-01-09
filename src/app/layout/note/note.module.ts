import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoteRoutingModule } from './note-routing.module';
import { NoteComponent } from './note.component';
import {SharedModule} from '../../shared/shared.module';
import { NoteinfoDailogComponent } from './noteinfo-dailog/noteinfo-dailog.component';

@NgModule({
  declarations: [
    NoteComponent,
    NoteinfoDailogComponent,
  ],
  imports: [
    CommonModule,
    NoteRoutingModule,
    SharedModule
  ],
  entryComponents: [
    NoteinfoDailogComponent
  ]
})
export class NoteModule { }
