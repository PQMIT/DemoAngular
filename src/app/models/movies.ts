export interface Movie {
    name?: string;
    content?: string;
    year?: number;
    origin_name?: string;
    time?: string;
    episode_current?: string;
    status?: string;
    created?: {
        time?: string; // ISO string format
    };
    actor?: string[]; // Array of actor names
    genres?: string[]; // Array of genre names
    longDescription?: string;
    poster_url?: string;
    tmdb?: {
        type?: string;
        id?: string;
        season?: number;
        vote_average?: number;
        vote_count?: number;
    };
    quality?: string;
    lang?: string;
    _id?: number;
}

export interface Episode {
    server_name?: string; // Không bắt buộc
    server_data?: {
        name?: string; // Không bắt buộc
        thumbnail?: string; // Không bắt buộc
        duration?: string; // Không bắt buộc
        videoUrl?: string; // Không bắt buộc
    }[]; // Mảng cũng có thể không bắt buộc
}
export interface Comment {
    user: string;
    message: string;
    timestamp: string; // Hoặc kiểu `Date` nếu bạn muốn dùng `Date` trong TypeScript
}
