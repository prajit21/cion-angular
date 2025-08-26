import { Component, inject } from '@angular/core';

import { Gallery, GalleryItem, ImageItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox, LightboxModule } from 'ng-gallery/lightbox';

import { galleryGridData } from '../../../shared/data/component/gallery/gallery-grid';

@Component({
  selector: 'app-gallery-grid',
  imports: [LightboxModule],
  templateUrl: './gallery-grid.html',
  styleUrls: ['./gallery-grid.scss'],
})
export class GalleryGrid {
  public galleryGridData = galleryGridData;
  public items!: GalleryItem[];

  public gallery = inject(Gallery);
  public lightbox = inject(Lightbox);
  ngOnInit() {
    this.items = this.galleryGridData.map(
      item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }),
    );
    const lightboxRef = this.gallery.ref('lightbox');

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });

    lightboxRef.load(this.items);
  }
}
