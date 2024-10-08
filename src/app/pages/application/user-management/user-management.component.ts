import { Component } from "@angular/core";
import { User } from "../../../models/user";
import { UserService } from "../../../services/user";
import { ConfirmationService } from "primeng/api";
import { CommonModule } from "@angular/common";
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { FormsModule } from "@angular/forms";
import { ConfirmDialogModule } from "primeng/confirmdialog";
@Component({
    selector: "app-user-management",
    standalone: true,
    templateUrl: "./user-management.component.html",
    styleUrls: ["./user-management.component.css"],
    imports: [CommonModule, TableModule, ButtonModule, InputTextModule, FormsModule, ConfirmDialogModule],
    providers: [ConfirmationService],
})
export class UserManagementComponent {
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

    constructor(private userService: UserService, private confirmationService: ConfirmationService) {}

    ngOnInit() {
        this.loadUsersLocal();
    }

    loadUsers() {
        this.userService.getDataAPI().subscribe((data) => {
            this.users = data;
            this.totalUsers = data.length;
        });
    }
    loadUsersLocal() {
        this.userService.getDataLocal().subscribe((data) => {
            this.users = data;
            this.totalUsers = data.length;
        });
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

    /* updateFilteredUsers() {
        this.filteredUsers = this.users
            .filter((user) => user.name.toLowerCase().includes(this.searchQuery.toLowerCase()) || user.email.toLowerCase().includes(this.searchQuery.toLowerCase()))
            .slice(this.currentPage * this.pageSize, (this.currentPage + 1) * this.pageSize);
    } */

    /* handleFileInput(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files.length > 0) {
            this.avatarFile = input.files[0];
        }
    } */
    /*  onSearchChange() {
        this.updateFilteredUsers();
    } */

    /*  onPageChange(event: any) {
        this.currentPage = event.page;
        this.updateFilteredUsers();
    } */

    /* addUser() {
        console.log("add user");

        if (this.newUser.name && this.newUser.email) {
            if (this.avatarFile) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.newUser.avatar = e.target?.result as string;
                    this.userService.addUser({ ...this.newUser }).subscribe(() => {
                        this.loadUsers();
                        this.newUser = { id: 0, name: "", email: "", role: "User" }; // Reset form
                        this.avatarFile = null; // Reset file
                    });
                };
                reader.readAsDataURL(this.avatarFile);
            } else {
                this.errorMessage = "Please upload an avatar image";
            }
        } else {
            this.errorMessage = "Name and email are required";
        }
    } */

    /* editUser(user: User) {
        this.selectedUser = { ...user };
    } */

    /* updateUser() {
        if (this.selectedUser) {
            this.userService.updateUser(this.selectedUser).subscribe(() => {
                this.loadUsers();
                this.selectedUser = null; // Reset selection
            });
        }
    } */

    /*  deleteUser(id: number) {
        this.confirmationService.confirm({
            message: "Are you sure you want to delete this user?",
            accept: () => {
                this.userService.deleteUser(id).subscribe(() => this.loadUsers());
            },
        });
    } */

    /* filterUsers(): User[] {
        return this.users.filter((user) => user.name.toLowerCase().includes(this.searchQuery.toLowerCase()) || user.email.toLowerCase().includes(this.searchQuery.toLowerCase()));
        .sort((a, b) => {
        const comparison =
          this.sortOrder * a[this.sortField].localeCompare(b[this.sortField]);
        return comparison;
      });
    } */

    /* setSortField(field: string) {
        this.sortOrder = this.sortField === field ? -this.sortOrder : 1;
        this.sortField = field;
    } */
}
