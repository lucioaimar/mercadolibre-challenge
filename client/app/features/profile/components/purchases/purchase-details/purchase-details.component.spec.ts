import {
  PAYMENT_MOCK,
  SHIPMENT_MOCK,
} from '../../../test_utils/profile-service.mock';
import { DatePipe, Location, TitleCasePipe } from '@angular/common';
import { Spectator, byTestId, createComponentFactory } from '@ngneat/spectator';
import { PURCHASE_MOCK } from '../../../test_utils/profile-service.mock';
import { PurchaseDetailsComponent } from './purchase-details.component';

describe('PurchaseDetailsComponent', () => {
  let spectator: Spectator<PurchaseDetailsComponent>;
  const createComponent = createComponentFactory({
    component: PurchaseDetailsComponent,
  });

  beforeEach(
    () =>
      (spectator = createComponent({
        props: {
          purchase: PURCHASE_MOCK,
          payment: PAYMENT_MOCK,
          shipment: SHIPMENT_MOCK,
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

  it('should render image', () => {
    expect(spectator.query(byTestId('image'))).toHaveAttribute(
      'src',
      `${PURCHASE_MOCK.imagen}`
    );
  });

  it('should render purchase price', () => {
    expect(spectator.query(byTestId('price'))).toHaveText(
      `Total: ${PURCHASE_MOCK.precio.total} ${PURCHASE_MOCK.precio.moneda}`
    );
  });

  it('should render payment section', () => {
    const titlecasePipe = new TitleCasePipe();
    expect(spectator.query(byTestId('payment'))).toHaveText(
      `Pago: ${titlecasePipe.transform(PAYMENT_MOCK.estado)}`
    );
  });

  it('should render shipment section', () => {
    const titlecasePipe = new TitleCasePipe();
    expect(spectator.query(byTestId('shipment'))).toHaveText(
      `Envío: ${titlecasePipe.transform(SHIPMENT_MOCK.estado)}`
    );
  });

  //render seller
  it('should render seller section', () => {
    expect(spectator.query(byTestId('seller'))).toHaveText(
      `Vendedor: ${PURCHASE_MOCK.vendedor.nickname}`
    );
  });

  it('should render purchase quantity', () => {
    expect(spectator.query(byTestId('quantity'))).toHaveText(
      `${PURCHASE_MOCK.cantidad} unidades`
    );
  });
});
