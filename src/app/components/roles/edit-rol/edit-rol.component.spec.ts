import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRolComponent } from './edit-rol.component';

describe('EditRolComponent', () => {
  let component: EditRolComponent;
  let fixture: ComponentFixture<EditRolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditRolComponent]
    });
    fixture = TestBed.createComponent(EditRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
