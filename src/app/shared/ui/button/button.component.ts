import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'mdk-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class MdkButton {
  @Input() text!: string;
  @Input() type!: string;
  @Input() disabled!: boolean;

  @Output() click: EventEmitter<void> = new EventEmitter();
  
  onClick() {
    this.click.emit();
  }
}
