import { ChangeDetectionStrategy, Component } from '@angular/core';
import { patchState, signalState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import {interval, tap} from 'rxjs';
import { JsonPipe } from '@angular/common';
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  standalone: true,
  imports: [JsonPipe],
  template: `
    <h1>SignalState</h1>

    <p>{{ state.user.firstName() }} {{ state.user.lastName() }}</p>

    <p>Numbers: {{ state.numbers() | json }}</p>
    <button (click)="addNumber()">Add Number</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UserDetailsComponent {
  private count = 1;
  readonly state = signalState({
    user: { firstName: 'John', lastName: 'Smith' },
    numbers: [] as number[],
  });

  constructor() {
    interval(1000).pipe(
      takeUntilDestroyed(),
    ).subscribe((i) => {
      patchState(this.state, ({ user }) => ({
        user: { ...user, firstName: `John ${i}` },
      }));
    })
  }

  addNumber(): void {
    patchState(this.state, ({ numbers }) => ({
      numbers: [...numbers, this.count++],
    }));
  }
}
