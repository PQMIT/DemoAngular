import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserMockService {
  private users: User[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice.j@example.com' },
    { id: 4, name: 'Bob Brown', email: 'bob.brown@example.com' },
  ];
  private nextId = 5;

  getUsers(): Observable<User[]> {
    return of(this.users).pipe(delay(500)); // Giả lập độ trễ
  }

  addUser(user: User): Observable<void> {
    user.id = this.nextId++;
    this.users.push(user);
    return of(undefined).pipe(delay(500));
  }

  updateUser(user: User): Observable<void> {
    const index = this.users.findIndex((u) => u.id === user.id);
    if (index !== -1) {
      this.users[index] = user;
    }
    return of(undefined).pipe(delay(500));
  }

  deleteUser(id: number): Observable<void> {
    this.users = this.users.filter((user) => user.id !== id);
    return of(undefined).pipe(delay(500));
  }
}
