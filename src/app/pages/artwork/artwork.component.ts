import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryApi } from '@app/api/gallery.api';
import { Subject, takeUntil } from 'rxjs';
import { ArtWork } from './artwork.model';
import { ConstantsService } from '@app/constants/constants.service';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.scss'],
  providers: [ GalleryApi, PagesService ]
})
export class ArtworkComponent implements OnInit, OnDestroy {
  id!: number;
  artwork!: ArtWork;
  unsubscribe$: Subject<void> = new Subject<void>();
  contentLoaded = false

  constructor(
    protected galleryApi: GalleryApi,
    protected route: ActivatedRoute,
    protected constants: ConstantsService,
    protected pageService: PagesService
  ) {}

   ngOnInit(): void {
    this.route.params
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(params => {
      this.id = +params['id'];
    });

    this.galleryApi.getById(this.id)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((response) => {
      this.pageService.contentLoaded();
      this.artwork = new ArtWork(response.data, response.config.iiif_url, this.constants.PLACEHOLDER_IMAGE)
    })
  }

   ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
