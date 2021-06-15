import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArachideComponent } from './arachide.component';

describe('ArachideComponent', () => {
  let component: ArachideComponent;
  let fixture: ComponentFixture<ArachideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArachideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArachideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
