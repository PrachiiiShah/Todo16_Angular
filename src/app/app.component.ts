
import { Component } from '@angular/core';
import { Todo } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tasks: Todo[] = [];
  currentComponent: 'todo' | 'card' = 'card';
  showTodoForm() {
    this.currentComponent = 'todo';
  }
  showTodoCard() {
    this.currentComponent = 'card';
  }
  onSubmit(task: Todo) {
    this.tasks.push(task);
    console.log("Tasks:", this.tasks);
  }

}

