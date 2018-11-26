import { Component, Input } from '@angular/core';

@Component({
  selector: 'rating',
  templateUrl: 'rating.component.html',
  styles: [`
    .glyphicon-star{
      color:orange;
    }
  `]
})

export class RatingComponent {
  @Input('rating-value') rating = 0

  onclick(ratingValue){
    this.rating = ratingValue;
  }
}
