import { Component, inject } from '@angular/core';

import { ClipboardModule, ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-copy-portion-from-paragraph',
  imports: [ClipboardModule],
  templateUrl: './copy-portion-from-paragraph.html',
  styleUrls: ['./copy-portion-from-paragraph.scss'],
})
export class CopyPortionFromParagraph {
  copyHighlightTxt: string = 'dolor sit amet';
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
