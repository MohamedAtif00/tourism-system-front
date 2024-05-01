import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTourismTypeComponent } from './select-tourism-type.component';

describe('SelectTourismTypeComponent', () => {
  let component: SelectTourismTypeComponent;
  let fixture: ComponentFixture<SelectTourismTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectTourismTypeComponent]
    });
    fixture = TestBed.createComponent(SelectTourismTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
