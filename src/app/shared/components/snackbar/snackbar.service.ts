import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  private snackbarSub = new Subject();
  public snackbarObs = this.snackbarSub.asObservable();

  constructor() { }

  public show(message: string, color = '#00adb5') {
    this.snackbarSub.next({ message, color });
  }
}
