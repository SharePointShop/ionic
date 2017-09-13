
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RegularDelivery } from '../RegularDelivery/RegularDelivery';
import { CustomerDelivery } from '../CustomerDelivery/CustomerDelivery';
import { OtherDuties } from '../OtherDuties/OtherDuties';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToPage(page) {
    if(page =='RegularDelivery')
      this.navCtrl.push(RegularDelivery);
    else if(page =='CustomerDelivery')
    this.navCtrl.push(CustomerDelivery);
    else if(page == 'OtherDuties')
    this.navCtrl.push(OtherDuties);
  }
}
