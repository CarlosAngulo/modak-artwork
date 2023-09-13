import { Component, OnDestroy, OnInit } from '@angular/core';
import { PagesService } from '../pages.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'mdk-page-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class PageBaseComponent implements OnInit, OnDestroy {
  loading = false;
  unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private pagesService: PagesService) {}

  ngOnInit(): void {
      this.pagesService.loading$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((val) => this.loading = val);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
