// src/app/guards/auth.guard.ts
import { inject } from '@angular/core';
import {
  CanActivateFn,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import {jwtDecode} from 'jwt-decode';

interface JwtPayload {
  sub: string;
  roles: string[];
  exp: number;
}

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = inject(Router);

  const token = localStorage.getItem('jwtToken');
  if (!token) {
    router.navigate(['/login']);
    return false;
  }

  try {
    const decoded = jwtDecode<JwtPayload>(token);
    if (decoded.exp * 1000 < Date.now()) {
      localStorage.removeItem('jwtToken');
      router.navigate(['/login']);
      return false;
    }

    const allowedRoles = route.data['roles'] as string[] | undefined;
    if (allowedRoles && allowedRoles.length > 0) {
      const hasRole = decoded.roles.some(role => allowedRoles.includes(role));
      if (!hasRole) {
        router.navigate(['/unauthorized']);
        return false;
      }
    }

    return true;
  } catch (e) {
    localStorage.removeItem('jwtToken');
    router.navigate(['/login']);
    return false;
  }
};
