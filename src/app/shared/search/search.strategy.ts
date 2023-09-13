import { SearchStrategy } from "./search.strategy.interface";

export class ProductSearchStrategy implements SearchStrategy {
    search(query: string): void {
        console.log(`Searching by product: ${query}`);
    }
}

export class KeywordSearchStrategy implements SearchStrategy {
    search(query: string): void {
        console.log(`Searching by keyword: ${query}`);
    }
}