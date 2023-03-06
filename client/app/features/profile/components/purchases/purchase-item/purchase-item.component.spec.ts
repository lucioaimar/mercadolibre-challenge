import { DatePipe, Location } from '@angular/common';
import { Spectator, byTestId, createRoutingFactory } from '@ngneat/spectator';
import { PurchaseDetailPageComponent } from '../../../pages/purchase-detail-page/purchase-detail-page.component';
import { PURCHASE_MOCK } from '../../../test_utils/profile-service.mock';
import { PurchaseItemComponent } from './purchase-item.component';

describe('PurchaseItemComponent', () => {
  let spectator: Spectator<PurchaseItemComponent>;
  const createComponent = createRoutingFactory({
    component: PurchaseItemComponent,
    stubsEnabled: false,
    routes: [
      {
        path: '',
        component: PurchaseItemComponent,
      },
      {
        path: 'profile/purchase/:id',
        component: PurchaseDetailPageComponent,
      },
    ],
  });

  beforeEach(
    () =>
      (spectator = createComponent({
        props: {
          purchase: PURCHASE_MOCK,
        },
      }))
  );

  it('should render purchase title', () => {
    expect(spectator.query(byTestId('title'))).toHaveText(
      `${PURCHASE_MOCK.titulo}`
    );
  });

  it('should render purchase id', () => {
    expect(spectator.query(byTestId('purchase-id'))).toHaveText(
      `${PURCHASE_MOCK.id_compra}`
    );
  });

  it('should render purchase date', () => {
    const datePipe = new DatePipe('en-US');
    expect(spectator.query(byTestId('date'))).toHaveText(
      datePipe.transform(`${PURCHASE_MOCK.fecha}`) || ''
    );
  });

  it('should render purchase total', () => {
    expect(spectator.query(byTestId('total'))).toHaveText(
      `Total: ${PURCHASE_MOCK.precio.total} ${PURCHASE_MOCK.precio.moneda}`
    );
  });

  it('should render purchase quantity', () => {
    expect(spectator.query(byTestId('quantity'))).toHaveText(
      `${PURCHASE_MOCK.cantidad} unidades`
    );
  });

  it('should render image', () => {
    expect(spectator.query(byTestId('image'))).toHaveAttribute(
      'src',
      `${PURCHASE_MOCK.imagen}`
    );
  });

  it('should navigate to purchase id', async () => {
    spectator.click(byTestId('btn-details'));
    await spectator.fixture.whenStable();
    expect(spectator.inject(Location).path()).toEqual(
      `/profile/purchase/${PURCHASE_MOCK.id_compra}`
    );
  });
});
