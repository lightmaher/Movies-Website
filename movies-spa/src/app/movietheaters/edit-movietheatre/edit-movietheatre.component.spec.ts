import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMovietheatreComponent } from './edit-movietheatre.component';

describe('EditMovietheatreComponent', () => {
  let component: EditMovietheatreComponent;
  let fixture: ComponentFixture<EditMovietheatreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMovietheatreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMovietheatreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
