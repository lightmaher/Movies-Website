import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGeneraComponent } from './edit-genera.component';

describe('EditGeneraComponent', () => {
  let component: EditGeneraComponent;
  let fixture: ComponentFixture<EditGeneraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGeneraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGeneraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
