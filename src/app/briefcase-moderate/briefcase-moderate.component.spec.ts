import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BriefcaseModerateComponent } from './briefcase-moderate.component';

describe('BriefcaseModerateComponent', () => {
  let component: BriefcaseModerateComponent;
  let fixture: ComponentFixture<BriefcaseModerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BriefcaseModerateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BriefcaseModerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
