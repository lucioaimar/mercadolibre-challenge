import { AvatarImageComponent } from './../../../../shared/components/avatar-image/avatar-image.component';
import {
  profileServiceMock,
  PROFILE_MOCK,
  USER_RESTRICTIONS_MOCK,
  LEVEL_MOCK,
} from '../../test_utils/profile-service.mock';
import { Spectator, createComponentFactory, byTestId } from '@ngneat/spectator';
import { GeneralInformationComponent } from '../../components/general-information/general-information.component';
import { ProfileService } from '../../services/profile.service';

describe('GeneralInformationComponent', () => {
  let spectator: Spectator<GeneralInformationComponent>;
  const createComponent = createComponentFactory({
    component: GeneralInformationComponent,
    providers: [
      {
        provide: ProfileService,
        useValue: profileServiceMock,
      },
    ],
  });

  beforeEach(
    () =>
      (spectator = createComponent({
        props: {
          user: PROFILE_MOCK,
          restrictions: USER_RESTRICTIONS_MOCK,
        },
      }))
  );

  it('should render avatar image', () => {
    expect(spectator.query(AvatarImageComponent)).toExist();
  });

  it('should show name and surname', () => {
    expect(spectator.query(byTestId('user-name'))).toHaveText(
      PROFILE_MOCK.nombre + ' ' + PROFILE_MOCK.apellido
    );
  });

  it('should show level', () => {
    expect(spectator.query(byTestId('user-level'))).toHaveText(
      LEVEL_MOCK.descripcion
    );
  });

  it('should render user restrictions', () => {
    expect(spectator.queryAll('app-user-restrictions')).toHaveLength(
      USER_RESTRICTIONS_MOCK.length
    );
  });
});
