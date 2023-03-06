import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {

  //This will be useful to use as a store for the errors captured on the interceptor
  error$: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(
    null
  );

  get error(): string | null {
    return this.error$.getValue();
  }

  set error(error: string | null) {
    this.error$.next(error);
  }
}
