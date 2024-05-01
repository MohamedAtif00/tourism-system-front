import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTourismPlaceComponent } from './select-tourism-place.component';

describe('SelectTourismPlaceComponent', () => {
  let component: SelectTourismPlaceComponent;
  let fixture: ComponentFixture<SelectTourismPlaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectTourismPlaceComponent]
    });
    fixture = TestBed.createComponent(SelectTourismPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
