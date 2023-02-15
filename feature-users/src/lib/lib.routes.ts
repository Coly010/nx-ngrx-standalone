import { Route } from '@angular/router';
import { FeatureUsersComponent } from './feature-users/feature-users.component';
import { provideStore, provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import * as fromUsers from './+state/users.reducer';
import { UsersEffects } from './+state/users.effects';

export const featureUsersRoutes: Route[] = [
  {
    path: '',
    component: FeatureUsersComponent,
    providers: [
      provideState(fromUsers.USERS_FEATURE_KEY, fromUsers.usersReducer),
      provideEffects(UsersEffects),
    ],
  },
];
