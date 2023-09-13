import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class PagesService {
    loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

    contentLoaded(): void {
        this.loading$.next(false);
    }
}