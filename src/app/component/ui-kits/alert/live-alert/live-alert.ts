import { Component } from '@angular/core';

@Component({
  selector: 'app-live-alert',
  imports: [],
  templateUrl: './live-alert.html',
  styleUrls: ['./live-alert.scss'],
})
export class LiveAlert {
  showLog = false;
  counter: number = 0;
  array: number[] = [];

  onShowLog() {
    this.showLog = true;
    this.counter++;
    this.array.push(this.counter);
  }

  close(Data: number) {
    this.array.splice(this.array.indexOf(Data), 1);
  }
}
