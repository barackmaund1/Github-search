import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersearchFormComponent } from './usersearch-form.component';

describe('UsersearchFormComponent', () => {
  let component: UsersearchFormComponent;
  let fixture: ComponentFixture<UsersearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
