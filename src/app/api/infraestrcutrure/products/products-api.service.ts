import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IResultsDTO, IProductDTO } from "../../domain/api.model";
import { ProductsGateway } from "@app/api/domain/products/products-gateway";
import { ApiConfigService } from "@app/api/api-config.service";

@Injectable({
    providedIn: 'root'
})
export class ProductsApi extends ProductsGateway {

    private _url!:string;
    private ENDPOINT_KEYWORD = 'products';

    constructor(
        private http: HttpClient,
        private app_variables: ApiConfigService
    ) {
        super();
        this. _url = `${app_variables.API_URL}${this.ENDPOINT_KEYWORD}`;
    }

    private buildCommonParams(): HttpParams {
        return new HttpParams()
          .set('fields', 'id,title,image_url,price_display,artist_ids,artworks_ids,description');
    }

    getAll(): Observable<IResultsDTO> {
        const params = this.buildCommonParams();
        const url = `${this._url}`;
        return this.http.get<any>(url, { params });
    }

    getById(id: number): Observable<IProductDTO> {
        const params = this.buildCommonParams();
        const url = `${this._url}/${id}`;
        return this.http.get<any>(url, { params });
    }

    search(query: string): Observable<IResultsDTO> {
        const params = this.buildCommonParams();
        const url = `${this._url}/search?q=${query}`;
        return this.http.get<any>(url, { params });
    }
}