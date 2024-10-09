import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";
import { MenubarModule } from "primeng/menubar";
import { BadgeModule } from "primeng/badge";
import { AvatarModule } from "primeng/avatar";
import { InputTextModule } from "primeng/inputtext";
import { CommonModule } from "@angular/common";
import { RippleModule } from "primeng/ripple";
import { AuthService } from "../../services/AuthService";
import { ButtonModule } from "primeng/button";
@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    standalone: true,
    imports: [MenubarModule, BadgeModule, AvatarModule, InputTextModule, RippleModule, CommonModule, ButtonModule],
})
export class HeaderComponent implements OnInit {
    items: MenuItem[] | undefined;
    isLoggedIn: boolean = false;
    constructor(private authService: AuthService) {}

    ngOnInit() {
        this.items = [
            {
                label: "Home",
                icon: "pi pi-home",
                routerLink: ["/home"],
            },
            {
                label: "User maganement",
                icon: "pi pi-star",
                routerLink: ["/user"],
            },
            {
                label: "About",
                icon: "pi pi-envelope",
                // badge: "3",
                routerLink: ["/about"],
            },
            {
                label: "Projects",
                icon: "pi pi-search",
                items: [
                    {
                        label: "Core",
                        icon: "pi pi-bolt",
                        shortcut: "⌘+S",
                    },
                    {
                        label: "Blocks",
                        icon: "pi pi-server",
                        shortcut: "⌘+B",
                    },
                    {
                        label: "UI Kit",
                        icon: "pi pi-pencil",
                        shortcut: "⌘+U",
                    },
                    {
                        separator: true,
                    },
                    {
                        label: "Templates",
                        icon: "pi pi-palette",
                        items: [
                            {
                                label: "Apollo",
                                icon: "pi pi-palette",
                                badge: "2",
                            },
                            {
                                label: "Ultima",
                                icon: "pi pi-palette",
                                badge: "3",
                            },
                        ],
                    },
                ],
            },
        ];

        // Kiểm tra trạng thái đăng nhập khi component khởi tạo
        this.authService.isLoggedIn$.subscribe((status) => {
            this.isLoggedIn = status;
        });
    }
    onLogout() {
        this.authService.logout();
    }
}
