import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectTodosCount } from '../../store/todo.reducers';

@Component({
    selector: 'app-todo-counter',
    templateUrl: './todo-counter.component.html',
    styleUrls: ['./todo-counter.component.scss']
})
export class TodoCounterComponent implements OnInit {
  // TODO: Implementar select do total de TODO
  totalCount$: Observable<number>;

  constructor(private store: Store) { }

  ngOnInit(): void {
      this.totalCount$ =  this.store.select(selectTodosCount);
  }

}
