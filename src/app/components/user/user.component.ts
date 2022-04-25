import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  username:string;
  
  constructor() {
    this.name='';
    this.username='';
   }

  ngOnInit(): void {
  }

}
