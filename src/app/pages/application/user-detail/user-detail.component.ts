import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { DropdownModule } from "primeng/dropdown";
import { ConfirmationService } from "primeng/api";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { CardModule } from "primeng/card";
import { InputGroupModule } from "primeng/inputgroup";
import { InputGroupAddonModule } from "primeng/inputgroupaddon";
import { isPlatformBrowser } from "@angular/common";
import { PLATFORM_ID } from "@angular/core";
import { MessageService } from "primeng/api";
import { ToastModule } from "primeng/toast";
import { ButtonModule } from "primeng/button";
import { AvatarModule } from "primeng/avatar";
import { ImageModule } from "primeng/image";
import { DialogModule } from "primeng/dialog";
import { timeout } from "rxjs";
@Component({
    selector: "app-user-detail",
    standalone: true,
    imports: [DropdownModule, CommonModule, FormsModule, ReactiveFormsModule, CardModule, InputGroupModule, InputGroupAddonModule, ToastModule, ButtonModule, AvatarModule, ImageModule, DialogModule],
    templateUrl: "./user-detail.component.html",
    styleUrl: "./user-detail.component.css",
    providers: [ConfirmationService, MessageService],
})
export class UserDetailComponent implements OnInit {
    userForm!: FormGroup;
    genders?: any[];
    visible: boolean = false;

    constructor(private fb: FormBuilder, @Inject(PLATFORM_ID) private platformId: Object, private messageService: MessageService) {}
    showSuccess() {
        this.messageService.add({ severity: "success", summary: "Success", detail: "Message Content" });
    }

    showInfo() {
        this.messageService.add({ severity: "info", summary: "Info", detail: "Message Content" });
    }

    showWarn() {
        this.messageService.add({ severity: "warn", summary: "Warn", detail: "Message Content" });
    }

    showError() {
        this.messageService.add({ severity: "error", summary: "Error", detail: "Message Content" });
    }

    showContrast() {
        this.messageService.add({ severity: "contrast", summary: "Error", detail: "Message Content" });
    }

    showSecondary() {
        this.messageService.add({ severity: "secondary", summary: "Secondary", detail: "Message Content" });
    }
    show() {
        this.messageService.add({ severity: "info", summary: "Info", detail: "Message Content", life: 3000 });
    }

    ngOnInit() {
        this.genders = [
            { label: "Male", value: "Male" },
            { label: "Female", value: "Female" },
            { label: "Other", value: "Other" },
        ];

        this.userForm = this.fb.group({
            id: ["", Validators.required], // Field ID disabled for editing
            first_name: ["", Validators.required],
            last_name: ["", Validators.required],
            email: ["", [Validators.required, Validators.email]],
            gender: ["", Validators.required],
            ip_address: ["", Validators.required],
            role: ["", Validators.required],
            address: ["", Validators.required],
            avatar: ["", Validators.required],
        });
        if (isPlatformBrowser(this.platformId)) {
            // Chỉ thực hiện khi đang chạy trên trình duyệt
            this.getUserDetail();
        }
    }

    onSubmit() {
        if (this.userForm.valid) {
            console.log("Form Data: ", this.userForm.getRawValue());
            // window.alert("Form submitted successfully!");
            localStorage.setItem("userView", JSON.stringify(this.userForm.getRawValue()));
            //update array user
            const data = localStorage.getItem("users");
            if (data) {
                try {
                    const users = JSON.parse(data);
                    if (Array.isArray(users)) {
                        const index = users.findIndex((user: any) => user.id === this.userForm.value.id);
                        if (index !== -1) {
                            users[index] = this.userForm.getRawValue();
                        } else {
                            console.error("User not found in the array.");
                        }
                        localStorage.setItem("users", JSON.stringify(users));

                        this.showSuccess();
                        setTimeout(() => {
                            window.location.href = "/user";
                        }, 2000);
                    } else {
                        console.error("Invalid user data format.");
                    }
                } catch (e) {
                    console.error("Error parsing user data from localStorage", e);
                }
            } else {
                console.log("No user data found in localStorage");
                this.showSuccess();
                setTimeout(() => {
                    window.location.href = "/user";
                }, 2000);
            }
        }
    }
    getUserDetail() {
        const data = localStorage.getItem("userView");
        if (data) {
            try {
                const user = JSON.parse(data);
                if (typeof user === "object" && user !== null) {
                    this.userForm.patchValue(user);
                } else {
                    console.error("Invalid user data format.");
                }
            } catch (e) {
                console.error("Error parsing user data from localStorage", e);
            }
        } else {
            console.log("No user data found in localStorage");
        }
    }
}
