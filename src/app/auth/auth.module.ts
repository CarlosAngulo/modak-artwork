import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MessagesModule } from 'primeng/messages';
import { UserComponent } from './user/user.component';
import { MdkButton } from '../shared/ui/button/button.component'
import { StoreModule } from '@ngrx/store';
import { userReducer } from './state/auth.reducer';
import { InitialsPipe } from './pipes/initials.pipe';

@NgModule({
  declarations: [
    LoginComponent,
    UserComponent,
    InitialsPipe
  ],
  imports: [
    MdkButton,
    CommonModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    TranslateModule,
    MessagesModule,
    StoreModule.forFeature('auth', userReducer)
  ],
  exports: [
    LoginComponent,
    UserComponent,
    InitialsPipe
  ]
})
export class AuthModule { }
