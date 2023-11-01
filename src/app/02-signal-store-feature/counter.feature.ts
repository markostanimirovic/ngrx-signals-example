import { computed } from '@angular/core';
import {
  patchState,
  signalStoreFeature,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';

export function withCounter() {
  return signalStoreFeature(
    withState({ count: 0 }),
    withComputed(({ count }) => ({
      doubleCount: computed(() => count() * 2),
    })),
    withMethods(({ count, ...store }) => ({
      increment() {
        patchState(store, { count: count() + 1 });
      },
      decrement() {
        patchState(store, { count: count() - 1 });
      },
    })),
  );
}
