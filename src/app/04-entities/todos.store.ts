import { patchState, signalStore, withMethods } from '@ngrx/signals';
import {
  addEntity,
  removeEntity,
  updateEntity,
  withEntities,
} from '@ngrx/signals/entities';
import { Todo } from './todo.model';
import { getNextId } from './todos.helpers';

export const TodosStore = signalStore(
  withEntities<Todo>(),
  withMethods((store) => ({
    addTodo(text: string) {
      const todo = { id: getNextId(), text, completed: false };
      patchState(store, addEntity(todo));
    },
    removeTodo(id: number) {
      patchState(store, removeEntity(id));
    },
    toggleTodo(id: number) {
      const changes = (todo: Todo) => ({ completed: !todo.completed });
      patchState(store, updateEntity({ id, changes }));
    },
  })),
);
