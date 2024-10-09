// auth.guard.ts
import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../services/AuthService";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: "root",
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(): Observable<boolean> {
        return this.authService.isAuthenticated().pipe(
            map((isLoggedIn) => {
                if (isLoggedIn) {
                    return true;
                } else {
                    this.router.navigate(["/login"]);
                    return false;
                }
            })
        );
    }
}
