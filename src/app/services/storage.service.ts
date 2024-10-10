import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class StorageService {
    // Lưu trữ dữ liệu vào localStorage
    setLocalStorage(key: string, value: any): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    // Lấy dữ liệu từ localStorage
    getLocalStorage(key: string): any {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    }

    // Xóa dữ liệu từ localStorage
    removeLocalStorage(key: string): void {
        localStorage.removeItem(key);
    }

    // Lưu trữ dữ liệu vào sessionStorage
    setSessionStorage(key: string, value: any): void {
        sessionStorage.setItem(key, JSON.stringify(value));
    }

    // Lấy dữ liệu từ sessionStorage
    getSessionStorage(key: string): any {
        const value = sessionStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    }

    // Xóa dữ liệu từ sessionStorage
    removeSessionStorage(key: string): void {
        sessionStorage.removeItem(key);
    }
}
