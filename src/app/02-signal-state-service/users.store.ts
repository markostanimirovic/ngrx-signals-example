import { inject, Injectable } from '@angular/core';
import { pipe, switchMap, tap } from 'rxjs';
import { patchState, signalState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { User } from '../models/user.model';
import { UsersService } from '../services/users.service';

type State = {
  users: User[];
  loading: boolean;
  query: string;
};

const initialState: State = {
  users: [],
  loading: false,
  query: '',
};

@Injectable()
export class UsersStore {
  private readonly usersService = inject(UsersService);
  private readonly state = signalState(initialState);

  readonly users = this.state.users;
  readonly loading = this.state.loading;
  readonly query = this.state.query;

  constructor() {
    this.loadUsersByQuery(this.state.query);
  }

  setQuery(query: string): void {
    patchState(this.state, { query });
  }

  private readonly loadUsersByQuery = rxMethod<string>(
    pipe(
      tap(() => patchState(this.state, { loading: true })),
      switchMap((query) => this.usersService.getByQuery(query)),
      tap((users) => patchState(this.state, { users, loading: false })),
    ),
  );
}
