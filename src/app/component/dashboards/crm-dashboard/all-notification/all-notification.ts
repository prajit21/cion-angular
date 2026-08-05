import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-all-notification',
  imports: [RouterModule],
  templateUrl: './all-notification.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./all-notification.scss'],
})
export class AllNotification {}
