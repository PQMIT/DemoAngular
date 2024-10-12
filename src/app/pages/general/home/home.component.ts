import { DatePickerModule } from "primeng/datepicker";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CalendarModule } from "primeng/calendar";
import { registerLocaleData } from "@angular/common";
import localeVi from "@angular/common/locales/vi";
import { AnimateOnScrollModule } from "primeng/animateonscroll";
import { CarouselModule } from "primeng/carousel";
import { ButtonModule } from "primeng/button";
import { TagModule } from "primeng/tag";
import { CardModule } from "primeng/card";
registerLocaleData(localeVi);
@Component({
    selector: "app-home",
    standalone: true,
    imports: [DatePickerModule, FormsModule, CalendarModule, DatePickerModule, AnimateOnScrollModule, CarouselModule, ButtonModule, TagModule, CardModule],
    templateUrl: "./home.component.html",
    styleUrl: "./home.component.css",
})
export class HomeComponent implements OnInit {
    // Cấu hình locale tiếng Việt
    vi: any;
    selectedDate: any;
    date: Date | undefined;
    movies: any[] = [
        {
            id: "1000",
            code: "f230fh0g3",
            name: "Bamboo Watch",
            description: "Product Description",
            image: "bamboo-watch.jpg",
            price: 65,
            category: "Accessories",
            quantity: 24,
            inventoryStatus: "INSTOCK",
            rating: 5,
        },
        {
            id: "10002",
            code: "f230fh0g3",
            name: "Bamboo Watch",
            description: "Product Description",
            image: "bamboo-watch.jpg",
            price: 65,
            category: "Accessories",
            quantity: 24,
            inventoryStatus: "INSTOCK",
            rating: 5,
        },
        {
            id: "10002",
            code: "f230fh0g3",
            name: "Bamboo Watch",
            description: "Product Description",
            image: "bamboo-watch.jpg",
            price: 65,
            category: "Accessories",
            quantity: 24,
            inventoryStatus: "INSTOCK",
            rating: 5,
        },
        {
            id: "10002",
            code: "f230fh0g3",
            name: "Bamboo Watch",
            description: "Product Description",
            image: "bamboo-watch.jpg",
            price: 65,
            category: "Accessories",
            quantity: 24,
            inventoryStatus: "INSTOCK",
            rating: 5,
        },
        {
            id: "10002",
            code: "f230fh0g3",
            name: "Bamboo Watch",
            description: "Product Description",
            image: "bamboo-watch.jpg",
            price: 65,
            category: "Accessories",
            quantity: 24,
            inventoryStatus: "INSTOCK",
            rating: 5,
        },
        {
            id: "10003",
            code: "f230fh0g3",
            name: "Bamboo Watch",
            description: "Product Description",
            image: "bamboo-watch.jpg",
            price: 65,
            category: "Accessories",
            quantity: 24,
            inventoryStatus: "INSTOCK",
            rating: 5,
        },
        {
            id: "10003",
            code: "f230fh0g3",
            name: "Bamboo Watch",
            description: "Product Description",
            image: "bamboo-watch.jpg",
            price: 65,
            category: "Accessories",
            quantity: 24,
            inventoryStatus: "INSTOCK",
            rating: 5,
        },
        {
            id: "10002",
            code: "f230fh0g3",
            name: "Bamboo Watch",
            description: "Product Description",
            image: "bamboo-watch.jpg",
            price: 65,
            category: "Accessories",
            quantity: 24,
            inventoryStatus: "INSTOCK",
            rating: 5,
        },
    ];

    responsiveOptions: any[] | undefined;
    constructor() {
        this.vi = {
            firstDayOfWeek: 1,
            dayNames: ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"],
            dayNamesShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
            dayNamesMin: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
            monthNames: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
            monthNamesShort: ["Th1", "Th2", "Th3", "Th4", "Th5", "Th6", "Th7", "Th8", "Th9", "Th10", "Th11", "Th12"],
            today: "Hôm nay",
            clear: "Xóa",
            dateFormat: "dd/mm/yy",
            weekHeader: "Tuần",
        };
    }

    ngOnInit(): void {
        // throw new Error("Method not implemented.");
        this.responsiveOptions = [
            {
                breakpoint: "1199px",
                numVisible: 1,
                numScroll: 1,
            },
            {
                breakpoint: "991px",
                numVisible: 2,
                numScroll: 1,
            },
            {
                breakpoint: "767px",
                numVisible: 1,
                numScroll: 1,
            },
        ];
    }
    /* getSeverity(status: string) {
        switch (status) {
            case "INSTOCK":
                return "success";
            case "LOWSTOCK":
                return "warn";
            case "OUTOFSTOCK":
                return "danger";
            default:
                return "unknown";
        }
    } */
}
