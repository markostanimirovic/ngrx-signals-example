import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-list',
  standalone: true,
  template: `
    @if (loading) {
      <span>Loading...</span>
    }

    <ul>
      @for (user of users; track user.id) {
        <li>{{ user.firstName }} {{ user.lastName }}</li>
      }
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent {
  @Input() users: User[] = [];
  @Input() loading = false;
}
