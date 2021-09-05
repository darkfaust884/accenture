import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalAreaConservativeComponent } from './personal-area-conservative.component';

describe('PersonalAreaConservativeComponent', () => {
  let component: PersonalAreaConservativeComponent;
  let fixture: ComponentFixture<PersonalAreaConservativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalAreaConservativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalAreaConservativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
