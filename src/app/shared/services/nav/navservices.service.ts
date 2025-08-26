import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

export interface Menu {
  id?: number;
  headTitle1?: string;
  mainTitle?: string;
  path?: string;
  title?: string;
  icon?: string;
  type?: string;
  badgeType?: string;
  badgeValue?: string;
  active?: boolean;
  bookmark?: boolean;
  item?: Menu[];
  children?: Menu[];
}

@Injectable({
  providedIn: 'root',
})
export class NavservicesService {
  public language: boolean = false;
  public collapseSidebar: boolean = window.innerWidth < 1200 ? true : false;
  public horizontal: boolean = window.innerWidth < 1200 ? false : true;
  public isDisplay!: boolean;
  public search!: boolean;
  public isShow: boolean = false;

  constructor() {}

  Nvabarmenu: Menu[] = [
    {
      id: 1,
      icon: 'home',
      mainTitle: 'General',
      headTitle1: 'General',
      item: [
        {
          title: 'Dashboard',
          icon: 'home',
          type: 'sub',
          active: false,
          children: [
            { path: '/dashboard/default', title: 'Shopping Place', type: 'link' },
            { path: '/dashboard/crm-dashboard', title: 'CRM Dashboard', type: 'link' },
          ],
        },
        {
          title: 'Widget',
          icon: 'widget',
          type: 'sub',
          active: false,
          children: [
            { path: '/widget/general', title: 'General', type: 'link' },
            { path: '/widget/chart', title: 'Chart', type: 'link' },
          ],
        },
        {
          title: 'Page Layout',
          icon: 'layout',
          type: 'sub',
          active: false,
          children: [
            { path: '/page-layout/hide-nav-scroll', title: 'Hide Nav Scroll', type: 'link' },
            { path: '/page-layout/footer-light', title: 'Footer Light', type: 'link' },
            { path: '/page-layout/footer-dark', title: 'Footer Dark', type: 'link' },
            { path: '/page-layout/footer-fixed', title: 'Footer Fixed', type: 'link' },
          ],
        },
      ],
    },
    {
      id: 2,
      icon: 'Ui-kites',
      mainTitle: 'Ui Kits',
      headTitle1: 'COMPONENTS',
      item: [
        {
          title: 'Ui-kites',
          icon: 'ui-kits',
          type: 'sub',
          active: false,
          children: [
            { path: '/ui-kits/typography', title: 'Typography', type: 'link' },
            { path: '/ui-kits/avatars', title: 'Avatars', type: 'link' },
            { path: '/ui-kits/helper-classes', title: 'Helper-Classes', type: 'link' },
            { path: '/ui-kits/grid', title: 'Grid', type: 'link' },
            { path: '/ui-kits/tag-pills', title: 'Tag & Pills', type: 'link' },
            { path: '/ui-kits/progress-bar', title: 'Progress', type: 'link' },
            { path: '/ui-kits/modal', title: 'Modal', type: 'link' },
            { path: '/ui-kits/alert', title: 'Alert', type: 'link' },
            { path: '/ui-kits/popover', title: 'Popover', type: 'link' },
            { path: '/ui-kits/tooltip', title: 'Tooltip', type: 'link' },
            { path: '/ui-kits/dropdown', title: 'Dropdown', type: 'link' },
            { path: '/ui-kits/accordion', title: 'Accordion', type: 'link' },
            { path: '/ui-kits/tab', title: 'Tabs', type: 'link' },
            { path: '/ui-kits/list', title: 'List', type: 'link' },
          ],
        },
      ],
    },
    {
      id: 3,
      icon: 'Perk-Ui',
      mainTitle: 'Perk-Ui',
      headTitle1: 'COMPONENTS',
      item: [
        {
          title: 'Bonus UI',
          icon: 'bonus-kit',
          type: 'sub',
          active: false,
          children: [
            { path: '/bonus-ui/toasts', title: 'Toasts', type: 'link' },
            { path: '/bonus-ui/rating', title: 'Rating', type: 'link' },
            { path: '/bonus-ui/dropzone', title: 'Dropzone', type: 'link' },
            { path: '/bonus-ui/sweetalert2', title: 'SweetAlert2', type: 'link' },
            { path: '/bonus-ui/owl-carousel', title: 'Owl carousel', type: 'link' },
            { path: '/bonus-ui/ribbons', title: 'Ribbons', type: 'link' },
            { path: '/bonus-ui/pagination', title: 'Pagination', type: 'link' },
            { path: '/bonus-ui/breadcrumb', title: 'Breadcrumb', type: 'link' },
            { path: '/bonus-ui/range-slider', title: 'Range Slider', type: 'link' },
            { path: '/bonus-ui/image-cropper', title: 'Image Cropper', type: 'link' },
            { path: '/bonus-ui/basic-card', title: 'Basic Card', type: 'link' },
            { path: '/bonus-ui/creative-card', title: 'Creative Card', type: 'link' },
            { path: '/bonus-ui/timeline', title: 'Timeline', type: 'link' },
          ],
        },
        {
          title: 'Icons',
          icon: 'icons',
          type: 'sub',
          active: false,
          children: [
            { path: '/icon/flag-icons', title: 'Flag icon', type: 'link' },
            { path: '/icon/fontawesome-icon', title: 'Fontawesome Icon', type: 'link' },
            { path: '/icon/ico-icon', title: 'Ico Icon', type: 'link' },
            { path: '/icon/themify-icon', title: 'Themify Icon', type: 'link' },
            { path: '/icon/feather-icon', title: 'Feather Icon', type: 'link' },
            { path: '/icon/weather-icon', title: 'Wheather Icon', type: 'link' },
          ],
        },
        {
          title: 'Buttons',
          icon: 'button',
          type: 'sub',
          active: false,
          children: [
            { path: '/button/default-style', title: 'Default Style', type: 'link' },
            { path: '/button/flat-style', title: 'Flat Style', type: 'link' },
            { path: '/button/edge-style', title: 'Edge Style', type: 'link' },
            { path: '/button/raised-style', title: 'Raised Style', type: 'link' },
            { path: '/button/button-group', title: 'Button Group', type: 'link' },
          ],
        },
      ],
    },
    {
      id: 4,
      icon: 'Form',
      mainTitle: 'Forms',
      headTitle1: 'FORMS & TABLES',
      item: [
        {
          title: 'Forms',
          icon: 'Form',
          type: 'sub',
          active: false,
          children: [
            {
              title: 'Form Controls',
              type: 'sub',
              active: false,
              children: [
                { path: '/form-controls/form-validation', title: 'Form Validation', type: 'link' },
                {
                  path: '/form-controls/base-inputs',
                  title: 'Base Inputs',
                  type: 'link',
                },
                { path: '/form-controls/checkbox-Radio', title: 'Checkbox & Radio', type: 'link' },
                { path: '/form-controls/input-groups', title: 'Input Groups', type: 'link' },
                {
                  path: '/form-controls/input-mask',
                  title: 'Input Mask',
                  type: 'link',
                },
                {
                  path: '/form-controls/mega-options',
                  title: 'Mega Options',
                  type: 'link',
                },
              ],
            },
            {
              title: 'Form Widgets',
              type: 'sub',
              active: false,
              children: [
                { path: '/form-Widgets/datepicker', title: 'Datepicker', type: 'link' },
                { path: '/form-Widgets/touchspin', title: 'Touchspin', type: 'link' },
                { path: '/form-Widgets/select2', title: 'Select2', type: 'link' },
                { path: '/form-Widgets/switch', title: 'Switch', type: 'link' },
                { path: '/form-Widgets/typeahead', title: 'Typeahead', type: 'link' },
                { path: '/form-Widgets/clipboard', title: 'Clipboard', type: 'link' },
              ],
            },
          ],
        },
        {
          title: 'Tables',
          icon: 'table',
          type: 'sub',
          active: false,
          bookmark: true,
          children: [
            {
              title: 'Bootstrap Tables',
              type: 'link',
              active: false,
              children: [
                { path: '/bootstrap-tables/basic-tables', title: 'Basic Tables', type: 'link' },
                {
                  path: '/bootstrap-tables/table-components',
                  title: 'Table Components2',
                  type: 'link',
                },
              ],
            },
            {
              title: 'Data Tables',
              type: 'link',
              active: false,
              path: '/data-table',
            },
          ],
        },
      ],
    },
    {
      id: 5,
      icon: 'charts',
      mainTitle: 'Charts',
      headTitle1: 'COMPONENTS',
      item: [
        {
          title: 'Charts',
          icon: 'charts',
          type: 'sub',
          active: false,
          children: [
            { path: '/charts/apex-chart', title: 'Apex Chart', type: 'link' },
            { path: '/charts/google-chart', title: 'Google Chart', type: 'link' },
            { path: '/charts/chatjs-chart', title: 'Chatjs Chart', type: 'link' },
            { path: '/charts/chartist-chart', title: 'Chartist Chart', type: 'link' },
          ],
        },
      ],
    },
    {
      id: 6,
      icon: 'editors',
      mainTitle: 'Apps',
      headTitle1: 'APPLICATION',
      active: false,
      item: [
        {
          title: 'Projects',
          icon: 'project',
          type: 'sub',
          active: false,
          children: [
            { path: '/project/project-list', title: 'Project List', type: 'link' },
            { path: '/project/create-new', title: 'Create New', type: 'link' },
          ],
        },
        {
          title: 'File Manager',
          type: 'link',
          icon: 'file',
          active: false,
          path: '/file-manager',
        },
        {
          title: 'Ecommerce',
          icon: 'ecommerce',
          type: 'sub',
          active: false,
          children: [
            { path: '/ecommerce/product', title: 'Product', type: 'link' },
            { path: '/ecommerce/product-page', title: 'Product page', type: 'link' },
            { path: '/ecommerce/product-list', title: 'Product List', type: 'link' },
            { path: '/ecommerce/payment-details', title: 'Payment Details', type: 'link' },
            { path: '/ecommerce/order-history', title: 'Order History', type: 'link' },
            { path: '/ecommerce/invoice', title: 'Invoice', type: 'link' },
            { path: '/ecommerce/cart', title: 'Cart', type: 'link' },
            { path: '/ecommerce/wishlist', title: 'Wishlist', type: 'link' },
            { path: '/ecommerce/checkout', title: 'Checkout', type: 'link' },
            { path: '/ecommerce/pricing', title: 'Pricing', type: 'link' },
          ],
        },
        {
          title: 'Email',
          icon: 'email',
          type: 'sub',
          active: false,
          children: [
            { path: '/email/email-app', title: 'Email App', type: 'link' },
            { path: '/email/email-compose', title: 'Email Compose', type: 'link' },
          ],
        },
        {
          title: 'Chat',
          icon: 'chat',
          type: 'sub',
          active: false,
          children: [
            { path: '/chat/chat-app', title: 'Chat App', type: 'link' },
            { path: '/chat/video-chat', title: 'Video Chat', type: 'link' },
          ],
        },
        {
          title: 'Users',
          icon: 'user',
          type: 'sub',
          active: false,
          children: [
            { path: '/user/users-profile', title: 'Users Profile', type: 'link' },
            { path: '/user/users-edit', title: 'Users Edit', type: 'link' },
            { path: '/user/users-cards', title: 'Users Cards', type: 'link' },
          ],
        },
        {
          title: 'Bookmarks',
          icon: 'bookmark',
          type: 'link',
          active: false,
          path: '/bookmark',
          bookmark: true,
        },
        {
          title: 'Contact',
          icon: 'contact',
          type: 'link',
          active: false,
          path: '/contacts',
          bookmark: true,
        },
        {
          title: 'Task',
          icon: 'task',
          type: 'link',
          active: false,
          path: '/task',
        },
        {
          title: 'Calendar',
          icon: 'calender',
          type: 'link',
          active: false,
          path: '/calendar',
        },
        {
          title: 'Social App',
          icon: 'social',
          type: 'link',
          active: false,
          path: '/social-app',
        },
        {
          title: 'To-Do',
          icon: 'to-do',
          type: 'link',
          active: false,
          path: '/to-do',
        },
        {
          title: 'Search Result',
          icon: 'search',
          type: 'link',
          active: false,
          path: '/search-result',
        },
      ],
    },
    {
      id: 7,
      icon: 'Grid',
      mainTitle: 'Pages',
      headTitle1: 'Miscellaneous',
      item: [
        {
          title: 'Sample page',
          icon: 'sample-page',
          type: 'link',
          active: false,
          path: '/sample-page',
        },
        {
          title: 'Other',
          icon: 'others',
          type: 'sub',
          active: false,
          children: [
            {
              title: 'Error Pages',
              type: 'sub',
              icon: 'landing-page',
              active: false,
              children: [
                { path: '/error-page/error400', title: 'Error Page 400', type: 'link' },
                { path: '/error-page/error401', title: 'Error Page 401', type: 'link' },
                { path: '/error-page/error403', title: 'Error Page 403', type: 'link' },
                { path: '/error-page/error404', title: 'Error Page 404', type: 'link' },
                { path: '/error-page/error500', title: 'Error Page 500', type: 'link' },
                { path: '/error-page/error503', title: 'Error Page 503', type: 'link' },
              ],
            },
            {
              title: 'Authentication',
              type: 'sub',
              icon: 'board',
              active: false,
              children: [
                { path: '/authentication/simple', title: 'Login Simple', type: 'link' },
                { path: '/authentication/image-one', title: 'Login with Bg image', type: 'link' },
                { path: '/authentication/image-two', title: 'Login with Image two', type: 'link' },
                {
                  path: '/authentication/validation',
                  title: 'Login with Validation',
                  type: 'link',
                },
                { path: '/authentication/tooltip', title: 'Login with Tooltip', type: 'link' },
                {
                  path: '/authentication/login-sweetalert',
                  title: 'Login with Sweetalert',
                  type: 'link',
                },
                { path: '/authentication/register-simple', title: 'Register Simple', type: 'link' },
                {
                  path: '/authentication/register-image-one',
                  title: 'Register with Bg image',
                  type: 'link',
                },
                {
                  path: '/authentication/register-image-two',
                  title: 'Register with image two',
                  type: 'link',
                },
                { path: '/authentication/unlock-user', title: 'Unlock User', type: 'link' },
                { path: '/authentication/forgot-password', title: 'Forgot Password', type: 'link' },
                { path: '/authentication/reset-password', title: 'Reset Password', type: 'link' },
                { path: '/authentication/maintenance', title: 'Maintenance', type: 'link' },
              ],
            },
            {
              title: 'Coming Soon',
              type: 'sub',
              icon: 'faq',
              active: false,
              children: [
                { path: '/coming-soon/coming-simple', title: 'Coming Simple', type: 'link' },
                {
                  path: '/coming-soon/coming-with-bg-video',
                  title: 'Coming with Bg video',
                  type: 'link',
                },
                {
                  path: '/coming-soon/coming-with-bg-image',
                  title: 'Coming with Bg Image',
                  type: 'link',
                },
              ],
            },
            {
              path: '',
              title: 'Email Templates',
              type: 'link',
              children: [
                {
                  path: 'https://admin.pixelstrap.com/cion/template/basic-template.html',
                  title: 'Basic Email',
                  type: 'extTabLink',
                },
                {
                  path: 'https://admin.pixelstrap.com/cion/template/email-header.html',
                  title: 'Basic With Header',
                  type: 'extTabLink',
                },
                {
                  path: 'https://admin.pixelstrap.com/cion/template/template-email.html',
                  title: 'Ecomerce Template',
                  type: 'extTabLink',
                },
                {
                  path: 'https://admin.pixelstrap.com/cion/template/template-email-2.html',
                  title: 'Email Template 2',
                  type: 'extTabLink',
                },
                {
                  path: 'https://admin.pixelstrap.com/cion/template/ecommerce-templates.html',
                  title: 'Ecommerce Email',
                  type: 'extTabLink',
                },
                {
                  path: 'https://admin.pixelstrap.com/cion/template/email-order-success.html',
                  title: 'Order Success',
                  type: 'extTabLink',
                },
              ],
            },
          ],
        },
        {
          title: 'Gallery',
          icon: 'gallery',
          type: 'sub',
          active: false,
          children: [
            { path: '/gallary/gallery-grid', title: 'Gallery Grid', type: 'link' },
            { path: '/gallary/gallery-grid-desc', title: 'Gallery Grid Desc', type: 'link' },
            { path: '/gallary/masonry-gallery', title: 'Masonry Gallery', type: 'link' },
            { path: '/gallary/masonry-with-desc', title: 'Masonry With Desc', type: 'link' },
            { path: '/gallary/hover-effects', title: 'Hover Effects', type: 'link' },
          ],
        },
        {
          title: 'Blog',
          icon: 'blog',
          type: 'sub',
          active: false,
          children: [
            { path: '/blog/blog-details', title: 'Blog Details', type: 'link' },
            { path: '/blog/blog-single', title: 'Blog Single', type: 'link' },
            { path: '/blog/add-post', title: 'Add Post', type: 'link' },
          ],
        },

        {
          title: 'Faq',
          icon: 'faq',
          type: 'link',
          active: false,
          path: '/faq',
        },
        {
          title: 'Job-Search',
          icon: 'job-search',
          type: 'sub',
          active: false,
          children: [
            { path: '/job-search/cards-view', title: 'Card View', type: 'link' },
            { path: '/job-search/list-view', title: 'List View', type: 'link' },
            { path: '/job-search/job-details', title: 'Job Detail', type: 'link' },
            { path: '/job-search/apply', title: 'Apply', type: 'link' },
          ],
        },
        {
          title: 'Learning',
          icon: 'learning',
          type: 'sub',
          active: false,
          children: [
            { path: '/learning/learning-list', title: 'Learning List', type: 'link' },
            { path: '/learning/detailed-course', title: 'Detailed Course', type: 'link' },
          ],
        },
        {
          title: 'Maps',
          icon: 'maps',
          type: 'sub',
          active: false,
          children: [
            { path: '/maps/google-map', title: 'Google Map', type: 'link' },
            { path: '/maps/leaflet-map', title: 'Leaflet Maps', type: 'link' },
          ],
        },
        {
          title: 'Editors',
          icon: 'editors',
          type: 'sub',
          active: false,
          children: [
            { path: '/editors/ngx-editors', title: 'Ngx Editor', type: 'link' },
            { path: '/editors/mde-editors', title: 'MDE Editor', type: 'link' },
          ],
        },
        {
          title: 'Knowledgebase',
          icon: 'knowledgebase',
          type: 'link',
          active: false,
          path: '/knowledgebase',
        },
        {
          title: 'Support Ticket',
          icon: 'support-tickets',
          type: 'link',
          active: false,
          path: '/support-ticket',
        },
      ],
    },
    {
      id: 6,
      icon: 'sample-page',
      mainTitle: 'Other',
      type: 'link',
      path: '/dashboard/crm-dashboard',
      active: false,
    },
  ];
  items = new BehaviorSubject<Menu[]>(this.Nvabarmenu);
}
