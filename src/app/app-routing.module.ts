import { inject, NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, createUrlTreeFromSnapshot, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { AuthService } from './auth/services/auth.service';
import { map } from 'rxjs';
import { ShopComponent } from '@app/pages/shop/shop.component';
import { ArtworkComponent } from './pages/artwork/artwork.component';

const routes: Routes = [
  {
    path: 'shop',
    component: ShopComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'gallery',
    component: ShopComponent,
    canActivate: [
      (next: ActivatedRouteSnapshot) => {
        return inject(AuthService)
          .isAuthenticated$()
          .pipe(
            map((isAuth) => isAuth ? true : createUrlTreeFromSnapshot(next, ['/']))
          )
      }
    ]
  },
  {
    path: 'artwork/:id',
    component: ArtworkComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'not-found',
    loadComponent: () => import('@app/pages/not-found/not-found.component').then((c) => c.NotFoundComponent)
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
