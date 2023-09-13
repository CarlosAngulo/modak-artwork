import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConstantsService {
    API_URL = 'https://api.artic.edu/api/v1/';
    PLACEHOLDER_IMAGE = '/assets/images/image_placeholder.png';
    MAX_RESULTS = 18;
    
    _imagesURL!: string;

    set imagesURL(url: string) {
        this._imagesURL = url;
    }

    get imagesURL(): string {
        return this._imagesURL;
    }
}