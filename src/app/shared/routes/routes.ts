import { Routes } from '@angular/router';

export const content: Routes = [
  {
    path: 'dashboard',
    data: {
      title: 'Dashboard',
      breadcrumb: 'Dashboard',
    },
    loadChildren: () => import('../../component/dashboards/dashboards.routes'),
  },
  {
    path: 'widget',
    data: {
      title: 'Widget',
      breadcrumb: 'Widget',
    },
    loadChildren: () => import('../../component/widget/widget.routes'),
  },
  {
    path: 'page-layout',
    data: {
      title: 'Page-layout',
      breadcrumb: 'Page-layout',
    },
    loadChildren: () => import('../../component/page-layout/page-layout.routes'),
  },
  {
    path: 'ui-kits',
    data: {
      title: 'Ui-kits',
      breadcrumb: 'Ui-kits',
    },
    loadChildren: () => import('../../component/ui-kits/ui-kits.routes'),
  },
  {
    path: 'bonus-ui',
    data: {
      title: 'Bonus-ui',
      breadcrumb: 'Bonus-ui',
    },
    loadChildren: () => import('../../component/bonus-ui/bonus-ui.routes'),
  },
  {
    path: 'icon',
    data: {
      title: 'Icon',
      breadcrumb: 'Icon',
    },
    loadChildren: () => import('../../component/icons/icons.routes'),
  },
  {
    path: 'button',
    data: {
      title: 'Buttons',
      breadcrumb: 'Buttons',
    },
    loadChildren: () => import('../../component/buttons/buttons.routes'),
  },
  {
    path: 'form-controls',
    data: {
      title: 'Forms Controls',
      breadcrumb: 'Forms Controls',
    },
    loadChildren: () => import('../../component/forms/forms-controls/forms-fontrol.routes'),
  },
  {
    path: 'form-Widgets',
    data: {
      title: 'Form Widgets',
      breadcrumb: 'Form Widgets',
    },
    loadChildren: () => import('../../component/forms/forms-widgets/forms-widgets.routes'),
  },
  {
    path: 'bootstrap-tables',
    data: {
      title: 'Bootstrap Tables',
      breadcrumb: 'Bootstrap Tables',
    },
    loadChildren: () => import('../../component/table/bootstrap-tables/bootstrap-tables.routes'),
  },
  {
    path: 'data-table',
    data: {
      title: 'Data Tables',
      breadcrumb: 'Data Tables',
    },
    loadChildren: () => import('../../component/table/data-table/data-table.routes'),
  },
  {
    path: 'charts',
    data: {
      title: 'Charts',
      breadcrumb: 'Charts',
    },
    loadChildren: () => import('../../component/charts/charts.routes'),
  },
  {
    path: 'project',
    data: {
      title: 'Project',
      breadcrumb: 'Project',
    },
    loadChildren: () => import('../../component/project/project.routes'),
  },
  {
    path: 'file-manager',
    data: {
      title: 'File manager',
      breadcrumb: 'File manager',
    },
    loadChildren: () => import('../../component/file-manager/file-manager.routes'),
  },
  {
    path: 'ecommerce',
    data: {
      title: 'Ecommerce',
      breadcrumb: 'Ecommerce',
    },
    loadChildren: () => import('../../component/ecommerce/ecommerce.routes'),
  },
  {
    path: 'email',
    data: {
      title: 'Email',
      breadcrumb: 'Email',
    },
    loadChildren: () => import('../../component/email/email.routes'),
  },
  {
    path: 'chat',
    data: {
      title: 'Chat',
      breadcrumb: 'Chat',
    },
    loadChildren: () => import('../../component/chat/chat.routes'),
  },
  {
    path: 'user',
    data: {
      title: 'User',
      breadcrumb: 'Users',
    },
    loadChildren: () => import('../../component/user/user.routes'),
  },
  {
    path: 'bookmark',
    data: {
      breadcrumb: 'Apps',
    },
    loadChildren: () => import('../../component/bookmarks/bookmarks.routes'),
  },
  {
    path: 'contacts',
    data: {
      breadcrumb: 'Apps',
    },
    loadChildren: () => import('../../component/contacts/contacts.routes'),
  },
  {
    path: 'task',
    data: {
      breadcrumb: 'Apps',
    },
    loadChildren: () => import('../../component/tasks/tasks.routes'),
  },
  {
    path: 'calendar',
    data: {
      breadcrumb: 'Apps',
    },
    loadChildren: () => import('../../component/calender/calender.routes'),
  },
  {
    path: 'social-app',
    data: {
      breadcrumb: 'Apps',
    },
    loadChildren: () => import('../../component/social-app/soical-app.routes'),
  },
  {
    path: 'to-do',
    data: {
      breadcrumb: 'Apps',
    },
    loadChildren: () => import('../../component/to-do/to-do.routes'),
  },
  {
    path: 'search-result',
    data: {
      breadcrumb: 'Apps',
    },
    loadChildren: () => import('../../component/search-result/search-result.routes'),
  },
  {
    path: 'sample-page',
    data: {
      breadcrumb: 'Pages',
    },
    loadChildren: () => import('../../component/sample-page/sample-page.routes'),
  },
  {
    path: 'gallary',
    data: {
      breadcrumb: 'Gallery',
    },
    loadChildren: () => import('../../component/gallery/gallery.routes'),
  },
  {
    path: 'blog',
    data: {
      breadcrumb: 'Blog',
    },
    loadChildren: () => import('../../component/blog/blog.routes'),
  },
  {
    path: 'faq',
    data: {
      breadcrumb: 'FAQ',
    },
    loadChildren: () => import('../../component/faq/faq.routes'),
  },
  {
    path: 'job-search',
    data: {
      breadcrumb: 'Job Search',
    },
    loadChildren: () => import('../../component/job-search/job-search.routes'),
  },
  {
    path: 'learning',
    data: {
      breadcrumb: 'Learning',
    },
    loadChildren: () => import('../../component/learning/learning.routes'),
  },
  {
    path: 'maps',
    data: {
      breadcrumb: 'Maps',
    },
    loadChildren: () => import('../../component/maps/maps.routes'),
  },
  {
    path: 'editors',
    data: {
      breadcrumb: 'Editors',
    },
    loadChildren: () => import('../../component/editors/editors.routes'),
  },
  {
    path: 'knowledgebase',
    data: {
      breadcrumb: 'knowledgebase',
    },
    loadChildren: () => import('../../component/knowlegebase/knowlegebase.routes'),
  },
  {
    path: 'support-ticket',
    data: {
      breadcrumb: 'Apps',
    },
    loadChildren: () => import('../../component/support-ticket/support-ticket.routes'),
  },
];
