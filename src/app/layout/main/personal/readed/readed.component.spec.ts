import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadedComponent } from './readed.component';

describe('ReadedComponent', () => {
  let component: ReadedComponent;
  let fixture: ComponentFixture<ReadedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
