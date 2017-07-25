import { Component, OnInit } from '@angular/core';

import { ValuesService } from '../../services/index';

@Component({
  selector: 'campaign-detail-page',
  templateUrl: './campaign-detail.page.html',
  styleUrls: [ './campaign-detail.page.scss' ]
})
export class CampaignDetailPage implements OnInit {

  constructor(private values: ValuesService) { 
  }

  ngOnInit(): void {
    this.values.title = '디테일 페이지';
  }

}