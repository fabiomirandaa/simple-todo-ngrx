import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoHomeComponent } from './pages/todo-home/todo-home.component';
import { TodoCounterComponent } from './components/todo-counter/todo-counter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        TodoFormComponent,
        TodoListComponent,
        TodoHomeComponent,
        TodoCounterComponent,
    ],
    imports: [CommonModule, TodoRoutingModule, FormsModule, ReactiveFormsModule],
})
export class TodoModule {}
