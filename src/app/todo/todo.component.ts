import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo;

  completeTask() {
    this.todo.completed = false;
  };

  constructor() { }


  ngOnInit() {
  }

}
