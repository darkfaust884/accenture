import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BriefcaseAggressiveComponent } from './briefcase-aggressive.component';

describe('BrefcaseAggressiveComponent', () => {
  let component: BriefcaseAggressiveComponent;
  let fixture: ComponentFixture<BriefcaseAggressiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BriefcaseAggressiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BriefcaseAggressiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
