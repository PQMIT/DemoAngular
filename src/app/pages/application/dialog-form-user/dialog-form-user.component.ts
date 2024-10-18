import { Component, EventEmitter, Inject, Input, Output, SimpleChanges } from "@angular/core";
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
import { Router } from "@angular/router";
import { RouterModule } from "@angular/router";
import { isPlatformBrowser } from "@angular/common";
import { PLATFORM_ID } from "@angular/core";
import { DialogModule } from "primeng/dialog";
import { ImageModule } from "primeng/image";
import { ReactiveFormsModule } from "@angular/forms";
@Component({
    selector: "app-dialog-form-user",
    standalone: true,
    imports: [
        CommonModule,
        TableModule,
        ButtonModule,
        InputTextModule,
        FormsModule,
        ConfirmDialogModule,
        RouterModule,
        ConfirmDialogModule,
        DialogModule,
        ImageModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [ConfirmationService, MessageService],
    templateUrl: "./dialog-form-user.component.html",
    styleUrl: "./dialog-form-user.component.css",
})
export class DialogFormUserComponent {
    @Input() visibleChild: any = false;
    @Input() dataUserFromParent: any;
    @Output() dialogClosed = new EventEmitter<void>();

    users: User[] = [];
    // newUser: User = { id: 0, firstName: "", lastName: "", email: "", role: "User" };
    avatarFile: File | null = null;
    currentPage: number = 0;
    pageSize: number = 5;
    totalUsers: number = 0;

    userForm!: FormGroup;
    genders?: any[];

    isDataChanged = false; // Trạng thái theo dõi thay đổi dữ liệu

    showDialog() {
        this.visibleChild = true;
    }

    constructor(
        private fb: FormBuilder,
        private userService: UserService,
        private confirmationService: ConfirmationService,
        private router: Router,
        private messageService: MessageService,
        @Inject(PLATFORM_ID) private platformId: Object
    ) {}
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

    ngOnChanges(changes: SimpleChanges) {
        if (changes["dataUserFromParent"] && this.dataUserFromParent) {
            // Patch giá trị vào form khi dữ liệu thay đổi
            this.userForm.patchValue(this.dataUserFromParent);
        }
    }
    ngOnInit() {
        this.genders = [
            { label: "Male", value: "Male" },
            { label: "Female", value: "Female" },
            { label: "Other", value: "Other" },
        ];
        this.initForm();
    }
    //Khởi tạo form
    initForm() {
        this.userForm = this.fb.group({
            id: [{ value: "", disabled: true }, Validators.required],
            first_name: [{ value: "", disabled: true }, Validators.required],
            last_name: [{ value: "", disabled: true }, Validators.required],
            email: [{ value: "", disabled: true }, [Validators.required, Validators.email]],
            gender: [{ value: "", disabled: true }, Validators.required],
            ip_address: [{ value: "", disabled: true }, Validators.required],
            role: [{ value: "", disabled: true }, Validators.required],
            address: [{ value: "", disabled: true }, Validators.required],
            avatar: [{ value: "", disabled: true }, Validators.required],
        });
    }
    closeDialog() {
        this.dialogClosed.emit(); // Phát ra sự kiện để thông báo cho cha
    }
}
