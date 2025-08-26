import { Component } from '@angular/core';

import { DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-upload-file',
  imports: [DropzoneModule],
  templateUrl: './upload-file.html',
  styleUrls: ['./upload-file.scss'],
})
export class UploadFile {
  public config: DropzoneConfigInterface = {
    url: 'https://httpbin.org/post',
    maxFilesize: 50,
    acceptedFiles: 'image/*',
    addRemoveLinks: true,
  };

  public text =
    '<i class="icon-cloud-up"></i><h6>Drop files here or click to upload.</h6>(This is just a demo dropzone.Selected files are <strong>not</strong> actually uploaded.)';
}
