import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnionProducteurComponent } from './union-producteur.component';

describe('UnionProducteurComponent', () => {
  let component: UnionProducteurComponent;
  let fixture: ComponentFixture<UnionProducteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnionProducteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnionProducteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
