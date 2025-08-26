import { Routes } from '@angular/router';

import { BasicCard } from './basic-card/basic-card';
import { Breadcrumb } from './breadcrumb/breadcrumb';
import { CreativeCard } from './creative-card/creative-card';
import { Dropzone } from './dropzone/dropzone';
import { ImageCrop } from './image-cropper/image-cropper';
import { OwlCarousel } from './owl-carousel/owl-carousel';
import { Paginations } from './paginations/paginations';
import { RangeSlider } from './range-slider/range-slider';
import { Rating } from './rating/rating';
import { Ribbons } from './ribbons/ribbons';
import { Sweetalert2 } from './sweetalert2/sweetalert2';
import { Timeline } from './timeline/timeline';
import { Toasts } from './toasts/toasts';

export default [
  {
    path: 'toasts',
    component: Toasts,
    data: {
      title: 'Toasts',
      breadcrumb: 'Toasts',
    },
  },
  {
    path: 'rating',
    component: Rating,
    data: {
      title: 'Rating',
      breadcrumb: 'Rating',
    },
  },
  {
    path: 'dropzone',
    component: Dropzone,
    data: {
      title: 'Dropzone',
      breadcrumb: 'Dropzone',
    },
  },
  {
    path: 'sweetalert2',
    component: Sweetalert2,
    data: {
      title: 'Sweet Alert',
      breadcrumb: 'Sweet Alert',
    },
  },
  {
    path: 'owl-carousel',
    component: OwlCarousel,
    data: {
      title: 'Owl Carousel',
      breadcrumb: 'Owl Carousel',
    },
  },
  {
    path: 'ribbons',
    component: Ribbons,
    data: {
      title: 'Ribbons',
      breadcrumb: 'Ribbons',
    },
  },
  {
    path: 'pagination',
    component: Paginations,
    data: {
      title: 'Paginations',
      breadcrumb: 'Paginations',
    },
  },
  {
    path: 'breadcrumb',
    component: Breadcrumb,
    data: {
      title: 'Breadcrumb',
      breadcrumb: 'Breadcrumb',
    },
  },
  {
    path: 'range-slider',
    component: RangeSlider,
    data: {
      title: 'Range Slider',
      breadcrumb: 'Range Slider',
    },
  },
  {
    path: 'image-cropper',
    component: ImageCrop,
    data: {
      title: 'Image Cropper',
      breadcrumb: 'Image Cropper',
    },
  },
  {
    path: 'basic-card',
    component: BasicCard,
    data: {
      title: 'Basic Card',
      breadcrumb: 'Basic Card',
    },
  },
  {
    path: 'creative-card',
    component: CreativeCard,
    data: {
      title: 'Creative Card',
      breadcrumb: 'Creative Card',
    },
  },
  {
    path: 'timeline',
    component: Timeline,
    data: {
      title: 'Timeline',
      breadcrumb: 'Timeline',
    },
  },
] as Routes;
