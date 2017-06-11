import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BeeActivityComponent } from './bee-activity/bee-activity.component';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todo/todo.component';
import { AlbumComponent } from './album/album.component';
import { PhotoComponent } from './photo/photo.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';
import { BeesComponent } from './bees/bees.component';
import { BeeComponent } from './bee/bee.component';
import { NewPostComponent } from './new-post/new-post.component';
import { NewCommentComponent } from './new-comment/new-comment.component';
import { NewTodoComponent } from './new-todo/new-todo.component';

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
