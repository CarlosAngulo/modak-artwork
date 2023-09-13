import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '@app/shared/shared.module';
import { ArtworkComponent } from './artwork/artwork.component';
import { PageBaseComponent } from './base/base.component';

@NgModule({
  declarations: [
    HomeComponent,
    ShopComponent,
    ArtworkComponent,
    PageBaseComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
  ],
  exports: [
    HomeComponent,
    ShopComponent,
  ],
})
export class PagesModule { }
