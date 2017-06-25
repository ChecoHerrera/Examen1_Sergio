import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @Input() bee;
  @Output() sendContentoShow = new EventEmitter();

  showCont() {
    this.sendContentoShow.emit(true);
  };

  constructor() { }

  ngOnInit() {
  }

}
