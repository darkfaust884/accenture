import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalAreaAggressiveComponent } from './personal-area-aggressive.component';

describe('PersonalAreaAggressiveComponent', () => {
  let component: PersonalAreaAggressiveComponent;
  let fixture: ComponentFixture<PersonalAreaAggressiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalAreaAggressiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalAreaAggressiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
