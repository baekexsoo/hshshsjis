import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurationComponent } from './restauration.component';

describe('RestaurationComponent', () => {
  let component: RestaurationComponent;
  let fixture: ComponentFixture<RestaurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
