import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { IUserDTO } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private userData: IUserDTO[] = [
    {
      id: 123,
      name: 'User 1',
      email: 'user@modak.com',
      role: 'user'
    },
    {
      id: 456,
      name: 'Carlos Angulo',
      email: 'admin@modak.com',
      role: 'admin'
    },
  ];

  constructor() { }

  getUserById(userId: number): Observable <IUserDTO | undefined> {
    return of(this.userData.find(user => user.id === userId));
  }
}
