import { effect } from '@angular/core';
import { signalStore, withHooks } from '@ngrx/signals';
import { withCounter } from './counter.feature';

export const CounterStore = signalStore(
  { providedIn: 'root' },
  withCounter(),
  withHooks({
    onInit({ doubleCount }) {
      effect(() => {
        console.log('doubleCount changed', doubleCount());
      });
    },
  }),
);
