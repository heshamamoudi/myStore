import { Component, OnInit } from '@angular/core';
import { Posts } from '../models/Posts';
import {PostsService} from '../services/Posts.service'
@Component({
  selector: 'app-Posts',
  templateUrl: './Posts.component.html',
  styleUrls: ['./Posts.component.css']
})
export class PostsComponent implements OnInit {
  name:string= 'lemonade'
  ingrediants:string[]=['lemon','water','sugar']
  howToUse:string='';
  posts: Posts[] = [];
  constructor(private PostsService:PostsService) { }

  ngOnInit(): void {
    this.howToUse="mix them together"
    this.PostsService.getPostss().subscribe(res =>{
      for (let index = 0; index < res.length; index++) {
        const post = res[index];
        post["likes"] = 0
        
      }
      this.posts=res;
    })
  }
   add(Postss:Posts[]) {
    Postss.push({
      id:3,
      title: "milk",
      body:'hello',
      likes:0
    })
  }
  remove(Postss:Posts[]) {
    Postss.pop()
  }
  hidePosts(Posts:Posts){
    this.posts = this.posts.filter(r => r.id !== Posts.id)
  }
  markAsFavorite(Posts: any): void {
    window.alert(`${Posts.title} has been added to favorites.`);
  }
  addPost(post:Posts):void{
this.posts.unshift(post)
alert("post added")
  }
}
