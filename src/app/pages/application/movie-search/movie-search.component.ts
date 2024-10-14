import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MoviesService } from "../../../services/movies.service";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { PaginatorModule } from "primeng/paginator";
@Component({
    selector: "app-movie-search",
    standalone: true,
    imports: [CommonModule, RouterLink, PaginatorModule],
    templateUrl: "./movie-search.component.html",
    styleUrl: "./movie-search.component.css",
    providers: [MoviesService],
})
export class MovieSearchComponent implements OnInit {
    searchTerm: string | null = null; // Từ khóa tìm kiếm
    isLoading: boolean = true; // Trạng thái tải dữ liệu
    filteredMovies: any = {}; // Danh sách phim đã lọc
    pagedMovies: any[] = [];
    rows = 10; // Số phim hiển thị trên mỗi trang
    currentPage = 0; // Trang hiện tại

    constructor(private route: ActivatedRoute, private moviesService: MoviesService) {}

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
            this.moviesService.searchMovies(this.searchTerm).subscribe({
                next: (movies) => {
                    this.filteredMovies = movies; // Gán kết quả tìm kiếm vào danh sách đã lọc
                    this.isLoading = false; // Dừng tải dữ liệu
                    this.updatePagedMovies();
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
    paginate(event: any) {
        this.currentPage = event.page;
        this.rows = event.rows;
        this.updatePagedMovies();
    }

    updatePagedMovies() {
        const start = this.currentPage * this.rows;
        const end = start + this.rows;
        this.pagedMovies = this.filteredMovies?.data?.items.slice(start, end) ?? [];
        // console.log();
    }
}
