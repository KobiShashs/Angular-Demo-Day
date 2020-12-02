import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFacadeComponent } from './customer-facade.component';

describe('CustomerFacadeComponent', () => {
  let component: CustomerFacadeComponent;
  let fixture: ComponentFixture<CustomerFacadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerFacadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerFacadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
