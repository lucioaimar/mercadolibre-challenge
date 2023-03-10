import { environment } from './../../../../environments/environment';
import {
  Payment,
  Purchase,
  Shipment,
} from './../interfaces/purchase.interface';
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

  /**
   * Returns the user
   * @returns User */
  getUser(): Observable<User> {
    return this.http.get<User>(`${environment.backendUrl}/getUser`);
  }

  /**
   * Returns all the user restrictions for the user with a given ID.
   *
   * @param id The ID of the user whose restrictions will be returned.
   * @returns An observable of the user restrictions.
   */
  getUserRestrictions(id: number): Observable<UserRestriction[]> {
    return this.http.get<UserRestriction[]>(
      `${environment.backendUrl}/getUserRestrictions/${id}`
    );
  }

  /**
   * getUserPurchases - Get all purchases made by a user
   * @param id - The user's id
   * @param page - The page number
   * @param limit - The number of items to return
   * @returns A paginated list of purchases
   */
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

  /**
   *getLevel - Gets the MercadoPuntos level based on a level id.
   *@param id - The level id
   */
  getLevel(id: string): Observable<Level> {
    return this.http.get<Level>(`${environment.backendUrl}/getLevel/${id}`);
  }

  /**
   *getLevel - Gets the shipment object with it's status.
   *@param id - The shipment id
   */
  getShipment(id: number): Observable<Shipment> {
    return this.http.get<Shipment>(
      `${environment.backendUrl}/getShipment/${id}`
    );
  }

  /**
   *getLevel - Gets the payment object with it's status.
   *@param id - The transaction id
   */
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
          throw new Error('No se encontr?? la compra');
        }
        return purchase;
      })
    );
  }
}
