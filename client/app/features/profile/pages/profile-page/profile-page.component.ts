import { Purchase } from './../../interfaces/purchase.interface';
import { PaginatorComponent } from './../../../../shared/components/paginator/paginator.component';
import { GeneralInformationComponent } from '../../components/general-information/general-information.component';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../../services/profile.service';
import {
  map,
  Observable,
  shareReplay,
  switchMap,
  BehaviorSubject,
  combineLatest,
} from 'rxjs';
import { PurchaseListComponent } from '../../components/purchases/purchase-list/purchase-list.component';
import { SpinnerComponent } from 'client/app/shared/components/spinner/spinner.component';
import { PaginatedResponse } from 'client/app/shared/interfaces/pagination.interface';
import { UserRestriction } from '../../interfaces/user.interface';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [
    CommonModule,
    GeneralInformationComponent,
    PurchaseListComponent,
    SpinnerComponent,
    PaginatorComponent,
  ],
  template: `
    <div class="flex flex-col md:px-52 px-4 py-4">
      <app-general-information
        *ngIf="{user: profile$ | async, restrictions: restrictions$ | async } as generalInformation"
        [user]="generalInformation.user"
        [restrictions]="generalInformation.restrictions"
      ></app-general-information>
      <div class="mt-4">
        <app-purchase-list *ngIf="purchases$ | async as purchases; else loading" [purchases]="purchases"></app-purchase-list>
      </div>
      <div class="mt-4">
        <app-paginator
          *ngIf="pageTotal$ | async as pageTotal"
          [currentPage]="(page$ | async) || 0"
          [pageTotal]="pageTotal"
          (pageChange)="goToPage($event)"
        ></app-paginator>
    </div>
    <ng-template #loading>
      <div class="flex justify-center">
        <app-spinner/>
        Cargando...
      </div>
    </ng-template>
  `,
})
export class ProfilePageComponent {
  profileService = inject(ProfileService);

  page$: BehaviorSubject<number> = new BehaviorSubject(1);
  limit = 5;

  profile$ = this.profileService.getUser().pipe(shareReplay(1));

  restrictions$: Observable<UserRestriction[]> = this.profile$.pipe(
    switchMap((user) =>
      this.profileService.getUserRestrictions(user.id_usuario)
    )
  );

  paginatedResponsePurchases$: Observable<PaginatedResponse<Purchase>> =
    combineLatest([this.profile$, this.page$]).pipe(
      switchMap(([user, page]) =>
        this.profileService.getUserPurchases(
          user.id_usuario,
          page,
          this.limit
        )
      ),
      shareReplay(1)
    );

  purchases$: Observable<Purchase[] | null> =
    this.paginatedResponsePurchases$.pipe(
      map((paginatedResponse) => paginatedResponse?.data)
    );

  pageTotal$: Observable<number> = this.paginatedResponsePurchases$.pipe(
    map((paginatedResponse) =>
      Math.ceil(paginatedResponse?.total / paginatedResponse?.limit)
    )
  );

  goToPage(page: number) {
    this.page$.next(page);
  }
}
