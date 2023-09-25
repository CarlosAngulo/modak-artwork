import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { languageReducer } from './state/language/language.reducer';
import { TokenInterceptor } from './interceptors/auth/token.interceptor';
import { PagesModule } from './pages/pages.module';
import { GalleryApi } from './api/infraestrcutrure/gallery/gallery-api.service';
import { GalleryGateway } from './api/domain/gallery/gallery-gateway';
import { ProductsGateway } from './api/domain/products/products-gateway';
import { ProductsApi } from './api/infraestrcutrure/products/products-api.service';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    AuthModule,
    BrowserModule,
    HttpClientModule,
    SharedModule,
    PagesModule,
    StoreModule.forRoot({ lang: languageReducer }),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: GalleryGateway,
      useClass: GalleryApi
    },
    {
      provide: ProductsGateway,
      useClass: ProductsApi
    }
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
