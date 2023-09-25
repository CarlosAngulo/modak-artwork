import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AuthModule } from '../auth/auth.module';
import { RouterModule } from '@angular/router';
import { GalleryCardComponent } from './ui/card/card.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { MdkButton } from './ui/button/button.component';
import { MdkSwitchComponent } from './ui/switch/switch.component'
import { MdkLoader } from './ui/loader/loader.component';
import { ResultsTableComponent } from './results-table/results-table.component';

@NgModule({
  declarations: [
    HeaderComponent,
    GalleryCardComponent,
    SearchComponent,
    ResultsTableComponent,
  ],
  imports: [
    CommonModule,
    AuthModule,
    RouterModule,
    FormsModule,
    MdkButton,
    MdkSwitchComponent,
    MdkLoader
  ],
  exports: [
    HeaderComponent,
    GalleryCardComponent,
    SearchComponent,
    ResultsTableComponent
  ]
})
export class SharedModule { }
