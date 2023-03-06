import { PaginatorComponent } from './../../../../shared/components/paginator/paginator.component';
import { ProfilePageComponent } from './profile-page.component';
import { Spectator, createComponentFactory, byText } from '@ngneat/spectator';
import { GeneralInformationComponent } from '../../components/general-information/general-information.component';
import { ProfileService } from '../../services/profile.service';
import { profileServiceMock } from '../../test_utils/profile-service.mock';
import { PurchaseListComponent } from '../../components/purchases/purchase-list/purchase-list.component';
import { of } from 'rxjs';

describe('ProfilePageComponent', () => {
  let spectator: Spectator<ProfilePageComponent>;
  const createComponent = createComponentFactory({
    component: ProfilePageComponent,
    providers: [
      {
        provide: ProfileService,
        useValue: profileServiceMock,
      },
    ],
  });

  beforeEach(() => (spectator = createComponent()));

  it('should render general information component', () => {
    expect(spectator.query(GeneralInformationComponent)).toExist();
  });

  it('should render purchase list component', () => {
    expect(spectator.query(PurchaseListComponent)).toExist();
  });

  it('should render paginator component with 1 page', () => {
    expect(spectator.query(PaginatorComponent)).toExist();
  });

  it('should render spinner component on load', () => {
    spectator.component.purchases$ = of(null);
    spectator.detectChanges();
    expect(spectator.query('app-spinner')).toExist();
  });

  it('should change the page when clicking on paginator', () => {
    expect(spectator.query(PaginatorComponent)?.pageTotal).toBe(2);

    spectator.click(spectator.query(byText('Siguiente')) || undefined);
    spectator.detectChanges();
    spectator.component.page$.subscribe((page) => {
      expect(page).toBe(2);
    });
  });
});
