import { SpinnerComponent } from './../../../../shared/components/spinner/spinner.component';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../../services/profile.service';
import { bootstrapArrowLeft } from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { PurchaseDetailsComponent } from '../../components/purchases/purchase-details/purchase-details.component';
import { shareReplay, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-purchase-detail-page',
  standalone: true,
  imports: [
    CommonModule,
    NgIconComponent,
    PurchaseDetailsComponent,
    SpinnerComponent,
  ],
  providers: [provideIcons({ bootstrapArrowLeft })],
  template: `
    <div class="flex flex-col md:px-52 px-4 py-4">
      <button data-testid="btn-back" class="btn-primary w-fit mb-4" (click)="goBack()">
        <ng-icon name="bootstrapArrowLeft"></ng-icon>
        Volver a perfil
      </button>
      <ng-container
        *ngIf="{
          purchase: purchase$ | async,
          shipment: shipment$ | async,
          payment: payment$ | async
        } as data"
      >
        <app-purchase-details
          *ngIf="data.purchase && data.shipment && data.payment; else loading"
          [purchase]="data.purchase"
          [shipment]="data.shipment"
          [payment]="data.payment"
        ></app-purchase-details>
      </ng-container>
    </div>
    <ng-template #loading>
      <div class="flex justify-center">
        <app-spinner/>
        Cargando...
      </div>
    </ng-template>
  `,

})
export class PurchaseDetailPageComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);

  profileService = inject(ProfileService);

  purchase$ = this.profileService
    .getPurchase(Number(this.route.snapshot.paramMap.get('id')))
    .pipe(shareReplay(1));

  shipment$ = this.purchase$.pipe(
    switchMap((purchase) => this.profileService.getShipment(purchase.id_envio))
  );

  payment$ = this.purchase$.pipe(
    switchMap((purchase) =>
      this.profileService.getPayment(purchase.id_transaccion)
    )
  );

  goBack() {
    this.router.navigate(['profile']);
  }
}
