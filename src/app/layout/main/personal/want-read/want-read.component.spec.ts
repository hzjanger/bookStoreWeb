import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WantReadComponent } from './want-read.component';

describe('WantReadComponent', () => {
  let component: WantReadComponent;
  let fixture: ComponentFixture<WantReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WantReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WantReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
