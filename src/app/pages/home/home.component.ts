import { Component } from '@angular/core';
import { IResultsDTO } from '@app/api/domain/api.model';
import { ArtWork } from '../artwork/artwork.model';
import { ApiConfigService } from '@app/api/api-config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent { 
  results!: ArtWork[];

  constructor(
    private constants: ApiConfigService,
  ) {
  }

  onSearchResults(res: {results: IResultsDTO, type: string}) {
    const imgURL = res.results.config.iiif_url;
    console.log(res)
    this.results = res.results.data.map((result:any) => new ArtWork(result, imgURL, this.constants.PLACEHOLDER_IMAGE));
    console.log(this.results)
  }
}
