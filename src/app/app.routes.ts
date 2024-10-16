import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { UserManagementComponent } from "./pages/application/user-management/user-management.component";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/general/home/home.component";
import { AboutComponent } from "./pages/general/about/about.component";
import { UserDetailComponent } from "./pages/application/user-detail/user-detail.component";
import { LoginComponent } from "./pages/general/login/login.component";
import { AuthGuard } from "../app/services/AuthGaurd"; // Tạo AuthGuard
import { MovieSearchComponent } from "./pages/application/movie-search/movie-search.component";
import { MovieSavedComponent } from "./pages/application/movie-saved/movie-saved.component";

export const routes: Routes = [
    { path: "login", component: LoginComponent },
    { path: "home", loadComponent: () => import("./pages/general/home/home.component").then((m) => m.HomeComponent) },
    { path: "moviesView/:slug", loadComponent: () => import("./pages/application/movies-view/movies-view.component").then((m) => m.MoviesViewComponent) },
    { path: "search", component: MovieSearchComponent },
    { path: "movieSaved", component: MovieSavedComponent },
    { path: "movieListCategory/:slug", loadComponent: () => import("./pages/application/movie-list-category/movie-list-category.component").then((m) => m.MovieListCategoryComponent) },
    { path: "user", component: UserManagementComponent, canActivate: [AuthGuard] },
    { path: "userDetail/:id", component: UserDetailComponent, canActivate: [AuthGuard] },
    { path: "about", component: AboutComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    // Lazy loading UserModule
];
