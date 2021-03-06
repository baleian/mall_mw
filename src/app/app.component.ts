import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { ValuesService } from '../services/values.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public values: ValuesService,
    private location: Location
  ) {}

  goBack(): void {
    this.location.back();
  }
  
}
