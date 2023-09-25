import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  standalone: true,
  selector: 'mdk-switch',
  templateUrl: './switch.component.html',
  imports: [CommonModule],
  styleUrls: ['./switch.component.scss']
})
export class MdkSwitchComponent implements OnChanges {
  selectedOption = 0;
  filteredValues: string[] = [];
  @Input() values!: string[];
  @Input() defaultValue: string | number = 0;
  @Output() onChange: EventEmitter<number> = new EventEmitter();

  onSelectionChange(index: number):void {
    this.selectedOption = index;
    this.onChange.emit(index);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const defaultValue = changes['defaultValue'].currentValue;
    const values: string[] = changes['values'].currentValue;
    const defaultIndex = typeof defaultValue === "string"
    ? this.values.findIndex( val => defaultValue === val)
    : defaultValue;

    if (values?.length <= 2) {
      this.filteredValues = [values[defaultIndex], values[1]]
      this.selectedOption = defaultIndex;
      this.onChange.emit(defaultIndex);
    }
  }
}
