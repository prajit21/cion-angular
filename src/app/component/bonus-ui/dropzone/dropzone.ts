import { Component } from '@angular/core';

import { DefaultFileUpload } from './default-file-upload/default-file-upload';
import { ImagePerview } from './image-perview/image-perview';
import { MultiFileUpload } from './multi-file-upload/multi-file-upload';
import { SingleFileUpload } from './single-file-upload/single-file-upload';

@Component({
  selector: 'app-dropzone',
  imports: [SingleFileUpload, MultiFileUpload, DefaultFileUpload, ImagePerview],
  templateUrl: './dropzone.html',
  styleUrls: ['./dropzone.scss'],
})
export class Dropzone {}
