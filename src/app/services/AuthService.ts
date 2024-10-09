// auth.service.ts
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    private loggedIn = new BehaviorSubject<boolean>(this.checkLocalStorage());
    isLoggedIn$ = this.loggedIn.asObservable();
    constructor(private router: Router) {}

    private checkLocalStorage(): boolean {
        if (typeof window !== "undefined") {
            return localStorage.getItem("isLoggedIn") === "true";
        }
        return false; // Trả về mặc định nếu đang chạy trên server
    }
    login(username: string, password: string): boolean {
        // Logic xác thực (giả sử đăng nhập thành công)
        // Bạn có thể thay thế bằng logic thực tế của bạn
        if (username === "admin" && password === "admin") {
            this.loggedIn.next(true);
            localStorage.setItem("isLoggedIn", "true");
            return true;
        }
        return false;
    }

    logout() {
        this.loggedIn.next(false);
        localStorage.setItem("isLoggedIn", "false");
        this.router.navigate(["/login"]);
    }

    isAuthenticated(): Observable<boolean> {
        return this.isLoggedIn$; // Trả về Observable
    }
}
