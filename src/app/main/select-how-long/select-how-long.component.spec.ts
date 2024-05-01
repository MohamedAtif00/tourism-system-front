import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectHowLongComponent } from './select-how-long.component';

describe('SelectHowLongComponent', () => {
  let component: SelectHowLongComponent;
  let fixture: ComponentFixture<SelectHowLongComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectHowLongComponent]
    });
    fixture = TestBed.createComponent(SelectHowLongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
