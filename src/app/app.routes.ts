import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { UserManagementComponent } from "./pages/application/user-management/user-management.component";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/general/home/home.component";
import { AboutComponent } from "./pages/general/about/about.component";
import { UserDetailComponent } from "./pages/application/user-detail/user-detail.component";
import { LoginComponent } from "./pages/general/login/login.component";
import { AuthGuard } from "../app/services/AuthGaurd"; // Tạo AuthGuard
import { MoviesViewComponent } from "./pages/movies-view/movies-view.component";

export const routes: Routes = [
    { path: "login", component: LoginComponent },
    { path: "home", component: HomeComponent },
    { path: "moviesView/:slug", component: MoviesViewComponent },
    { path: "user", component: UserManagementComponent, canActivate: [AuthGuard] },
    { path: "userDetail/:id", component: UserDetailComponent, canActivate: [AuthGuard] },
    { path: "about", component: AboutComponent },
    { path: "", redirectTo: "/login", pathMatch: "full" },
    // Lazy loading UserModule
];
