import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { UserMockService } from '../services/user.mock';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
  ];
  private nextId = 3;

  getUsers() {
    return this.users;
  }

  addUser(user: User) {
    user.id = this.nextId++;
    this.users.push(user);
  }

  updateUser(user: User) {
    const index = this.users.findIndex((u) => u.id === user.id);
    if (index !== -1) {
      this.users[index] = user;
    }
  }

  deleteUser(id: number) {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
