import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { IArtWorkDTO } from "@app/api/domain/api.model";
import { GalleryApi } from "@app/api/infraestrcutrure/gallery/gallery-api.service";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ArtworkResolver implements Resolve<IArtWorkDTO> {

    constructor(private galleryApi: GalleryApi) {}

    resolve(route: ActivatedRouteSnapshot): Observable<IArtWorkDTO> {
        return this.galleryApi.getById(Number(route.paramMap.get('id')))
    }
}