import { Component } from '@angular/core';

import { BecomeMembers } from '../../../../shared/data/component/e-commerce/pricing';

@Component({
  selector: 'app-become-member',
  imports: [],
  templateUrl: './become-member.html',
  styleUrls: ['./become-member.scss'],
})
export class BecomeMember {
  public becomememberData = BecomeMembers;
}
