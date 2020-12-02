import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFacadeComponent } from './admin-facade.component';

describe('AdminFacadeComponent', () => {
  let component: AdminFacadeComponent;
  let fixture: ComponentFixture<AdminFacadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFacadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFacadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
