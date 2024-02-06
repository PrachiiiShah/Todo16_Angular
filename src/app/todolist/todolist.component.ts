import { Component, Input } from '@angular/core';
import { Todo } from '../model';
import { TodoServiceService } from '../services/todo-service.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent {
  //  @Input() task: Todo[] = [];
  tasks:Todo[]=[];
  constructor(private todoService: TodoServiceService) {
   
  }
  ngOnInit() {
    console.log('TodoListComponent initialized');
    this.todoService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
    // console.log("123 :", this.task);
  }
  // taskCounter: number = 1;

  //deletedTask: any = [];
 
  // onDelete(task:number) {
  //   this.task.pop();
  // }
}
