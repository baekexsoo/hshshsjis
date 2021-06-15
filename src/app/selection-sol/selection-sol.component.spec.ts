import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionSolComponent } from './selection-sol.component';

describe('SelectionSolComponent', () => {
  let component: SelectionSolComponent;
  let fixture: ComponentFixture<SelectionSolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionSolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionSolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
