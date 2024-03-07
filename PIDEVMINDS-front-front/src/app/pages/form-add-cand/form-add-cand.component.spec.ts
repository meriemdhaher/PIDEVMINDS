import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddCandComponent } from './form-add-cand.component';

describe('FormAddCandComponent', () => {
  let component: FormAddCandComponent;
  let fixture: ComponentFixture<FormAddCandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddCandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAddCandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
