import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdkSwitchComponent } from './switch.component';

describe('SwitchComponent', () => {
  let component: MdkSwitchComponent;
  let fixture: ComponentFixture<MdkSwitchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MdkSwitchComponent]
    });
    fixture = TestBed.createComponent(MdkSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
