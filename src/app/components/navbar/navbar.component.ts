import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth/auth.service'
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loginstatus$?:Observable<boolean>;
  constructor(private auth:AuthService,private router:Router) { 
    
  }

  ngOnInit(): void {
   this.loginstatus$ = this.auth.loginstatus;
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
