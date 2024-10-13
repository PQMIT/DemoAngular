import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators"; // Dùng để xử lý dữ liệu trả về
@Injectable({
    providedIn: "root",
})
export class MoviesService {
    private apiUrl = "https://phimapi.com/danh-sach/phim-moi-cap-nhat?page=1"; // URL API
    private apiUrlSlug = "https://phimapi.com/phim/"; // URL API
    constructor(private http: HttpClient) {}

    // Hàm gọi API và trả về danh sách phim
    getPhimMoiCapNhat(): Observable<any> {
        return this.http.get<any>(this.apiUrl).pipe(
            map((response) => response.items) // Chỉ lấy thuộc tính items từ response
        );
    }
    getPhimFromSlug(slug: string): Observable<any> {
        return this.http.get<any>(this.apiUrlSlug + slug).pipe(
            (response) => response // Chỉ lấy thuộc tính items từ response
        );
    }
}
