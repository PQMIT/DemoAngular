import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MoviesService } from "../../../services/movies.service";
import { CommonModule } from "@angular/common";
import { RouterLink, Router } from "@angular/router";
import { PaginatorModule } from "primeng/paginator";
import { StorageService } from "../../../services/storage.service";
import { Toast } from "primeng/toast";
import { ButtonModule } from "primeng/button";
@Component({
    selector: "app-movie-saved",
    standalone: true,
    imports: [CommonModule, RouterLink, PaginatorModule, ButtonModule],
    templateUrl: "./movie-saved.component.html",
    styleUrl: "./movie-saved.component.css",
    providers: [MoviesService, StorageService],
})
export class MovieSavedComponent {
    // searchTerm: string | null = null; // Từ khóa tìm kiếm
    isLoading: boolean = true; // Trạng thái tải dữ liệu
    first = 0; // Trang bắt đầu, page đầu tiên sẽ là 0
    ogDataMovie: any = {}; // Danh sách phim đã lọc
    listMovies: any[] = [];
    rows = 10; // Số phim hiển thị trên mỗi trang
    categoryType: string = "";
    currentPage: number = 1;
    queryParam: string = "";
    isStatusLike: any[] = [];

    constructor(private route: ActivatedRoute, private moviesService: MoviesService, private router: Router, private storageService: StorageService) {}
    ngOnInit(): void {
        this.route.paramMap.subscribe((params) => {
            this.categoryType = params.get("slug") || ""; // Lấy path variable "type_list"
            console.log(params);
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
    getMovie(currentPage: any, rows: any): void {
        // if (!this.categoryType) return; // Không thực hiện gì nếu không có categoryType
        this.isLoading = true; // Bắt đầu tải dữ liệu
        this.listMovies = this.storageService.getLocalStorage("moviesSaved") || [];
        this.isStatusLike = this.listMovies.map((movie) => true);
        console.log(this.storageService.getLocalStorage("moviesSaved"));
        this.isLoading = false;
    }

    paginate(event: any) {
        this.first = event.first;
        this.currentPage = event.page + 1;
        this.rows = event.rows;
        // console.log(this.currentPage + " " + event.page);
        this.router.navigate(["/movieListCategory/" + this.categoryType], {
            queryParams: { page: this.currentPage, limit: this.rows },
        });
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
        } else {
            // Xóa phim khỏi danh sách nếu đã tồn tại
            savedMovies = savedMovies.filter((savedMovie: any) => savedMovie._id !== movie._id);
            this.storageService.setLocalStorage("moviesSaved", savedMovies);
        }
        // console.log(this.isStatusLike);
    }
}
