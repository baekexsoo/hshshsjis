import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsCreatComponent } from './sms-creat.component';

describe('SmsCreatComponent', () => {
  let component: SmsCreatComponent;
  let fixture: ComponentFixture<SmsCreatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsCreatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsCreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
