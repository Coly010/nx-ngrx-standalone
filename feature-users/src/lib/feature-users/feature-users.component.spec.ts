import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureUsersComponent } from './feature-users.component';

describe('FeatureUsersComponent', () => {
  let component: FeatureUsersComponent;
  let fixture: ComponentFixture<FeatureUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureUsersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
