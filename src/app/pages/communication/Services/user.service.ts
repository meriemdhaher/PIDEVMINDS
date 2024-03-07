import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = "http://localhost:8089";

  constructor(private httpClient: HttpClient) { }
  getAll() {
    return this.httpClient.get<User[]>(this.baseUrl + "/getallUsers")
  }

  adduser(user: User): Observable<Object> {
    return this.httpClient.post(this.baseUrl + "/addUser", user);
  }

  getUserByUsername(username: any) {
    return this.httpClient.get<User>(this.baseUrl + "/getUserByUserName/{username}" + username)
  }

}
