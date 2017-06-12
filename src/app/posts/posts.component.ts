import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input() bee;
  @Output() sendContentoShow = new EventEmitter();
  @Output() sendContentoShow3 = new EventEmitter();
    @Output() sendPost = new EventEmitter();

  showCont() {
    this.sendContentoShow.emit(true);
  };

  receivedContentoShow3(pCont) {

    this.sendContentoShow3.emit(pCont);

  }

  receivedPost(pPost) {

    this.sendPost.emit(pPost);

  }

  constructor() { }

  ngOnInit() {
  }

}
