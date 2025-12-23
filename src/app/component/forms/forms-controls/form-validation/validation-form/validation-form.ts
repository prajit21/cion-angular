
import { Component } from '@angular/core';

@Component({
  selector: 'app-validation-form',
  templateUrl: './validation-form.html',
  styleUrls: ['./validation-form.scss'],
})
export class ValidationForm {
  public validate = false;

  public submit() {
    this.validate = !this.validate;
  }
}
