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
    ],
    templateUrl: "./movies-view.component.html",
    styleUrl: "./movies-view.component.css",
    providers: [ConfirmationService, MessageService, MoviesService, StorageService],
})
export class MoviesViewComponent implements OnInit {
    movie = {
        name: "Castle In The Time",
        content: "A romantic drama with time travel elements.",
        year: 2023,
        origin_name: "China",
        time: "64 phút/tập",
        episode_current: "Hoàn Tất (16/16)",
        status: "Ongoing",
        created: {
            time: "2024-10-13T13:18:13.000Z",
        },
        actor: ["송혜교", "김정현", "유인나", "김지호"],
        genres: ["Drama", "Romance", "Fantasy"],
        longDescription: "Castle In The Time tells the story of a young woman who discovers she has the ability to time travel...",
        poster_url: "assets/castle-in-the-time-poster.jpg",
        tmdb: {
            type: "tv",
            id: "129887",
            season: 1,
            vote_average: 5.9,
            vote_count: 34,
        },
        quality: "FHD",
        lang: "Vietsub",
    };
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

        // Thêm các tập khác tương tự
    ];

    isLoading: boolean = true; // Trạng thái tải dữ liệu
    showPlayer = false;
    currentEpisodeUrl: SafeResourceUrl | null = null;
    episodes_current: String = "";
    movieSlug: string | null = null; // Biến để lưu slug

    constructor(private sanitizer: DomSanitizer, private route: ActivatedRoute, private moviesService: MoviesService, private storageService: StorageService) {}

    ngOnInit(): void {
        // Lấy slug từ URL
        this.route.params.subscribe((params) => {
            this.movieSlug = params["slug"];
            console.log(this.movieSlug); // Kiểm tra slug
            this.fetchMovies(); // Gọi hàm để lấy dữ liệu phim
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
}
