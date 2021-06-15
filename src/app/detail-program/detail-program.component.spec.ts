import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProgramComponent } from './detail-program.component';

describe('DetailProgramComponent', () => {
  let component: DetailProgramComponent;
  let fixture: ComponentFixture<DetailProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
