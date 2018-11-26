import { Component } from '@angular/core'
import { ProductService } from './product.service'
import { AdvertisementService } from './advertisement.service'
import { RatingComponent } from './rating.component'
import { UserFormComponent } from './user-form.component'

@Component({
  selector: 'app-root',
  template:`
   <h1>{{title}}</h1>
   <rating></rating>
   <products></products>
   <advertisement></advertisement>
   <user-form></user-form>`,
   providers: [ProductService, AdvertisementService]
})
export class AppComponent {
  onClick($event){
    console.log("clicked", $event)
  }
  isActive = true;
  title = 'second';
  imageURL = 'https://i.redd.it/ipda90h8dk311.jpg'
}
