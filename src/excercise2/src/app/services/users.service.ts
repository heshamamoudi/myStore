import { Injectable } from '@angular/core';
import { User } from '../models/users';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  getUsers():Observable<User[]>{
    return this.http.get<User[]>("https://jsonplaceholder.typicode.com/users?_limit=8")
  }
}

