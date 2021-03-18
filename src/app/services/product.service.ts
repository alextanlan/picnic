import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly BASE_URL = 'https://s3-eu-west-1.amazonaws.com/developer-application-test/cart';

  constructor(private http: HttpClient) {
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.BASE_URL + '/list').pipe(
      pluck('products')
    );
  }

  getById(id: string): Observable<Product> {
    return this.http.get<Product>(this.BASE_URL + `/${id}/detail`);
  }
}
