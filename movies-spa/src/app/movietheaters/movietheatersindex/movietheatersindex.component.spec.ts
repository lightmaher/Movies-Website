import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovietheatersindexComponent } from './movietheatersindex.component';

describe('MovietheatersindexComponent', () => {
  let component: MovietheatersindexComponent;
  let fixture: ComponentFixture<MovietheatersindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovietheatersindexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovietheatersindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
