import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteinfoDailogComponent } from './noteinfo-dailog.component';

describe('NoteinfoDailogComponent', () => {
  let component: NoteinfoDailogComponent;
  let fixture: ComponentFixture<NoteinfoDailogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteinfoDailogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteinfoDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
