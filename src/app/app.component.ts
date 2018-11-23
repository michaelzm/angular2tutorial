import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
  `<h1>{{title}}</h1>
   <products></products>`
})
export class AppComponent {
  title = 'second';
}
