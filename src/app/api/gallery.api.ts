import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IArtWorkListDTO, IArtWorkDTO } from "./arwork.model";
import { ApiService } from "./api.service";

@Injectable()
export class GalleryApi extends ApiService<IArtWorkDTO> {
    private _url = 'https://api.artic.edu/api/v1/';

    constructor(http: HttpClient) {
        super(http)
    }

    getAll(): Observable<IArtWorkListDTO> {
        const url = `${this._url}artworks?fields=id,title,artist_display,date_display,main_reference_number,image_id,description`;
        return this.http.get<any>(url);
    }

    getById(id: number): Observable<IArtWorkDTO> {
        const url = `${this._url}artworks/${id}?fields=id,title,artist_display,date_display,main_reference_number,image_id,description`;
        return this.http.get<any>(url);
    }
}