import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MoviesService } from "../../../services/movies.service";
import { CommonModule } from "@angular/common";
import { RouterLink, Router } from "@angular/router";
import { PaginatorModule } from "primeng/paginator";
import { Button, ButtonModule } from "primeng/button";
import { StorageService } from "../../../services/storage.service";
import { MessageService } from "primeng/api";
import { ToastModule } from "primeng/toast";
@Component({
    selector: "app-movie-list-category",
    standalone: true,
    imports: [CommonModule, RouterLink, PaginatorModule, ButtonModule, ToastModule],
    templateUrl: "./movie-list-category.component.html",
    styleUrl: "./movie-list-category.component.css",
    providers: [MoviesService, StorageService, MessageService],
})
export class MovieListCategoryComponent {
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
        if (!this.categoryType) return; // Không thực hiện gì nếu không có categoryType
        this.isLoading = true; // Bắt đầu tải dữ liệu
        const queryParam = `${this.categoryType}?page=${currentPage}&limit=${rows}`;
        console.log(queryParam);
        switch (this.categoryType) {
            case "phim-moi-cap-nhat":
                this.moviesService.getPhimMoiCapNhat(queryParam).subscribe({
                    next: (movies) => {
                        // console.log(movies?.items);
                        this.ogDataMovie = movies; // Gán kết quả vào danh sách
                        this.listMovies = movies?.items;
                        let moviesSaved = this.storageService.getLocalStorage("moviesSaved") || [];
                        this.isStatusLike = this.listMovies.map((m: any) => moviesSaved?.some((e: any) => e._id === m._id));
                        // console.log(this.isStatusLike, "getMovie");
                    },
                    error: (error) => {
                        console.error("Lỗi khi tìm kiếm phim:", error);
                    },
                    complete: () => {
                        this.isLoading = false; // Dừng tải dữ liệu sau khi hoàn tất (thành công hoặc thất bại)
                    },
                });
                break;

            default:
                this.moviesService.getPhimFromCategory(queryParam).subscribe({
                    next: (movies) => {
                        this.ogDataMovie = movies; // Gán kết quả vào danh sách
                        this.listMovies = movies.data.items;
                        let moviesSaved = this.storageService.getLocalStorage("moviesSaved") || [];
                        this.isStatusLike = this.listMovies.map((m: any) => moviesSaved?.some((e: any) => e._id === m._id));
                        // console.log(this.isStatusLike, "getMovie");
                    },
                    error: (error) => {
                        console.error("Lỗi khi tìm kiếm phim:", error);
                    },
                    complete: () => {
                        this.isLoading = false; // Dừng tải dữ liệu sau khi hoàn tất (thành công hoặc thất bại)
                    },
                });
                break;
        }
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
    handleLike(event: Event, index: any, movie: any) {
        console.log("handleLike", index, movie);

        // console.log(movie);
        // Lấy danh sách phim đã lưu từ localStorage hoặc khởi tạo rỗng nếu chưa có
        let savedMovies = this.storageService.getLocalStorage("moviesSaved") || [];
        // Toggle trạng thái like
        this.isStatusLike[index] = !this.isStatusLike[index];
        console.log(this.isStatusLike[index]);

        // Kiểm tra xem bộ phim đã có trong danh sách chưa
        const isMovieSaved = savedMovies?.some((savedMovie: any) => savedMovie._id === movie._id);
        if (!isMovieSaved && this.isStatusLike[index]) {
            // Thêm phim vào danh sách nếu chưa tồn tại
            savedMovies.push(movie);
            this.storageService.setLocalStorage("moviesSaved", savedMovies);
            this.showSuccess(movie);
            // console.log(this.isStatusLike);
        } else {
            // Xóa phim khỏi danh sách nếu đã tồn tại
            savedMovies = savedMovies.filter((savedMovie: any) => savedMovie._id !== movie._id);
            this.storageService.setLocalStorage("moviesSaved", savedMovies);
            // console.log(this.isStatusLike);
            this.showWarn(movie);
        }
        // console.log(this.isStatusLike);
    }
}
