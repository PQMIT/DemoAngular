import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MoviesService } from "../../../services/movies.service";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
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
    searchTerm: string | null = null; // Từ khóa tìm kiếm
    isLoading: boolean = true; // Trạng thái tải dữ liệu

    ogDataMovie: any = {}; // Danh sách phim đã lọc
    pagedMovies: any[] = [];
    rows = 10; // Số phim hiển thị trên mỗi trang
    categoryType: string = "";
    currentPage: number = 1;
    queryParam: string = "";
    constructor(private route: ActivatedRoute, private moviesService: MoviesService) {}

    ngOnInit(): void {
        this.route.paramMap.subscribe((params) => {
            this.categoryType = params.get("slug") || ""; // Lấy path variable "type_list"
            console.log(params);
        });

        // Lấy query params
        this.route.queryParams.subscribe((params) => {
            console.log(params);

            this.currentPage = params["page"] ? +params["page"] : 1; // Lấy query param "page"
        });
        console.log(this.categoryType);
        this.getMovie(this.currentPage);
        // console.log(this.pagedMovies.length);
    }

    // Phương thức để tìm kiếm
    getMovie(currentPage: any): void {
        if (this.categoryType) {
            this.isLoading = true; // Bắt đầu tải dữ liệu
            this.queryParam = this.categoryType + "?page=" + this.currentPage;
            this.moviesService.getPhimFromCategory(this.queryParam).subscribe({
                next: (movies) => {
                    console.log(movies);
                    this.ogDataMovie = movies; // Gán kết quả tìm kiếm vào danh sách đã lọc
                    this.pagedMovies = movies.data.items;
                    this.isLoading = false; // Dừng tải dữ liệu
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
        this.currentPage = event.page + 1;
        this.rows = event.rows;
        console.log(this.currentPage + " " + event.page);

        // this.updatePagedMovies();
        this.getMovie(this.currentPage);
    }
}
