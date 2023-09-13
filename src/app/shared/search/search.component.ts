import { Component } from '@angular/core';
import { SearchService } from './search.service';
import { KeywordSearchStrategy, ProductSearchStrategy } from './search.strategy';

@Component({
    selector: 'mdk-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    providers: [SearchService]
})
export class SearchComponent {
    searchValue!: string;
    constructor(private searchService: SearchService) {}

    searchByKeywords(): void {
        if(this.searchValue) {
            this.searchService.setStrategy(new KeywordSearchStrategy());
            this.searchService.search(this.searchValue);
        }
    }
    
    searchByCategory(): void {
        if(this.searchValue) {
            this.searchService.setStrategy(new ProductSearchStrategy());
            this.searchService.search(this.searchValue);
        }
    }
}
