import { Component, ChangeDetectionStrategy } from '@angular/core';

import { BecomeMembers } from '../../../../shared/data/component/e-commerce/pricing';

@Component({
  selector: 'app-become-member',
  imports: [],
  templateUrl: './become-member.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./become-member.scss'],
})
export class BecomeMember {
  public becomememberData = BecomeMembers;
}
