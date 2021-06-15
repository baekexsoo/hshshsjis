import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilMarcheComponent } from './accueil-marche.component';

describe('AccueilMarcheComponent', () => {
  let component: AccueilMarcheComponent;
  let fixture: ComponentFixture<AccueilMarcheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilMarcheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilMarcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
