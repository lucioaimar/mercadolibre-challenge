import { PurchaseDetailsComponent } from './../../components/purchases/purchase-details/purchase-details.component';
import { ProfilePageComponent } from './../profile-page/profile-page.component';
import { DatePipe, Location } from '@angular/common';
import { Spectator, byTestId, createRoutingFactory } from '@ngneat/spectator';
import { ProfileService } from '../../services/profile.service';
import { profileServiceMock } from '../../test_utils/profile-service.mock';
import { PurchaseDetailPageComponent } from './purchase-detail-page.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('PurchaseItemComponent', () => {
  let spectator: Spectator<PurchaseDetailPageComponent>;
  const createComponent = createRoutingFactory({
    component: PurchaseDetailPageComponent,
    stubsEnabled: false,
    providers: [
      {
        provide: ProfileService,
        useValue: profileServiceMock,
      },
      {
        provide: ActivatedRoute,
        useValue: {
          params: of([{ id: 1 }]),
        },
      },
    ],
    routes: [
      {
        path: '',
        component: PurchaseDetailPageComponent,
      },
      {
        path: 'profile',
        component: ProfilePageComponent,
      },
    ],
  });

  beforeEach(() => (spectator = createComponent()));

  it('should render purchase details component', () => {
    expect(spectator.query(PurchaseDetailsComponent)).toExist();
  });

  it('should navigate to profile', async () => {
    const btnBack = spectator.query(byTestId('btn-back'));
    expect(btnBack).toHaveText('Volver a perfil');
    spectator.click(btnBack as HTMLElement);
    await spectator.fixture.whenStable();
    expect(spectator.inject(Location).path()).toEqual(`/profile`);
  });
});
