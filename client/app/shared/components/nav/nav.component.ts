import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <nav class="bg-yellow-300 h-16 flex p-3">
      <img
        data-testid="nav-logo"
        class="h-8"
        src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.14.1/mercadolibre/logo__large_plus.png"
        alt="Mercado Libre Logo"
      />
      <a data-testid="nav-link-profile" routerLink="/profile" class="btn-primary ml-auto">Ir a perfil</a>
    </nav>
  `,
  styles: [],
})
export class NavComponent {}
