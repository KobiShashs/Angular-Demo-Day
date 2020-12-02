import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyFacadeComponent } from './company-facade.component';

describe('CompanyFacadeComponent', () => {
  let component: CompanyFacadeComponent;
  let fixture: ComponentFixture<CompanyFacadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyFacadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyFacadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
