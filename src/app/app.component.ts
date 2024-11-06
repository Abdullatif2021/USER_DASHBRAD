import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    CommonModule,
    HeaderComponent,
    UserListComponent,
    UserDetailsComponent,
  ],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  users: any[] = [];
  totalUsers: number = 0;
  selectedUser: any = null;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers(1);
  }

  loadUsers(page: number) {
    this.userService.getUsersByPage(page).subscribe((response) => {
      this.users = response.data;
      this.totalUsers = response.total;
    });
  }

  onSearch(userId: string) {
    console.log('onSearch');
    if (userId) {
      this.userService.getUserById(+userId).subscribe((user) => {
        this.selectedUser = user.data;
      });
    } else {
      this.selectedUser = null;
    }
  }

  selectUser(userId: number) {
    this.userService.getUserById(userId).subscribe((user) => {
      this.selectedUser = user.data;
    });
  }

  clearSelectedUser() {
    this.selectedUser = null;
  }
}
