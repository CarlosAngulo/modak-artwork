import { SearchStrategy } from "./search.strategy.interface";
import { Observable } from "rxjs";
import { IResultsDTO } from "@app/api/domain/api.model";
import { GalleryGateway } from "@app/api/domain/gallery/gallery-gateway";
import { ProductsGateway } from "@app/api/domain/products/products-gateway";

export class ProductSearchStrategy implements SearchStrategy {
    constructor(private galleryApi: ProductsGateway){}

    search(query: string): Observable<IResultsDTO> {
        console.log(`Searching by product: ${query}`);
        return this.galleryApi.search(query)
    }
}

export class ArtworksearchStrategy implements SearchStrategy {
    constructor(private galleryApi: GalleryGateway){}

    search(query: string): Observable<IResultsDTO> {
        console.log(`Searching by keyword: ${query}`);
        return this.galleryApi.search(query);
    }
}