import { Observable } from "rxjs";
import { IArtWorkDTO, IArtWorkListDTO } from "./arwork.model";
import { HttpClient } from "@angular/common/http";

export abstract class ApiService<T> {
    constructor(protected http: HttpClient){}
    abstract getById(id: number): Observable<IArtWorkDTO>;
    abstract getAll(): Observable<IArtWorkListDTO>;
}