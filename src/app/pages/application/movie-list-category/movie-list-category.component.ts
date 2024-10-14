import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MoviesService } from "../../../services/movies.service";
import { CommonModule } from "@angular/common";
import { RouterLink, Router } from "@angular/router";
import { PaginatorModule } from "primeng/paginator";
@Component({
    selector: "app-movie-list-category",
    standalone: true,
    imports: [CommonModule, RouterLink, PaginatorModule],
    templateUrl: "./movie-list-category.component.html",
    styleUrl: "./movie-list-category.component.css",
    providers: [MoviesService],
})
export class MovieListCategoryComponent {
    // searchTerm: string | null = null; // Từ khóa tìm kiếm
    isLoading: boolean = true; // Trạng thái tải dữ liệu
    first = 0; // Trang bắt đầu, page đầu tiên sẽ là 0
    ogDataMovie: any = {}; // Danh sách phim đã lọc
    pagedMovies: any[] = [];
    rows = 10; // Số phim hiển thị trên mỗi trang
    categoryType: string = "";
    currentPage: number = 1;
    queryParam: string = "";
    constructor(private route: ActivatedRoute, private moviesService: MoviesService, private router: Router) {}

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
        // console.log(this.pagedMovies.length);
    }

    // Phương thức để tìm kiếm
    getMovie(currentPage: any, rows: any): void {
        if (!this.categoryType) return; // Không thực hiện gì nếu không có categoryType
        this.isLoading = true; // Bắt đầu tải dữ liệu
        const queryParam = `${this.categoryType}?page=${currentPage}&limit=${rows}`;
        this.moviesService.getPhimFromCategory(queryParam).subscribe({
            next: (movies) => {
                this.ogDataMovie = movies; // Gán kết quả vào danh sách
                this.pagedMovies = movies.data.items;
            },
            error: (error) => {
                console.error("Lỗi khi tìm kiếm phim:", error);
            },
            complete: () => {
                this.isLoading = false; // Dừng tải dữ liệu sau khi hoàn tất (thành công hoặc thất bại)
            },
        });
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
}
