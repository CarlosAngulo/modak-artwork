import { Component, OnDestroy } from '@angular/core';
import { switchToEnglish, switchToSpanish } from '@app/state/language/language.actions';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {
  isUserLogged = false;
  showPanel = false;
  currentLanguage!: string;
  userName!: string;
  unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private store: Store<{ lang: string, auth: any }>) {
    store
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(console.log);

    store.select('lang')
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((store:any) => this.currentLanguage = store.lang);

    store.select('auth')
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((store:any) => {
      this.userName = store.user?.name;
      if (!!store.isAuthenticated) {
        this.autenticateUser();
      }
    });
  }

  autenticateUser(evt?: any): void {
    this.isUserLogged = true;
    this.showPanel = false;
  }

  logout(): void {
    this.isUserLogged = false;
  }
  
  toggleShowLogin(): void {
    this.showPanel = !this.showPanel;
  }

  english(): void {
    this.store.dispatch(switchToEnglish());
  }
  
  spanish(): void {
    this.store.dispatch(switchToSpanish());
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
