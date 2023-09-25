import { Observable } from "rxjs";
import { IArtWorkDTO, IResultsDTO } from "../api.model";

export abstract class GalleryGateway {
    abstract getById(id: number): Observable<IArtWorkDTO>;
    abstract getAll(): Observable<IResultsDTO>;
    abstract search(query: string): Observable<IResultsDTO>
}