import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'feature-users',
    loadChildren: () =>
      import('@myorg/feature-users').then((m) => m.featureUsersRoutes),
  },
];
