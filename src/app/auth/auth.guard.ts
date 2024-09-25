import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated'); 
  
  if (isAuthenticated === 'true') {
    return true; 
  } else {
    const router = inject(Router); 
    router.navigate(['/login']); 
    return false; 
  }
};
