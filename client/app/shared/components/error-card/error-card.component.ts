import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapX } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-error-card',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  providers: [provideIcons({ bootstrapX })],
  template: `
    <div
      class="  max-w-xs bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative flex items-center"
      role="alert"
      *ngIf="show"
    >
      {{ message }}
      <ng-icon
        name="bootstrapX"
        size="24"
        class="ml-3 hover:cursor-pointer rounded-full hover:bg-red-200"
        (click)="show = false"
      ></ng-icon>
    </div>
  `,

})
export class ErrorCardComponent {
  @Input() message: string = '';
  @Input() show: boolean = false;
}
