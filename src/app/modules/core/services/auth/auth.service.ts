import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Shell } from 'base/components/shell';
import { HttpService } from 'core/services/http/http.service';

@Injectable({
  providedIn: 'root'
})

/**
 * Auth Services
 * the main service for authentications
 */
export class AuthService extends HttpService {


  get Router(): Router { return Shell.Injector.get(Router); }
  get baseUrl(): string {
    return 'accounts/';
  }

  login(loginData): Observable<any> {
    return this.postReq('', loginData);
  }

  redirectToLogin(): void {
    this.Router.navigate(['/login']);
  }

  changePassword(model): Observable<any> {
    return this.http.post(this.serverUrl + '', model);
  }
  forgetPassword(model) {
    return this.http.post(this.serverUrl + '', model);
  }
  resetPassword(model): Observable<any> {
    return this.http.post(this.serverUrl + '', model);
  }
  async checkToken(myRawToken) {

    const helper = new JwtHelperService();
    console.log('start checkToken :', myRawToken);
    const decodedToken = helper.decodeToken(myRawToken);
    console.log('decodedToken:', decodedToken);
    const expirationDate = helper.getTokenExpirationDate(myRawToken);
    console.log('expirationDate:', expirationDate);

    const isExpired = helper.isTokenExpired(myRawToken);
    console.log('isExpired:', isExpired);

  }
  async validateToken(token) {

    const helper = new JwtHelperService();
    console.log('start checkToken :', token);
    const decodedToken = helper.decodeToken(token);
    console.log('decodedToken:', decodedToken);

    const isExpired = helper.isTokenExpired(token);
    if (!isExpired) {

    }
    return !isExpired;
  }
}

interface UserProfile {
  isManager: boolean,
  organizationData: any,
  claims: any
}
