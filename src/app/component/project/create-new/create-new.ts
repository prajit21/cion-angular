import { Component, ChangeDetectionStrategy } from '@angular/core';

import { UploadFile } from './upload-file/upload-file';

@Component({
  selector: 'app-create-new',
  imports: [UploadFile],
  templateUrl: './create-new.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./create-new.scss'],
})
export class CreateNew {}
