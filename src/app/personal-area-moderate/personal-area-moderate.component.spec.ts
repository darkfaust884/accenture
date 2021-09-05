import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalAreaModerateComponent } from './personal-area-moderate.component';

describe('PersonalAreaModerateComponent', () => {
  let component: PersonalAreaModerateComponent;
  let fixture: ComponentFixture<PersonalAreaModerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalAreaModerateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalAreaModerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
