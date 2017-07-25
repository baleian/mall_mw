import { Component, OnInit } from '@angular/core';

import { ValuesService } from '../../services/index';

@Component({
  selector: 'campaign-list-page',
  templateUrl: './campaign-list.page.html',
  styleUrls: [ './campaign-list.page.scss' ]
})
export class CampaignListPage implements OnInit {

  constructor(private values: ValuesService) { 
  }

  ngOnInit(): void {
    this.values.title = '포인트 사용';
  }

}