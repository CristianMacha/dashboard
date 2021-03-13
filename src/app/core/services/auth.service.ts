import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators';

import { ISignup, ISignin } from '../../shared/interfaces/auth.interface';
import { environment } from '../../../environments/environment';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private uri: string;
  constructor(private http: HttpClient, private router: Router) {
    this.uri = `${environment.URI_BACK}/auth`;
  }

  signup(model: ISignup) {
    return this.http.post(`${this.uri}/signup`, model);
  }

  signin(model: ISignin) {
    return this.http.post(`${this.uri}/login`, model).pipe(
      tap((resp: any) => {
        localStorage.setItem('x-token', resp.token);
      }),
      map((resp: any) => {
        return resp.token ? true : false;
      }),
      catchError((err) => of(false))
    );
  }

  validateToken() {
    const token = localStorage.getItem('x-token');
    return token ? of(true) : of(false);
  }

  closeSession() {
    localStorage.removeItem('x-token');
    this.router.navigateByUrl('/login');
  }
}
