import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRestriction } from '../../interfaces/user.interface';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapExclamationCircle } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-user-restrictions',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  providers: [provideIcons({ bootstrapExclamationCircle })],
  template: `
    <span
      class="flex items-center p-2 rounded-2xl"
      [ngClass]="
        restriction?.tipo === 'warning'
          ? 'bg-yellow-100 text-yellow-500'
          : 'bg-red-100 text-red-500'
      "
    >
      <ng-icon
        [name]="
          restriction?.tipo === 'warning'
            ? 'bootstrapExclamationCircle'
            : 'bootstrapExclamationCircle'
        "
        size="24"
      ></ng-icon>
      <div class="ml-3 text-sm">
        {{ restriction?.mensaje }}
      </div>
    </span>
  `,

})
export class UserRestrictionsComponent {
  @Input() restriction: UserRestriction | null = null;
}
