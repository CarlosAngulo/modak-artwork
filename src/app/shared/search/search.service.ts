import { Injectable } from '@angular/core';
import { SearchStrategy } from './search.strategy.interface';
import { Observable } from 'rxjs';

@Injectable()
export class SearchService {
  private strategy!: SearchStrategy;

  setStrategy(strategy: SearchStrategy): void {
    this.strategy = strategy;
  }

  search(query: string): Observable<any> {
    return this.strategy.search(query);
  }
}