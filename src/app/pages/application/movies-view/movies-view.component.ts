import { Component, OnInit } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ConfirmationService, MessageService } from "primeng/api";
import { CommonModule } from "@angular/common";
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { FormsModule } from "@angular/forms";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { Router } from "@angular/router";
import { RouterModule } from "@angular/router";
import { isPlatformBrowser } from "@angular/common";
import { PLATFORM_ID } from "@angular/core";
import { DialogModule } from "primeng/dialog";
import { ImageModule } from "primeng/image";
import { ReactiveFormsModule } from "@angular/forms";
import { OnDestroy } from "@angular/core";
import { TabView } from "primeng/tabview";
import { TabPanel } from "primeng/tabview";
import { TabViewModule } from "primeng/tabview";
import { CarouselModule } from "primeng/carousel";
import { SafeUrlPipe } from "../../../pipe/SafeUrlPipe";
import { ActivatedRoute } from "@angular/router";
import { MoviesService } from "../../../services/movies.service";
import { StorageService } from "../../../services/storage.service";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { FormControl } from "@angular/forms";
import { RatingModule } from "primeng/rating";
import { Episode, Movie, Comment } from "../../../models/movies";
@Component({
    selector: "app-movies-view",
    standalone: true,
    imports: [
        ButtonModule,
        CommonModule,
        TableModule,
        InputTextModule,
        FormsModule,
        ConfirmDialogModule,
        RouterModule,
        DialogModule,
        ImageModule,
        ReactiveFormsModule,
        TabViewModule,
        TabPanel,
        TabView,
        CarouselModule,
        ProgressSpinnerModule,
        FormsModule,
        RatingModule,
    ],
    templateUrl: "./movies-view.component.html",
    styleUrl: "./movies-view.component.css",
    providers: [ConfirmationService, MessageService, MoviesService, StorageService],
})
export class MoviesViewComponent implements OnInit {
    movie: Movie = {}; // Biến để lưu thông tin phim
    episodes = [
        {
            server_name: "Server 1",
            server_data: [
                {
                    name: "Episode 1",
                    thumbnail: "assets/episode1.jpg",
                    duration: "45 min",
                    videoUrl: "https://video-url-for-episode-1",
                },
            ],
        },
    ];
    formGroup!: FormGroup;

    isLoading: boolean = true; // Trạng thái tải dữ liệu
    showPlayer = false;
    currentEpisodeUrl: SafeResourceUrl | null = null;
    episodes_current: String = "";
    movieSlug: string | null = null; // Biến để lưu slug
    // Danh sách các comment giả lập
    comments: Comment[] = [
        {
            user: "John Doe",
            message: "This movie was amazing!",
            timestamp: "2024-10-16 10:45",
        },
        {
            user: "Jane Smith",
            message: "I loved the visual effects!",
            timestamp: "2024-10-16 11:20",
        },
        {
            user: "Alice Johnson",
            message: "The story was a bit confusing, but still great!",
            timestamp: "2024-10-16 12:15",
        },
    ];
    newComment: Comment = {
        user: "",
        message: "",
        timestamp: "",
    };
    isStatusLike: boolean = false;

    movieUrl: string = "https://your-website-url.com/movie-details"; // URL phim chi tiết

    constructor(private sanitizer: DomSanitizer, private route: ActivatedRoute, private moviesService: MoviesService, private storageService: StorageService) {}

    ngOnInit(): void {
        // Lấy slug từ URL
        this.route.params.subscribe((params) => {
            this.movieSlug = params["slug"];
            console.log(this.movieSlug); // Kiểm tra slug
            this.fetchMovies(); // Gọi hàm để lấy dữ liệu phim
        });
        this.formGroup = new FormGroup({
            value: new FormControl(4),
        });
    }
    fetchMovies() {
        if (this.movieSlug) {
            this.moviesService.getPhimFromSlug(this.movieSlug).subscribe(
                (movies) => {
                    // console.log(movies);
                    this.storageService.setLocalStorage("movieDetail", movies); // Lưu vào localStorage
                    // Xử lý dữ liệu phim ở đâyv
                    // console.log(movies.episodes[0].server_data);
                    this.movie = movies.movie;
                    this.episodes = movies.episodes;
                    console.log(this.episodes);
                    let moviesSaved = this.storageService.getLocalStorage("moviesSaved");
                    this.isStatusLike = moviesSaved.some((movie: any) => movie._id === this.movie._id);
                },
                (error) => {
                    console.error("Lỗi khi lấy danh sách phim:", error);
                }
            );
        } else {
            console.error("Slug không hợp lệ.");
        }
    }

    playEpisode(episode: any) {
        console.log(episode.name);
        this.episodes_current = episode.name;
        this.currentEpisodeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(episode.link_embed);
        this.showPlayer = true;
    }

    showTrailer() {
        // this.currentEpisodeUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://trailer-url");
        this.currentEpisodeUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/Yug8gbDd5EQ");
        this.showPlayer = true;
    }
    onVideoLoad() {
        // Khi video trong iframe đã load xong, set lại isLoading = false
        this.isLoading = false;
    }
    // Hàm này sẽ được gọi khi người dùng submit form
    addComment() {
        if (this.newComment.user && this.newComment.message) {
            this.newComment.timestamp = new Date().toISOString(); // Lấy thời gian hiện tại
            this.comments.push({ ...this.newComment }); // Thêm comment mới vào danh sách
            this.newComment.message = ""; // Reset lại nội dung sau khi gửi
        }
    }

    shareOnFacebook() {
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.movieUrl)}`;
        window.open(facebookUrl, "_blank");
    }

    shareOnTwitter() {
        const text = encodeURIComponent("Check out this awesome movie!");
        const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(this.movieUrl)}&text=${text}`;
        window.open(twitterUrl, "_blank");
    }

    shareOnLinkedIn() {
        const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(this.movieUrl)}`;
        window.open(linkedInUrl, "_blank");
    }
    handleLike(event: Event, movie: any) {
        // console.log(movie);
        // Lấy danh sách phim đã lưu từ localStorage hoặc khởi tạo rỗng nếu chưa có
        let savedMovies = this.storageService.getLocalStorage("moviesSaved") || [];
        // Toggle trạng thái like
        this.isStatusLike = !this.isStatusLike;
        // Kiểm tra xem bộ phim đã có trong danh sách chưa
        const isMovieSaved = savedMovies.some((savedMovie: any) => savedMovie._id === movie._id);
        if (!isMovieSaved && this.isStatusLike) {
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
