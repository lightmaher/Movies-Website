import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGeneraComponent } from './create-genera.component';

describe('CreateGeneraComponent', () => {
  let component: CreateGeneraComponent;
  let fixture: ComponentFixture<CreateGeneraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGeneraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGeneraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
