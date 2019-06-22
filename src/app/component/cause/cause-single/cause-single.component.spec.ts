import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CauseSingleComponent } from './cause-single.component';

describe('CauseSingleComponent', () => {
  let component: CauseSingleComponent;
  let fixture: ComponentFixture<CauseSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CauseSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CauseSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
