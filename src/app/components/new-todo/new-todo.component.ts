import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo';
@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {
  @Input() bee;
  @Output() sendContentoClose = new EventEmitter();
  myNewTodo = '';
  myText = ""
  closeCont() {
    this.sendContentoClose.emit(false);

  };

  addTodo() {
    var myNewTodo = new Todo(this.bee.todos.length, this.bee.id, this.myText, 'false');
    console.log(myNewTodo)
    this.bee.todos.push(myNewTodo);
    this.sendContentoClose.emit(false);
  }

  ontitleEnter(event) {
    this.myText = event.target.value;
  }

  constructor() { }

  ngOnInit() {
  }

}
