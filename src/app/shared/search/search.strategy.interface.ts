import { Observable } from "rxjs";

export interface SearchStrategy {
  search(query: string): Observable<any>;
}