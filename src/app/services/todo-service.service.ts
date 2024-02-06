import { Injectable } from '@angular/core';
import { Todo } from '../model';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
private tasks: Todo[] = [];
tasksSubject = new BehaviorSubject<Todo[]>([]);
  // public myData: string;

  constructor() {
    // this.myData = '';
  }
  private taskCounter: number = 1;
  addTask(task:Todo){
    task.number = this.taskCounter++;
    this.tasks.push(task);
    this.tasksSubject.next([...this.tasks]);
  }
  deleteTask(task: Todo) {
    const index = this.tasks.findIndex(t => t === task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
      this.tasksSubject.next([...this.tasks]);
    }
  }
   getTasks() {
    return this.tasksSubject.asObservable();
  }
}
