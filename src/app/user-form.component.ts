import { Component, FormsModule } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html'
})
export class UserFormComponent {
  countries = ['USA', 'Singapore', 'Hong Kong', 'Australia'];
  model = new User("test","test");
  submitted = false;
  onSubmit(){
  this.submitted = true;
  }
}
