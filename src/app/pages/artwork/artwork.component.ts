import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ArtWork } from './artwork.model';
import { ApiConfigService } from '@app/api/api-config.service';
import { GalleryGateway } from '@app/api/domain/gallery/gallery-gateway';

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.scss']
})
export class ArtworkComponent implements OnInit, OnDestroy {
  id!: number;
  artwork!: ArtWork;
  unsubscribe$: Subject<void> = new Subject<void>();
  contentLoaded = false;

  constructor(
    protected galleryApi: GalleryGateway,
    protected route: ActivatedRoute,
    protected constants: ApiConfigService,
  ) {
    const data = route.snapshot.data['artowork'];
    this.artwork = new ArtWork(data.data, data.config.iiif_url, this.constants.PLACEHOLDER_IMAGE);
    this.contentLoaded = true;
  }

   ngOnInit(): void {
    this.route.params
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(params => {
      this.id = +params['id'];
    });
  }

   ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
