import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post;

  @Output() sendContentoShow = new EventEmitter();
  @Output() sendPost = new EventEmitter();

  showCont(pPost) {
    this.sendContentoShow.emit(true);
    this.sendPost.emit(pPost);
  };

  constructor() { }

  ngOnInit() {
  }

}
