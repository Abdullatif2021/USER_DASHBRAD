import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../services/user.service';
import * as UserActions from './user.actions';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
  private actions$ = inject(Actions);
  private userService = inject(UserService);

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      mergeMap((action) =>
        this.userService.getUsersByPage(action.page).pipe(
          map((response) =>
            UserActions.loadUsersSuccess({
              users: response.data,
              total: response.total,
              page: action.page,
            })
          ),
          catchError((error) => of(UserActions.loadUsersFailure({ error })))
        )
      )
    )
  );
}
