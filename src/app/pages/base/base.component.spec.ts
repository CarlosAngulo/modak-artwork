import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBaseComponent } from './base.component';

describe('BaseComponent', () => {
  let component: PageBaseComponent;
  let fixture: ComponentFixture<PageBaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageBaseComponent]
    });
    fixture = TestBed.createComponent(PageBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
