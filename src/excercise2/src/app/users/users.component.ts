import { Component, OnInit } from '@angular/core';
import { User } from '../models/users';
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users: User[] = [];
  constructor(private userService:UsersService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(res =>{
      this.users = res;
    })

  }

}
