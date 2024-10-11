import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFormUserComponent } from './dialog-form-user.component';

describe('DialogFormUserComponent', () => {
  let component: DialogFormUserComponent;
  let fixture: ComponentFixture<DialogFormUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogFormUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogFormUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
