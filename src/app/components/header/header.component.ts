import { AfterViewInit, Component, ElementRef, inject, NgZone, OnInit, ViewChild } from "@angular/core";
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
import { PrimeNGConfig } from "primeng/api";
import { Aura } from "primeng/themes/aura";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { Popover, PopoverModule } from "primeng/popover";
import { DeviceDetectorService } from "ngx-device-detector";
import { ChangeDetectorRef } from "@angular/core";
@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"],
    standalone: true,
    imports: [
        MenubarModule,
        BadgeModule,
        AvatarModule,
        InputTextModule,
        RippleModule,
        CommonModule,
        ButtonModule,
        InputTextModule,
        InputGroupModule,
        InputGroupAddonModule,
        OverlayPanelModule,
        PopoverModule,
    ],
})
export class HeaderComponent implements OnInit {
    @ViewChild("popoverMenu") popoverMenu!: Popover;
    @ViewChild("searchTermInput") searchTermInput!: ElementRef<any>;
    items: MenuItem[] = [
        {
            label: "Home",
            icon: "pi pi-home",
            routerLink: ["/home"],
        },
        {
            label: "Movie Saved",
            icon: "pi pi-video",
            routerLink: ["/movieSaved"],
        },
        {
            label: "About",
            icon: "pi pi-info-circle",
            // badge: "3",
            routerLink: ["/about"],
        },
        {
            label: "User",
            icon: "pi pi-user",
            routerLink: ["/user"],
        },
    ];
    items3: MenuItem[] = [
        {
            label: "",
            icon: "pi pi-bars",
            command: () => {
                this.toggle();
            },
        },
    ];
    notifications = [
        { message: "You have a new message from John. You have a new message from John." },
        { message: "Your order has been shipped.You have a new message from John." },
        { message: "Don't forget the meeting at 2 PM. You have a new message from John." },
    ];
    isMobile: boolean = true; // Biến theo dõi trạng thái hiển thị menu trên thiết bị di động
    isRinging = false; // Biến theo dõi trạng thái rung
    isLoggedIn: boolean = false;
    filteredMovies: any[] = []; // Mảng chứa danh sách phim đã lọc
    config: PrimeNGConfig = inject(PrimeNGConfig);
    isEnable: boolean = true; // Trạng thái hiển thị menu

    constructor(
        private authService: AuthService,
        private router: Router,
        private primengConfig: PrimeNGConfig,
        private deviceService: DeviceDetectorService,
        private cdr: ChangeDetectorRef,
        private ngZone: NgZone
    ) {
        this.config.theme.set({
            preset: Aura,
            options: {
                darkModeSelector: ".my-app-dark",
            },
        });
    }

    ngOnInit() {
        // Kiểm tra trạng thái đăng nhập khi component khởi tạo
        this.authService.isLoggedIn$.subscribe((status) => {
            this.isLoggedIn = status;
        });
        // Xác định thiết bị và cập nhật trong ngZone để đảm bảo Angular phát hiện thay đổi
        const isMobile = this.deviceService.isMobile();
        console.log("Is mobile:", isMobile);

        this.ngZone.run(() => {
            this.isMobile = isMobile;
        });
    }

    // Phương thức chuyển đổi chế độ sáng/tối
    toggleDarkMode() {
        const element = document.querySelector("html");
        element?.classList.toggle("my-app-dark");
    }
    // Toggle menu khi người dùng tương tác
    toggleMenu(): void {
        this.isEnable = !this.isEnable;
    }
    toggle(): void {
        this.popoverMenu.toggle(event);
    }
    // Phương thức gọi khi người dùng tìm kiếm
    onSearch(event: Event) {
        console.log(event.target);

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
    onSearch2(event: Event) {
        const searchTerm = this.searchTermInput.nativeElement.value; // Lấy giá trị từ input
        console.log(searchTerm); // Hoặc làm gì đó với searchTerm

        if (searchTerm) {
            this.router.navigate(["/search"], { queryParams: { search: searchTerm } });
        }
    }
    onLogout() {
        this.authService.logout();
        // window.location.reload();
    }
    viewAllNotifications() {
        // Điều hướng hoặc mở modal hiển thị danh sách đầy đủ các thông báo
        console.log("Xem tất cả các thông báo");
    }

    // Hàm giả lập nhận thông báo mới
    receiveNotification(newMessage: string) {
        this.notifications.push({ message: newMessage });
        this.triggerRing(); // Gọi hàm rung khi nhận thông báo mới
    }

    // Hàm kích hoạt hiệu ứng rung
    triggerRing() {
        this.isRinging = true;
        console.log("Ringing triggered:", this.isRinging); // Kiểm tra giá trị
        setTimeout(() => {
            this.isRinging = false; // Tắt hiệu ứng sau 1 giây
            console.log("Ringing ended:", this.isRinging); // Kiểm tra giá trị
        }, 1000);
    }

    // ngOnDestroy() {
    //     console.log("Header component destroyed");
    // }
}
