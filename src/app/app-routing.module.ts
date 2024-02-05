import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoComponent } from './todo/todo.component';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { AppComponent } from './app.component';


export const routes: Routes = [
  // { path: 'todolist', component: TodolistComponent },
  // {path: 'todo', component: TodoComponent},{path:'card', component:TodoCardComponent},
   
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
