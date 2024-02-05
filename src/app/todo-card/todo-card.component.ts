import { Input, Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../model';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css'],
})
export class TodoCardComponent {
  @Input() task!: Todo;

  @Output() taskDeleted = new EventEmitter<number>();

  onDelete() {
    this.taskDeleted.emit(this.task.number);
  }
}
