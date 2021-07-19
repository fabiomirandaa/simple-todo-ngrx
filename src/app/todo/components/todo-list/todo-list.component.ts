import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input() todos: Observable<any>;
  @Output() todoSelected = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  deleteTodo(id: number) {
      this.todoSelected.emit(id);
  }
}
