import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myStore';
  // load:boolean=false;
  constructor(public auth:AuthService){
    // this.auth.logged().subscribe(res => this.load=res)
  }
}
