import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from '../models/Comment';
@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent implements OnInit {
 @Input() bee;
  @Input() post;
  @Input() myUser;
  @Output() sendContentoClose = new EventEmitter();
  myTitle = '';
  myBody = '';

  constructor() { }

  closeCont() {
    this.sendContentoClose.emit(false);

  };

  addComment(){
    var newcomment = new Comment(this.post.comments.length, this.post.id, this.myTitle, this.myBody, this.myUser.email);
   this.post.addComment(newcomment);
   this.sendContentoClose.emit(false);
  };

   ontitleEnter(event) {
    this.myTitle = event.target.value;
  }

  onbodyEnter(event) {
    this.myBody = event.target.value;
  }

  ngOnInit() {
  }

}
