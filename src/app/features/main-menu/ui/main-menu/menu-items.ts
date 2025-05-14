import { computed, inject } from '@angular/core';
import { AuthStore } from '@feautres/auth/core/auth-store';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { useOpenPrompt } from 'app/shared/ui/prompt/use-open-prompt';
import { pipe, switchMap, tap } from 'rxjs';

export type MenuItem = {
  label: string;
  path?: string[];
  action?: () => void;
};

export const useMenuItems = () => {
  const authStore = inject(AuthStore);
  const openPrompt = useOpenPrompt();

  const MENU = {
    LOGIN: {
      label: 'mainMenu.login',
      path: ['/login'],
    },
    LOGOUT: {
      label: 'mainMenu.logout',
      action: rxMethod<void>(
        pipe(
          switchMap(() =>
            openPrompt({
              text: 'common.areYouSure',
            }).pipe(
              tap(agree => {
                if (agree) {
                  authStore.logout();
                }
              })
            )
          )
        )
      ),
    },
    PROFILE: {
      label: 'mainMenu.profile',
      path: ['/profile'],
    },
    SETTINGS: {
      label: 'mainMenu.settings',
      path: ['/settings'],
    },
  };

  return computed((): MenuItem[] => {
    if (authStore.isLoggedIn()) {
      return [MENU.PROFILE, MENU.SETTINGS, MENU.LOGOUT];
    } else {
      return [MENU.SETTINGS, MENU.LOGIN];
    }
  });
};
