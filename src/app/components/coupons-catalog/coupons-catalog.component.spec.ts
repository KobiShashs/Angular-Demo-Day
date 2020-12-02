import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponsCatalogComponent } from './coupons-catalog.component';

describe('CouponsCatalogComponent', () => {
  let component: CouponsCatalogComponent;
  let fixture: ComponentFixture<CouponsCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponsCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponsCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
