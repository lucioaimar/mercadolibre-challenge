import { Route } from '@angular/router';

export const PROFILE_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('client/app/features/profile/pages/profile-page/profile-page.component').then(
        (m) => m.ProfilePageComponent
      ),
  },
  {
    path: 'purchase/:id',
    loadComponent: () =>
      import(
        'client/app/features/profile/pages/purchase-detail-page/purchase-detail-page.component'
      ).then((m) => m.PurchaseDetailPageComponent),
  },
];
