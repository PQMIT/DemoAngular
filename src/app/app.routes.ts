import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { UserManagementComponent } from "./pages/application/user-management/user-management.component";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/general/home/home.component";
import { AboutComponent } from "./pages/general/about/about.component";

export const routes: Routes = [
    // { path: "", pathMatch: "full", redirectTo: "Home" },
    { path: "home", component: HomeComponent },
    { path: "user", component: UserManagementComponent },
    { path: "about", component: AboutComponent },
    // Lazy loading UserModule
];
