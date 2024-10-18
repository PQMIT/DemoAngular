import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MoviesService } from "../../../services/movies.service";
import { CommonModule } from "@angular/common";
import { RouterLink, Router } from "@angular/router";
import { PaginatorModule } from "primeng/paginator";
import { StorageService } from "../../../services/storage.service";
import { Toast } from "primeng/toast";
import { ButtonModule } from "primeng/button";
import { MessageService } from "primeng/api";
import { ToastModule } from "primeng/toast";
import { FormsModule } from "@angular/forms";
@Component({
    selector: "app-movie-saved",
    standalone: true,
    imports: [CommonModule, RouterLink, PaginatorModule, ButtonModule, ToastModule, FormsModule],
    templateUrl: "./movie-saved.component.html",
    styleUrl: "./movie-saved.component.css",
    providers: [MoviesService, StorageService, MessageService],
})
export class MovieSavedComponent {
    // searchTerm: string | null = null; // Từ khóa tìm kiếm
    isLoading: boolean = true; // Trạng thái tải dữ liệu
    first = 0; // Trang bắt đầu, page đầu tiên sẽ là 0
    ogDataMovie: any = {}; // Danh sách phim đã lọc
    listMovies: any[] = [];
    filteredMovies: any[] = [];
    rows = 10; // Số phim hiển thị trên mỗi trang
    categoryType: string = "";
    currentPage: number = 1;
    queryParam: string = "";
    isStatusLike: any[] = [];
    searchTerm: string = ""; // Search term entered by the user
    isSearching: boolean = false; // Trạng thái tìm kiếm

    constructor(private route: ActivatedRoute, private moviesService: MoviesService, private router: Router, private storageService: StorageService, private messageService: MessageService) {}

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
        this.route.paramMap.subscribe((params) => {
            this.categoryType = params.get("slug") || ""; // Lấy path variable "type_list"
            // console.log(params);
        });

        // Lấy query params
        this.route.queryParams.subscribe((params) => {
            // console.log(params);
            this.currentPage = params["page"] ? +params["page"] : 1; // Lấy query param "page"
        });
        // console.log(this.categoryType);
        this.getMovie(this.currentPage, this.rows);
        // console.log(this.listMovies.length);
    }

    // Phương thức để tìm kiếm
    // getMovie(currentPage: any, rows: any): void {
    //     // if (!this.categoryType) return; // Không thực hiện gì nếu không có categoryType
    //     this.isLoading = true; // Bắt đầu tải dữ liệu
    //     this.listMovies = this.storageService.getLocalStorage("moviesSaved") || [];
    //     this.isStatusLike = this.listMovies.map((movie) => true);
    //     console.log(this.storageService.getLocalStorage("moviesSaved"));
    //     this.isLoading = false;
    // }
    getMovie(currentPage: any, rows: any): void {
        this.isLoading = true; // Bắt đầu tải dữ liệu

        // Lấy toàn bộ danh sách phim từ localStorage
        this.listMovies = this.storageService.getLocalStorage("moviesSaved") || [];

        // Xác định vị trí bắt đầu và kết thúc của các phần tử trong trang hiện tại
        const startIndex = (currentPage - 1) * rows;
        const endIndex = startIndex + rows;

        // Cắt danh sách phim để chỉ lấy các phần tử của trang hiện tại
        this.filteredMovies = this.listMovies.slice(startIndex, endIndex);

        this.isStatusLike = this.filteredMovies.map((movie) => true);

        // console.log(this.filteredMovies); // In ra các phim đang được hiển thị cho trang hiện tại

        this.isLoading = false; // Dừng trạng thái loading
    }

    paginate(event: any) {
        this.first = event.first;
        this.currentPage = event.page + 1;
        this.rows = event.rows;
        console.log(this.currentPage + " " + event.page);
        // this.router.navigate(["/movieListCategory/" + this.categoryType], {
        //     queryParams: { page: this.currentPage, limit: this.rows },
        // });
        this.getMovie(this.currentPage, this.rows);
    }
    // this.updatePagedMovies();
    getImageSrc(url: string): string {
        const baseUrl = "https://phimimg.com/";
        if (url.startsWith("upload")) {
            return `${baseUrl}${url}`;
        } else {
            return url;
        }
    }

    handleLike(event: Event, status: any, movie: any) {
        // console.log(movie);
        // Lấy danh sách phim đã lưu từ localStorage hoặc khởi tạo rỗng nếu chưa có
        let savedMovies = this.storageService.getLocalStorage("moviesSaved") || [];
        // Toggle trạng thái like
        this.isStatusLike[status] = !this.isStatusLike[status];
        // Kiểm tra xem bộ phim đã có trong danh sách chưa
        const isMovieSaved = savedMovies.some((savedMovie: any) => savedMovie._id === movie._id);
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
    // Function to normalize Vietnamese string (remove accents)
    normalizeVietnamese(str: string): string {
        return str
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/đ/g, "d")
            .replace(/Đ/g, "D");
    }
    // Function to filter movies by name based on search term
    searchMovies() {
        let movies = this.storageService.getLocalStorage("moviesSaved") || [];
        const normalizedSearchTerm = this.normalizeVietnamese(this.searchTerm.toLowerCase());
        if (!normalizedSearchTerm) {
            this.filteredMovies = movies;
            this.isSearching = false;
        } else {
            this.filteredMovies = movies.filter((movie: any) => this.normalizeVietnamese(movie.name.toLowerCase()).includes(normalizedSearchTerm));
            this.isSearching = true;
        }
    }
}
