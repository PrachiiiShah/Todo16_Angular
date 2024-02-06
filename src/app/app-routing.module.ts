import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoComponent } from './todo/todo.component';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { AppComponent } from './app.component';


export const routes: Routes = [

   {path: 'add', component: TodoComponent},{path:'card', component:TodolistComponent}, 
  //  { path: '', redirectTo: '/add', pathMatch: 'full' }
   
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
