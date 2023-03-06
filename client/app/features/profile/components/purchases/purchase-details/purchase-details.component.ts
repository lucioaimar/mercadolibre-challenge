import {
  ShipmentColorMap,
  PaymentColorMap,
} from './../../../../../shared/utils/colors.utils';
import { Payment, Shipment } from './../../../interfaces/purchase.interface';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Purchase } from '../../../interfaces/purchase.interface';
import { BadgeComponent } from 'client/app/shared/components/badge/badge.component';

@Component({
  selector: 'app-purchase-details',
  standalone: true,
  imports: [CommonModule, BadgeComponent],
  template: `
    <div class="card">
      <div class="flex items-center justify-between">
        <p data-testid="date" class="text-lg">{{ purchase?.fecha | date }}</p>
        <p data-testid="purchase-id" class="text-lg">
          ID: {{ purchase?.id_compra }}
        </p>
      </div>
      <div class="flex items-center">
        <div class="flex gap-2 flex-col">
          <h1 data-testid="title" class="text-xl font-bold">
            {{ purchase?.titulo }}
          </h1>
          <p data-testid="quantity" class="text-gray-500">
            {{ purchase?.cantidad }} unidades
          </p>
          <p data-testid="price" class="text-gray-500">
            Total:
            {{ purchase?.precio?.total + ' ' + purchase?.precio?.moneda }}
          </p>
          <div
            data-testid="shipment"
            class="flex gap-2 items-center"
            *ngIf="shipment"
          >
            Envío:
            <app-badge
              [color]="ShipmentColorMap.get(shipment.estado) || 'green'"
              >{{ shipment.estado | titlecase }}</app-badge
            >
          </div>
          <div
            data-testid="payment"
            class="flex gap-2 items-center"
            *ngIf="payment"
          >
            Pago:
            <app-badge
              [color]="PaymentColorMap.get(payment.estado) || 'green'"
              >{{ payment.estado | titlecase }}</app-badge
            >
          </div>
          <p data-testid="seller">
            Vendedor:
            <a class="text-blue-500 cursor-pointer hover:underline">{{
              purchase?.vendedor?.nickname
            }}</a>
          </p>
        </div>
        <div class="w-36 h-36 border rounded-lg p-1 ml-auto">
          <img
            data-testid="image"
            class="overflow-clip h-full"
            [src]="purchase?.imagen"
            alt="Product Image"
          />
        </div>
      </div>
    </div>
  `,
})
export class PurchaseDetailsComponent {
  @Input() purchase: Purchase | null = null;
  @Input() payment: Payment | null = null;
  @Input() shipment: Shipment | null = null;

  ShipmentColorMap = ShipmentColorMap;
  PaymentColorMap = PaymentColorMap;
}
