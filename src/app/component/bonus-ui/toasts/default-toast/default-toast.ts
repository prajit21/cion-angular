import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-default-toast',
  imports: [CommonModule],
  templateUrl: './default-toast.html',
  styleUrls: ['./default-toast.scss'],
})
export class DefaultToast {
  public default: boolean = true;

  close() {
    this.default = false;
  }
}
