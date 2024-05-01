import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTravelerTypeComponent } from './select-traveler-type.component';

describe('SelectTravelerTypeComponent', () => {
  let component: SelectTravelerTypeComponent;
  let fixture: ComponentFixture<SelectTravelerTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectTravelerTypeComponent]
    });
    fixture = TestBed.createComponent(SelectTravelerTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
