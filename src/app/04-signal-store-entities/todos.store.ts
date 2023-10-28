import { patchState, signalStore, withMethods } from '@ngrx/signals';
import {
  addEntity,
  removeEntity,
  updateEntity,
  withEntities,
} from '@ngrx/signals/entities';
import { Todo } from '../models/todo.model';

export const TodosStore = signalStore(
  { providedIn: 'root' },
  withEntities<Todo>(),
  withMethods((store) => ({
    add(text: string) {
      const id = store.ids().length;
      patchState(store, addEntity({ id, text, completed: false }));
    },
    remove(id: number) {
      patchState(store, removeEntity(id));
    },
    toggleCompleted(id: number) {
      patchState(
        store,
        updateEntity({ id, changes: (t) => ({ completed: !t.completed }) }),
      );
    },
  })),
);
