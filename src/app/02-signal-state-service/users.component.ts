import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SearchBoxComponent } from '../ui/search-box.component';
import { UserListComponent } from '../ui/user-list.component';
import { UsersStore } from './users.store';

@Component({
  standalone: true,
  imports: [SearchBoxComponent, UserListComponent],
  template: `
    <h1>SignalState + Service</h1>

    <app-search-box
      [query]="store.query()"
      (queryChange)="store.setQuery($event)"
    />

    <app-user-list [users]="store.users()" [loading]="store.loading()" />
  `,
  providers: [UsersStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UsersComponent {
  readonly store = inject(UsersStore);
}
