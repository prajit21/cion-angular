import { Component } from '@angular/core';

import { commongroupButton } from '../../../../shared/data/component/buttons/button-group';

@Component({
  selector: 'app-flat-button-group',
  imports: [],
  templateUrl: './flat-button-group.html',
  styleUrls: ['./flat-button-group.scss'],
})
export class FlatButtonGroup {
  public FlatgroupData = commongroupButton;
}
