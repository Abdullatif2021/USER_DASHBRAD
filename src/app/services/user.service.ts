import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'https://reqres.in/api/users';
  private userCache = new Map<number, any>();
  private pageCache = new Map<number, any>();

  constructor(private http: HttpClient) {}

  getUsersByPage(page: number): Observable<any> {
    if (this.pageCache.has(page)) {
      return of(this.pageCache.get(page));
    } else {
      return this.http
        .get(`${this.baseUrl}?page=${page}`)
        .pipe(tap((response) => this.pageCache.set(page, response)));
    }
  }

  getUserById(id: number): Observable<any> {
    if (this.userCache.has(id)) {
      return of(this.userCache.get(id));
    } else {
      return this.http
        .get(`${this.baseUrl}/${id}`)
        .pipe(tap((user) => this.userCache.set(id, user)));
    }
  }
}
