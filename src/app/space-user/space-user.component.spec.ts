import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceUserComponent } from './space-user.component';

describe('SpaceUserComponent', () => {
  let component: SpaceUserComponent;
  let fixture: ComponentFixture<SpaceUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
