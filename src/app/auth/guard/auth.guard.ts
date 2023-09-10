import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private apiService: ApiService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.apiService.isAuthenticated()) {
      return true; // Usuario autenticado, permite el acceso a la ruta
    } else {
      // Usuario no autenticado, redirige a la página de inicio de sesión
      this.router.navigate(['/login']);
      return false; // No permite el acceso a la ruta
    }
  }
  
}
