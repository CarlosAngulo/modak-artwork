import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArtWork, IArtWork } from '../artwork/artwork.model';
import { Subject, takeUntil } from 'rxjs';
import { ApiConfigService } from '@app/api/api-config.service';
import { GalleryGateway } from '@app/api/domain/gallery/gallery-gateway';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  providers: [PagesService]
})
export class ShopComponent implements OnInit {
  artWorks: IArtWork[] = [];
  unsubscribe$: Subject<void> = new Subject<void>();
  contentLoaded = false;
  cardCurrentlyLoading!: number;

  constructor(
    private galleryApi: GalleryGateway,
    private router: Router,
    private constants: ApiConfigService,
  ) {
  }

  ngOnInit(): void {
    this.galleryApi.getAll()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((response) => {
      const iiifUrl = response.config.iiif_url;
      this.artWorks = response.data
      .map((item:any) => new ArtWork(item, iiifUrl, this.constants.PLACEHOLDER_IMAGE))
      this.contentLoaded = true;
    })
  }

  navigateToArtwork(id: number): void {
    this.cardCurrentlyLoading = id;
    this.router.navigate(['/artwork', id]);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
