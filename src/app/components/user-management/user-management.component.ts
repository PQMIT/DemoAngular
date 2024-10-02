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
  newUser: User = { id: 0, name: '', email: '' };
  searchQuery: string = '';
  sortField: string = 'name';
  sortOrder: number = 1; // 1 cho tăng dần, -1 cho giảm dần

  /* constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
  } */

  constructor(
    private userService: UserService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe((users) => (this.users = users));
  }

  addUser() {
    if (this.newUser.name && this.newUser.email) {
      this.userService.addUser({ ...this.newUser }).subscribe(() => {
        this.loadUsers();
        this.newUser = { id: 0, name: '', email: '' }; // Reset form
      });
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

  filterUsers() {
    return this.users
      .filter(
        (user) =>
          user.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          user.email.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
      .sort((a, b) => {
        const comparison =
          this.sortOrder * a[this.sortField].localeCompare(b[this.sortField]);
        return comparison;
      });
  }

  setSortField(field: string) {
    this.sortOrder = this.sortField === field ? -this.sortOrder : 1;
    this.sortField = field;
  }
}
