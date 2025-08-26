import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Editor, NgxEditorModule } from 'ngx-editor';

@Component({
  selector: 'app-new-mail',
  imports: [NgxEditorModule, CommonModule, FormsModule],
  templateUrl: './new-mail.html',
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
