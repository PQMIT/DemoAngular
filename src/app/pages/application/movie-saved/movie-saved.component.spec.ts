import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSavedComponent } from './movie-saved.component';

describe('MovieSavedComponent', () => {
  let component: MovieSavedComponent;
  let fixture: ComponentFixture<MovieSavedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieSavedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieSavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
