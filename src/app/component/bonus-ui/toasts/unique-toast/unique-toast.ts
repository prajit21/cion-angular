import { NgClass } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-unique-toast',
  imports: [NgClass],
  templateUrl: './unique-toast.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./unique-toast.scss'],
})
export class UniqueToast {
  public Unique: boolean = true;

  close() {
    this.Unique = false;
  }
}
