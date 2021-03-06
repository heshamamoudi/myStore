import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username:string=''
password:string=''
  constructor(private auth:AuthService, private router: Router) { }
  ngOnInit(): void {
   
  }

  

  loginWithRedirect():void{
    this.auth.login(this.username,this.password).subscribe((data)=>{
      this.auth.setSession(data)
      
    })
  }

  

  signup(){
    this.router.navigateByUrl('/signup')
  }
}
