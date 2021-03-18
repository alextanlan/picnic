import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ScreenService } from '../../services/screen.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  needsToShowPopup = false;

  constructor(private router: Router,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  onClick(): void {
    const isMobile = ScreenService.isMobile();
    if (isMobile) {
      this.router.navigate(['list', `${this.product.product_id}`]);
    } else {
      this.needsToShowPopup = true;
      this.cdr.detectChanges();
    }
  }

  closePopup(): void {
    this.needsToShowPopup = false;
  }
}
