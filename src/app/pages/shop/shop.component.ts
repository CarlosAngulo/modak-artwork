import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GalleryApi } from '@app/api/gallery.api';
import { ArtWork, IArtWork } from '../artwork/artwork.model';
import { Subject, takeUntil } from 'rxjs';
import { ConstantsService } from '@app/constants/constants.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  providers: [GalleryApi],
})
export class ShopComponent implements OnInit {
  artWorks: IArtWork[] = [];
  unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private galleryApi: GalleryApi,
    private router: Router,
    private constants: ConstantsService
  ) {}

  ngOnInit(): void {
    this.galleryApi.getAll()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((response) => {
      const iiifUrl = response.config.iiif_url;
      this.artWorks = response.data
      .map((item:any) => new ArtWork(item, iiifUrl, this.constants.PLACEHOLDER_IMAGE))
    })
  }

  navigateToArtwork(id: number): void {
    this.router.navigate(['/artwork', id]);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
