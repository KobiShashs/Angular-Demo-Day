import {CouponsCatalogComponent} from './components/coupons-catalog/coupons-catalog.component';
import { CompanyFacadeComponent } from './components/company-facade/company-facade.component';
import { AdminFacadeComponent } from './components/admin-facade/admin-facade.component';
import { HomeComponent } from './components/home/home.component';
import { CustomerFacadeComponent } from './components/customer-facade/customer-facade.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'customer', component: CustomerFacadeComponent },
  { path: 'admin', component: AdminFacadeComponent },
  { path: 'company', component: CompanyFacadeComponent },
  { path: 'coupons-catalog', component: CouponsCatalogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
