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
import { forkJoin } from "rxjs";
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
    moviesCategories: any[] = [
        {
            status: "success",
            msg: "",
            data: {
                seoOnPage: {
                    og_type: "website",
                    titleHead: "Phim lẻ | Phim lẻ hay tuyển chọn | Phim lẻ mới nhất 2024",
                    descriptionHead: "Phim lẻ mới nhất tuyển chọn chất lượng cao, phim lẻ mới nhất 2024 vietsub cập nhật nhanh nhất. Phim lẻ vietsub nhanh nhất",
                    og_image: ["/upload/vod/20241011-1/e25e80078dc59db1f5dba1ef56041b2c.jpg"],
                    og_url: "danh-sach/phim-le",
                },
                breadCrumb: [
                    {
                        name: "Phim Lẻ",
                        slug: "/danh-sach/phim-le",
                        isCurrent: false,
                        position: 2,
                    },
                    {
                        name: "Trang 1",
                        isCurrent: true,
                        position: 3,
                    },
                ],
                titlePage: "Phim Lẻ",
                items: [
                    {
                        modified: {
                            time: "2024-10-11T15:14:54.000Z",
                        },
                        _id: "243098afe85a1d30b6e02a9e0574331f",
                        name: "Chiến Tranh, Loạn Lạc",
                        slug: "chien-tranh-loan-lac",
                        origin_name: "Uprising",
                        type: "single",
                        poster_url: "upload/vod/20241011-1/e25e80078dc59db1f5dba1ef56041b2c.jpg",
                        thumb_url: "upload/vod/20241011-1/d2ce7a33356f0cfb36255b3a4017153b.jpg",
                        sub_docquyen: false,
                        chieurap: false,
                        time: "126 phút",
                        episode_current: "Full",
                        quality: "FHD",
                        lang: "Vietsub",
                        year: 2024,
                        category: [
                            {
                                id: "9822be111d2ccc29c7172c78b8af8ff5",
                                name: "Hành Động",
                                slug: "hanh-dong",
                            },
                            {
                                id: "37a7b38b6184a5ebd3c43015aa20709d",
                                name: "Chính Kịch",
                                slug: "chinh-kich",
                            },
                            {
                                id: "f8ec3e9b77c509fdf64f0c387119b916",
                                name: "Lịch Sử",
                                slug: "lich-su",
                            },
                        ],
                        country: [
                            {
                                id: "05de95be5fc404da9680bbb3dd8262e6",
                                name: "Hàn Quốc",
                                slug: "han-quoc",
                            },
                        ],
                    },
                ],
                params: {
                    type_slug: "danh-sach",
                    filterCategory: [""],
                    filterCountry: [""],
                    filterYear: "",
                    filterType: "",
                    sortField: "modified.time",
                    sortType: "desc",
                    pagination: {
                        totalItems: 12880,
                        totalItemsPerPage: 10,
                        currentPage: 1,
                        totalPages: 1288,
                    },
                },
                type_list: "phim-le",
                APP_DOMAIN_FRONTEND: "https://phimapi.com",
                APP_DOMAIN_CDN_IMAGE: "https://phimimg.com",
            },
        },
    ];

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
        console.log(this.moviesCategories);
    }
    // Hàm gọi service để lấy dữ liệu từ API

    fetchMovies() {
        this.isLoading = true;

        // Thực hiện nhiều request đồng thời
        forkJoin({
            phimMoiCapNhat: this.moviesService.getPhimMoiCapNhat(),
            phimLe: this.moviesService.getPhimFromCategory("phim-le"),
            phimBo: this.moviesService.getPhimFromCategory("phim-bo"),
            hoatHinh: this.moviesService.getPhimFromCategory("hoat-hinh"),
            tvShows: this.moviesService.getPhimFromCategory("tv-shows"),
        }).subscribe({
            next: (results) => {
                this.isLoading = false; // Tắt skeleton khi dữ liệu đã tải xong

                // Lưu các dữ liệu vào biến tương ứng
                this.movies = results.phimMoiCapNhat.items;
                this.moviesCategories = [results.phimLe, results.phimBo, results.hoatHinh, results.tvShows];

                // Lưu moviesCategories vào localStorage
                this.storageService.setLocalStorage("moviesCategories", this.moviesCategories);

                // Kiểm tra kết quả
                console.log(this.moviesCategories[0].data.APP_DOMAIN_CDN_IMAGE + "/" + this.moviesCategories[0].data.items[0].poster_url);
            },
            error: (error) => {
                this.isLoading = false; // Tắt skeleton nếu có lỗi
                console.error("Lỗi khi lấy dữ liệu phim:", error);
            },
        });
    }

    ngOnDestroy() {
        // Dọn dẹp timeout khi component bị hủy
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }
}
