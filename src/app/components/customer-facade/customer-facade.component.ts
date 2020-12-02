import { CustomerRestService } from './../../services/customer-rest.service';
import { Customer } from './../../models/Customer';
import { Category } from './../../models/Category';
import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/Coupon';
@Component({
  selector: 'app-customer-facade',
  templateUrl: './customer-facade.component.html',
  styleUrls: ['./customer-facade.component.css']
})
export class CustomerFacadeComponent implements OnInit {


  couponsFilterByType: Coupon[];
  couponsFilterByPrice: Coupon[];


  name: string = 'Avi';
  filterType: string;
  filterPrice: string;
  //customerCoupons: Coupon[];

  customerCoupons = [new Coupon(1, 123, Category.FOOD,
    '1+1 for all burgers', 'Only this week', new Date(), new Date(new Date().getTime() + 1 * 7), 100, 11.90),
  new Coupon(2, 123, Category.OTHER,
    '1+1 for all burgers', 'Only this week', new Date(), new Date(new Date().getTime() + 1 * 7), 100, 15.90),
  new Coupon(3, 123, Category.FOOD,
    '1+1 for all burgers', 'Only this week', new Date(), new Date(new Date().getTime() + 1 * 7), 100, 17.90),
  new Coupon(4, 123, Category.ELECTRICITY,
    '1+1 for all burgers', 'Only this week', new Date(), new Date(new Date().getTime() + 1 * 7), 100, 19.78),
  new Coupon(5, 123, Category.FOOD,
    '1+1 for all burgers', 'Only this week', new Date(), new Date(new Date().getTime() + 1 * 7), 100, 30.90)];


  customerCouponsOrigin = this.customerCoupons;

  constructor(private customerRestService: CustomerRestService) { }

  ngOnInit(): void {

    // this.customerRestService.getAllCoupons().subscribe(
    //   (res) => { this.customerCoupons = res },
    //   (err) => {
    //     alert(err.message);
    //   }
    // );

  }




  public filtered(): void {
    console.log(this.filterPrice,this.filterType);
    if(this.filterType==='ALL' && this.filterPrice===undefined) {
      this.customerCoupons= this.customerCouponsOrigin;
    }
    if (this.filterPrice === '' && this.filterType === '' ) {
      this.customerCoupons = this.customerCouponsOrigin;
    }
    else if (this.filterPrice === undefined && this.filterType !== '') {
      this.customerCoupons = this.customerCoupons.filter(x => x.category === this.filterType);
    }
    else if (this.filterPrice !== '' && this.filterType === '') {
      this.customerCoupons = this.customerCoupons.filter(x => x.price <= +this.filterPrice);
    } else {
      this.customerCoupons = this.customerCoupons.filter(x => x.category === this.filterType && x.price <= +this.filterPrice);

    }


  }



  onChangePrice(value: string): void {
    this.filterPrice = value;
    this.filtered();


    // console.log(value, typeof (value));
    // this.customerCoupons = this.customerCouponsOrigin;

    // if (value === '') {
    //   this.couponsFilterByPrice = this.customerCouponsOrigin;
    //   return;
    // }
    // this.couponsFilterByPrice = this.customerCoupons.filter(coupon => +(coupon.price) <= +value);

  }





  onChangeType(value: string): void {
    this.filterType = value;
    this.filtered();
    // this.customerCoupons = this.customerCouponsOrigin;
    // if (value === 'ALL') {
    //   this.couponsFilterByType = this.customerCouponsOrigin;
    //   return;
    // }

    // // console.log(value);


    // this.couponsFilterByType = this.customerCoupons.filter(coupon => coupon.category === value);

  }

}
