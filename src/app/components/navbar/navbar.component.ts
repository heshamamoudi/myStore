import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { AuthService } from '../../services/auth/auth.service'
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
logged$:Observable<boolean>;
  constructor(private auth:AuthService, private user:UsersService, private router:Router) { 
    this.logged$= this.auth.logged()
  }

  ngOnInit(): void {
    // this.logged$= this.auth.logged();
   
  }
 

  logoutWithRedirect():void{
    this.auth.logout();
    this.router.navigate(['signin']);
  }
  

  getUser(){
    this.auth.getUser().subscribe(res => console.log(res));
  }
}
