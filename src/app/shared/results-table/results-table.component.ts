import { Component, Input } from '@angular/core';
import { IArtworkDataDTO, IResultsDTO } from '@app/api/domain/api.model';
import { ArtWork } from '@app/pages/artwork/artwork.model';

@Component({
  selector: 'mdk-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.scss']
})
export class ResultsTableComponent {
  results!: ArtWork[];

  @Input() set data(res: ArtWork[]) {
    this.results = res
    console.log(this.results)
  };

}
