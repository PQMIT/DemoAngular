import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../../../models/user";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../../../services/user";
import { ConfirmationService, MessageService } from "primeng/api";
import { CommonModule } from "@angular/common";
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { FormsModule } from "@angular/forms";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { RouterModule } from "@angular/router";
import { isPlatformBrowser } from "@angular/common";
import { PLATFORM_ID } from "@angular/core";
import { DialogModule } from "primeng/dialog";
import { ImageModule } from "primeng/image";
import { ReactiveFormsModule } from "@angular/forms";
import { CardModule } from "primeng/card";
@Component({
    selector: "app-about",
    standalone: true,
    imports: [AboutComponent, ButtonModule, CommonModule, ConfirmDialogModule, DialogModule, FormsModule, InputTextModule, ReactiveFormsModule, TableModule, RouterModule, CardModule],
    templateUrl: "./about.component.html",
    styleUrl: "./about.component.css",
})
export class AboutComponent {
    constructor(private router: Router) {}
    goToHome() {
        this.router.navigate(["/home"]); // Điều hướng về trang chủ hoặc trang user
    }
}
