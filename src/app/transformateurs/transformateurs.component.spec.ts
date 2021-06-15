import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformateursComponent } from './transformateurs.component';

describe('TransformateursComponent', () => {
  let component: TransformateursComponent;
  let fixture: ComponentFixture<TransformateursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransformateursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
