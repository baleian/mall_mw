import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { ValuesService } from '../../services/index';

@Component({
  selector: 'nav-bar-component',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  constructor(
    public values: ValuesService,
    private location: Location
  ) {}

  goBack(): void {
    this.location.back();
  }
  
}
