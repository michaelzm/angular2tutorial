import { Component } from '@angular/core';

@Component({
  selector: 'products',
  template: `
  <h2>Products</h2>
  <ul>
    <li *ngFor="let product of products">
    {{product}}
    </li>
  </ul>
  `
})

export class ProductsComponent{
  products = ["Angular 2", "Angular 1","Angular 5000"];

}
