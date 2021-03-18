import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {
  static isMobile(): boolean {
    return window.screen.width < 480;
  }
}
