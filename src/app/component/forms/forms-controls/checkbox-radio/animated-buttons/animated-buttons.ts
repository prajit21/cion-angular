import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  soicaMidia,
  paymentData,
} from '../../../../../shared/data/component/forms/form-controls/checkbox-radio';

@Component({
  selector: 'app-animated-buttons',
  imports: [FormsModule],
  templateUrl: './animated-buttons.html',
  styleUrls: ['./animated-buttons.scss'],
})
export class AnimatedButtons {
  public SoicalmidiaData = soicaMidia;
  public payment = paymentData;
}
