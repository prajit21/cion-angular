import { Component } from '@angular/core';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-title-text-alert',
  imports: [],
  templateUrl: './title-text-alert.html',
  styleUrls: ['./title-text-alert.scss'],
})
export class TitleTextAlert {
  withTitle() {
    Swal.fire({
      title: "It's Magic!",
      text: 'Thank you for visiting Cion theme',
      confirmButtonColor: 'var(--theme-default)',
    });
  }
}
