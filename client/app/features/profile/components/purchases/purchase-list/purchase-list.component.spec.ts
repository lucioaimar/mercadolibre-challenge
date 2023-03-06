import { PurchaseItemComponent } from './../purchase-item/purchase-item.component';
import {
  PURCHASES_MOCK,
  PURCHASE_MOCK,
} from '../../../test_utils/profile-service.mock';
import { Spectator, createComponentFactory, byTestId } from '@ngneat/spectator';
import { PaginatorComponent } from 'client/app/shared/components/paginator/paginator.component';
import { of } from 'rxjs';
import { ProfileService } from '../../../services/profile.service';
import { profileServiceMock } from '../../../test_utils/profile-service.mock';
import { GeneralInformationComponent } from '../../general-information/general-information.component';
import { PurchaseListComponent } from './purchase-list.component';

describe('PurchaseListComponent', () => {
  let spectator: Spectator<PurchaseListComponent>;
  const createComponent = createComponentFactory({
    component: PurchaseListComponent,
  });

  beforeEach(
    () =>
      (spectator = createComponent({
        props: {
          purchases: PURCHASES_MOCK.data,
        },
      }))
  );

  it('should render purchase list title', () => {
    const purchaseListTitle = spectator.query(byTestId('purchase-list-title'));
    expect(purchaseListTitle).toHaveText('Mis compras');
    expect(purchaseListTitle).toHaveClass('text-2xl mb-4 font-bold');
  });

  it('should render purchase list', () => {
    expect(spectator.queryAll(PurchaseItemComponent)).toHaveLength(
      PURCHASES_MOCK.data.length
    );
  });
});
