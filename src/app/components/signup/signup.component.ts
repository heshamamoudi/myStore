import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  first_name:string=''
  last_name:string=''
  username:string=''
  email:string=''
  password:string=''
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }


  signup(){
    this.auth.signup({
      first_name:this.first_name,
      last_name:this.last_name,
      username:this.username,
      password:this.password
    }).subscribe((data)=>{
      this.auth.setSession(data)
      alert(data)
     })
   
  }
}
