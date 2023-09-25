import { Observable } from "rxjs";
import { IProductDTO, IResultsDTO } from "../api.model";

export abstract class ProductsGateway {
    abstract getById(id: number): Observable<IProductDTO>;
    abstract getAll(): Observable<IResultsDTO>;
    abstract search(query: string): Observable<IResultsDTO>
}