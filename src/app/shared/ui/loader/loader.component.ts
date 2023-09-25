import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'mdk-loader',
    standalone: true,
    template: `<div class="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>`,
    styleUrls: ['./loader.component.scss'],
    imports: [ CommonModule ]
})
export class MdkLoader {

}