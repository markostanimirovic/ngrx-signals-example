import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <a routerLink="/01">signalStore</a> |
    <a routerLink="/02">signalStoreFeature</a> |
    <a routerLink="/03">RxJS Integration</a> |
    <a routerLink="/04">Entities</a>

    <router-outlet />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
