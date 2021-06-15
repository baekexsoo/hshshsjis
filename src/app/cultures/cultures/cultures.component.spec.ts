import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturesComponent } from './cultures.component';

describe('CulturesComponent', () => {
  let component: CulturesComponent;
  let fixture: ComponentFixture<CulturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
