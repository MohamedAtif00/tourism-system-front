import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectWhoComingComponent } from './select-who-coming.component';

describe('SelectWhoComingComponent', () => {
  let component: SelectWhoComingComponent;
  let fixture: ComponentFixture<SelectWhoComingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectWhoComingComponent]
    });
    fixture = TestBed.createComponent(SelectWhoComingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
