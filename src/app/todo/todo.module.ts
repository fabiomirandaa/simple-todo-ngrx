import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoHomeComponent } from './todo-home/todo-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoFormComponent, TodoListComponent, TodoHomeComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class TodoModule {}
