import { Component, ChangeDetectionStrategy } from '@angular/core';

import { DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-default-file-upload',
  imports: [DropzoneModule],
  templateUrl: './default-file-upload.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./default-file-upload.scss'],
})
export class DefaultFileUpload {
  public config: DropzoneConfigInterface = {
    url: 'https://httpbin.org/post',
    maxFilesize: 50,
    addRemoveLinks: true,
  };
}
