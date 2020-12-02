import { Category } from "./Category";

export class Coupon {
  constructor(public id?: number,
    public companyId?: number,
    public category?: Category,
    public title?: string,
    public description?: string,
    public startDate?: Date,
    public endDate?: Date,
    public amount?: number,
    public price?: number,
    public image?: string) { }
}

const c1 = new Coupon(1, 123, Category.FOOD,
  '1+1 for all burgers', 'Only this week', new Date(), new Date(new Date().getTime() + 1 * 7), 100, 19.90);
