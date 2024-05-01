import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristPlaceCreationComponent } from './tourist-place-creation.component';

describe('TouristPlaceCreationComponent', () => {
  let component: TouristPlaceCreationComponent;
  let fixture: ComponentFixture<TouristPlaceCreationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TouristPlaceCreationComponent]
    });
    fixture = TestBed.createComponent(TouristPlaceCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
