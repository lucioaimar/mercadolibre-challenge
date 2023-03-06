import { PurchaseItemComponent } from '../purchase-item/purchase-item.component';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Purchase } from '../../../interfaces/purchase.interface';

@Component({
  selector: 'app-purchase-list',
  standalone: true,
  imports: [CommonModule, PurchaseItemComponent],
  template: `
    <div>
      <h1 data-testid="purchase-list-title" class="text-2xl mb-4 font-bold">Mis compras</h1>
      <div class="flex flex-col gap-4">
        <app-purchase-item
          *ngFor="let purchase of purchases"
          [purchase]="purchase"
        ></app-purchase-item>
      </div>
    </div>
  `,

})
export class PurchaseListComponent {
  @Input() purchases: Purchase[] | null = null;
}
