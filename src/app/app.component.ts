import { Component } from '@angular/core'
import { ProductService } from './product.service'
import { AdvertisementService } from './advertisement.service'

@Component({
  selector: 'app-root',
  template:`
  <button class ="btn btn-primary"
  [style.backgroundColor]="isActive ? 'blue':'gray'">Submit</button>
  <h1>{{title}}</h1>
  <img src="{{imageURL}}" />
   <products></products>
   <advertisement></advertisement>`,
   providers: [ProductService, AdvertisementService]
})
export class AppComponent {
  isActive = true;
  title = 'second';
  imageURL = 'https://i.redd.it/ipda90h8dk311.jpg'
}
