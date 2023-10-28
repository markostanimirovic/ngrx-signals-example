import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodoListComponent } from '../ui/todo-list.component';
import { AddTodoComponent } from '../ui/add-todo.component';
import { TodosStore } from './todos.store';

@Component({
  standalone: true,
  imports: [AddTodoComponent, TodoListComponent],
  template: `
    <h1>SignalStore + Entities</h1>

    <app-add-todo (add)="todosStore.add($event)"></app-add-todo>

    <app-todo-list
      [todos]="todosStore.entities()"
      (remove)="todosStore.remove($event)"
      (toggleCompleted)="todosStore.toggleCompleted($event)"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TodosComponent {
  readonly todosStore = inject(TodosStore);
}
