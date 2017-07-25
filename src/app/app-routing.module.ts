import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { CampaignListPage }   from '../pages/campaign-list/campaign-list.page';
import { CampaignDetailPage }   from '../pages/campaign-detail/campaign-detail.page';
import { MyCouponListComponent }   from '../components/my-coupon-list/my-coupon-list.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/campaigns', pathMatch: 'full' },
  { path: 'campaigns',  component: CampaignListPage },
  { path: 'detail', component: CampaignDetailPage },
  { path: 'mycoupons', component: MyCouponListComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}