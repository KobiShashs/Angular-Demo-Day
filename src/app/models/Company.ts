import { Category } from "./Category";
import { Coupon } from "./Coupon";

export class Company {
  constructor(public id?: number, public name?: string, public email?: string, public password?: string, public coupons?: Coupon[]) { }
}



const coupon1 = new Coupon(1, 123, Category.FOOD,
  '1+1 for all burgers', 'Only this week', new Date(), new Date(new Date().getTime() + 1 * 7), 100, 19.90);
const coupon2 = new Coupon(2, 123, Category.FOOD,
  '1+1 for all burgers', 'Only this week', new Date(), new Date(new Date().getTime() + 1 * 7), 100, 19.90);

const coupons = [coupon1, coupon2];


const c1 = new Company(123, "Super Kob", 'kob@comp.com', '1234');

const c2 = new Company(123, "Super Kob", 'kob@comp.com', '1234', coupons);
