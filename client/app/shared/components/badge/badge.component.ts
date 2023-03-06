import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span
      class="flex items-center px-2 py-1 rounded-xl font-medium"
      [ngClass]="'bg-' + color + '-100 text-' + color + '-500'"
    ><ng-content/>
    </span>
  `,
})
export class BadgeComponent {
  @Input() color: BadgeColors = 'green';
}

export type BadgeColors = 'green' | 'red' | 'yellow';
