import {
  PROFILE_MOCK,
  USER_RESTRICTIONS_MOCK,
  PURCHASE_MOCK,
  PURCHASES_MOCK,
  LEVEL_MOCK,
  PAYMENT_MOCK,
  SHIPMENT_MOCK,
} from '../test_utils/profile-service.mock';
import { ProfileService } from './profile.service';
import {
  HttpMethod,
  SpectatorHttp,
  createHttpFactory,
} from '@ngneat/spectator';

describe('ProfileService', () => {
  let spectator: SpectatorHttp<ProfileService>;
  const createHttp = createHttpFactory(ProfileService);

  const pageNumber = 1;
  const pageSize = 5;

  beforeEach(() => (spectator = createHttp()));

  it('test get user', () => {
    spectator.service
      .getUser()
      .subscribe((res) => expect(res).toEqual(PROFILE_MOCK));
    const req = spectator.expectOne(
      `http://localhost:3000/getUser`,
      HttpMethod.GET
    );
    req.flush(PROFILE_MOCK);
  });

  it('test get user restrictions', () => {
    spectator.service
      .getUserRestrictions(PROFILE_MOCK.id_usuario)
      .subscribe((res) => expect(res).toEqual(USER_RESTRICTIONS_MOCK));
    const req = spectator.expectOne(
      `http://localhost:3000/getUserRestrictions/${PROFILE_MOCK.id_usuario}`,
      HttpMethod.GET
    );
    req.flush(USER_RESTRICTIONS_MOCK);
  });

  it('test get user purchases', () => {
    spectator.service
      .getUserPurchases(PROFILE_MOCK.id_usuario, pageNumber, pageSize)
      .subscribe((res) => expect(res).toEqual(PURCHASES_MOCK));
    const req = spectator.expectOne(
      `http://localhost:3000/getUserPurchases/${PROFILE_MOCK.id_usuario}?page=${pageNumber}&limit=${pageSize}`,
      HttpMethod.GET
    );
    req.flush(PURCHASES_MOCK);
  });

  it('test get level', () => {
    spectator.service
      .getLevel(PROFILE_MOCK.nivel)
      .subscribe((res) => expect(res).toEqual(LEVEL_MOCK));
    const req = spectator.expectOne(
      `http://localhost:3000/getLevel/${PROFILE_MOCK.nivel}`,
      HttpMethod.GET
    );
    req.flush(LEVEL_MOCK);
  });

  it('test get payment', () => {
    spectator.service
      .getPayment(PURCHASE_MOCK.id_transaccion)
      .subscribe((res) => expect(res).toEqual(PAYMENT_MOCK));
    const req = spectator.expectOne(
      `http://localhost:3000/getPayment/${PURCHASE_MOCK.id_transaccion}`,
      HttpMethod.GET
    );
    req.flush(PAYMENT_MOCK);
  });

  //test get shipment
  it('test get shipment', () => {
    spectator.service
      .getShipment(PURCHASE_MOCK.id_envio)
      .subscribe((res) => expect(res).toEqual(SHIPMENT_MOCK));
    const req = spectator.expectOne(
      `http://localhost:3000/getShipment/${PURCHASE_MOCK.id_envio}`,
      HttpMethod.GET
    );
    req.flush(SHIPMENT_MOCK);
  });
});
