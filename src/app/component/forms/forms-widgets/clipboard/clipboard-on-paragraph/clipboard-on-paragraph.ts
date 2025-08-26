import { Component, inject } from '@angular/core';

import { ClipboardModule, ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-clipboard-on-paragraph',
  imports: [ClipboardModule],
  templateUrl: './clipboard-on-paragraph.html',
  styleUrls: ['./clipboard-on-paragraph.scss'],
})
export class ClipboardOnParagraph {
  paragraphData =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  basic = false;

  copyText: string = '';
  private _clipboardService = inject(ClipboardService);

  callServiceToCopy() {
    this._clipboardService.copy('This is copy thru service copyFromContent directly');
  }

  onCopyFailure() {
    alert('copy fail!');
  }

  copyFunction(txt: string) {
    navigator.clipboard.writeText(txt);
    alert('Copied');
  }

  ngOnInit(): void {
    this._clipboardService.copyResponse$.subscribe(re => {
      if (re.isSuccess) {
        alert('copy success!');
      }
    });
  }
}
