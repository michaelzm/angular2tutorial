import { Component } from '@angular/core';
import { AdvertisementService } from './advertisement.service';

@Component({
  selector: 'advertisement',
  template: '<h2>{{advertisement}}</h2>'
})

export class AdvertisementComponent {
  advertisement;

  constructor(advertisementService: AdvertisementService){
    this.advertisement = advertisementService.getAdvertisement();
  }
}
