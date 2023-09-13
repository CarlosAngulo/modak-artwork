import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AuthModule } from '../auth/auth.module';
import { RouterModule } from '@angular/router';
import { GalleryCardComponent } from './ui/card/card.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { MdkButton } from './ui/button/button.component'

@NgModule({
  declarations: [
    HeaderComponent,
    GalleryCardComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    AuthModule,
    RouterModule,
    FormsModule,
    MdkButton
  ],
  exports: [
    HeaderComponent,
    GalleryCardComponent,
    SearchComponent
  ]
})
export class SharedModule { }
