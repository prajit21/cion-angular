import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Editor, NgxEditorModule } from 'ngx-editor';

@Component({
  selector: 'app-new-mail',
  imports: [NgxEditorModule, FormsModule],
  templateUrl: './new-mail.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./new-mail.scss'],
})
export class NewMail {
  editor: Editor;
  html = '';

  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
