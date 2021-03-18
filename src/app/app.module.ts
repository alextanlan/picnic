import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { MobileGuard } from './guards/mobile.guard';
import { FilterPipe } from './pipes/filter.pipe';

const appRoutes: Routes = [
  {path: 'list', component: ProductsComponent},
  {path: 'list/:id', component: ProductDetailsComponent, canActivate: [MobileGuard]},
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    PageNotFoundComponent,
    ProductDetailsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MobileGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
