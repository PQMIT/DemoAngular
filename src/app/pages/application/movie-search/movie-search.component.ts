import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MoviesService } from "../../../services/movies.service";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { PaginatorModule } from "primeng/paginator";
import { ButtonModule } from "primeng/button";
import { StorageService } from "../../../services/storage.service";
@Component({
    selector: "app-movie-search",
    standalone: true,
    imports: [CommonModule, RouterLink, PaginatorModule, ButtonModule],
    templateUrl: "./movie-search.component.html",
    styleUrl: "./movie-search.component.css",
    providers: [MoviesService, StorageService],
})
export class MovieSearchComponent implements OnInit {
    searchTerm: string | null = null; // Từ khóa tìm kiếm
    isLoading: boolean = true; // Trạng thái tải dữ liệu
    filteredMovies: any = {}; // Danh sách phim đã lọc
    pagedMovies: any[] = [];
    rows = 10; // Số phim hiển thị trên mỗi trang
    currentPage = 0; // Trang hiện tại
    isStatusLike: any[] = [];

    constructor(private route: ActivatedRoute, private moviesService: MoviesService, private storageService: StorageService) {}

    ngOnInit(): void {
        // Lấy query parameter khi component được khởi tạo
        this.route.queryParams.subscribe((params) => {
            this.searchTerm = params["search"];
            this.search(); // Tìm kiếm ngay khi có từ khóa
        });
        //
        this.updatePagedMovies();
        // console.log(this.pagedMovies.length);
    }

    // Phương thức để tìm kiếm
    search(): void {
        if (this.searchTerm) {
            this.isLoading = true; // Bắt đầu tải dữ liệu
            this.moviesService.getPhimFromSearch(this.searchTerm).subscribe({
                next: (movies) => {
                    this.filteredMovies = movies; // Gán kết quả tìm kiếm vào danh sách đã lọc
                    this.isLoading = false; // Dừng tải dữ liệu
                    this.updatePagedMovies();
                    /* let savedMovies = this.storageService.getLocalStorage("moviesSaved") || [];
                    console.log(movies.data.items);
                    this.isStatusLike = movies.data.items.map((e: any) => savedMovies.some((savedMovie: any) => savedMovie._id === e._id));
                    console.log(this.isStatusLike); */
                },
                error: (error) => {
                    console.error("Lỗi khi tìm kiếm phim:", error);
                    this.isLoading = false; // Dừng tải dữ liệu
                },
            });
        } else {
            this.isLoading = false;
        }
    }

    updatePagedMovies() {
        const start = this.currentPage * this.rows;
        const end = start + this.rows;
        this.pagedMovies = this.filteredMovies?.data?.items.slice(start, end) ?? [];
        let savedMovies = this.storageService.getLocalStorage("moviesSaved") || [];
        this.isStatusLike = this.pagedMovies.map((e: any) => savedMovies?.some((s: any) => s._id === e._id));
        console.log(this.isStatusLike);
    }

    paginate(event: any) {
        this.currentPage = event.page;
        this.rows = event.rows;
        this.updatePagedMovies();
    }

    handleLike(event: Event, status: any, movie: any) {
        console.log("handleLike", status, movie);

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
        } else {
            // Xóa phim khỏi danh sách nếu đã tồn tại
            savedMovies = savedMovies.filter((savedMovie: any) => savedMovie._id !== movie._id);
            this.storageService.setLocalStorage("moviesSaved", savedMovies);
        }
        // console.log(this.isStatusLike);
    }
}
