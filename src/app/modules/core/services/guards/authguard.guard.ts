import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { IonicStorageService } from '../storage/ionicStorageService.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private storageService: IonicStorageService, private router: Router) { }


  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {

    const token = await this.storageService.get('token');
    if (token == null) {
      this.router.navigate(['/403']);

    }
    return true;
  }
}
