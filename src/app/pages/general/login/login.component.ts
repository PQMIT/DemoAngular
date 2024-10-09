import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../../services/AuthService";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { InputGroupModule } from "primeng/inputgroup";
import { InputGroupAddonModule } from "primeng/inputgroupaddon";
import { ToastModule } from "primeng/toast";
import { MessageService } from "primeng/api";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RippleModule } from "primeng/ripple";
import { AvatarModule } from "primeng/avatar";
import { ImageModule } from "primeng/image";
import { DialogModule } from "primeng/dialog";
import { isPlatformBrowser } from "@angular/common";
import { PLATFORM_ID } from "@angular/core";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideHttpClient } from "@angular/common/http";
import { provideClientHydration } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { provideZoneChangeDetection } from "@angular/core";
import { routes } from "../../../app.routes";
import { ApplicationConfig } from "@angular/core";
import { PrimeNGConfig } from "primeng/api";
import { PanelModule } from "primeng/panel";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { HeaderComponent } from "../../../components/header/header.component";
import { BadgeModule } from "primeng/badge";

@Component({
    selector: "app-login",
    standalone: true,
    imports: [FormsModule],
    templateUrl: "./login.component.html",
    styleUrl: "./login.component.css",
})
export class LoginComponent {
    username: string = "";
    password: string = "";

    constructor(private authService: AuthService, private router: Router) {}

    onLogin() {
        if (this.authService.login(this.username, this.password)) {
            this.router.navigate(["/user"]); // Chuyển hướng đến trang quản lý người dùng
        } else {
            alert("Login failed!"); // Hiển thị thông báo lỗi
        }
    }
}
