import { TestBed } from '@angular/core/testing';

import { CustomerRestService } from './customer-rest.service';

describe('CustomerRestService', () => {
  let service: CustomerRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
