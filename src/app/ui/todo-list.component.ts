import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  template: `
    <ul>
      @for (todo of todos; track todo.id) {
        <li [class.completed]="todo.completed">
          <input
            type="checkbox"
            [checked]="todo.completed"
            (change)="toggleCompleted.emit(todo.id)"
          />

          {{ todo.text }} &nbsp;

          <button (click)="remove.emit(todo.id)">Remove</button>
        </li>
      } @empty {
        <p>Todo list is empty.</p>
      }
    </ul>
  `,
  styles: [
    `
      .completed {
        text-decoration: line-through;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {
  @Input() todos: Todo[] = [];
  @Output() toggleCompleted = new EventEmitter<number>();
  @Output() remove = new EventEmitter<number>();
}
