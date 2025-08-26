import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgSelectModule } from '@ng-select/ng-select';
import { DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-blog-add-post',
  imports: [AngularEditorModule, NgSelectModule, FormsModule, DropzoneModule],
  templateUrl: './blog-add-post.html',
  styleUrls: ['./blog-add-post.scss'],
})
export class BlogAddPost {
  public selectedCityIds: string[] = [];
  public selectedCityId: number = 0;
  public selectedUserIds: number[] = [];
  public htmlContent = '';

  public cities2 = [
    { id: 1, name: 'LifeStyle' },
    { id: 2, name: 'Travel' },
  ];

  public config: DropzoneConfigInterface = {
    url: 'https://httpbin.org/post',
    maxFilesize: 50,
    addRemoveLinks: true,
  };

  public text =
    '<i class="icon-cloud-up"></i><h4 class="f-w-700 mb-0">Drag & Drop your files or Browse</h4>';
}
