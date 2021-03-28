import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMovietheatreComponent } from './create-movietheatre.component';

describe('CreateMovietheatreComponent', () => {
  let component: CreateMovietheatreComponent;
  let fixture: ComponentFixture<CreateMovietheatreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMovietheatreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMovietheatreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
