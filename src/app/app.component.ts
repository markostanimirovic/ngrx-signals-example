import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <a routerLink="/01">SignalState</a> |
    <a routerLink="/02">SignalState + Service</a> |
    <a routerLink="/03">SignalStore</a> |
    <a routerLink="/04">SignalStore + Entities</a>

    <router-outlet />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
