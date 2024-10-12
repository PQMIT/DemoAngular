import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable({
    providedIn: "root",
})
export class UserMockService {
    private nextId = 1;

    private getUsersFromStorage(): User[] {
        const users = localStorage.getItem("users");
        return users ? JSON.parse(users) : [];
    }

    private saveUsersToStorage(users: User[]) {
        localStorage.setItem("users", JSON.stringify(users));
    }

    getUsers(): Observable<User[]> {
        const users = this.getUsersFromStorage();
        return of(users).pipe(delay(500)); // Giả lập độ trễ
    }

    addUser(user: User): Observable<void> {
        user.id = this.nextId++;
        const users = this.getUsersFromStorage();
        users.push(user);
        this.saveUsersToStorage(users);
        return of(undefined).pipe(delay(500));
    }

    updateUser(user: User): Observable<void> {
        const users = this.getUsersFromStorage();
        const index = users.findIndex((u) => u.id === user.id);
        if (index !== -1) {
            users[index] = user;
            this.saveUsersToStorage(users);
        }
        return of(undefined).pipe(delay(500));
    }

    deleteUser(id: number): Observable<void> {
        let users = this.getUsersFromStorage();
        users = users.filter((user) => user.id !== id);
        this.saveUsersToStorage(users);
        return of(undefined).pipe(delay(500));
    }
}
