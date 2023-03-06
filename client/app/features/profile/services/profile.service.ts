import { environment } from './../../../../environments/environment';
import { Payment, Purchase, Shipment } from './../interfaces/purchase.interface';
import { UserRestriction, Level } from './../interfaces/user.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { PaginatedResponse } from 'client/app/shared/interfaces/pagination.interface';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  http = inject(HttpClient);

  getUser(): Observable<User> {
    return this.http.get<User>(`${environment.backendUrl}/getUser`);
  }

  getUserRestrictions(id: number): Observable<UserRestriction[]> {
    return this.http.get<UserRestriction[]>(
      `${environment.backendUrl}/getUserRestrictions/${id}`
    );
  }

  getUserPurchases(
    id: number,
    page: number,
    limit: number
  ): Observable<PaginatedResponse<Purchase>> {
    const params = new HttpParams().set('page', page).set('limit', limit);
    return this.http.get<PaginatedResponse<Purchase>>(
      `${environment.backendUrl}/getUserPurchases/${id}`,
      {
        params,
      }
    );
  }

  getLevel(id: string): Observable<Level> {
    return this.http.get<Level>(`${environment.backendUrl}/getLevel/${id}`);
  }

  getShipment(id: number): Observable<Shipment> {
    return this.http.get<Shipment>(`${environment.backendUrl}/getShipment/${id}`);
  }

  getPayment(id: number): Observable<Payment> {
    return this.http.get<Payment>(`${environment.backendUrl}/getPayment/${id}`);
  }

  /* This method of the service is created because an endpoint with an individual
  purchase was not provided in the service, and this is a method I used to get a purchase full data
  by its id. I could set the purchase in a store but I didn't like that method because if you
  refresh the page the purchase would be lost. */
  getPurchase(id: number): Observable<Purchase> {
    return this.getUser().pipe(
      switchMap((user) => this.getUserPurchases(user.id_usuario, 1, 10)),
      map((paginatedResponse: PaginatedResponse<Purchase>) => {
        const purchase = paginatedResponse.data.find(
          (purchase) => purchase.id_compra === id
        );
        if (!purchase) {
          throw new Error('No se encontró la compra');
        }
        return purchase;
      })
    );
  }
}
