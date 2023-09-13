import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Store } from '@ngrx/store';
import { logout } from '../state/auth.actions';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Output() onUserLogout: EventEmitter<void> = new EventEmitter();

  unsubscribe$: Subject<void> = new Subject<void>();
  user!: any;

  constructor(
    private authService: AuthService,
    private store: Store<{auth:any}>
  ) {}

  ngOnInit() {
    this.store.select('auth')
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((store) => this.user = store.user)
  }

  onLogoutClick(): void {
    this.authService.logout();
    this.onUserLogout.emit();
    this.store.dispatch(logout());
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
