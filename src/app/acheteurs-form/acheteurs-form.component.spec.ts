import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcheteursFormComponent } from './acheteurs-form.component';

describe('AcheteursFormComponent', () => {
  let component: AcheteursFormComponent;
  let fixture: ComponentFixture<AcheteursFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcheteursFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcheteursFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
