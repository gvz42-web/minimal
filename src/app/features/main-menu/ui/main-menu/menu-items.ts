import { computed, inject } from '@angular/core';
import { AuthStore } from '@feautres/auth/core/auth-store';

export type MenuItem = {
  label: string;
  path?: string[];
  action?: () => void;
};

export const useMenuItems = () => {
  const authStore = inject(AuthStore);

  const MENU = {
    LOGIN: {
      label: 'Login',
      path: ['/login'],
    },
    LOGOUT: {
      label: 'Logout',
      action: () => authStore.logout(),
    },
    PROFILE: {
      label: 'Profile',
      path: ['/profile'],
    },
    SETTINGS: {
      label: 'Settings',
      path: ['/settings'],
    },
  };

  return computed((): MenuItem[] => {
    if (authStore.isLoggedIn()) {
      return [MENU.PROFILE, MENU.SETTINGS, MENU.LOGOUT];
    } else {
      return [MENU.LOGIN];
    }
  });
};
