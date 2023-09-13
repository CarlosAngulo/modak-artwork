import { Injectable } from '@angular/core';
import { SearchStrategy } from './search.strategy.interface';

@Injectable()
export class SearchService {
  private strategy!: SearchStrategy;

  setStrategy(strategy: SearchStrategy): void {
    this.strategy = strategy;
  }

  search(query: string): void {
    this.strategy.search(query);
  }
}