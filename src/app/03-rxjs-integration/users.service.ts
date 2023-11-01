import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { User } from './user.model';

const usersMock: User[] = [
  { id: 1, firstName: 'John', lastName: 'Smith' },
  { id: 2, firstName: 'Jane', lastName: 'Doe' },
  { id: 3, firstName: 'Bob', lastName: 'Brown' },
  { id: 4, firstName: 'Mary', lastName: 'Jones' },
  { id: 5, firstName: 'Kate', lastName: 'Parker' },
];

@Injectable({ providedIn: 'root' })
export class UsersService {
  getAll(): Promise<User[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(usersMock), 1000);
    });
  }

  getByQuery(query: string): Observable<User[]> {
    const filteredUsers = usersMock.filter(({ firstName, lastName }) =>
      `${firstName} ${lastName}`.toLowerCase().includes(query.toLowerCase()),
    );

    return of(filteredUsers).pipe(delay(500));
  }
}
