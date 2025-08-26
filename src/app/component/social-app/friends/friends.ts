import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import * as data from '../../../shared/data/component/user/users-card';

@Component({
  selector: 'app-friends',
  imports: [RouterModule],
  templateUrl: './friends.html',
  styleUrls: ['./friends.scss'],
})
export class Friends {
  public friendsData = data.userCard;
}
