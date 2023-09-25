import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { IResultsDTO, IArtWorkDTO, IResultsConfig } from "../../domain/api.model";
import { GalleryGateway } from "@app/api/domain/gallery/gallery-gateway";
import { ApiConfigService } from "@app/api/api-config.service";

@Injectable({
    providedIn: 'root'
})
export class GalleryApi extends GalleryGateway {
    
    private _url!: string;
    private _isImgSet = false;
    private ENDPOINT_KEYWORD = 'artworks';

    constructor(
        private http: HttpClient,
        private app_variables: ApiConfigService
    ) {
        super();
        this. _url = `${app_variables.API_URL}${this.ENDPOINT_KEYWORD}`;
    }

    private buildCommonParams(): HttpParams {
        return new HttpParams()
          .set('fields', 'id,title,artist_display,date_display,main_reference_number,image_id,description');
    }

    getAll(): Observable<IResultsDTO> {
        const params = this.buildCommonParams();
        return this.http.get<IResultsDTO>(this._url, { params })
        .pipe(
            tap((res: IResultsDTO) => !this._isImgSet && this.setSourceImagesURL(res.config))
        );
    }

    getById(id: number): Observable<IArtWorkDTO> {
        const params = this.buildCommonParams();
        const url = `${this._url}/${id}`;
        return this.http.get<IArtWorkDTO>(url, { params })
        .pipe(
            tap((res: IArtWorkDTO) => !this._isImgSet && this.setSourceImagesURL(res.config))
        );
    }

    search(query: string): Observable<IResultsDTO> {
        const params = this.buildCommonParams();
        const url = `${this._url}/search?q=${query}`;
        return this.http.get<IResultsDTO>(url, { params }).pipe(
            tap((res: IResultsDTO) => !this._isImgSet && this.setSourceImagesURL(res.config))
        );
    }

    setSourceImagesURL(config: IResultsConfig): void {
        this.app_variables.imagesURL = config.iiif_url;
        console.log(this.app_variables.imagesURL);
        this._isImgSet = true;
    }
}