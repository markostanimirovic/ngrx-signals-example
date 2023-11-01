import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CounterStore } from './counter.store';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <h1>Counter (signalStore)</h1>

    <p>Count: {{ store.count() }}</p>
    <p>Double Count: {{ store.doubleCount() }}</p>

    <button (click)="store.increment()">Increment</button>
    <button (click)="store.decrement()">Decrement</button>
  `,
  providers: [CounterStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CounterComponent {
  readonly store = inject(CounterStore);
}
