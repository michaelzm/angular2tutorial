import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { AdvertisementService } from './advertisement.service';

@Component({
  selector: 'app-root',
  template:
  `<h1>{{title}}</h1>
   <products></products>
   <advertisement></advertisement>`,
   providers: [ProductService, AdvertisementService]
})
export class AppComponent {
  title = 'second';
}
