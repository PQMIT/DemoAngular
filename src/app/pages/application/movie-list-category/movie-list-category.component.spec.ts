import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListCategoryComponent } from './movie-list-category.component';

describe('MovieListCategoryComponent', () => {
  let component: MovieListCategoryComponent;
  let fixture: ComponentFixture<MovieListCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieListCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieListCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
