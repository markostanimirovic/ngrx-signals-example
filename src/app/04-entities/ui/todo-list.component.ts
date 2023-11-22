import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  template: `
    <ul>
      @for (todo of todos; track todo.id) {
        <li [class.completed]="todo.completed">
          <input type="checkbox" (change)="toggle.emit(todo.id)" />
          {{ todo.text }}
          <button (click)="remove.emit(todo.id)">Remove</button>
        </li>
      } @empty {
        <p>Nothing to do!</p>
      }
    </ul>
  `,
  styles: `
    .completed {
      text-decoration: line-through;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {
  @Input() todos: Todo[] = [];
  @Output() toggle = new EventEmitter<number>();
  @Output() remove = new EventEmitter<number>();
}
