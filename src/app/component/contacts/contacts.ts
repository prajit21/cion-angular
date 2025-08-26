import { Component } from '@angular/core';

import { ContactSidemenu } from './contact-sidemenu/contact-sidemenu';

@Component({
  selector: 'app-contacts',
  imports: [ContactSidemenu],
  templateUrl: './contacts.html',
  styleUrls: ['./contacts.scss'],
})
export class Contacts {}
