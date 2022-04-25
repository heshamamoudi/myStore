import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Posts } from '../models/Posts';

@Component({
  selector: 'app-creat-post',
  templateUrl: './creat-post.component.html',
  styleUrls: ['./creat-post.component.css']
})
export class CreatPostComponent implements OnInit {
title:string='';
body:string='';
@Output()  addPost:EventEmitter<Posts>= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  submitForm():void{
    const post = {
      title:this.title,
      body:this.body,
      likes:1
    }
    this.addPost.emit(post);
    this.title='';
    this.body='';
  }
  

}
