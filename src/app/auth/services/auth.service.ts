import { Injectable } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';
import { map, delay, switchMap, filter } from 'rxjs/operators';
import { ILoginDTO } from '../models/auth.model';
import { UserDataService } from './user-data.service';
import { IUserDTO } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginDataList: ILoginDTO[] = [
    {
      id: 123,
      token: 'user-123-token',
      email: 'user@modak.com',
      password: '11111'
    },
    {
      id: 456,
      token: 'admin-456-token',
      email: 'admin@modak.com',
      password: '00000'
    },
  ];

  constructor(private userData: UserDataService) {}

  get isAuthenticated(): boolean {
    return this.isTokenValid();
  }

  get currentToken(): string | null {
    return localStorage.getItem('token');
  }

  login(email:string, password: string): Observable<IUserDTO | undefined> {
    return of({}).pipe(
      delay(100),
      map(() => {
        const loginData = this.loginDataList.find((data) => data.email === email);
        if (loginData && password === loginData.password) {
          this.setLocalStorageToken(loginData.token);
          return { success: true, token: loginData.token, userId: loginData.id };
        }
    
        return { success: false };
      }),
      switchMap( authResp => {
        if (authResp.success && authResp.userId) {
          return this.userData.getUserById(authResp.userId)
        } else {
          return of(undefined)
        }
      })
    )
  }

  setLocalStorageToken(token: string) {
    const expirationTime = Math.floor(Date.now() / 1000) + 120;
    localStorage.setItem('token', token);
    localStorage.setItem('tokenExpiration', expirationTime.toString());
  }

  authenticateWithToken(token: string): Observable<{ success: boolean, token?: string, userId?: number }> {
    return of({}).pipe(
      delay(100),
      map(() => {
        const loginData = this.loginDataList.find((data) => data.token === token);
        if (loginData) {
          this.setLocalStorageToken(loginData.token);
          return { success: true, token: loginData.token, userId: loginData.id };
        }
    
        return { success: false };
      })
    )
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpiration');
  }
  
  isAuthenticated$(): Observable<boolean> {
    return of(this.isAuthenticated);
  }

  getUserByToken(token: string): Observable<IUserDTO | undefined> {
    return this.authenticateWithToken(token)
    .pipe(
      filter((userData) => userData.success),
      switchMap( authResp => {
        if (authResp.success && authResp.userId) {
          return this.userData.getUserById(authResp.userId)
        } else {
          return of(undefined)
        }
      })
    )
  }

  private isTokenValid(): boolean {
    const tokenExpiration = localStorage.getItem('tokenExpiration');
    const token = localStorage.getItem('token');
    if (token && tokenExpiration) {
      const expirationTimeInSeconds = parseInt(tokenExpiration, 10);
      const currentTimeInSeconds = Math.floor(Date.now() / 1000);
      if (currentTimeInSeconds < expirationTimeInSeconds) {
        return true;
      }
    }
    return false;
  }
}
