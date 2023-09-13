import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const names = value.split(' ');
    return `${names[0][0]}${names[1][0]}`;
  }

}
