import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ScreenService } from '../../services/screen.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent implements OnInit {
  @Input() product: Product;
  isLoading = false;
  isError = false;
  isMobile = ScreenService.isMobile();

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = params.id;
      if (productId) {
        this.refreshProduct(productId);
      } else if (!this.product) {
        this.isError = true;
      }
    });
  }

  private refreshProduct(productId): void {
    this.isLoading = true;

    this.productService.getById(productId).pipe(
      catchError(err => {
        console.error(err);
        this.isError = true;
        this.isLoading = false;
        return of(null);
      })
    ).subscribe((product: Product) => {
      this.product = product;
      this.isLoading = false;
      this.cdr.detectChanges();
    });
  }
}
