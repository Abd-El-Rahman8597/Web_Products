import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesComponent } from './Product.component';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesComponent]
    });
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
