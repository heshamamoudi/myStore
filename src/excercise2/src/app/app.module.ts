import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/Posts.component'; 
import { PostsItemComponent } from './posts-item/posts-item.component'; 
import { HistoryComponent } from './history/history.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { UsersComponent } from './users/users.component';
import { CreatPostComponent } from './creat-post/creat-post.component'

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostsItemComponent,
    HistoryComponent,
    NavBarComponent,
    UsersComponent,
    CreatPostComponent,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
