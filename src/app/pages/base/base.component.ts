import { Component, Input } from '@angular/core';

@Component({
  selector: 'mdk-page-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class PageBaseComponent {
  @Input() loaded = true;
}
