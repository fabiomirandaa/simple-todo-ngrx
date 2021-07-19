import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoHomeComponent } from './todo/pages/todo-home/todo-home.component';


const routes: Routes = [
    {
        path: '',
        component: TodoHomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
