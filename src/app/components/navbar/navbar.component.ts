import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth/auth.service'
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loginstatus$?:Observable<boolean>;
  

user: User={first_name:'',
  last_name:'',
  username:''}
  constructor(private auth:AuthService,private router:Router) { 
    

  }

  ngOnInit(): void {
   this.loginstatus$ = this.auth.loginstatus;
  }
  onsignIn(data:any): void {
    console.log(data)
    this.user.first_name=data.name;
    this.user.last_name=data.lname;
    this.user.username=data.username;
  }

  logoutWithRedirect():void{
    this.auth.logout();
  }
  isLoggedIn(){
  return  this.auth.isLoggedIn()
  }
  

  getUser(){
    this.auth.getUser().subscribe(res => console.log(res));
  }
}
