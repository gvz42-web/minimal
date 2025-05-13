import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { User } from '../model/user';
import { computed, effect, inject } from '@angular/core';
import { AuthHttp } from './auth-http';
import { Credentials } from '../model/auth';
import { tapResponse } from '@ngrx/operators';
import { pipe, switchMap } from 'rxjs';
import { LocalStorage } from '../../../shared/core/browser-apis/local-storage';
import { rxMethod } from '@ngrx/signals/rxjs-interop';

type AuthState = {
  user: User | null;
  token: string | null;
};

const initialState: AuthState = {
  user: null,
  token: null,
};

export const AuthStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(store => ({
    isLoggedIn: computed(() => !!store.token()),
  })),
  withMethods((store, authHttp = inject(AuthHttp)) => {
    const loadProfile = () => {
      return authHttp.getProfile().pipe(
        tapResponse({
          next: user => {
            patchState(store, { user });
          },
          error: console.error,
        })
      );
    };

    const login = (credentials: Credentials) => {
      return authHttp.login(credentials).pipe(
        tapResponse({
          next: token => {
            patchState(store, { token });
          },
          error: console.error,
        }),
        switchMap(() => loadProfile())
      );
    };

    const logout = () => {
      patchState(store, { token: null, user: null });
    };

    return {
      login,
      logout,
      loadProfile,
      loadProfileRxMethod: rxMethod<void>(pipe(switchMap(() => loadProfile()))),
    };
  }),
  withHooks({
    onInit(store, localStorage = inject(LocalStorage)) {
      const token = localStorage.get('token');

      if (token) {
        patchState(store, { token });
        store.loadProfileRxMethod();
      }

      effect(() => {
        const token = store.token();
        if (token) {
          localStorage.set('token', token);
        } else {
          localStorage.delete('token');
        }
      });
    },
  })
);
