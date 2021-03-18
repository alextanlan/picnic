import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { ScreenService } from '../services/screen.service';

@Injectable()
export class MobileGuard implements CanActivate {
  public canActivate(): boolean {
    return ScreenService.isMobile();
  }
}
