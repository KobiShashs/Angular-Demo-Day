import { Coupon } from "./Coupon";

export class Customer {
  constructor(public id?: number,
    public firstName?: string,
    public lastName?: string, public email?: string, public password?: string, public coupons?: Coupon[]) { }
}


const c1 = new Customer(123, 'Avi', 'Cohen', 'avi@gmail.com', '1234');

c1.id = 123;
// c1.setId(123);
