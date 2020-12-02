import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerFacadeComponent } from './components/customer-facade/customer-facade.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AdminFacadeComponent } from './components/admin-facade/admin-facade.component';
import { CompanyFacadeComponent } from './components/company-facade/company-facade.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CouponsCatalogComponent } from './components/coupons-catalog/coupons-catalog.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CustomerFacadeComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AdminFacadeComponent,
    CompanyFacadeComponent,
    CouponsCatalogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
