import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CustomPaginationComponent } from '../custom-pagination/custom-pagination.component';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { trigger, transition, style, animate } from '@angular/animations';
import { UserState } from '../../state/user.reducer';
import { selectUsers, selectTotalUsers } from '../../state/user.selectors';
import * as UserActions from '../../state/user.actions';

interface User {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
}

@Component({
  selector: 'app-user-list',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s ease-in', style({ opacity: 1 })),
      ]),
    ]),
  ],
  standalone: true,
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    CustomPaginationComponent,
  ],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users$!: Observable<User[]>;
  totalUsers$!: Observable<number>;
  loading$!: Observable<boolean>;
  currentPage: number = 1;

  @Output() pageChangeEvent = new EventEmitter<number>();
  @Output() userSelectEvent = new EventEmitter<number>();

  constructor(private store: Store<UserState>) {}

  ngOnInit(): void {
    this.loadPage(1);
    this.totalUsers$ = this.store.select(selectTotalUsers);
    this.loading$ = this.store.select((state) => state.loading);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadPage(page);
  }

  viewUserDetails(userId: number): void {
    this.userSelectEvent.emit(userId);
  }

  private loadPage(page: number): void {
    this.users$ = this.store.select(selectUsers(page));
    this.store.dispatch(UserActions.loadUsers({ page }));
  }
}
