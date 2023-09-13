import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { IUserDTO } from '../models/user.model';
import { IFieldMessage } from '../models/fields.model';
import { FieldMessagesService } from '../services/field-messages.service';
import { AuthService } from '../services/auth.service';
import { UserDataService } from '../services/user-data.service';
import { Subject, takeUntil } from 'rxjs';
import { Store } from '@ngrx/store';
import { login } from '../state/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Output()
  onAuenticateUser: EventEmitter<IUserDTO> = new EventEmitter();

  loginForm!: FormGroup;
  emailFieldStatus!: IFieldMessage;
  passwordFieldStatus!: IFieldMessage;
  fieldNames!:{[key:string]:string};
  loginError = false;
  unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private formBuilder: FormBuilder,
    private errorMessageService: FieldMessagesService,
    private translateService: TranslateService,
    private authService: AuthService,
    private store: Store<{lang: string, auth: any}>
  ) {
    translateService.addLangs(['en', 'es']);
    translateService.setDefaultLang('en'); 
  }

  ngOnInit(): void {
    this.store.select('lang')
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((store: any) => {
      this.translateService.use(store.lang)
    });
    
    this.loginForm = this.formBuilder.group({
      email: ['', [ Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) ]],
      password: ['', [ Validators.required, Validators.minLength(5)]]
    });

    const emailField = this.loginForm.controls['email'];
    emailField.setValue('admin@modak.com');
    this.emailFieldStatus = this.errorMessageService.getDefaultMessage();

    emailField.valueChanges
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe( _ => {
      this.emailFieldStatus = this.errorMessageService.getFieldMessage(emailField.errors)
    });

    const passwordField = this.loginForm.controls['password'];
    passwordField.setValue('00000');
    this.passwordFieldStatus = this.errorMessageService.getDefaultMessage();

    passwordField.valueChanges
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe( _ => {
      this.passwordFieldStatus = this.errorMessageService.getFieldMessage(passwordField.errors)
    });
    
    this.translateService
    .get(['login.fields.email', 'login.fields.password'])
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((translations) => {
      this.fieldNames = translations;
    })
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;

      this.authService.login(email, password)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((userData) => {
        if(userData && 'id' in userData && userData.id) {
          this.onAuenticateUser.emit(userData);
          this.store.dispatch(login({user:userData}))
          return;
        }

        this.loginError = true;
      });
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
