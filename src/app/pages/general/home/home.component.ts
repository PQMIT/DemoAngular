import { DatePickerModule } from "primeng/datepicker";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CalendarModule } from "primeng/calendar";
import { registerLocaleData } from "@angular/common";
import localeVi from "@angular/common/locales/vi";
import { AnimateOnScrollModule } from "primeng/animateonscroll";
import { CarouselModule } from "primeng/carousel";
import { ButtonModule } from "primeng/button";
import { TagModule } from "primeng/tag";
import { CardModule } from "primeng/card";
import { SkeletonModule } from "primeng/skeleton";
import { CommonModule } from "@angular/common";
import { MoviesService } from "../../../services/movies.service";
import { StorageService } from "../../../services/storage.service";
import { RouterLink } from "@angular/router";
registerLocaleData(localeVi);
@Component({
    selector: "app-home",
    standalone: true,
    imports: [DatePickerModule, FormsModule, CalendarModule, DatePickerModule, AnimateOnScrollModule, CarouselModule, ButtonModule, TagModule, CardModule, SkeletonModule, CommonModule, RouterLink],
    templateUrl: "./home.component.html",
    styleUrl: "./home.component.css",
})
export class HomeComponent implements OnInit, OnDestroy {
    // Cấu hình locale tiếng Việt
    vi: any;
    selectedDate: any;
    date: Date | undefined;
    isLoading = true; // Ban đầu là true để hiện skeleton
    movies: any[] = [];
    private timeoutId: any; // Biến lưu ID của timeout để dọn dẹp

    responsiveOptions: any[] | undefined;
    constructor(private moviesService: MoviesService, private storageService: StorageService) {
        this.vi = {
            firstDayOfWeek: 1,
            dayNames: ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"],
            dayNamesShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
            dayNamesMin: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
            monthNames: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
            monthNamesShort: ["Th1", "Th2", "Th3", "Th4", "Th5", "Th6", "Th7", "Th8", "Th9", "Th10", "Th11", "Th12"],
            today: "Hôm nay",
            clear: "Xóa",
            dateFormat: "dd/mm/yy",
            weekHeader: "Tuần",
        };
    }

    ngOnInit(): void {
        this.responsiveOptions = [
            {
                breakpoint: "1199px",
                numVisible: 1,
                numScroll: 1,
            },
            {
                breakpoint: "991px",
                numVisible: 2,
                numScroll: 1,
            },
            {
                breakpoint: "767px",
                numVisible: 1,
                numScroll: 1,
            },
        ];
        this.fetchMovies(); // Gọi hàm fetchMovies() để lấy danh sách phim
    }
    /* getSeverity(status: string) {
        switch (status) {
            case "INSTOCK":
                return "success";
            case "LOWSTOCK":
                return "warn";
            case "OUTOFSTOCK":
                return "danger";
            default:
                return "unknown";
        }
    } */
    // Hàm gọi service để lấy dữ liệu từ API
    fetchMovies() {
        this.moviesService.getPhimMoiCapNhat().subscribe(
            (movies) => {
                this.isLoading = false; // Tắt skeleton khi dữ liệu đã tải xong
                this.movies = movies; // Lưu danh sách phim vào biến movies
            },
            (error) => {
                console.error("Lỗi khi lấy danh sách phim:", error);
            }
        );
    }
    ngOnDestroy() {
        // Dọn dẹp timeout khi component bị hủy
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }
}
