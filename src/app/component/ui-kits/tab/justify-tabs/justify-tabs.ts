import { Component } from '@angular/core';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

import {
  webDesigner,
  UxDesigner,
  IOTdeveloper,
} from '../../../../shared/data/component/ui-kits/tabs/tab';

@Component({
  selector: 'app-justify-tabs',
  imports: [NgbNavModule],
  templateUrl: './justify-tabs.html',
  styleUrls: ['./justify-tabs.scss'],
})
export class JustifyTabs {
  public active = 2;

  public webdesignerData = webDesigner;
  public UXdesignerData = UxDesigner;
  public iotDeveloperData = IOTdeveloper;
}
