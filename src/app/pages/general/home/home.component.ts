import { DatePickerModule } from "primeng/datepicker";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CalendarModule } from "primeng/calendar";
import { registerLocaleData } from "@angular/common";
import localeVi from "@angular/common/locales/vi";
registerLocaleData(localeVi);
@Component({
    selector: "app-home",
    standalone: true,
    imports: [DatePickerModule, FormsModule, CalendarModule, DatePickerModule],
    templateUrl: "./home.component.html",
    styleUrl: "./home.component.css",
})
export class HomeComponent {
    // Cấu hình locale tiếng Việt
    vi: any;
    selectedDate: any;
    date: Date | undefined;
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
}
