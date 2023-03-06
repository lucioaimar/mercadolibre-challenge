import { provideRouter } from '@angular/router';
import { createComponentFactory, Spectator, byTestId } from '@ngneat/spectator';
import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let spectator: Spectator<NavComponent>;
  const createComponent = createComponentFactory({
    component: NavComponent,
    providers: [provideRouter([])],
  });

  beforeEach(() => (spectator = createComponent()));

  it('render nav logo', () => {
    expect(spectator.query('img')).toHaveAttribute({
      src: 'https://http2.mlstatic.com/frontend-assets/ui-navigation/5.14.1/mercadolibre/logo__large_plus.png',
    });
  });

  it('render nav links', () => {
    expect(spectator.query(byTestId('nav-link-profile'))).toHaveText(
      'Ir a perfil'
    );
  });
});
