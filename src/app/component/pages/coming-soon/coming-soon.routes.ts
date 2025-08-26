import { Routes } from '@angular/router';

import { ComingSimple } from './coming-simple/coming-simple';
import { ComingWithBgImage } from './coming-with-bg-image/coming-with-bg-image';
import { ComingWithBgVideo } from './coming-with-bg-video/coming-with-bg-video';

export default [
  {
    path: 'coming-simple',
    component: ComingSimple,
  },
  {
    path: 'coming-with-bg-video',
    component: ComingWithBgVideo,
  },
  {
    path: 'coming-with-bg-image',
    component: ComingWithBgImage,
  },
] as Routes;
