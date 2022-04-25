import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Posts } from '../models/Posts';

@Component({
  selector: 'app-Posts-item',
  templateUrl: './posts-item.component.html',
  styleUrls: ['./Posts-item.component.css']
})
export class PostsItemComponent implements OnInit {
 @Input() Posts:Posts;
 @Output()  hidePosts: EventEmitter<Posts> = new EventEmitter;
 @Output() marked = new EventEmitter();

  constructor() {
    this.Posts={
      id:0,
      title:'',
      body:'',
      likes:0,
    }
   }

  ngOnInit(): void {
  }
  like(Posts:Posts){
    Posts.likes+=1;
    return Posts;
  }

  dislike(Posts:Posts){
    Posts.likes-=1;
    return Posts;
  }

  hide(Posts:Posts){
    this.hidePosts.emit(Posts)
    
  }




}
