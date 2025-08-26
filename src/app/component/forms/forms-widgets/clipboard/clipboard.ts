import { Component } from '@angular/core';

import { ClipboardOnParagraph } from './clipboard-on-paragraph/clipboard-on-paragraph';
import { ClipboardOnTextarea } from './clipboard-on-textarea/clipboard-on-textarea';
import { ClipboardTextInput } from './clipboard-text-input/clipboard-text-input';
import { CopyPortionFromParagraph } from './copy-portion-from-paragraph/copy-portion-from-paragraph';

@Component({
  selector: 'app-clipboard',
  imports: [
    ClipboardTextInput,
    ClipboardOnParagraph,
    ClipboardOnTextarea,
    CopyPortionFromParagraph,
  ],
  templateUrl: './clipboard.html',
  styleUrls: ['./clipboard.scss'],
})
export class Clipboard {}
