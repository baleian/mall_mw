import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { CampaignListComponent } from '../components/campaign-list/campaign-list.component';
import { MyPointBarComponent } from '../components/my-point-bar/my-point-bar.component';
import { MyCouponListComponent } from '../components/my-coupon-list/my-coupon-list.component';

import { CampaignListPage } from '../pages/campaign-list/campaign-list.page';
import { CampaignDetailPage } from '../pages/campaign-detail/campaign-detail.page';

import { ValuesService } from '../services/values.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CampaignListComponent,
    MyPointBarComponent,
    MyCouponListComponent,
    CampaignListPage,
    CampaignDetailPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ValuesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
