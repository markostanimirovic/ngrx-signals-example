import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CounterStore } from './counter.store';

@Component({
  selector: 'app-counter2',
  standalone: true,
  template: `
    <h1>Counter (signalStoreFeature)</h1>

    <p>Count: {{ store.count() }}</p>
    <p>Double Count: {{ store.doubleCount() }}</p>

    <button (click)="store.increment()">Increment</button>
    <button (click)="store.decrement()">Decrement</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CounterComponent {
  readonly store = inject(CounterStore);
}
