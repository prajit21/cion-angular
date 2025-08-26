import { Routes } from '@angular/router';

import { UserProfile } from './user-profile/user-profile';
import { UsersCards } from './users-cards/users-cards';
import { UsersEdit } from './users-edit/users-edit';

export default [
  {
    path: 'users-profile',
    component: UserProfile,
    data: {
      title: 'Users Profil',
      breadcrumb: 'Users Profile',
    },
  },
  {
    path: 'users-edit',
    component: UsersEdit,
    data: {
      title: 'Users Edit',
      breadcrumb: 'Users Edit',
    },
  },
  {
    path: 'users-cards',
    component: UsersCards,
    data: {
      title: 'Users Cards',
      breadcrumb: 'Users Cards',
    },
  },
] as Routes;
