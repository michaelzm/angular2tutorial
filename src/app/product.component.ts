import {Component, Input} from '@angular/core';

@Component({
  selector: 'product',
  template:`
  <div class="media">
  <img class="mr-3" src="..." alt="Generic placeholder image">
  <div class="media-body">
    <h5 class="mt-0">Media heading</h5>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
  </div>
</div>
  `,
  styles: [`
    .media {
      margin-bottom: 20px;
    }
  `]
})

export class ProoductComponent{
  @Input() data;
}
