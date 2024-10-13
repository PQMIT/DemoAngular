import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class StorageService {
    constructor() {}
    // Set item vào localStorage
    setLocalStorage(key: string, value: any): void {
        if (typeof window !== "undefined") {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }

    // Lấy item từ localStorage
    getLocalStorage(key: string): any {
        if (typeof window !== "undefined") {
            const storedValue = localStorage.getItem(key);
            return storedValue ? JSON.parse(storedValue) : null;
        }
        return null;
    }

    // Xóa item khỏi localStorage
    removeLocalStorage(key: string): void {
        if (typeof window !== "undefined") {
            localStorage.removeItem(key);
        }
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
