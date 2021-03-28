import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexactorsComponent } from './indexactors.component';

describe('IndexactorsComponent', () => {
  let component: IndexactorsComponent;
  let fixture: ComponentFixture<IndexactorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexactorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexactorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
