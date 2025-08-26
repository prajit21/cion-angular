import { Component } from '@angular/core';

import { BadgeHeadingse } from './badge-headingse/badge-headingse';
import { BadgePill } from './badge-pill/badge-pill';
import { BadgesPartbuttons } from './badges-partbuttons/badges-partbuttons';
import { IconBadgePills } from './icon-badge-pills/icon-badge-pills';
import { NumberBedgeTag } from './number-bedge-tag/number-bedge-tag';

@Component({
  selector: 'app-tag-pills',
  imports: [BadgePill, NumberBedgeTag, IconBadgePills, BadgeHeadingse, BadgesPartbuttons],
  templateUrl: './tag-pills.html',
  styleUrls: ['./tag-pills.scss'],
})
export class TagPills {}
