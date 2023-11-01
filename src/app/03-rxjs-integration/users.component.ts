import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SearchBoxComponent } from './ui/search-box.component';
import { UserListComponent } from './ui/user-list.component';
import { UsersStore } from './users.store';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [SearchBoxComponent, UserListComponent],
  template: `
    <h1>03 RxJS Integration</h1>

    <app-search-box
      [query]="store.query()"
      (queryChange)="store.updateQuery($event)"
    />

    <app-user-list [users]="store.users()" [isLoading]="store.isLoading()" />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UsersComponent {
  readonly store = inject(UsersStore);
}
