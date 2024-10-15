import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MoviesService } from "../../../services/movies.service";
import { CommonModule } from "@angular/common";
import { RouterLink, Router } from "@angular/router";
import { PaginatorModule } from "primeng/paginator";
import { StorageService } from "../../../services/storage.service";
import { Toast } from "primeng/toast";
@Component({
    selector: "app-movie-saved",
    standalone: true,
    imports: [CommonModule, RouterLink, PaginatorModule],
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
        console.log(this.storageService.getLocalStorage("moviesSaved"));
        this.isLoading = false;

        // const queryParam = `${this.categoryType}?page=${currentPage}&limit=${rows}`;
        // console.log(queryParam);
        //call api
        /* switch (this.categoryType) {
            case "phim-moi-cap-nhat":
                this.moviesService.getPhimMoiCapNhat(queryParam).subscribe({
                    next: (movies) => {
                        // console.log(movies?.items);
                        this.ogDataMovie = movies; // Gán kết quả vào danh sách
                        this.listMovies = movies?.items;
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
                    },
                    error: (error) => {
                        console.error("Lỗi khi tìm kiếm phim:", error);
                    },
                    complete: () => {
                        this.isLoading = false; // Dừng tải dữ liệu sau khi hoàn tất (thành công hoặc thất bại)
                    },
                });
                break;
        } */
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
