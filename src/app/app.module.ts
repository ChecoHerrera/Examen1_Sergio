import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BeeActivityComponent } from './components/bee-activity/bee-activity.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoComponent } from './components/todo/todo.component';
import { AlbumComponent } from './components/album/album.component';
import { PhotoComponent } from './components/photo/photo.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { CommentComponent } from './components/comment/comment.component';
import { BeesComponent } from './components/bees/bees.component';
import { BeeComponent } from './components/bee/bee.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { NewCommentComponent } from './components/new-comment/new-comment.component';
import { NewTodoComponent } from './components/new-todo/new-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BeeActivityComponent,
    TodosComponent,
    TodoComponent,
    AlbumComponent,
    PhotoComponent,
    PostsComponent,
    PostComponent,
    CommentComponent,
    BeesComponent,
    BeeComponent,
    NewPostComponent,
    NewCommentComponent,
    NewTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
