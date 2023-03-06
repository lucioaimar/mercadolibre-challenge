import { Purchase } from '../../../interfaces/purchase.interface';
import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProfileService } from '../../../services/profile.service';

@Component({
  selector: 'app-purchase-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <div
        data-testid="date"
        class="flex items-center border-b p-4 font-medium"
      >
        {{ purchase?.fecha | date }}
      </div>
      <div class="flex items-center p-4">
        <div class="w-16 h-16 border rounded-lg p-1">
          <img
            data-testid="image"
            class="overflow-clip h-full"
            [src]="purchase?.imagen"
            alt="Product Image"
          />
        </div>
        <div class="ml-4 flex flex-col">
          <h1 data-testid="title" class="text-lg font-bold">{{ purchase?.titulo }}</h1>
          <p data-testid="quantity" class="text-gray-500">{{ purchase?.cantidad }} unidades</p>
          <p data-testid="total" class="text-gray-500">
            Total:
            {{ purchase?.precio?.total + ' ' + purchase?.precio?.moneda }}
          </p>
          <p data-testid="purchase-id" class="text-gray-500">
            ID Compra:
            {{ purchase?.id_compra }}
          </p>
        </div>
        <button data-testid="btn-details" (click)="goToPurchase()" class="btn-primary ml-auto">
          Ver compra
        </button>
      </div>
    </div>
  `,
})
export class PurchaseItemComponent {
  @Input() purchase: Purchase | null = null;

  router = inject(Router);

  goToPurchase() {
    if (!this.purchase) return;
    this.router.navigate(['profile/purchase', this.purchase?.id_compra]);
  }
}
