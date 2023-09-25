import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchService } from './search.service';
import { ArtworksearchStrategy, ProductSearchStrategy } from './search.strategy';
import { GalleryGateway } from '@app/api/domain/gallery/gallery-gateway';
import { ProductsGateway } from '@app/api/domain/products/products-gateway';
import { Subject, debounceTime, filter } from 'rxjs';
import { IResultsDTO } from '@app/api/domain/api.model';

@Component({
    selector: 'mdk-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    providers: [SearchService]
})
export class SearchComponent implements OnInit {
    @Output() onSearchResults = new EventEmitter<{results: IResultsDTO, type: string}>();
    searchValue!: string;
    searchTerms = ['Artworks', 'Products'];
    selectedSearchTerm!: string;
    searchValueSubject = new Subject<string>();

    constructor(
        private searchService: SearchService,
        private galleryApi: GalleryGateway,
        private productsApi: ProductsGateway,
    ) {}
    
    ngOnInit(): void {
        this.searchValueSubject
        .pipe(
            debounceTime(400),
            filter((val) => val.length > 3)
        )
        .subscribe((val) => this.search(val))
    }

    search(term: string): void {
        this.searchService.search(term)
        .subscribe( (results) => this.onSearchResults.emit({
            results,
            type: this.selectedSearchTerm
        }) );
    }

    onSwitchType(evt: number): void {
        this.selectedSearchTerm = this.searchTerms[evt];

        this.searchService.setStrategy(
            evt === 0
            ? new ArtworksearchStrategy(this.galleryApi)
            : new ProductSearchStrategy(this.productsApi)
        );

        if (this.searchValue?.length > 3) {
            this.search(this.searchValue);
        }
    }
}
