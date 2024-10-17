import { Component, Inject, ViewChild, AfterViewInit } from "@angular/core";
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
import { DialogFormUserComponent } from "../dialog-form-user/dialog-form-user.component";
import { OnDestroy } from "@angular/core";
import { FileUploadModule } from "primeng/fileupload";
import { ToastModule } from "primeng/toast";

interface UploadEvent {
    originalEvent: Event;
    files: File[];
}

@Component({
    selector: "app-user-management",
    standalone: true,
    templateUrl: "./user-management.component.html",
    styleUrls: ["./user-management.component.css"],
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
        DialogFormUserComponent,
        FileUploadModule,
        ToastModule,
    ],
    providers: [ConfirmationService, MessageService],
})
export class UserManagementComponent implements OnDestroy {
    // @ViewChild(DialogFormUserComponent) child;

    dataUser: any; // Dữ liệu user được chọn để xem chi tiết
    visibleDialog: boolean = false;

    users: User[] = [];
    selectedUser: User | null = null;
    newUser: User = { id: 0, firstName: "", lastName: "", email: "", role: "User" };
    searchQuery: string = "";
    sortField: string = "name";
    sortOrder: number = 1; // 1 cho tăng dần, -1 cho giảm dần
    errorMessage: string = "";
    avatarFile: File | null = null;
    filteredUsers: User[] = [];
    currentPage: number = 0;
    pageSize: number = 5;
    totalUsers: number = 0;

    userForm!: FormGroup;
    visible: boolean = false;
    genders?: any[];

    isDataChanged = false; // Trạng thái theo dõi thay đổi dữ liệu
    isRowEdited = false; // Trạng thái chỉnh sửa dòng

    imageSrc: string | ArrayBuffer | null = null; // Biến lưu chuỗi Base64 của ảnh

    private timeoutId: any; // Biến lưu ID của timeout để dọn dẹp
    // Hàm hiển thị dialog
    showDialog() {
        this.visible = true;
    }
    // Hàm khi người dùng nhấn nút Cancel
    onDialogClosed() {
        this.visibleDialog = false; // Cập nhật khi dialog đóng
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
    show() {
        this.messageService.add({ severity: "info", summary: "Info", detail: "Message Content", life: 3000 });
    }

    ngOnInit() {
        // window.location.reload();

        this.loadUsersLocal();
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
    }

    loadUsers() {
        this.userService.getDataAPI().subscribe((data) => {
            this.users = data;
            this.totalUsers = data.length;
        });
    }

    loadUsersLocal() {
        if (isPlatformBrowser(this.platformId)) {
            if (localStorage.getItem("users") === null) {
                this.userService.getDataLocal().subscribe((data) => {
                    this.users = data;
                    this.totalUsers = data.length;
                    this.saveData();
                });
            } else {
                this.users = JSON.parse(localStorage.getItem("users") || "");
                this.totalUsers = this.users.length;
            }
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

    onEditComplete(event: any) {
        const rowIndex = event.index; // Vị trí của dòng trong bảng
        const field = event.field; // Tên của trường (name, phone, email...)
        const newValue = event.data[field]; // Giá trị đã được chỉnh sửa

        console.log("Row data:", event.data); // Dữ liệu của dòng đã chỉnh sửa

        // Nếu muốn lưu lên server hoặc lưu vào localStorage
        this.saveData();
    }

    saveData() {
        // Ví dụ: Bạn có thể thực hiện gọi API để lưu dữ liệu đã chỉnh sửa
        // console.log("Dữ liệu đã được lưu:", this.users);

        // Hoặc lưu trữ vào localStorage
        localStorage.setItem("users", JSON.stringify(this.users));
    }

    viewDetail(user: User) {
        // this.router.navigate(["userDetail", user.id]);
        window.location.href = `/userDetail/${user.id}`;
        console.log("View detail user", user);
        localStorage.setItem("userView", JSON.stringify(user));
    }

    viewDetailInPage(user: User) {
        // this.router.navigate(["userDetail", user.id]);
        this.visibleDialog = true;
        this.dataUser = user;
    }

    deleteUser(event: any, user: any) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: "Do you want to delete this record?",
            header: "Danger Zone",
            icon: "pi pi-info-circle",
            rejectLabel: "Cancel",
            rejectButtonProps: {
                label: "Cancel",
                severity: "secondary",
                outlined: true,
            },
            acceptButtonProps: {
                label: "Delete",
                severity: "danger",
            },

            accept: () => {
                this.messageService.add({ severity: "info", summary: "Confirmed", detail: "Record deleted" });
                console.log("Delete user", user?.id);
                const data = localStorage.getItem("users");
                if (data) {
                    try {
                        const users = JSON.parse(data);
                        if (Array.isArray(users)) {
                            const index = users.findIndex((user: any) => user.id === user.id);
                            if (index !== -1) {
                                users.splice(index, 1);
                            } else {
                                console.error("User not found in the array.");
                            }
                            localStorage.setItem("users", JSON.stringify(users));
                            this.loadUsersLocal();
                        }
                    } catch (error) {
                        console.error("Error parsing JSON:", error);
                    }
                }
            },
            reject: () => {
                this.messageService.add({ severity: "error", summary: "Rejected", detail: "You have rejected" });
            },
        });
    }

    addUser() {
        // this.showDialog();
        if (this.userForm.valid) {
            console.log("Form Data: ", this.userForm.getRawValue());
            const data = localStorage.getItem("users");
            if (data) {
                try {
                    const users = JSON.parse(data);
                    if (Array.isArray(users)) {
                        users.push(this.userForm.getRawValue());
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
    // Hàm theo dõi thay đổi trong một dòng
    onRowEdit(user: any) {
        user.isRowEdited = true; // Đánh dấu rằng hàng này đã bị chỉnh sửa
    }
    // Hàm khi người dùng nhấn nút Save
    onChangeDataUser(user: any) {
        console.log("Save user changes", user);
        user.isRowEdited = false; // Sau khi lưu xong, đặt lại cờ
        // Thực hiện logic lưu dữ liệu
    }

    onFileSelected(event: any) {
        const file = event.files[0]; // Lấy file đã chọn từ PrimeNG event

        if (file) {
            const reader = new FileReader(); // Tạo FileReader để đọc file

            // Khi file đã được đọc xong (dưới dạng DataURL - Base64)
            reader.onload = () => {
                this.imageSrc = reader.result; // Lưu Base64 vào biến imageSrc để hiển thị ảnh
                this.userForm.patchValue({
                    avatar: reader.result, // Gán chuỗi Base64 vào trường avatar trong form
                });
            };

            reader.readAsDataURL(file); // Đọc file dưới dạng Base64
        }
    }

    ngOnDestroy() {
        // Dọn dẹp timeout khi component bị hủy
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }
}
