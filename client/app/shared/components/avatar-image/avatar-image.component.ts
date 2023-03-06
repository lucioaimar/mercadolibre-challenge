import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-avatar-image',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class=" rounded-full border h-16 w-16">
      <img
        [src]="src"
        alt="An Avatar image"
        class="bg-cover bg-center h-full rounded-full"
      />
    </div>
  `
})
export class AvatarImageComponent {
  @Input() src: string = '';
}
