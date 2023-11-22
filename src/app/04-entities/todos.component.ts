import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodosStore } from './todos.store';
import { AddTodoComponent } from './ui/add-todo.component';
import { TodoListComponent } from './ui/todo-list.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [AddTodoComponent, TodoListComponent],
  template: `
    <h1>Todos (Entities)</h1>

    <app-add-todo (add)="store.addTodo($event)" />

    <app-todo-list
      [todos]="store.entities()"
      (toggle)="store.toggleTodo($event)"
      (remove)="store.removeTodo($event)"
    />
  `,
  providers: [TodosStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TodosComponent {
  readonly store = inject(TodosStore);
}
