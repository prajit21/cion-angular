import { Component } from '@angular/core';

@Component({
  selector: 'app-coming-simple',
  imports: [],
  templateUrl: './coming-simple.html',
  styleUrls: ['./coming-simple.scss'],
})
export class ComingSimple {
  public seconds: number;
  public interval: ReturnType<typeof setInterval>;

  constructor() {
    this.interval = setInterval(
      function (this: ComingSimple) {
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);
        currentDate.setDate(currentDate.getDate() + 7);

        const nowDate = new Date();
        const distance = currentDate.getTime() - nowDate.getTime();

        document.querySelectorAll('#day').forEach(element => {
          (element as HTMLElement).innerHTML = Math.floor(
            distance / (1000 * 60 * 60 * 24),
          ).toString();
        });

        document.querySelectorAll('#hour').forEach(element => {
          (element as HTMLElement).innerHTML = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ).toString();
        });

        document.querySelectorAll('#minute').forEach(element => {
          (element as HTMLElement).innerHTML = Math.floor(
            (distance % (1000 * 60 * 60)) / (1000 * 60),
          ).toString();
        });

        document.querySelectorAll('#second').forEach(element => {
          (element as HTMLElement).innerHTML = Math.floor(
            (distance % (1000 * 60)) / 1000,
          ).toString();
        });
      }.bind(this),
      this.seconds,
    );
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
