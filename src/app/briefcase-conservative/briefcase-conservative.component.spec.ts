import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BriefcaseConservativeComponent } from './briefcase-conservative.component';

describe('BriefcaseConservativeComponent', () => {
  let component: BriefcaseConservativeComponent;
  let fixture: ComponentFixture<BriefcaseConservativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BriefcaseConservativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BriefcaseConservativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
