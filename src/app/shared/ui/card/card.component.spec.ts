import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryCardComponent } from './card.component';

describe('CardComponent', () => {
  let component: GalleryCardComponent;
  let fixture: ComponentFixture<GalleryCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryCardComponent]
    });
    fixture = TestBed.createComponent(GalleryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
