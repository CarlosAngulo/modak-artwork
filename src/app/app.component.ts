import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { Store } from '@ngrx/store';
import { login } from './auth/state/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.checkAuthentication();
  }
  
  checkAuthentication() {
    const token = this.authService.currentToken;
    if (this.authService.isAuthenticated && token) {
      this.authService.getUserByToken(token)
      .subscribe((userData) => {
        if(userData && 'id' in userData && userData.id) {
          this.store.dispatch(login({user:userData}))
          return;
        }
      })
    }
  }
}
