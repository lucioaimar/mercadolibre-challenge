import { ErrorCardComponent } from './shared/components/error-card/error-card.component';
import { RouterOutlet, provideRouter } from '@angular/router';
import { NavComponent } from './shared/components/nav/nav.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory({
    component: AppComponent,
    providers: [provideRouter([])],
  });

  beforeEach(() => (spectator = createComponent()));

  it('should render nav', () => {
    expect(spectator.query(NavComponent)).toExist();
  });

  it('should render router-outlet', () => {
    expect(spectator.query(RouterOutlet)).toExist();
  });

  it('should render error card', () => {
    spectator.component.globalService.error$.next('Error');
    spectator.detectChanges();
    expect(spectator.query(ErrorCardComponent)).toExist();
  });
});
