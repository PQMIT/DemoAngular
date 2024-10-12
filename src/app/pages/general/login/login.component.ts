import { Component, Renderer2 } from "@angular/core";
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
import { Button } from "primeng/button";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { ProgressBarModule } from "primeng/progressbar";
@Component({
    selector: "app-login",
    standalone: true,
    imports: [FormsModule, ButtonModule, ProgressSpinnerModule, CommonModule, ProgressBarModule, ToastModule, RippleModule, ButtonModule],
    templateUrl: "./login.component.html",
    styleUrl: "./login.component.scss",
    providers: [MessageService],
})
export class LoginComponent {
    username: string = "";
    password: string = "";
    loading: boolean = false; // Biến để điều khiển hiển thị thanh progressbar
    activeTab: boolean = false; // Tab mặc định được chọn
    constructor(private authService: AuthService, private router: Router, private renderer: Renderer2, private messageService: MessageService) {}
    showSuccess() {
        this.messageService.add({ severity: "success", summary: "Success", detail: "Message Content" });
    }

    showInfo() {
        this.messageService.add({ severity: "info", summary: "Info", detail: "Message Content" });
    }

    showWarn() {
        this.messageService.add({ severity: "warn", summary: "Warn", detail: "Message Content" });
    }

    showError() {
        this.messageService.add({ severity: "error", summary: "Error", detail: "Login Failed" });
    }

    showContrast() {
        this.messageService.add({ severity: "contrast", summary: "Error", detail: "Message Content" });
    }

    showSecondary() {
        this.messageService.add({ severity: "secondary", summary: "Secondary", detail: "Message Content" });
    }
    onLogin() {
        if (this.authService.login(this.username, this.password)) {
            this.loading = true; // Hiển thị thanh progressbar
            setTimeout(() => {
                this.showSuccess(); // Hiển thị thông báo thành công
            }, 1000);
            setTimeout(() => {
                this.router.navigate(["/user"]); // Chuyển hướng đến trang quản lý người dùng
            }, 2000);
        } else {
            this.showError(); // Hiển thị thông báo lỗi
        }
    }
    onKeyUp(event: any) {
        const input = event.target;
        const label = input.previousElementSibling;

        if (input.value === "") {
            this.renderer.removeClass(label, "active");
            this.renderer.removeClass(label, "highlight");
        } else {
            this.renderer.addClass(label, "active");
            this.renderer.addClass(label, "highlight");
        }
    }

    onBlur(event: any) {
        const input = event.target;
        const label = input.previousElementSibling;

        if (input.value === "") {
            this.renderer.removeClass(label, "active");
            this.renderer.removeClass(label, "highlight");
        } else {
            this.renderer.removeClass(label, "highlight");
        }
    }

    onFocus(event: any) {
        const input = event.target;
        const label = input.previousElementSibling;

        if (input.value === "") {
            this.renderer.removeClass(label, "highlight");
        } else if (input.value !== "") {
            this.renderer.addClass(label, "highlight");
        }
    }

    onTabClick(event: Event, target: string) {
        event.preventDefault();

        const tabs = document.querySelectorAll(".tab a");
        tabs.forEach((tab) => this.renderer.removeClass(tab.parentElement, "active"));

        const tab = event.target as HTMLElement;
        this.renderer.addClass(tab.parentElement, "active");

        const contents = document.querySelectorAll(".tab-content > div");
        contents.forEach((content) => this.renderer.setStyle(content, "display", "none"));

        const targetContent = document.querySelector(target);
        if (targetContent) {
            this.renderer.setStyle(targetContent, "display", "block");
        }
    }
}
