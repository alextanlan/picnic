import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]>;
  searchQuery = '';

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.initProducts();
  }

  getId(index: number, product: Product): string {
    return product.product_id;
  }

  private initProducts(): void {
    this.products$ = this.productService.getAllProducts().pipe(
      catchError(err => {
        console.error(err);
        return of(null);
      })
    );
  }
}
