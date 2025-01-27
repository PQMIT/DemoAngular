import { DatePickerModule } from "primeng/datepicker";
import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CalendarModule } from "primeng/calendar";
import { isPlatformServer, registerLocaleData } from "@angular/common";
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
import { forkJoin } from "rxjs";
import { isPlatformBrowser } from "@angular/common";
import e from "express";
import { Title } from "@angular/platform-browser";
import { combineLatest } from "rxjs";
import { MessageService } from "primeng/api";
import { ToastModule } from "primeng/toast";
registerLocaleData(localeVi);
@Component({
    selector: "app-home",
    standalone: true,
    imports: [
        DatePickerModule,
        FormsModule,
        CalendarModule,
        DatePickerModule,
        AnimateOnScrollModule,
        CarouselModule,
        ButtonModule,
        TagModule,
        CardModule,
        SkeletonModule,
        CommonModule,
        RouterLink,
        ToastModule,
    ],
    templateUrl: "./home.component.html",
    styleUrl: "./home.component.css",
    host: { ngSkipHydration: "true" },
    providers: [MoviesService, StorageService, MessageService],
})
export class HomeComponent implements OnInit, OnDestroy {
    // Cấu hình locale tiếng Việt
    vi: any;
    selectedDate: any;
    date: Date | undefined;
    isLoading = true; // Ban đầu là true để hiện skeleton
    movies: any[] = [];
    private timeoutId: any; // Biến lưu ID của timeout để dọn dẹp
    autoplayInterval: number | null = null;
    // shouldRenderCarousel = false;
    isStatusLike: any[] = [];
    moviesCategories: any[] = [];
    responsiveOptions: any[] | undefined;
    moviesSaved: any[] = [];
    constructor(
        private moviesService: MoviesService,
        private storageService: StorageService,
        @Inject(PLATFORM_ID) private platformId: Object,
        private titleService: Title,
        private messageService: MessageService
    ) {
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
        this.responsiveOptions = [
            {
                breakpoint: "1024px",
                numVisible: 3,
                numScroll: 2,
            },
            {
                breakpoint: "768px",
                numVisible: 2,
                numScroll: 2,
            },
            {
                breakpoint: "560px",
                numVisible: 1,
                numScroll: 1,
            },
        ];
    }
    showSuccess(movie: any) {
        this.messageService.add({ severity: "success", summary: "Success", detail: `${movie.name} - Saved` });
    }

    showInfo() {
        this.messageService.add({ severity: "info", summary: "Info", detail: "Message Content" });
    }

    showWarn(movie: any) {
        this.messageService.add({ severity: "warn", summary: "Warn", detail: `${movie.name} - Unsaved` });
    }
    ngOnInit(): void {
        // Set the page title
        this.titleService.setTitle("MoviePro Angular - Trang chủ");

        if (isPlatformBrowser(this.platformId)) {
            // Trực tiếp gọi hàm fetchMovies() mà không cần setTimeout
            // this.autoplayInterval = 4000;
        }
        this.fetchMovies();

        // console.log(this.movies);
    }
    // Hàm gọi service để lấy dữ liệu từ API

    fetchMovies() {
        this.isLoading = true;

        // Thực hiện nhiều request đồng thời
        forkJoin({
            phimMoiCapNhat: this.moviesService.getPhimMoiCapNhat("phim-moi-cap-nhat?page=1&limit=10"),
            phimLe: this.moviesService.getPhimFromCategory("phim-le"),
            phimBo: this.moviesService.getPhimFromCategory("phim-bo"),
            hoatHinh: this.moviesService.getPhimFromCategory("hoat-hinh"),
            tvShows: this.moviesService.getPhimFromCategory("tv-shows"),
        }).subscribe({
            next: (results) => {
                this.isLoading = false; // Tắt skeleton khi dữ liệu đã tải xong
                let savedMovies = this.storageService.getLocalStorage("moviesSaved") || [];

                // Lưu các dữ liệu vào biến tương ứng
                this.movies = results.phimMoiCapNhat.items;
                //check movie saved
                this.isStatusLike = this.movies.map((movie) => savedMovies?.some((savedMovie: any) => savedMovie._id === movie._id));
                // console.log(results);
                this.moviesCategories = [results.phimLe, results.phimBo, results.hoatHinh, results.tvShows];
                // Lưu moviesCategories vào localStorage
                this.storageService.setLocalStorage("moviesCategories", this.moviesCategories);
                // Kiểm tra kết quả link ảnh
                // console.log(this.moviesCategories[0].data.APP_DOMAIN_CDN_IMAGE + "/" + this.moviesCategories[0].data.items[0].poster_url);
            },
            error: (error) => {
                this.isLoading = false; // Tắt skeleton nếu có lỗi
                console.error("Lỗi khi lấy dữ liệu phim:", error);
            },
        });
    }

    handleLike(event: Event, status: any, movie: any) {
        // console.log(movie);
        // Lấy danh sách phim đã lưu từ localStorage hoặc khởi tạo rỗng nếu chưa có
        let savedMovies = this.storageService.getLocalStorage("moviesSaved") || [];
        // Toggle trạng thái like
        this.isStatusLike[status] = !this.isStatusLike[status];
        // Kiểm tra xem bộ phim đã có trong danh sách chưa
        const isMovieSaved = savedMovies?.some((savedMovie: any) => savedMovie._id === movie._id);
        if (!isMovieSaved && this.isStatusLike[status]) {
            // Thêm phim vào danh sách nếu chưa tồn tại
            savedMovies.push(movie);
            this.storageService.setLocalStorage("moviesSaved", savedMovies);
            this.showSuccess(movie);
        } else {
            // Xóa phim khỏi danh sách nếu đã tồn tại
            savedMovies = savedMovies.filter((savedMovie: any) => savedMovie._id !== movie._id);
            this.storageService.setLocalStorage("moviesSaved", savedMovies);
            this.showWarn(movie);
        }
        // console.log(this.isStatusLike);
    }

    ngOnDestroy() {
        // Dọn dẹp timeout khi component bị hủy
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }
}
