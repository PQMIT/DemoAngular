import { Component } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css'],
})
export class UserManagementComponent {
  users: User[] = [];
  selectedUser: User | null = null;
  newUser: User = { id: 0, name: '', email: '', role: 'User' };
  searchQuery: string = '';
  sortField: string = 'name';
  sortOrder: number = 1; // 1 cho tăng dần, -1 cho giảm dần
  errorMessage: string = '';
  avatarFile: File | null = null;
  filteredUsers: User[] = [];
  currentPage: number = 0;
  pageSize: number = 5;
  totalUsers: number = 0;

  constructor(
    private userService: UserService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
      this.totalUsers = users.length;
      this.updateFilteredUsers();
    });
  }

  updateFilteredUsers() {
    this.filteredUsers = this.users
      .filter(
        (user) =>
          user.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          user.email.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
      .slice(
        this.currentPage * this.pageSize,
        (this.currentPage + 1) * this.pageSize
      );
  }

  handleFileInput(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.avatarFile = input.files[0];
    }
  }
  onSearchChange() {
    this.updateFilteredUsers();
  }

  onPageChange(event: any) {
    this.currentPage = event.page;
    this.updateFilteredUsers();
  }

  addUser() {
    console.log('add user');

    if (this.newUser.name && this.newUser.email) {
      if (this.avatarFile) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.newUser.avatar = e.target?.result as string;
          this.userService.addUser({ ...this.newUser }).subscribe(() => {
            this.loadUsers();
            this.newUser = { id: 0, name: '', email: '', role: 'User' }; // Reset form
            this.avatarFile = null; // Reset file
          });
        };
        reader.readAsDataURL(this.avatarFile);
      } else {
        this.errorMessage = 'Please upload an avatar image';
      }
    } else {
      this.errorMessage = 'Name and email are required';
    }
  }

  editUser(user: User) {
    this.selectedUser = { ...user };
  }

  updateUser() {
    if (this.selectedUser) {
      this.userService.updateUser(this.selectedUser).subscribe(() => {
        this.loadUsers();
        this.selectedUser = null; // Reset selection
      });
    }
  }

  deleteUser(id: number) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this user?',
      accept: () => {
        this.userService.deleteUser(id).subscribe(() => this.loadUsers());
      },
    });
  }

  filterUsers(): User[] {
    return this.users.filter(
      (user) =>
        user.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    /* .sort((a, b) => {
        const comparison =
          this.sortOrder * a[this.sortField].localeCompare(b[this.sortField]);
        return comparison;
      }); */
  }

  setSortField(field: string) {
    this.sortOrder = this.sortField === field ? -this.sortOrder : 1;
    this.sortField = field;
  }
  getData() {
    console.log('get data');
  }
}
