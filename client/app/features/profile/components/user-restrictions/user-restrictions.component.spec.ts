import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRestrictionsComponent } from './user-restrictions.component';

describe('UserRestrictionsComponent', () => {
  let component: UserRestrictionsComponent;
  let fixture: ComponentFixture<UserRestrictionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ UserRestrictionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRestrictionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
