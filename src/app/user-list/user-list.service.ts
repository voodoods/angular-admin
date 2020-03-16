import { Injectable } from '@angular/core';
import { IUser } from './types';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  private userListServiceURL = `${environment.USER_LIST_SERVICE_HOST}/users`

  constructor(
    private http: HttpClient
  ) { }

  getUserList() : Observable<IUser[]> {
    return this.http.get<IUser[]>(this.userListServiceURL)
  }
}
