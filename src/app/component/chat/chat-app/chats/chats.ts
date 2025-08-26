import { Component, output } from '@angular/core';

@Component({
  selector: 'app-chats',
  imports: [],
  templateUrl: './chats.html',
  styleUrls: ['./chats.scss'],
})
export class Chats {
  readonly filterValue = output<boolean>();

  public open: boolean = false;

  openFilter() {
    this.open = !this.open;
    this.filterValue.emit(this.open);
  }
}
