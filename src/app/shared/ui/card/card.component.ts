import { Component, Input } from '@angular/core';

@Component({
  selector: 'mdk-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class GalleryCardComponent {
  @Input() title!: string;
  @Input() image!: string;
  @Input() artist!: string;

  constructor() {}
}
