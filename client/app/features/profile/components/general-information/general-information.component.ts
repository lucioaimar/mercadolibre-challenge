import { SpinnerComponent } from './../../../../shared/components/spinner/spinner.component';
import { Observable } from 'rxjs';
import { ProfileService } from './../../services/profile.service';
import { UserRestrictionsComponent } from '../user-restrictions/user-restrictions.component';
import { Level, UserRestriction } from '../../interfaces/user.interface';
import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../interfaces/user.interface';
import { AvatarImageComponent } from 'client/app/shared/components/avatar-image/avatar-image.component';

@Component({
  selector: 'app-general-information',
  standalone: true,
  imports: [CommonModule, AvatarImageComponent, UserRestrictionsComponent, SpinnerComponent],
  template: `<div class="rounded-lg shadow-sm border p-4 min-w-fit">
    <div class="flex items-center" *ngIf="user">
      <app-avatar-image [src]="user.imagen"/>
      <div class="ml-2 flex flex-col">
        <h1 data-testid="user-name" class="text-2xl font-bold">{{ user.nombre + ' ' + user.apellido }}</h1>
        <p data-testid="user-level" class="text-gray-500" *ngIf="level$ | async as level">{{ level.descripcion }}
        </p>
      </div>
    </div>
    <div class="mt-4" *ngIf="restrictions; else loading">
      <app-user-restrictions *ngFor="let restriction of restrictions" [restriction]="restriction"></app-user-restrictions>
  </div>
  <ng-template #loading>
      <div class="flex justify-center text-sm">
        <app-spinner size="small"/>
        Cargando Restricciones...
      </div>
    </ng-template>`,
})
export class GeneralInformationComponent {
  @Input() user: User | null = null;
  @Input() restrictions: UserRestriction[] | null = null;

  profileService = inject(ProfileService);

  level$: Observable<Level> | null = null;

  ngOnChanges() {
    if (this.user && !this.level$) {
      this.level$ = this.profileService.getLevel(this.user?.nivel ?? '');
    }
  }
}
