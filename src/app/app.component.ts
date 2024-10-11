import { Component, OnInit } from "@angular/core";
import { RouterModule, RouterOutlet } from "@angular/router";
import { PanelModule } from "primeng/panel"; // Import PanelModule
// import { HeaderModule } from "./components/header/header.module";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { InputTextModule } from "primeng/inputtext";
import { InputGroupModule } from "primeng/inputgroup";
import { CardModule } from "primeng/card";
import { InputGroupAddonModule } from "primeng/inputgroupaddon";
import { HeaderComponent } from "./components/header/header.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AvatarModule } from "primeng/avatar";
import { BadgeModule } from "primeng/badge";
import { ButtonModule } from "primeng/button";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { MenubarModule } from "primeng/menubar";
import { RippleModule } from "primeng/ripple";
import { TableModule } from "primeng/table";
import { PrimeNGConfig } from "primeng/api";
import { Aura } from "primeng/themes/aura";
import { Lara } from "primeng/themes/lara";
import { Inject } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
@Component({
    selector: "app-root",
    standalone: true,
    imports: [
        RouterOutlet,
        InputGroupAddonModule,
        PanelModule,
        RouterLink,
        RouterLinkActive,
        RouterOutlet,
        PanelModule,
        RouterModule,
        InputTextModule,
        InputGroupModule,
        CardModule,
        HeaderComponent,
        TableModule,
        ButtonModule,
        InputTextModule,
        FormsModule,
        ConfirmDialogModule,
        MenubarModule,
        BadgeModule,
        AvatarModule,
        RippleModule,
        MenubarModule,
        ButtonModule,
        ConfirmDialogModule,
    ],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.css",
})
export class AppComponent {
    title = "DemoAngular";
    constructor(private config: PrimeNGConfig, private primengConfig: PrimeNGConfig) {
        this.config.theme.set({ preset: Aura });
        this.setLocale();
    }
    // Cấu hình locale tiếng Việt
    setLocale() {
        this.primengConfig.setTranslation({
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
        });
    }
}
