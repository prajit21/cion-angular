import { Component } from '@angular/core';

import {
  BorderedRadio,
  FilledRadio,
  IconsRadio,
} from '../../../../,./../../shared/data/component/forms/form-controls/checkbox-radio';

@Component({
  selector: 'app-custom-radio',
  imports: [],
  templateUrl: './custom-radio.html',
  styleUrls: ['./custom-radio.scss'],
})
export class CustomRadio {
  public borderData = BorderedRadio;
  public iconData = IconsRadio;
  public filledData = FilledRadio;
}
