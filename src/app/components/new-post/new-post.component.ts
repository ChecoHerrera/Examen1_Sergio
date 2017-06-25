import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../models/post';
@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  @Input() bee;
  @Output() sendContentoClose = new EventEmitter();
  myNewPost = '';
  myTitle = '';
  myBody = '';
  closeCont() {
    this.sendContentoClose.emit(false);

  };

  addPost() {
    var myNewPost = new Post(this.bee.posts.length, this.bee.id, this.myTitle, this.myBody);
    console.log(myNewPost);
    this.bee.posts.push(myNewPost);
    this.sendContentoClose.emit(false);
  }

  ontitleEnter(event) {
    this.myTitle = event.target.value;
  }

  onbodyEnter(event) {
    this.myBody = event.target.value;
  }

  constructor() { }

  ngOnInit() {
  }

}
