import { Component, Input } from '@angular/core';
import { Todo } from '../model';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent {
   @Input() task: Todo[] = [];
  
  ngOnInit() {
    console.log('TodoListComponent initialized');
    console.log("123 :", this.task);
  }
  // taskCounter: number = 1;

  deletedTask: any = [];
 
  onDelete(task:number) {
    this.task.pop();
  }
}
