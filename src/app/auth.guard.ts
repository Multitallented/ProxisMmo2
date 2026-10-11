import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import {AuthService} from './authService';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Read the current state of the login status
  if (authService.isLoggedIn()) {
    return true;
  }

  // Redirect to login page if they are not logged in
  return router.parseUrl('/login');
};
