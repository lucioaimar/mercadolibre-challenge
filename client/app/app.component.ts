import { ProfileService } from './features/profile/profile.service';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgSwitch, NgSwitchDefault, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NgSwitch, NgSwitchDefault, NgSwitchCase, RouterOutlet],
})
export class AppComponent {
  title = 'mercadolibre-frontend';
  profileService = inject(ProfileService);

  ngOnInit() {
    this.profileService.getUser().subscribe((res) => {
      console.log(res);
    });
  }
}
