import { Component, ChangeDetectionStrategy } from '@angular/core';

import { DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-image-perview',
  imports: [DropzoneModule],
  templateUrl: './image-perview.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./image-perview.scss'],
})
export class ImagePerview {
  public config: DropzoneConfigInterface = {
    url: 'https://httpbin.org/post',
    maxFilesize: 50,
    addRemoveLinks: true,
    acceptedFiles: 'image/*',
  };
}
