import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristLocationListComponent } from './tourist-location-list.component';

describe('TouristLocationListComponent', () => {
  let component: TouristLocationListComponent;
  let fixture: ComponentFixture<TouristLocationListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TouristLocationListComponent]
    });
    fixture = TestBed.createComponent(TouristLocationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
