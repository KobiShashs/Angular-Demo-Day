import { Component, OnInit, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Coupon } from 'src/app/models/Coupon';
import { Category } from 'src/app/models/Category';

@Component({
  selector: 'app-coupons-catalog',
  templateUrl: './coupons-catalog.component.html',
  styleUrls: ['./coupons-catalog.component.css']
})




export class CouponsCatalogComponent implements OnInit {

  coupons: Coupon[] = [new Coupon(70, 123, Category.FOOD,
    '1+1 for all burgers', 'Only this week', new Date(), new Date(new Date().getTime() + 1 * 7), 100, 19.90)
    ,
  new Coupon(71, 123, Category.FOOD,
    '1+1 for all burgers', 'Only this week', new Date(), new Date(new Date().getTime() + 1 * 7), 100, 19.90)
    ,
  new Coupon(72, 123, Category.FOOD,
    '1+1 for all burgers', 'Only this week', new Date(), new Date(new Date().getTime() + 1 * 7), 100, 19.90)
  ];
  constructor() { }

  ngOnInit(): void {
  }





}
