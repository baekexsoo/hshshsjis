import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportateursComponent } from './exportateurs.component';

describe('ExportateursComponent', () => {
  let component: ExportateursComponent;
  let fixture: ComponentFixture<ExportateursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportateursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
