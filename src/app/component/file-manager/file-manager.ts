import { Component } from '@angular/core';

import { FileItem } from './file-item/file-item';
import { FileManagerSidebar } from './file-manager-sidebar/file-manager-sidebar';

@Component({
  selector: 'app-file-manager',
  imports: [FileManagerSidebar, FileItem],
  templateUrl: './file-manager.html',
  styleUrls: ['./file-manager.scss'],
})
export class FileManager {}
