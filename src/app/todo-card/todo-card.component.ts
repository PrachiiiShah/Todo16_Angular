import { Input, Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../model';
import { TodoServiceService } from '../services/todo-service.service';
@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css'],
})
export class TodoCardComponent {
    @Input() task!: Todo;

constructor (private todoService:TodoServiceService){}
  // @Output() taskDeleted = new EventEmitter<number>();

  // onDelete() {
  //   this.taskDeleted.emit(this.task.number);
  // }
  deleteTask(){
    this.todoService.deleteTask(this.task);
  }
}
