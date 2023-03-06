import { NavComponent } from './shared/components/nav/nav.component';
import { RouterOutlet } from '@angular/router';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorCardComponent } from './shared/components/error-card/error-card.component';
import { GlobalService } from './global.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ErrorCardComponent, NavComponent],
  template: `
    <app-nav></app-nav>
    <router-outlet/>
    <div class="fixed bottom-0 right-0 p-4">
      <app-error-card *ngIf="globalService.error$ | async as error" [message]="error" [show]="!!error"/>
    </div>
  `,
})
export class AppComponent {
  title = 'mercadolibre-frontend';

  globalService = inject(GlobalService);
}
