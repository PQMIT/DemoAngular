import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators"; // Dùng để xử lý dữ liệu trả về
@Injectable({
    providedIn: "root",
})
export class MoviesService {
    private apiUrl = "https://phimapi.com/danh-sach/"; // URL API
    private apiUrlSlug = "https://phimapi.com/phim/"; // URL API
    private apiUrlSearch = " https://phimapi.com/v1/api/tim-kiem?keyword="; // URL API
    private apiUrlCategory = "https://phimapi.com/v1/api/danh-sach/"; // URL API
    constructor(private http: HttpClient) {}

    // Hàm gọi API và trả về danh sách phim
    getPhimMoiCapNhat(params: string): Observable<any> {
        return this.http.get<any>(this.apiUrl + params);
    }
    getPhimFromSlug(slug: string): Observable<any> {
        return this.http.get<any>(this.apiUrlSlug + slug);
    }
    getPhimFromSearch(search: string): Observable<any> {
        return this.http.get<any>(this.apiUrlSearch + search);
    }
    getPhimFromCategory(category: string): Observable<any> {
        return this.http.get<any>(this.apiUrlCategory + category);
    }
}
