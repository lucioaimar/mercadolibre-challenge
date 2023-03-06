import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { retry, catchError, throwError } from 'rxjs';
import { GlobalService } from './global.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const globalService = inject(GlobalService);

  return next(req).pipe(
    retry(1),

    catchError((error: HttpErrorResponse) => {
      globalService.error = error.error;

      return throwError(() => error);
    })
  );
};
