import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-notification',
  imports: [CommonModule, RouterModule],
  templateUrl: './notification.html',
  styleUrls: ['./notification.scss'],
})
export class Notification {
  public onnotifaction: boolean = false;

  notification() {
    this.onnotifaction = !this.onnotifaction;
  }
}
