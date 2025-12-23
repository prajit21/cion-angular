
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Feathericon } from '../../feathericon/feathericon';

@Component({
  selector: 'app-message',
  imports: [Feathericon, RouterModule],
  templateUrl: './message.html',
  styleUrls: ['./message.scss'],
})
export class Message {
  public MassageData: boolean = false;

  Message() {
    this.MassageData = !this.MassageData;
  }
}
