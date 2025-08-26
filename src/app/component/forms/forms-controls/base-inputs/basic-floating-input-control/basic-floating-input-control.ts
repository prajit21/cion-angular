import { Component } from '@angular/core';

import { FormDetails } from './form-details/form-details';

@Component({
  selector: 'app-basic-floating-input-control',
  imports: [FormDetails],
  templateUrl: './basic-floating-input-control.html',
  styleUrls: ['./basic-floating-input-control.scss'],
})
export class BasicFloatingInputControl {
  public validate = false;

  public submit() {
    this.validate = !this.validate;
  }
}
