import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../models/user";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
@Injectable({
    providedIn: "root",
})
export class UserService {
    //private apiUrl = "https://your-api-url.com/api/users"; // Thay đổi URL cho phù hợp
    private apiUrl = "https://jsonplaceholder.typicode.com/todos";
    constructor(private http: HttpClient) {}

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.apiUrl).pipe(
            catchError((error) => {
                console.error("Error fetching users:", error);

                // Kiểm tra nếu phản hồi không phải là JSON
                if (error.status === 200 && typeof error.error === "string") {
                    console.error("Response is not valid JSON:", error.error);
                }

                // Xử lý lỗi như trước
                const errorMessage = error.message || "An unknown error occurred.";
                return throwError(() => new Error(errorMessage));
            })
        );
    }

    addUser(user: User): Observable<User> {
        return this.http.post<User>(this.apiUrl, user);
    }

    updateUser(user: User): Observable<User> {
        return this.http.put<User>(`${this.apiUrl}/${user.id}`, user);
    }

    deleteUser(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
    getData(): Observable<any> {
        return this.http.get(this.apiUrl);
    }
}
