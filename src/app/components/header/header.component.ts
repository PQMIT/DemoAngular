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
import { InputGroupModule } from "primeng/inputgroup";
import { InputGroupAddonModule } from "primeng/inputgroupaddon";
import { Router } from "@angular/router";
@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    standalone: true,
    imports: [MenubarModule, BadgeModule, AvatarModule, InputTextModule, RippleModule, CommonModule, ButtonModule, InputTextModule, InputGroupModule, InputGroupAddonModule],
})
export class HeaderComponent implements OnInit {
    items: MenuItem[] | undefined;
    isLoggedIn: boolean = false;
    filteredMovies: any[] = []; // Mảng chứa danh sách phim đã lọc
    constructor(private authService: AuthService, private router: Router) {}

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
            /* {
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
            }, */
        ];

        // Kiểm tra trạng thái đăng nhập khi component khởi tạo
        this.authService.isLoggedIn$.subscribe((status) => {
            this.isLoggedIn = status;
        });
    }
    // Phương thức gọi khi người dùng tìm kiếm
    // Phương thức gọi khi người dùng tìm kiếm
    onSearch(event: Event) {
        const inputElement = event.target as HTMLInputElement; // Ép kiểu event.target thành HTMLInputElement
        const searchTerm = inputElement.value; // Lấy giá trị từ input
        if (searchTerm) {
            // Lọc danh sách phim dựa trên tên phim
            // this.filteredMovies = this.movies.filter((movie) => movie.name.toLowerCase().includes(searchTerm.toLowerCase()));
            this.router.navigate(["/search"], { queryParams: { search: searchTerm } });
        } else {
            // Nếu không có từ khóa tìm kiếm, hiển thị toàn bộ danh sách
            // this.filteredMovies = [...this.movies];
        }
    }
    onLogout() {
        this.authService.logout();
    }
}
