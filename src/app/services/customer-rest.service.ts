import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coupon } from '../models/Coupon';
@Injectable({
  providedIn: 'root'
})
export class CustomerRestService {

  private BASE_URL = 'http://localhost:8080/customer/';

  constructor(private httpClient: HttpClient) { }

  public getAllCoupons(): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.BASE_URL + 'get-customer-coupons');
  }
}
