import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input() bee;
  @Output() sendContentoShow = new EventEmitter();

  showCont() {
    this.sendContentoShow.emit(true);
  };

  constructor() { }

  ngOnInit() {
  }

}
