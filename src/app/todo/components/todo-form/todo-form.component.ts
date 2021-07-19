import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { addTodo } from '../../store/todo.actions';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-todo-form',
    templateUrl: './todo-form.component.html',
    styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  formTodo = new FormGroup({
      title: new FormControl(''),
  });

  constructor(private store: Store) {}

  ngOnInit(): void {}

  onSubmit() {
      this.store.dispatch(addTodo({ title: this.formTodo.controls.title.value }));
      this.formTodo.controls.title.reset();
  }
}
